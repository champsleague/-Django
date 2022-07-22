from django.shortcuts import render,HttpResponse,redirect
import random

nextId = 4
topics = [
    {'id':1, 'title':'routing', 'body':'Routing is...'},
    {'id':2, 'title':'view', 'body':'View is...'},
    {'id':3, 'title':'model', 'body':'Model is...'},
    ]

def HTMLTemplate(articleTag,id=None):
    global topics
    ol = ''
    for topic in topics:
        ol += f'<li><a href="/read/{topic["id"]}">{topic["title"]}</a></li>'
    return f'''
        <html>
        <body>
        <h1><a href="/">Django</a></h1>
        <ul>
            {ol}
        </ul>
        {articleTag}
        <ul>
            <li><a href="/create">create</a></li>
            <li>
                <form action="/delete/" method="post">
                    <input type="hidden" name="id" value={id}>
                    <input type="submit" value="delete">
                </form>
            </li>
        <ul>
        </body>
        </html>
                        '''


def index(request):
    article = ''' 
    <h2>Welcome</h2>
    hello,django
    '''
    return HttpResponse(HTMLTemplate(article))


def create(request):
    global nextId
    print('request.method',request.method)
    if request.method == 'GET':
        article='''
        <form action="/create">
            <p><input type="text" name="title" placeholder="title"></p>
            <p><textarea name="body" placeholder="body"></textarea></p>
            <p><input type="submit"></p>
        </form>
        '''
        return HttpResponse(HTMLTemplate(article))
    
    elif request.method == 'POST':
        title = request.POST['title']
        body = request.POST['body']
        newTopic = {"id":nextId,"title":title,"body":body}
        topics.append(newTopic)
        url='/read/'+str(nextId)
        nextId = nextId + 1
        return redirect()


def read(request,id):
    global topics 
    article=''
    for topic in topics:
        if topic['id'] ==int(id):
            article=f'<h2>{topic["title"]}</h2>{topic["body"]}'
    return HttpResponse(HTMLTemplate(article))