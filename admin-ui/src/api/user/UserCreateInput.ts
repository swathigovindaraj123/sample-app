import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  age?: number | null;
  country: string;
  endorsement?: boolean | null;
  firstName: string;
  gender: "Male" | "Female" | "Other";
  lastName: string;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password: string;
  roles: Array<string>;
  username: string;
};
