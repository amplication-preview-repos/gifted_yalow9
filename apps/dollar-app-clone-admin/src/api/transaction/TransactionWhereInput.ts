import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  account?: AccountWhereUniqueInput;
  amount?: FloatNullableFilter;
  currency?: CurrencyWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
  transactionDate?: DateTimeNullableFilter;
};
