from django.db import models
from rest_framework import serializers
from .models import AccountBook, Transaction
from django.utils import timezone


class TransactionSerializer(serializers.ModelSerializer):
    date = serializers.SerializerMethodField() #date for outpul

    class Meta:
        model = Transaction
        fields = [
            'id',
            'amount',
            'description',
            'date',
            '_type',
            'account_book'
            ]

    def get_date(self, obj):
        return timezone.localtime(obj.date).strftime("%b. %d, %Y")

class AccountBookSerializer(serializers.ModelSerializer):
    balance = serializers.SerializerMethodField()
    class Meta:
        model = AccountBook
        fields = [
            'id',
            'title',
            'user',
            'created_at',
            'balance'
        ]
    
    def get_balance(self, obj):
        return obj.balance


# class TransactionCreateSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Transaction
#         fields = ['amount', 'description', '_type']