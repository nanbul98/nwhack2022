import json
import os
from ibm_watson import ToneAnalyzerV3
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from ibm_watson import ApiException
from dotenv import load_dotenv

while True:
    text = 'Team, I know that times are tough! Product '\
    'sales have been disappointing for the past three '\
    'quarters. We have a competitive product, but we '\
    'need to do a better job of selling it!'
    load_dotenv()
    api_key = os.getenv("api_key")
    api_url = os.getenv("api_url")
    authenticator = IAMAuthenticator(api_key)
    tone_analyzer = ToneAnalyzerV3(
        version='2017-09-21',
        authenticator=authenticator
    )

    tone_analyzer.set_service_url(api_url)

    tone_analysis = tone_analyzer.tone(
        {'text': text},
        content_type='application/json'
    ).get_result()

    print(json.dumps(tone_analysis, indent=2))




# def analyze(text):
#     tone_analysis = None
#     try:
#         print("hello")
#         load_dotenv()
#         api_key = os.getenv("api_key")
#         api_url = os.getenv("api_url")
#         authenticator = IAMAuthenticator(api_key)
#         tone_analyzer = ToneAnalyzerV3(
#             version='2017-09-21',
#             authenticator=authenticator
#         )

#         tone_analyzer.set_service_url(api_url)

#         tone_analysis = tone_analyzer.tone(
#             {'text': text},
#             content_type='application/json'
#         ).get_result()

#         # response = tone_analyzer.tone(
#         #     {'text': text},
#         #     content_type='application/json'
#         # )
#         # # Access response from methodName
#         # print(json.dumps(response.get_result(), indent=2))
#         # # Access information in response headers
#         # print(response.get_headers())
#         # # Access HTTP response status
#         # print(response.get_status_code())

#     except ApiException as ex:
#         print("Method failed with status code " + str(ex.code) + ": " + ex.message)

#     return tone_analysis

# if __name__ == "__main__":
#     text = 'Team, I know that times are tough! Product '\
#     'sales have been disappointing for the past three '\
#     'quarters. We have a competitive product, but we '\
#     'need to do a better job of selling it!'

#     tone = analyze(text)
#     print(json.dumps(tone, indent=2))