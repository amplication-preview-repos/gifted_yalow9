import { Transaction } from "../transaction/Transaction";

export type Currency = {
  code: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
