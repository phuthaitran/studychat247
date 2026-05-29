from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_chroma import Chroma
from langchain_core.prompts import ChatPromptTemplate
from dotenv import load_dotenv
import os

load_dotenv()

CHROMA_PATH = "vectorstore/chroma"

TEMPLATE = """Bạn là một gia sư thông minh và thân thiện, chuyên hỗ trợ học sinh trung học phổ thông Việt Nam.
 
Nhiệm vụ của bạn:
- Giải thích các khái niệm một cách rõ ràng, dễ hiểu, phù hợp với học sinh THPT
- Trả lời bằng tiếng Việt, trừ khi học sinh hỏi bằng tiếng Anh
- Tìm tài liệu đúng theo phần [Môn học], dựa trên key "subject" trên metadata
- Tìm tài liệu đúng theo các lớp học được cung cấp trong [Lớp học], dựa trên key "grade" được cung cấp trong metadata
- Chỉ dựa vào tài liệu được cung cấp trong phần [Tài liệu tham khảo] và tin nhắn trong [Lịch sử trò chuyện] để trả lời
- Nếu không tìm thấy thông tin trong tài liệu, hãy nói thật là không tìm thấy thông tin này trong tài liệu hiện có
- Khuyến khích học sinh suy nghĩ và đặt câu hỏi thêm
- Sử dụng ví dụ thực tế khi cần thiết
- Trình bày công thức toán học rõ ràng nếu có
- Nếu có thể, hãy trích dẫn nguồn theo (source:page) dựa trên metadata

 
Hãy luôn thân thiện, kiên nhẫn và động viên học sinh!

[Môn học]
{subject}

[Lớp]
{grade}

[Tài liệu tham khảo]
{context}

[Lịch sử trò chuyện]
{history}

[Câu hỏi]
{question}
 
[Hướng dẫn trả lời]
Dựa vào tài liệu trên, hãy trả lời câu hỏi một cách đầy đủ và dễ hiểu.
Nếu cần, hãy chia nhỏ câu trả lời thành các bước hoặc điểm chính.
"""

def generate_answer(subject: str, grade: int | list[int], question: str):
    embeddings = HuggingFaceEmbeddings(model_name="keepitreal/vietnamese-sbert")

    vector_store = Chroma.from_documents(
        collection_name="textbooks",
        embedding=embeddings, 
        collection_metadata={"hnsw:space": "cosine"},
        persist_directory=CHROMA_PATH
    )

    retriever = vector_store.as_retriever(
        search_type="similarity_score_threshold",
        search_kwargs={"k": 10, "score_threshold": 0.2}
    )

    model = ChatGoogleGenerativeAI(
        model="gemini-2.5-flash",
        api_key=os.getenv("GOOGLE_API_KEY"),
    )

    prompt_template = ChatPromptTemplate.from_messages(
        [
            ("system", TEMPLATE),
            ("human", "{input}")
        ]
    )

    rag_chain = prompt_template | model
    result = rag_chain.invoke({
        "subject": subject,
        "grade": grade,
        "context": retriever,
        "question": question,
    })

    return result



    

    