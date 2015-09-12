from django.shortcuts import render
from django.http import HttpResponse
from boiler import settings
from api.models import *
import utils
from api.serializers import *

def index(request):

    # products = Product.objects.order_by('?')[:2]

    # data = { 
    #     'products': ProductSerializer(products, many=True).data,
    # }

    return render(request, 'frontend/index.html', {})