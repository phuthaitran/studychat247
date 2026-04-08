from mistralai.client import Mistral
from dotenv import load_dotenv
from pathlib import Path
import os

load_dotenv()
api_key = os.environ["MISTRAL_API_KEY"]

def perform_ocr(stored_file_id: str):
    client = Mistral(api_key=api_key)
    meta = client.files.retrieve(file_id=stored_file_id)
    signed_url = client.files.get_signed_url(file_id=stored_file_id)

    ocr_response = client.ocr.process(
        model='mistral-ocr-latest',
        document={
            "type": "document_url",
            "document_url": signed_url.url
        },
        include_image_base64=True
    )
    client.__exit__
    Path("processed").mkdir(parents=True, exist_ok=True)
    print(meta.filename)
    with open(f"processed/{meta.filename}.md", "w", encoding='utf-8') as f:
        for page in ocr_response.pages:
            f.write(page.markdown)
