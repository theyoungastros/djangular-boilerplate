from django.shortcuts import render
from django.http import HttpResponse
from priceguess import settings
from api.models import Product
import utils
from api.serializers import ProductSerializer

def index(request):

    products = Product.objects.order_by('?')[:2]

    data = { 
        'products': ProductSerializer(products, many=True).data,
    }

    return render(request, 'frontend/index.html', data)