import { TransactionCreateNestedManyWithoutAccountsInput } from "./TransactionCreateNestedManyWithoutAccountsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountCreateInput = {
  accountNumber?: string | null;
  balance?: number | null;
  transactions?: TransactionCreateNestedManyWithoutAccountsInput;
  user?: UserWhereUniqueInput | null;
};
