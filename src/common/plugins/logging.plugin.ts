import { ApolloServerPlugin, BaseContext, GraphQLRequestContext, GraphQLRequestListener } from "@apollo/server";
import { Plugin } from "@nestjs/apollo";

@Plugin()
export default class LoggingPlugin implements ApolloServerPlugin {
  async requestDidStart(): Promise<void | GraphQLRequestListener<BaseContext>> {
    console.log("GQL Request started");

    return {
      async willSendResponse() {
        console.log("Will send response");
      },
    };
  }
}
