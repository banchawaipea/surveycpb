from unicodedata import name
from django.shortcuts import render
from django.http import HttpResponse


def Index(request):

    return render(request, 'main.html')

def Login(request):
    if request.method == 'POST':
        data = request.POST.copy()
        name = data.get('name')
        price = data.get('price')
        detail = data.get('detail')
        imageurl = data.get('imageurl')
    return render(request, 'sign-in.html')

def Signup(request):

    return render(request, 'sign-up.html')