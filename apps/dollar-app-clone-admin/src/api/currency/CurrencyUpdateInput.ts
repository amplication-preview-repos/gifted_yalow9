import { TransactionUpdateManyWithoutCurrenciesInput } from "./TransactionUpdateManyWithoutCurrenciesInput";

export type CurrencyUpdateInput = {
  code?: string | null;
  name?: string | null;
  transactions?: TransactionUpdateManyWithoutCurrenciesInput;
};
