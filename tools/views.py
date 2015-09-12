from django.shortcuts import render
from django.http import HttpResponse
from boiler import settings
from api.models import *
import utils
from api import utils as api_utils