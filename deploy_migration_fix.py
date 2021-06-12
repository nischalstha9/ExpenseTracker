from django.contrib.auth.models import User
from main.models import AccountBook, Transaction

users = User.objects.all()
trns = Transaction.objects.all()

for i in users:
    ab = AccountBook.objects.create(user = i, title = 'My Account Book')
    transactions = trns.filter(user=i)
    for x in transactions:
        x.account_book = ab
    Transaction.objects.bulk_update(transactions, ['account_book'])
