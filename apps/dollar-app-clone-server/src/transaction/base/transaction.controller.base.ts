/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TransactionService } from "../transaction.service";
import { TransactionCreateInput } from "./TransactionCreateInput";
import { Transaction } from "./Transaction";
import { TransactionFindManyArgs } from "./TransactionFindManyArgs";
import { TransactionWhereUniqueInput } from "./TransactionWhereUniqueInput";
import { TransactionUpdateInput } from "./TransactionUpdateInput";

export class TransactionControllerBase {
  constructor(protected readonly service: TransactionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Transaction })
  async createTransaction(
    @common.Body() data: TransactionCreateInput
  ): Promise<Transaction> {
    return await this.service.createTransaction({
      data: {
        ...data,

        account: data.account
          ? {
              connect: data.account,
            }
          : undefined,

        currency: data.currency
          ? {
              connect: data.currency,
            }
          : undefined,
      },
      select: {
        account: {
          select: {
            id: true,
          },
        },

        amount: true,
        createdAt: true,

        currency: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,
        transactionDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Transaction] })
  @ApiNestedQuery(TransactionFindManyArgs)
  async transactions(@common.Req() request: Request): Promise<Transaction[]> {
    const args = plainToClass(TransactionFindManyArgs, request.query);
    return this.service.transactions({
      ...args,
      select: {
        account: {
          select: {
            id: true,
          },
        },

        amount: true,
        createdAt: true,

        currency: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,
        transactionDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Transaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async transaction(
    @common.Param() params: TransactionWhereUniqueInput
  ): Promise<Transaction | null> {
    const result = await this.service.transaction({
      where: params,
      select: {
        account: {
          select: {
            id: true,
          },
        },

        amount: true,
        createdAt: true,

        currency: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,
        transactionDate: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Transaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTransaction(
    @common.Param() params: TransactionWhereUniqueInput,
    @common.Body() data: TransactionUpdateInput
  ): Promise<Transaction | null> {
    try {
      return await this.service.updateTransaction({
        where: params,
        data: {
          ...data,

          account: data.account
            ? {
                connect: data.account,
              }
            : undefined,

          currency: data.currency
            ? {
                connect: data.currency,
              }
            : undefined,
        },
        select: {
          account: {
            select: {
              id: true,
            },
          },

          amount: true,
          createdAt: true,

          currency: {
            select: {
              id: true,
            },
          },

          id: true,
          status: true,
          transactionDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Transaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTransaction(
    @common.Param() params: TransactionWhereUniqueInput
  ): Promise<Transaction | null> {
    try {
      return await this.service.deleteTransaction({
        where: params,
        select: {
          account: {
            select: {
              id: true,
            },
          },

          amount: true,
          createdAt: true,

          currency: {
            select: {
              id: true,
            },
          },

          id: true,
          status: true,
          transactionDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
