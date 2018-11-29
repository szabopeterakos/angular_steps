package rest_boy;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import javax.transaction.Transactional.TxType;

@Transactional(TxType.SUPPORTS)
public class Repo {

    @PersistenceContext(unitName = "RowPersistUnit")
    private EntityManager em;

    public Raw findById(Long id) {
        return em.find(Raw.class, id);
    }

    @Transactional(TxType.REQUIRED)
    public Raw create(Raw raw) {
        em.persist(raw);
        return raw;
    }

}
