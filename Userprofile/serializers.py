from dj_rest_auth.serializers import LoginSerializer
from rest_framework import serializers
from django.utils.translation import ugettext_lazy as _

class MyCustomLoginSerializer(LoginSerializer):
    @staticmethod
    def validate_email_verification_status(user):
        from allauth.account import app_settings
        if app_settings.EMAIL_VERIFICATION == app_settings.EmailVerificationMethod.MANDATORY:
            try:
                email_address = user.emailaddress_set.get(email=user.email)
            except:
                email_address = user.email
            if not email_address.verified:
                raise serializers.ValidationError(_('E-mail is not verified.'))