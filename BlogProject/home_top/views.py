from imp import new_module
import math
from pickle import NONE
from turtle import circle
from django.shortcuts import render
from requests import request
from .list import Event_List, Sports_List
from .models import Event_Model,Event_Motion_Model
from helloworldapp.models import Book
from django.views.generic import View, TemplateView, ListView, DetailView
from django.shortcuts import get_object_or_404
from django.http.response import JsonResponse
import json
from django.core import serializers
#トップページ
class ModelDetailList(ListView):
    model = Event_Motion_Model
    template_name = './../templates/home/home.html'
        
    def get_context_data(self, *args, **kwargs):
        motion_model = Event_Motion_Model.objects.all()
        if not motion_model:
            #運動系の名前,写真をDBに挿入
            event_list_motion = Event_List.Event_List_Motion
            Event_Motion_Model.objects.all().delete()
            for event in event_list_motion:
                event_name = event[0]
                event_img = event[1]
                events =  Event_Motion_Model(name = event_name, images = event_img)
                events.save()
            #文科系の名前,写真をDBに挿入
            event_list_culture = Event_List.Event_List_Culture
            Event_Model.objects.all().delete()
            for event in event_list_culture:
                event_name = event[0]
                event_img = event[1]
                events =  Event_Model(name = event_name, images = event_img)
                events.save()
        
        #運動系のDBを使用可能
        context = super().get_context_data(*args, **kwargs)
        context['culture_list'] = Event_Model.objects.all
        return context

#運動系検索ページ
def Motion_ModelDetailView(request,pk):
    model_id = pk
    if model_id == 1:
        sports_list = Sports_List.Ball_Sports
    elif model_id == 2:
        sports_list = Sports_List.Indoor_Sports 
    elif model_id == 3:
        sports_list = Sports_List.Outdoor_Sports
    elif model_id == 4:
        sports_list = Sports_List.Winter_Sports
    else:
        sports_list = Sports_List.Other_Sports
    
    event_motion_model = Event_Motion_Model.objects.all().values()
    circle_list = Book.objects.all().values()
    
    context = {
                'sports_list':sports_list,
                'event_motion_model':event_motion_model,
                'circle_lists':circle_list,
               }
    return render(request, './../templates/home/detail.html', context)

#文科系詳細ページ
class Culture_ModelDetailView(DetailView):
    model = Event_Model
    template_name = './../templates/home/detail.html'
    
    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['culture_list'] = Event_Model.objects.all().values()
        return context
    
def DeleteBookView(request,pl,pk):
    chapter = get_object_or_404(Book, pk=pl)
    detail_id = pl
    model = Book.objects.get(id=detail_id)
    print(model)
    context_circle_detail = {'circle_detail':model,
                             'chapter':chapter,
                             }
    return render(request,'./../templates/home/book_detail.html', context_circle_detail)

def Search(request):
    circle_detail_all = Book.objects.all().values()
    print(circle_detail_all)
    circle_detail_sub = []
    circle_detail = []
    circle_detail_len = len(circle_detail_all)

    for i in range(circle_detail_len):
        circle_detail_sub.append(circle_detail_all[i])
    
    for row in circle_detail_sub:
        circle_detail.append(row["title"])
        
    print(circle_detail)
    post = serializers.serialize("json", Book.objects.all())
    context = {
        'circle_detail': circle_detail,
        'post':post
    }
    return render(request,'./../templates/home/search.html',context)



