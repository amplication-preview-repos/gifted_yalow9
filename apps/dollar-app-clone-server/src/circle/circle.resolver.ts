import * as graphql from "@nestjs/graphql";
import { CircleApiResponse } from "./CircleApiResponse";
import { CircleService } from "./circle.service";

export class CircleResolver {
  constructor(protected readonly service: CircleService) {}

  @graphql.Query(() => CircleApiResponse)
  async CheckPaymentStatus(
    @graphql.Args()
    args: CircleApiResponse
  ): Promise<CircleApiResponse> {
    return this.service.CheckPaymentStatus(args);
  }

  @graphql.Mutation(() => CircleApiResponse)
  async CreatePayment(
    @graphql.Args()
    args: CircleApiResponse
  ): Promise<CircleApiResponse> {
    return this.service.CreatePayment(args);
  }

  @graphql.Mutation(() => CircleApiResponse)
  async CreateWallet(
    @graphql.Args()
    args: CircleApiResponse
  ): Promise<CircleApiResponse> {
    return this.service.CreateWallet(args);
  }
}
