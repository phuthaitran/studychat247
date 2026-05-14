import os, re, shutil
from dotenv import load_dotenv
from langchain_community.document_loaders import DirectoryLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_core.documents import Document
from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings

load_dotenv()
CHROMA_PATH = "vectorstore/chroma"
DATA_PATH = "data/processed"
MARKDOWN_SEPARATORS = [
    "\n#{1,6} ",
    "```\n",
    "\n\\*\\*\\*+\n",
    "\n---+\n",
    "\n___+\n",
    "\n\n",
    "\n",
    " ",
    ""
]

pattern = re.compile(r"(?:^|[-_])(\d{2})(?:[-_]|$)", re.IGNORECASE) # toan-11-kntt, math_11_something

embeddings = HuggingFaceEmbeddings(model_name="keepitreal/vietnamese-sbert")

subjects = ["math", "history"]

def main():
    generate_data_store()
    
def load_documents():
    """Load the documents from 'data' directory"""
    documents_list = []
    for subject in subjects:
        loader = DirectoryLoader(f"{DATA_PATH}/{subject}", glob="*.md", show_progress=True)
        documents = loader.load()
        for doc in documents:
            doc.metadata['subject'] = subject
            documents_list.append(doc)
    return documents_list

def split_text(documents: list[Document]):
    """Split all the text into chunks"""
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=100,
        length_function=len,
        add_start_index=True,
        separators=MARKDOWN_SEPARATORS
    )
    
    chunks = text_splitter.split_documents(documents)
    
    print(f"Split {len(documents)} documents into {len(chunks)} chunks.")
    return chunks

def save_to_db(chunks: list[Document]):
    if os.path.exists(CHROMA_PATH):
        shutil.rmtree(CHROMA_PATH)
        
    vector_store = Chroma(
        collection_name="textbooks",
        embedding_function=embeddings,
        persist_directory=CHROMA_PATH
    )
    
    vector_store.add_documents(documents=chunks)
    print(f"Saved {len(chunks)} chunks to {CHROMA_PATH}")

def generate_data_store():
    doc_list = load_documents()
    print("Number of documents:", len(doc_list))
    for doc in doc_list:
        file_source = str(doc.metadata['source'])
        filename = os.path.split(file_source)[1]
        print(filename)
        match_ = re.search(pattern, filename)
        if match_:
            grade = int(match_.group(1))
        print(f"Grade of book: Grade {grade}")
        doc.metadata['grade'] = grade
        print(doc.metadata)
    chunks = split_text(doc_list)
    print(chunks[0])
    save_to_db(chunks)

if __name__ == '__main__':
    main()