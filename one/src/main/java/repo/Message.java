package repo;

import domain.Record;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class Message {

    @PersistenceContext(name = "prod")
    EntityManager em;

    public List<Record> findAll() {
        return this.em.createNamedQuery(Record.FIND_ALL).getResultList();
    }

    public Record findById(Long id) {
        return this.em.find(Record.class, id);
    }

    public void create(Record Record) {
        this.em.persist(Record);
    }

    public void remove(Record Record) {
        this.em.remove(Record);
    }
}