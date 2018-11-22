package com.pluralsight.bookstore.model;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

import java.net.URI;
import java.util.List;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriInfo;

@Path("/books") // restfull ws endpoint [root/...]
public class BookEndpoint {

    @Inject
    private BookRepository bookRepository;

    @GET // http get helper from jaxrs
    @Produces(APPLICATION_JSON) //return a representation in json
    public Response getBooks() {
        List<Book> bookList = bookRepository.findAll();

        if (bookList.size() == 0) {
            return Response.status(Status.NO_CONTENT).build();
        }

        return Response.ok(bookList).build();
    }

    @GET
    @Produces(APPLICATION_JSON)
    public Response getBookByID(Long Id) {
        Book book = bookRepository.find(Id);

        if (book == null) {
            return Response.status(Status.NOT_FOUND).build();
        }

        return Response.ok(book).build();
    }

    @POST
    @Consumes(APPLICATION_JSON)
    public Response createBook(Book book, @Context UriInfo uriInfo) {
        book = bookRepository.create(book);
        // vissza nem a letarolt perzisztalt objektumot adom vissza hanem az URI-cimet [uriinfo]
        URI createdBookURI = uriInfo.getBaseUriBuilder().path(book.getId().toString()).build();
        return Response.created(createdBookURI).build();
    }

}
