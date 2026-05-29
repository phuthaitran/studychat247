def title_injection(
    source: str,
    grade: int, 
    subject: str
) -> str:
    book_set = "Kết nối tri thức với cuộc sống"
    if subject == "math":
        if source.endswith("-cd.md"):
            return f"Chuyên đề học tập Toán {grade} - {book_set}"
        elif source.endswith("-tap-1.md"):
            return f"Toán {grade}, tập Một - {book_set}"
        elif source.endswith("-tap-2.md"):
            return f"Toán {grade}, tập Hai - {book_set}"
        else:
            return "Unknown book"
    elif subject == "history":
        return f"Lịch sử {grade} - {book_set}"
    else:
        return "Unknown book"
    
    