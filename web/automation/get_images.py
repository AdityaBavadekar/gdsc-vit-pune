import json
import requests
import bs4
import time

file = "../public/data/team.json"

with open(file) as f:
    data = json.load(f)
    
for person in data['members']:
    url = person["linkedin"].replace('https://in.', 'https://www.') + "/"
    response = requests.get(url, headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.google.com'
    })
    
    if response.text is None:
        continue
    
    soup = bs4.BeautifulSoup(response.text, "html.parser")
    
    # Extract Open graph tag values
    user_json = soup.find("script", type="application/ld+json")
    
    if user_json is None:
        continue
    
    user_profile_image = json.loads(user_json.string)['@graph'][0]
    
    if 'image' not in user_profile_image:
        continue
    
    user_profile_image = user_profile_image['image']['contentUrl']
    
    print(f"""
          Person : {person["name"]}
          URL    : {url}
          Image  : {user_profile_image}
          
          --------------------------------
          """)
    
    data['image2'] = user_profile_image
    
    with open('test1.html', "w", encoding='utf-8') as f:
        f.write(soup.prettify())
        
    time.sleep(1)
    
json.dump(data, open('../public/data/m_team.json', "w"), indent=4)