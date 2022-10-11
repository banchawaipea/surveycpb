from multiprocessing import context
from unicodedata import name
from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required


@login_required(login_url='/login') #redirect ไปหน้า Login เมื่อยังไม้ได้เข้าสู้ระบบ หน้า Index
def Index(request):
    return render(request, 'main.html')


def Login(request):
    context = {} #สิ่งที่จะแนบไป dictionary
    if request.method == 'POST':
        data = request.POST.copy()
        username = data.get('username')
        password = data.get('password')
        # context['user'] = username
        # context['pass'] = password
        # context['test_sent'] = 'TEST ARM'
        try:
            user = authenticate(username=username, password=password)
            login(request, user)
        except:
            context['message'] = 'user หรือ password อาจไม่ถูกต้อง'

    return render(request, 'sign-in.html', context)



def Signup(request):
    context = {} #สิ่งที่จะแนบไป dictionary
    if request.method == 'POST':
        data = request.POST.copy()
        username = data.get('username')
        password = data.get('password')
        
    return render(request, 'sign-up.html')