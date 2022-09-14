from django.shortcuts import render
from django.http import HttpResponse


def Index(request):

    return render(request, 'main.html')

def Login(request):
    return render(request, 'sign-in.html')