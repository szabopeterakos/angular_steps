package com.pt.bookstore.repo;

import com.pt.bookstore.model.Book;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import javax.transaction.Transactional.TxType;

@Transactional(TxType.SUPPORTS)
public class BookRepo {

    @PersistenceContext(unitName = "persistenceUnitBS")
    private EntityManager em;

    @Transactional(TxType.REQUIRED)
    public Book create(Book book) {
        em.persist(book);
        return book;
    }

    @Transactional(TxType.REQUIRED)
    public Book find(Long id) {
        return em.find(Book.class, id);
    }

    @Transactional(TxType.REQUIRED)
    public Book delete(Long id) {
        em.remove(em.getReference(Book.class, id));
        return em.getReference(Book.class, id);
    }

    @Transactional(TxType.SUPPORTS)
    public List<Book> findAll() {
        TypedQuery<Book> query = em.createQuery("select b from Book b order by b.title", Book.class);
        return query.getResultList();
    }

    @Transactional(TxType.SUPPORTS)
    public Long countAll(){
        TypedQuery<Long> query = em.createQuery("select count(b) from Book b", Long.class);
        return query.getSingleResult();
    }

}
