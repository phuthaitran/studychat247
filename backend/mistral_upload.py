from mistralai.client import Mistral
from dotenv import load_dotenv
from pprint import pprint
import os
load_dotenv()

api_key = os.environ["MISTRAL_API_KEY"]

client = Mistral(api_key=api_key)

uploaded_pdf = client.files.upload(
    file={
        "file_name": "toan-12-kntt-tap-2-pages",
        "content": open("books/toan-12-kntt-tap-2-pages.pdf", "rb"),
    },
    purpose="ocr"
)

client.__exit__

pprint(uploaded_pdf.model_dump_json)