package repo;

import domain.Record;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

@Stateless
@Path("messages")
@Produces({APPLICATION_JSON, MediaType.APPLICATION_XML})
@Consumes({APPLICATION_JSON, MediaType.APPLICATION_XML})
public class MessageResources {

    @Inject
    Message message;

    @GET
    public JsonArray findAll() {
        JsonArrayBuilder list = Json.createArrayBuilder();
        List<Record> all = this.message.findAll();
        all.stream().map(m -> m.toJson());
        return list.build();
    }

    @GET
    @Path("{id}")
    public JsonObject findById(@PathParam("id") Long id) {
        Record guestBook = this.message.findById(id);
        return guestBook.toJson();
    }

    @POST
    public Response save(@Valid Record guestBook) {
        this.message.create(guestBook);
        return Response.ok().build();
    }
}