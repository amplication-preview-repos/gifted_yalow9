import { TransactionCreateNestedManyWithoutCurrenciesInput } from "./TransactionCreateNestedManyWithoutCurrenciesInput";

export type CurrencyCreateInput = {
  code?: string | null;
  name?: string | null;
  transactions?: TransactionCreateNestedManyWithoutCurrenciesInput;
};
