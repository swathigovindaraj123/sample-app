import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  age?: number | null;
  country?: string;
  endorsement?: boolean | null;
  firstName?: string;
  gender?: "Male" | "Female" | "Other";
  lastName?: string;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
