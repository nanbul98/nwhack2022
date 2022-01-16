import requests
from bs4 import BeautifulSoup
import tone_analyzer

def scrape(url):
    print("URL: ", url)
    res = requests.get(url)
    txt = res.text
    status = res.status_code
    # print(status, txt)



    # Make a request
    # page = requests.get(
        # "https://codedamn.com")
    soup = BeautifulSoup(res.content, 'html.parser')

    # # Extract title of page
    # page_title = soup.title.text
    # print(page_title)

    # # Extract body of page
    # page_body = soup.body

    # # Extract head of page
    # page_head = soup.head

    # # print the result
    # print(page_body, page_head)

    # Create all_h1_tags as empty list
    all_h1_tags = []

    # Set all_h1_tags to all h1 tags of the soup
    for element in soup.select('h2'):
        all_h1_tags.append(element.text)

    # # Create seventh_p_text and set it to 7th p element text of the page
    # seventh_p_text = soup.select('p')[6].text

    print(all_h1_tags)

if __name__ == "__main__":
    url = 'https://www.facebook.com/simonchen0529'
    nyt_url = 'https://www.nytimes.com/2022/01/15/health/mrna-vaccine.html'
    url1 = 'https://www.washingtonpost.com/'
    url2 = 'https://www.buzzfeed.com/ca'
    url3 = 'https://dailyhive.com/'
    url4 = 'https://www.theguardian.com/international'
    url5 = 'https://www.dailymail.co.uk/home/index.html'
    url6 = 'https://people.com/'

    for url in [url1, url2, url3, url4, url5, url6]:
        scrape(url)