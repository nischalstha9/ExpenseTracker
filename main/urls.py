from django.urls import path, include
from .api_views import AccountBookListCreateAPIView, AccountBookRetrieveUpdateDestroyAPIView, TransactionListCreateAPIView,TransactionDetailAPIView
from dj_rest_auth import urls

app_name = 'main'
urlpatterns = [
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/register/', include('dj_rest_auth.registration.urls')),
    # rest_urls
    path("account-books/", AccountBookListCreateAPIView.as_view(), name="account-book-list-create"),
    path("account-books/<int:account_book_pk>/", AccountBookRetrieveUpdateDestroyAPIView.as_view(), name="account-book-RUD"),
    path("account-books/<int:account_book_pk>/transactions/", TransactionListCreateAPIView.as_view(), name="trans-list-create"),
    path("account-books/<int:account_book_pk>/transactions/<int:trans_pk>/", TransactionDetailAPIView.as_view(), name="trans-RUD"),
]
