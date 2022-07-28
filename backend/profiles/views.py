from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from profiles.models import Profile
from rest_framework import status
import random

avatars = [
    "https://lh6.googleusercontent.com/EF6DVrCepU84x0neXNfy1n8Kto8bgYNi4wHC6ovwUwYAWe1-ivLGzNxj25-qUv4TTZnisOnZ2U40bGgvXHhJwxuCDte3n2dSg2ITgl0KSkqddZb7v0rppW0MvNHdVrCqcwkqmyj2",
    "https://theithacan.org/wp-content/uploads/2022/02/2.8-Cartoon_MikeRoss-3.jpg",
    "https://www.praguemorning.cz/wp-content/uploads/2022/06/nfts-800x500.jpg",
    "https://airnfts.s3.amazonaws.com/nft-images/20210913/Japanese_Angry_Ape_1631547255147.jpg",
    "https://cdn01.vulcanpost.com/wp-uploads/2022/05/BAYC2162.png",
    "http://wheel2drive.com/wp-content/uploads/2022/04/nft.png",
    "https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&quality=85&auto=format&fit=max&s=0aac74fbf3a2f51c042b95d480dd8224",
    "https://bctd.news/storage/posts/December2021/5g7jt4emByt9nFyXiTd1.jpg",
    "https://lh4.googleusercontent.com/qR-C8B03Ebn4JFsQ536Oe7_Xt5y8m6qXP1j9py-hGS5VoT6q6WUGlFlDp8SQKAVowpO6j6zJW3HTcDaCcFJB9iUnABIhdFtsyAByx_tVVVqgnXhqaVoLTCT72vpCZ7XE4uWLxjI_",
    "https://www.jumpstartmag.com/wp-content/uploads/2022/02/Bored-Ape-6498.jpg",
    "https://blockworks.co/wp-content/uploads/2022/01/Bored-Ape-Yacht-Club_Ape_wide.jpg",
    "https://nfteducation.org/wp-content/uploads/2021/09/bored-ape-yacht-club-bayc-roadmap-2.0-version.png"
]

def login(request, token):
    profile, created = Profile.objects.get_or_create(token=token)
    if created:
        profile.imageUrl = random.choice(avatars)
        profile.save()
    response = {
        "token" : profile.token,
        "username" : profile.username,
        "imageUrl" : profile.imageUrl
    }
    return JsonResponse(response, status=status.HTTP_200_OK, safe=False)

@csrf_exempt
def changeUsername(request):
    data = JSONParser().parse(request)
    profile = Profile.objects.get(token = data['token'])
    profile.username = data['username']
    profile.save()
    return JsonResponse({}, status=status.HTTP_200_OK)