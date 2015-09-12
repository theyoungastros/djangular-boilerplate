from django.http import JsonResponse
from boiler import settings

def json_response(objects, status=200, message=""):

    data = {
        'status': status,
        'objects': objects,
        'message': message
    }

    return JsonResponse(data, status=status, safe=False)