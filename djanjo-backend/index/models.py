from typing import *

from django.db import models


class consent_class(models.Model):
    user_id = models.AutoField(primary_key=True)
    consent = models.BooleanField(default=False)