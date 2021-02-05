from rest_framework import serializers
from .models import Transaction, Balance
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveUpdateAPIView, CreateAPIView, RetrieveAPIView
from django.http import JsonResponse
from django.utils import timezone
from rest_framework import permissions
from rest_framework.filters import SearchFilter
from rest_framework.pagination import LimitOffsetPagination, PageNumberPagination
from rest_framework.decorators import api_view
from django_filters import rest_framework as filters


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 40


class TransactionSerializer(serializers.ModelSerializer):
    date = serializers.SerializerMethodField()

    class Meta:
        model = Transaction
        fields = ['id', 'amount', 'description', 'date', '_type', 'user']

    def get_date(self, obj):
        return timezone.localtime(obj.date).strftime("%b. %d, %Y")


class TransactionCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['amount', 'description', '_type']


def BalanceAPIView(request):
    user = request.user
    balance = int(Balance.objects.get(user=user).balance)
    return JsonResponse({"balance": balance})


class TransactionListAPIView(ListCreateAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    filter_backends = [SearchFilter]
    search_fields = ['description']
    pagination_class = StandardResultsSetPagination


class TransactionOpenAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionCreateSerializer

    def perform_update(self, serializer, *args, **kwargs):
        user = self.request.user
        balance = user.balance
        trans_id = self.kwargs.get('pk')
        trans = Transaction.objects.get(id=trans_id)
        new_amt = serializer.validated_data.get('amount')
        if trans._type == 'DEBIT':
            balance.balance -= trans.amount
            balance.balance += new_amt
            balance.save()
        if trans._type == 'CREDIT':
            balance.balance += trans.amount
            balance.balance -= new_amt
            balance.save()
        serializer.save(user=user)

    def perform_destroy(self, instance):
        user = self.request.user
        balance = user.balance
        trans = instance
        if trans._type == 'DEBIT':
            balance.balance -= instance.amount
            balance.save()
        if trans._type == 'CREDIT':
            balance.balance += instance.amount
            balance.save()
        instance.delete()


class TransactionCreateView(CreateAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionCreateSerializer

    def create(self, *args, **kwargs):
        amount = self.request.POST.get('amount')
        description = self.request.POST.get('description')
        _type = self.request.POST.get('_type')
        user = self.request.user
        if _type == 'DEBIT':
            user.balance.balance += int(amount)
            user.balance.save()
        elif _type == 'CREDIT':
            user.balance.balance -= int(amount)
            user.balance.save()
        Transaction.objects.create(
            user=user, amount=amount, description=description, _type=_type)
        return JsonResponse({"message": "Transaction Added!"})
