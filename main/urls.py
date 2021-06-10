from django.urls import path
from .views import home
from .api_views import TransactionListAPIView, TransactionOpenAPIView, TransactionCreateView, BalanceAPIView

app_name = 'main'
urlpatterns = [
    path("", home, name="home"),
    # rest_urls
    path("my-tasks/", TransactionListAPIView.as_view(), name="my-trans-list"),
    path("mybalance/", BalanceAPIView, name="my-balance"),
    path("tasks/<int:pk>/", TransactionOpenAPIView.as_view(), name="trans-open"),
    path("tasks/new/", TransactionCreateView.as_view(), name="trans-create"),
]
