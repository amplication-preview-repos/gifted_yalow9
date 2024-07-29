import { Account } from "../account/Account";
import { Currency } from "../currency/Currency";

export type Transaction = {
  account?: Account | null;
  amount: number | null;
  createdAt: Date;
  currency?: Currency | null;
  id: string;
  status?: "Option1" | null;
  transactionDate: Date | null;
  updatedAt: Date;
};
