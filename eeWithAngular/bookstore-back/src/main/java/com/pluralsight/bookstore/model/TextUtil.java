package com.pluralsight.bookstore.model;

public class TextUtil {

    public String sanitize(String title) {
        return title.trim().toUpperCase();
    }
}
