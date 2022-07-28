from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .models import Product, SavedProduct
from profiles.models import Profile
from files.views import getFile
from rest_framework import status
from likes.views import getLikes

def exploreAll(request):
    response = []
    for product in Product.objects.filter(ntfied=False).order_by("-date"):
        response.append({
            "id" : product.id,
            "name" : product.name,
            "imageUrl" : getFile(product.image),
            "user" : {
                "username" : Profile.objects.get(token=product.user).username,
                "imageUrl" : Profile.objects.get(token=product.user).imageUrl
            },
            "likes" : getLikes(product.id)
        })
    return JsonResponse(response, status=status.HTTP_200_OK, safe=False)

def exploreTop(request):
    topProductsDict = {}
    topProductsPoints = []
    def check_exist(points, id):
        if points in topProductsDict:
            points += 1
            check_exist(points, id)
        else:
            topProductsDict[points] = id
            topProductsPoints.append(points)
    for product in Product.objects.filter(ntfied = False).order_by('-date'):
        points = getLikes(product.id)
        check_exist(points, product.id)
    topProductsPoints.sort()
    topProductsPoints.reverse()
    response = []
    for tpoints in topProductsPoints[ : 4]:
        product = Product.objects.get(id = topProductsDict[tpoints])
        response.append({
            "id" : product.id,
            "name" : product.name,
            "imageUrl" : getFile(product.image),
            "user" : {
                "username" : Profile.objects.get(token=product.user).username,
                "imageUrl" : Profile.objects.get(token=product.user).imageUrl
            },
            "likes" : getLikes(product.id)
        })
    return JsonResponse(response, status=status.HTTP_200_OK, safe=False)

def getProduct(request, id):
    product = Product.objects.get(id = id)
    response = {
        "id" : product.id,
        "name" : product.name,
        "description" : product.description,
        "imageUrl" : getFile(product.image),
        "user" : {
            "username" : Profile.objects.get(token=product.user).username,
            "imageUrl" : Profile.objects.get(token=product.user).imageUrl
        },
        "likes" : getLikes(product.id),
        "ntfied" : product.ntfied
    }
    return JsonResponse(response, status=status.HTTP_200_OK)

@csrf_exempt
def addProduct(request):
    data = JSONParser().parse(request)
    product = Product.objects.create(
        user=data['token'],
        name=data['name'],
        description=data['description'],
        image=data['imageId']
    )
    product.save()
    return JsonResponse({}, status=status.HTTP_200_OK, safe=False)

@csrf_exempt
def getSavedState(request):
    data = JSONParser().parse(request)
    response = bool(SavedProduct.objects.filter(user=data['user'], product=data['product']))
    return JsonResponse(response, status=status.HTTP_200_OK, safe=False)

def getSaved(request, token):
    response = []
    for savedProduct in SavedProduct.objects.filter(user=token).order_by("-date"):
        product = Product.objects.filter(id = savedProduct.product)
        if not product.count():
            savedProduct.delete()
            continue
        product = product[0]
        response.append({
            "id" : product.id,
            "name" : product.name,
            "imageUrl" : getFile(product.image),
            "user" : {
                "username" : Profile.objects.get(token=product.user).username,
                "imageUrl" : Profile.objects.get(token=product.user).imageUrl
            },
            "likes" : getLikes(product.id)
        })
    return JsonResponse(response, status=status.HTTP_200_OK, safe=False)

def getUserProducts(request, token):
    response = []
    for product in Product.objects.filter(user=token).order_by("-date"):
        response.append({
            "id" : product.id,
            "name" : product.name,
            "imageUrl" : getFile(product.image),
            "user" : {
                "username" : Profile.objects.get(token=product.user).username,
                "imageUrl" : Profile.objects.get(token=product.user).imageUrl
            },
            "likes" : getLikes(product.id)
        })
    return JsonResponse(response, status=status.HTTP_200_OK, safe=False)

@csrf_exempt
def addToSave(request):
    data = JSONParser().parse(request)
    saved, created = SavedProduct.objects.get_or_create(product=data['product'], user=data['user'])
    if (created):
        saved.save()
    else:
        saved.delete()
    return JsonResponse({}, status=status.HTTP_200_OK)

def getProducts(request):
    response = []
    for product in Product.objects.filter(ntfied=True).order_by("-date"):
        response.append({
            "id" : product.id,
            "name" : product.name,
            "imageUrl" : getFile(product.image),
            "user" : {
                "username" : Profile.objects.get(token=product.user).username,
                "imageUrl" : Profile.objects.get(token=product.user).imageUrl
            },
            "likes" : getLikes(product.id)
        })
    return JsonResponse(response, status=status.HTTP_200_OK, safe=False)
