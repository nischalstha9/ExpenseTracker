from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User


class Balance(models.Model):
    balance = models.IntegerField(_("Balance"), default=0)
    user = models.OneToOneField(User, verbose_name=_(
        "Owner"), on_delete=models.CASCADE)

    class Meta:
        verbose_name = _("Balance")
        verbose_name_plural = _("Balances")

    def __str__(self):
        return self.user.username

    def get_absolute_url(self):
        return reverse("Balance_detail", kwargs={"pk": self.pk})


class Transaction(models.Model):
    class Types(models.TextChoices):
        #TYPE_SNTX = TYPE_VALUE, TYPE_NAME
        DEBIT = "DEBIT", "Debit"
        CREDIT = "CREDIT", "Credit"
    date = models.DateTimeField(_("Date"), auto_now_add=True)
    base_type = Types.DEBIT
    amount = models.PositiveIntegerField(_("Amount"))
    description = models.TextField(_("Description"))
    user = models.ForeignKey(User, verbose_name=_(
        "Owner"), on_delete=models.CASCADE)
    _type = models.CharField(
        _("Type"), max_length=50, choices=Types.choices, default=base_type
    )

    class Meta:
        verbose_name = _("Transaction")
        verbose_name_plural = _("Transactions")
        ordering = ['-id']

    def __str__(self):
        return f"{self.user.username} => {self.amount}"

    def get_absolute_url(self):
        return reverse("Transaction_detail", kwargs={"pk": self.pk})


class DebitManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(_type=Transaction.Types.DEBIT)


class Debit(Transaction):
    base_type = Transaction.Types.DEBIT
    objects = DebitManager()

    class Meta:
        proxy = True


class CreditManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(_type=Transaction.Types.CREDIT)


class Credit(Transaction):
    base_type = Transaction.Types.CREDIT
    objects = CreditManager()

    class Meta:
        proxy = True
