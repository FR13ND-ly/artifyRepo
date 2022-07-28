from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
import os
from .models import File
from django.conf import settings
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from rest_framework import status
from thirdweb import ThirdwebSDK
from thirdweb.types.nft import NFTMetadataInput
import requests
import json

apiUrl = "http://localhost:8000"

def getFile(id, path=""):
    if File.objects.filter(id=id).exists():
        return apiUrl + "/media/" + path + os.path.basename(File.objects.get(id=id).file.name)
    else:
        return ""

@csrf_exempt
def addFile(request, url):
    file = File.objects.create(file=request.FILES['file'])
    file.url = "https://ipfs.io/ipfs/" + url
    file.save()
    return JsonResponse(file.id, status=status.HTTP_200_OK, safe=False)

def mintNFT(id, name, description, wallet):
    url = "https://api.nftport.xyz/v0/mints/easy/urls"
    payload = json.dumps({
        "chain": "polygon",
        "name": name,
        "description": description,
        "file_url": File.objects.get(id = id).url,
        "mint_to_address": wallet
    })
    headers = {
        'Content-Type': 'application/json',
        'Authorization': "b577d628-8899-480e-82f7-e564df1dbac5"
    }
    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.text)