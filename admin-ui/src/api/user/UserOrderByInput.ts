import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  age?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
