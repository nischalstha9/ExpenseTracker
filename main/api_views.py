from .models import AccountBook, Transaction
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView
from rest_framework.filters import SearchFilter
from rest_framework.pagination import LimitOffsetPagination, PageNumberPagination
from rest_framework.permissions import IsAuthenticated, BasePermission
from django_filters import rest_framework as filters
from rest_framework.permissions import BasePermission

from .serializers import AccountBookSerializer, TransactionSerializer
from django.shortcuts import get_object_or_404


class IsAccountBookOwner(BasePermission):
    message = "Owner Permission Required"

    def has_object_permission(self, request, view, obj):
        book = get_object_or_404(AccountBook, pk = view.kwargs.get('account_book_pk'))
        return book.user == request.user

class IsTransactionOwner(BasePermission):
    message = "Owner Permission Required"

    def has_object_permission(self, request, view, obj):
        return obj.account_book.user == request.user


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 10

class AccountBookListCreateAPIView(ListCreateAPIView):
    model = AccountBook
    serializer_class = AccountBookSerializer
    filter_backends = [SearchFilter]
    search_fields = ['description']
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return AccountBook.objects.filter(user=self.request.user)
    

class AccountBookRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAccountBookOwner]
    lookup_field = 'pk'
    lookup_url_kwarg = 'account_book_pk'
    model = AccountBook
    serializer_class = AccountBookSerializer
    queryset = AccountBook.objects.all()



class TransactionListCreateAPIView(ListCreateAPIView):
    """
    Transaction List and Create API View
    """
    serializer_class = TransactionSerializer
    filter_backends = (filters.DjangoFilterBackend, SearchFilter)
    search_fields = ['description']
    permission_classes = [IsAuthenticated, IsAccountBookOwner]
    pagination_class = StandardResultsSetPagination
    filterset_fields = {
        'date': ['gte', 'lte', 'date__range'], '_type': {'exact'}, }
    queryset = Transaction.objects.all()

    def get_queryset(self, *args, **kwargs):
        book = get_object_or_404(AccountBook, pk = self.kwargs.get('account_book_pk'))
        qs = super().get_queryset().filter(account_book = book)
        return qs


    # def post(self,request, *args, **kwargs):
    #     data = request.data
    #     print("DATA",data)
    #     # data['account_book']=self.kwargs.get('account_book_pk')
    #     return super().post(request, *args, **kwargs)


class TransactionDetailAPIView(RetrieveUpdateDestroyAPIView):
    """
    Transaction Retrieve Update and Delete API View
    """
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [IsAccountBookOwner]
    lookup_url_kwarg = 'trans_pk'
    lookup_field='pk'

    # def put(self, *args, **kwargs):
    #     data = self.request.data
    #     data['account_book']=self.kwargs.get('account_book_pk')
    #     return super().put(*args, **kwargs)
