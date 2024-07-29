import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";

export type TransactionUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  amount?: number | null;
  currency?: CurrencyWhereUniqueInput | null;
  status?: "Option1" | null;
  transactionDate?: Date | null;
};
