from mistralai.client import Mistral
from dotenv import load_dotenv
from pprint import pprint
from pathlib import Path
import os, time
load_dotenv()

api_key = os.environ["MISTRAL_API_KEY"]

client = Mistral(api_key=api_key)
files = [f.name for f in Path('./batch_upload').iterdir() if f.is_file()]
for file in files:
    uploaded_pdf = client.files.upload(
        file={
            "file_name": Path(file).stem,
            "content": open(f"batch_upload/{file}", "rb"),
        },
        purpose="ocr"
    )

    client.__exit__
    time.sleep(10)