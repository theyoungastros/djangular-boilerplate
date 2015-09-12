from django.contrib import admin
from .models import *

# class ProductAdmin(admin.ModelAdmin):
#     """
#     Product Admin
#     """
#     def image(self, obj):
#         return '<img src="%s" width=100 />' % obj.image_url_small

#     image.allow_tags = True

#     list_display = ['image', 'title', 'price']

# admin.site.register(Product, ProductAdmin)