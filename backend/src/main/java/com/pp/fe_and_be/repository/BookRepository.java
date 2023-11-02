package com.pp.fe_and_be.repository;

import com.pp.fe_and_be.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book,Integer> {
}
