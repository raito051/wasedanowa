from django.http import HttpResponse
from django.views.generic import TemplateView
def helloworldfunc(request):
    responseobjects = HttpResponse('<h1>Hello World</h1>')
    return responseobjects

class HelloWorldClass(TemplateView):
    template_name = 'hello.html'