from fastapi import FastAPI

app = FastAPI()

# データベースの代わりのリスト
books = [
    {"id": 456, "title": "Kokoro", "author": "Soseki"},
    {"id": 789, "title": "Rashomon", "author": "Akutagawa"}
]


# GETメソッド
@app.get("/books")
def get_all_books():
    return books.text


@app.get("/books/{book_id}")
def get_book(book_id: int):
    for book in books:
        if book["id"] == book_id:
            return book
    return {"error": "Not found"}


# POSTメソッド
@app.post("/books")
def create_book(new_book: Book):
    book_dict = new_book.dict()
    books.append(book_dict)
    return book_dict

# PUTメソッド
@app.patch("/books/{books_id}")
def update_book(books_id: int, update_data: dict):
    for book in books:
        if book["id"] == books_id:
            book.update(update_data)
            return book
    return{"error": "Not found"}


# DELETEメソッド
@app.delete("/books/{book_id}")
def delete_book(book_id: int):
    for i, book in enumerate(books):
        if book["id"] == book_id:
            deleted_book = books.pop(i)
            return{"message": "Deleted", "book": deleted_book}
    return {"error": "Not found"}

