import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  accountId?: SortOrder;
  amount?: SortOrder;
  createdAt?: SortOrder;
  currencyId?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  transactionDate?: SortOrder;
  updatedAt?: SortOrder;
};
