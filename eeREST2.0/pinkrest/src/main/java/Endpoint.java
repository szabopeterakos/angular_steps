import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

@Path("/")
public class Endpoint {

    @GET
    @Produces(APPLICATION_JSON)
    public Response getResponse() {

        List<Integer> dateList = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            dateList.add((new Random().nextInt(1000000000)));
        }

        return Response.ok(dateList).build();
    }
}
