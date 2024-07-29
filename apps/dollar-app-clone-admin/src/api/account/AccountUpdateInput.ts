import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountUpdateInput = {
  accountNumber?: string | null;
  balance?: number | null;
  transactions?: TransactionUpdateManyWithoutAccountsInput;
  user?: UserWhereUniqueInput | null;
};
