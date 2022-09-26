from unicodedata import name
from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required


@login_required(login_url='/login') #redirect ไปหน้า Login เมื่อยังไม้ได้เข้าสู้ระบบ หน้า Index
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