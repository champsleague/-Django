from django.shortcuts import render,HttpResponse
import random

# Create your views here.
def index(request):
    return HttpResponse('''
        <h1>Django</h1>
        <ol>
        <li>routing</li>
        <li>view</li>
        <li>model</li>
        </ol>
        
        <h2>welcome</h2>
        hello,django
                        ''')

def create(request):
    return HttpResponse('create')

def read(request,id):
    return HttpResponse('read'+id)