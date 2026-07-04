from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    """
    Custom user model.

    We inherit from Django's AbstractUser so we can
    easily extend the authentication system later.
    """

    pass