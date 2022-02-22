import { Order } from "../order/Order";

export type User = {
  age: number | null;
  country: string;
  createdAt: Date;
  firstName: string;
  gender?: "Male" | "Female" | "Other";
  id: string;
  lastName: string;
  orders?: Array<Order>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
