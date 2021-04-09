import json

from django.forms.models import model_to_dict
from django.http import JsonResponse

from .models import *
from .utils.api_utils import *
from .utils.constants import *


def starter(request):
    if request.method == 'POST':
        try:
            body_decoded = json.loads(request.body)
            consent = body_decoded['consent']

            user = consent_class(consent)
            user.save()

            # Info shared by User and RestaurantOwner
            response_body = {"user_id": user.user_id}
            response = create_api_response(response_body, API_CODE.OK)

        except ValueError:
            response = create_failure_response_token()

    return JsonResponse(response, safe=False)