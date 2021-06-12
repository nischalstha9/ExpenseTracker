from django.contrib import admin
from .models import AccountBook, Transaction, Debit, Credit

# Register your models here.
admin.site.register(AccountBook)
admin.site.register(Transaction)
admin.site.register(Debit)
admin.site.register(Credit)
