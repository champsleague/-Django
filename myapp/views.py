from django.shortcuts import render,HttpResponse
import random

topics = [
    {'id':1, 'title':'routing', 'body':'Routing is...'},
    {'id':2, 'title':'view', 'body':'View is...'},
    {'id':3, 'title':'model', 'body':'Model is...'},
    ]

def HTMLTemplate():
    global topics
    ol = ''
    for topic in topics:
        ol += f'<li><a href="/read/{topic["id"]}">{topic["title"]}</a></li>'
    return f'''
        <html>
        <body>
        <h1>Django</h1>
        <ol>
            {ol}
        </ol>
        
        <h2>Welcome</h2>
        hello,django
        </body>
        </html>
                        '''


def index(request):

    return HttpResponse(HTMLTemplate())

def create(request):
    return HttpResponse('create')

def read(request,id):
    return HttpResponse('read'+id)