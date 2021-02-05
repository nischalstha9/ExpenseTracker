from django.contrib import admin
from .models import Balance, Transaction, Debit, Credit

# Register your models here.
admin.site.register(Balance)
admin.site.register(Transaction)
admin.site.register(Debit)
admin.site.register(Credit)
