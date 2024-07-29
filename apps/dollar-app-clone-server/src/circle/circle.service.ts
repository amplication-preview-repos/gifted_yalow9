import { Injectable } from "@nestjs/common";
import { CircleApiResponse } from "./CircleApiResponse";

@Injectable()
export class CircleService {
  constructor() {}
  async CheckPaymentStatus(args: CircleApiResponse): Promise<CircleApiResponse> {
    throw new Error("Not implemented");
  }
  async CreatePayment(args: CircleApiResponse): Promise<CircleApiResponse> {
    throw new Error("Not implemented");
  }
  async CreateWallet(args: CircleApiResponse): Promise<CircleApiResponse> {
    throw new Error("Not implemented");
  }
}
