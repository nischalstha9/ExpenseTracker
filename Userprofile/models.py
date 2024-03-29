from django.db import models
from django.contrib.auth.models import User
from PIL import Image
from main.models import Balance
# Create your models here.
from django.db.models.signals import post_save


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    contact = models.BigIntegerField(blank=True, null=True)
    dp = models.ImageField(default='user.png', upload_to='profile_pics')

    def __str__(self):
        return f"{self.user.username}'s Profile"

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        img = Image.open(self.dp.path)

        if img.height > 600 or img.width > 600:
            output_size = (600, 600)
            img.thumbnail(output_size)
            img.save(self.dp.path)


# SIGNALS SECTION
def create_profile(sender, instance, created, **kwargs):
    if created:
        # creates user profile on new account
        Profile.objects.create(user=instance)
        # creates user balance on new account
        Balance.objects.create(user=instance)


def save_profile(sender, instance, **kwargs):
    instance.profile.save()


post_save.connect(create_profile, sender=User)
post_save.connect(save_profile, sender=User)
