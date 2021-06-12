from django.urls import path
from .api_views import AccountBookListCreateAPIView, AccountBookRetrieveUpdateDestroyAPIView, TransactionListCreateAPIView,TransactionDetailAPIView

app_name = 'main'
urlpatterns = [
    # rest_urls
    path("account-books/", AccountBookListCreateAPIView.as_view(), name="account-book-list-create"),
    path("account-books/<int:account_book_pk>/", AccountBookRetrieveUpdateDestroyAPIView.as_view(), name="account-book-RUD"),
    path("account-books/<int:account_book_pk>/transactions/", TransactionListCreateAPIView.as_view(), name="trans-list-create"),
    path("account-books/<int:account_book_pk>/transactions/<int:trans_pk>/", TransactionDetailAPIView.as_view(), name="trans-RUD"),
]
