package rest_boy;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

@Path("/")
public class EndPoints {

    

    @GET
    @Produces(APPLICATION_JSON)
    public Response getOne() {
        return Response.ok("NICE").build();
    }

    @GET
    @Produces(APPLICATION_JSON)
    @Path("/all")
    public Response getAll() {
        List<Raw> rawList = new ArrayList<>();
        rawList.add(new Raw(1L, "titanium alloy", 300));
        rawList.add(new Raw(2L, "red and forth", 400));
        rawList.add(new Raw(3L, "steam for god", 500));
        return Response.ok(rawList).build();
    }

    @GET
    @Produces(APPLICATION_JSON)
    @Path("/id/{ID : \\d+}")
    public Response getById(@PathParam("ID") Long id) {

        return Response.ok().build();
    }

}
