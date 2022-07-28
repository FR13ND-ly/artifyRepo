from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .models import Like
from rest_framework import status
from products.models import Product
from files.views import mintNFT

def getLikes(product):
    return Like.objects.filter(product=product).count()

@csrf_exempt
def getLikesInfo(request):
    data = JSONParser().parse(request)
    response = {
        "likes": Like.objects.filter(product=data['product']).count(),
        "liked": "favorite" if Like.objects.filter(product=data['product'], user=data.get('user')) else "favorite_border",
    }
    return JsonResponse(response, status=status.HTTP_200_OK)

@csrf_exempt
def like(request):
    data = JSONParser().parse(request)
    like, created = Like.objects.get_or_create(product=data['product'], user=data['user'])
    if (created):
        like.save()
    else:
        like.delete()
    if Like.objects.filter(product=data['product']).count() > 1:
        product = Product.objects.get(id = data['product'])
        if not product.ntfied:
            print('nftifing')
            mintNFT(product.image, product.name, product.description, product.user)
            product.ntfied = True
            product.save()
    return JsonResponse({}, status=status.HTTP_200_OK)