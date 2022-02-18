import { Order } from "../order/Order";

export type User = {
  age: number | null;
  createdAt: Date;
  firstName: string | null;
  gender?: "Male" | "Female" | "Other" | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
