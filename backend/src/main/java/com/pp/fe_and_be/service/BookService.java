package com.pp.fe_and_be.service;

import com.pp.fe_and_be.dto.BookDTO;

import java.util.List;

public interface BookService {
    List<BookDTO> getBooks();
    BookDTO addBook(BookDTO bookDTO);
    void deleteBook(int id);
}
