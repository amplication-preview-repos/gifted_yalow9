import { Module } from "@nestjs/common";
import { CircleService } from "./circle.service";
import { CircleController } from "./circle.controller";
import { CircleResolver } from "./circle.resolver";

@Module({
  controllers: [CircleController],
  providers: [CircleService, CircleResolver],
  exports: [CircleService],
})
export class CircleModule {}
