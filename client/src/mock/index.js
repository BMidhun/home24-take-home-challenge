/* istanbul ignore file */
import { createServer, Response } from "miragejs";
import { mockData } from "./mockData";

function startMockServer() {
  return createServer({
    routes() {
      this.post("/graphql", (schema, request) => {
        return new Response(200, {}, mockData);
      });
    },
  });
}

export default startMockServer;
