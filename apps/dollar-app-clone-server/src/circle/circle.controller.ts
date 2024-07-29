import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CircleService } from "./circle.service";
import { CircleApiResponse } from "./CircleApiResponse";

@swagger.ApiTags("circles")
@common.Controller("circles")
export class CircleController {
  constructor(protected readonly service: CircleService) {}

  @common.Get("/check-payment-status")
  @swagger.ApiOkResponse({
    type: CircleApiResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CheckPaymentStatus(
    @common.Body()
    body: CircleApiResponse
  ): Promise<CircleApiResponse> {
        return this.service.CheckPaymentStatus(body);
      }

  @common.Post("/create-payment")
  @swagger.ApiOkResponse({
    type: CircleApiResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreatePayment(
    @common.Body()
    body: CircleApiResponse
  ): Promise<CircleApiResponse> {
        return this.service.CreatePayment(body);
      }

  @common.Post("/create-wallet")
  @swagger.ApiOkResponse({
    type: CircleApiResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateWallet(
    @common.Body()
    body: CircleApiResponse
  ): Promise<CircleApiResponse> {
        return this.service.CreateWallet(body);
      }
}
