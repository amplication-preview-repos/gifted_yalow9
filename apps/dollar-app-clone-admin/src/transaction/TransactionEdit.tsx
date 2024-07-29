import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { CurrencyTitle } from "../currency/CurrencyTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput
          source="currency.id"
          reference="Currency"
          label="currency"
        >
          <SelectInput optionText={CurrencyTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="transactionDate" source="transactionDate" />
      </SimpleForm>
    </Edit>
  );
};
