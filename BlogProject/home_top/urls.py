from django import views
from django.urls import path
from . import views
 
app_name = 'home'

urlpatterns = [
    path('top/', views.ModelDetailList.as_view(), name='home_top'),
    path('top/detail/motion/<int:pk>/', views.Motion_ModelDetailView, name='motion_detail'),
    path('top/detail/culture/<int:pk>/', views.Culture_ModelDetailView.as_view(), name='culture_detail'),
]