package rest_boy;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

import java.util.ArrayList;
import java.util.List;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

@Path("/")
public class EndPoints {

    @Inject
    private Repo repo;

    @GET
    @Produces(APPLICATION_JSON)
    public Response getOne() {
        return Response.ok("NICE").build();
    }

    @GET
    @Produces(APPLICATION_JSON)
    @Path("/all")
    public Response getAll() {
        Raw current = new Raw(1L, "titanium alloy", 300);
        Raw c1 = new Raw(2L, "bind alloy", 200);
        Raw c2 = new Raw(3L, "war and alloy", 400);
        repo.create(current);
        repo.create(c1);
        repo.create(c2);

        List<Raw> rawList = new ArrayList<>();
        rawList.add(current);
        rawList.add(c1);
        rawList.add(c2);

        return Response.ok(rawList).build();
    }

    @GET
    @Produces(APPLICATION_JSON)
    @Path("/id/{ID : \\d+}")
    public Response getById(@PathParam("ID") Long id) {
        Raw actualRow = repo.findById(id);
        return Response.ok(actualRow).build();
    }

}
