package com.pp.fe_and_be.service;

import com.pp.fe_and_be.dto.BookDTO;
import com.pp.fe_and_be.entity.Book;
import com.pp.fe_and_be.repository.BookRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookServiceImpl implements BookService{
    @Autowired
    ModelMapper modelMapper;

    @Autowired
    BookRepository bookRepository;

    @Override
    public List<BookDTO> getBooks() {
        List<Book> books = bookRepository.findAll();
        return books.stream().map(book -> modelMapper.map(book,BookDTO.class)).collect(Collectors.toList());
    }

    @Override
    public BookDTO addBook(BookDTO bookDTO) {
        Book theBook = bookRepository.save(modelMapper.map(bookDTO,Book.class));
        return modelMapper.map(theBook, BookDTO.class);
    }

    @Override
    public void deleteBook(int id) {
        bookRepository.deleteById(id);
    }
}
