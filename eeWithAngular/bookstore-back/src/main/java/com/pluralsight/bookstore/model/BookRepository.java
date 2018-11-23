package com.pluralsight.bookstore.model;

import java.util.List;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import javax.transaction.Transactional.TxType;

// JPA can map Entity to Persistence unit
@Transactional(TxType.SUPPORTS)
// vonatkozik mindenre kiveve ha az osztaloyon belul nem jeloljuk maskeppen [delete, create] JTA !!! NEM TISZTA !!!
//tranzakcio mint egy dedikalt csovon mukodhet egyszere tobb find, de egyszerre csak egy insert vagz delete nehogy osszeakadjanak???
public class BookRepository {

    @PersistenceContext(unitName = "bookStorePU")
    private EntityManager entityManager;

    @Inject // CDI
    private NumberGenerator generator;
    @Inject // CDI dependency injection JAVAEE
    private TextUtil textUtil;

    public Book find(Long Id) {
        return entityManager.find(Book.class, Id);
    }

    // JPQL sql syntax
    public List<Book> findAll() {
        TypedQuery<Book> findAllSQL = entityManager.createQuery("SELECT b FROM Book b ORDER BY b.id DESC", Book.class);
        return findAllSQL.getResultList();
    }

    // JPQL Example
    public Long countAll() {
        TypedQuery<Long> countAllSQL = entityManager.createQuery("SELECT count(b) FROM Book b", Long.class);
        return countAllSQL.getSingleResult();
    }

    @Transactional(TxType.REQUIRED)
    public Book create(Book book) {
        book.setIsbn(generator.generateNumber());
        book.setTitle(textUtil.sanitize(book.getTitle()));
        entityManager.persist(book);
        return book;
    }

    @Transactional(TxType.REQUIRED)
    public void delete(Long Id) {
        Book find = entityManager.getReference(Book.class, Id);
        entityManager.remove(find);
    }

}
