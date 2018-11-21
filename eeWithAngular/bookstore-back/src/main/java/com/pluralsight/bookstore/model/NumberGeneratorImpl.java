package com.pluralsight.bookstore.model;

import java.util.Random;

public class NumberGeneratorImpl implements NumberGenerator {

    @Override
    public String generateISBN() {
        Integer random = new Random().nextInt(1000);
        return "11-886-XDC0e3-" + random.toString();
    }
}
