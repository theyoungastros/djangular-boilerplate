from django.shortcuts import render
from django.http import HttpResponse
from boiler import settings
from amazon.api import AmazonAPI
from models import *
from serializers import *
import utils