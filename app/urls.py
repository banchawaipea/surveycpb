from django.urls import path
from .views import *
urlpatterns = [
    path('', Index, name='index-page'),
    # path('signup/', Signup, name='signup-page'),

]