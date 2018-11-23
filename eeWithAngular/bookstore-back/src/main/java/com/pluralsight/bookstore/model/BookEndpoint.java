package com.pluralsight.bookstore.model;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;
import static javax.ws.rs.core.MediaType.APPLICATION_JSON_TYPE;
import static javax.ws.rs.core.MediaType.APPLICATION_SVG_XML;
import static javax.ws.rs.core.MediaType.APPLICATION_XML;
import static javax.ws.rs.core.MediaType.TEXT_PLAIN;

import java.net.URI;
import java.util.Date;
import java.util.List;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriInfo;

@Path("/library") // restfull ws endpoint [root/...]
public class BookEndpoint {

    @Inject
    private BookRepository bookRepository;

    @GET // http get helper from jaxrs
    @Produces(MediaType.APPLICATION_JSON) //return a representation in json
    public Response getAllBooks() {
        List<Book> bookList = bookRepository.findAll();

        if (bookList.size() == 0) {
            return Response.status(Status.NO_CONTENT).build();
        }

        return Response.ok(bookList).build(); // give an 200 HTTP code and build a JSON with response
    }

    @GET
    @Path("/id/{Id : \\d+}")
    @Produces(APPLICATION_JSON)
    public Response getBookByID(@PathParam("Id") Long Id) {
        Book book = bookRepository.find(Id);

        if (book == null) {
            return Response.status(Status.NOT_FOUND).build();
        }

        return Response.ok(book).build();
    }

    @POST
    @Consumes(APPLICATION_JSON)
    public Response createBook(@Context UriInfo uriInfo) {
        Book book = new Book("title","description",12F,"ISBNNUMB",new Date(),333,"none",Language.DEUTSCH);
        book = bookRepository.create(book);
        return Response.ok().build();
    }

    @DELETE
    @Path("/del/{Id : \\d+}")
    public Response deleteBook(@PathParam("Id") Long Id) {
        bookRepository.delete(Id);
        return Response.noContent().build();
    }

    @GET
    @Path("/size")
    public Response librarySize() {
        Long sumOfBooks = bookRepository.countAll();

        if (sumOfBooks == 0) {
            return Response.noContent().build();
        }

        return Response.ok("total size of the library: " + bookRepository.countAll()).build();
    }

}
