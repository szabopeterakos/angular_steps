package rest_boy;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Raw {

    @Id
    private Long id;
    private String description;
    private int price;

    public Raw() {
    }

    public Raw(Long id, String description, int price) {
        this.id = id;
        this.description = description;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Raw{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", price=" + price +
                '}';
    }
}
