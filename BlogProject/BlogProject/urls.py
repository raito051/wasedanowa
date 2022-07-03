from django.contrib import admin
from django.urls import path, include
# from .views import helloworldfunc, HelloWorldClass
urlpatterns = [
    path('admin/', admin.site.urls),
    # path('helloworld/', helloworldfunc),
    # path('helloworlsurl2', HelloWorldClass.as_view()
    path('accounts/', include('accounts.urls')),
    path('', include('helloworldapp.urls'))
]
