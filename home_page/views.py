from django.shortcuts import render, redirect

def home_page (request):
    return render (request,'home_page/index.html')

def greeting_page(request):
    name = request.GET.get('name', '')
    return render(request, 'home_page/greeting.html', {'name': name})


