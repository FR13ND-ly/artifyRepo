from django.contrib import admin
from django.urls import path, include, re_path
from django.views.static import serve
from django.conf import settings

urlpatterns = [
    path('likes/', include('likes.urls')),
    path('profiles/', include('profiles.urls')),
    path('files/', include('files.urls')),
    path('products/', include('products.urls')),
    path('admin/', admin.site.urls),
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
]
