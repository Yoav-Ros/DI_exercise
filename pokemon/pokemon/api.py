import requests
import json
from main.models import card



for number in range(1, 151):
    response = requests.get(f'GET/api/v2/ability/{number}/')
    print(response)
    info = response.json()
    print(info)

    # info = response.json()
    # card = card(name=info.json()['name'])
    # card.save()