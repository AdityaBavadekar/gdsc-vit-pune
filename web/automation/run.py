import requests
import bs4
import re
import os
import json
import time

base_url = "https://dscvitpune.netlify.app/"
website_url = f"{base_url}/events/"

# Add proxy
proxies = {
}
res = requests.get(website_url, headers={
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
}, proxies=proxies)


print("Response Status Code: ", res.status_code)
print("--------------------")

soup = bs4.BeautifulSoup(res.text, "html.parser")

eventsCards = soup.select(".card")
modals = soup.select(".modal")

print(f"Total Events: {len(eventsCards)}")
print(f"Total Modals: {len(modals)}")

eventsData = []

for eventCard in eventsCards:    
    eventName = eventCard.select(".card_title")[0].getText().strip()
    eventImage = base_url + eventCard.select(".card_image > img")[0].get("src").strip()
    eventId = eventCard.select('.demo__btn')[0].get("data-modal-trigger").split("-")[-1]
    
    currentEventModal = modals[int(eventId) - 1]
    
    images = currentEventModal.select(".carousel-inner > .carousel-item > img")
    images = [base_url + image.get("src") for image in images]
    
    modalDescription = currentEventModal.select("p")
    modalDescription = '\n'.join([description.getText() for description in modalDescription]).strip()
    modalDescription = re.sub(r'\s+', ' ', modalDescription)
    
    # Extract date from description
    # Possible date patters
    # 1. 1st January 2021
    # 2. 1 January 2021
    # 3. 1-2 January 2021
        
    print(f"Event Name: {eventName}")
    print(f"Event Description: {modalDescription}")
    print("Event Images:", images)
    print(f"Event Display Image: {eventImage}")
    print(f"Event Id: {eventId}")
    print("--------------------")
    
    print("Downloading Images...")
    
    dirname = f'../public/events/{eventId}'
    
    os.makedirs(dirname, exist_ok=True)
    
    existing_files = os.listdir(dirname)
    
    if "displayImage.png" not in existing_files:
        with open(f"{dirname}/displayImage.png", "wb") as f:
            f.write(requests.get(eventImage).content)
            eventImage = f"{dirname}/displayImage.png"
    
    if len(existing_files) - 1 < len(images):
        for i in range(len(images)):
            with open(f"{dirname}/{i}.png", "wb") as f:
                f.write(requests.get(images[i]).content)
                images[i] = f"{dirname}/{i}.png"


    print(f"{len(images)+1} Images Downloaded")
    print("--------------------")

    dirname = dirname.replace("../public/", "./")
    eventImage = f"{dirname}/displayImage.png"
    images = [f"{dirname}/{i}.png" for i in range(len(images))]

    eventsData.append({
        "name": eventName,
        "description": modalDescription,
        "images": images,
        "displayImage": eventImage,
        "id": eventId,
        "type": "past_event"
    })
    print("\n\nWaiting for half second\n\n")
    time.sleep(0.5)

print("Writing Data to events.json")
json.dump(eventsData, open("../public/data/events.json", "w"), indent=2)
print("Data Written to events.json")

# # Downloading Images from the website
# import os
# import requests

# for event in eventsData:
#     eventDir = f"events"
#     os.makedirs(eventDir, exist_ok=True)
    
#     with open(f"{eventDir}/{event['id']_displayImage}.png", "wb") as f:
#         f.write(requests.get(event["displayImage"]).content)
    
#     for i, image in enumerate(event["images"]):
#         with open(f"{eventDir}/{i}.png", "wb") as f:
#             f.write(requests.get(image).content)