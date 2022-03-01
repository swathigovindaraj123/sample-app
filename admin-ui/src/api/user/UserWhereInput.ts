import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type UserWhereInput = {
  age?: IntNullableFilter;
  country?: StringFilter;
  firstName?: StringFilter;
  gender?: "Male" | "Female" | "Other";
  id?: StringFilter;
  lastName?: StringFilter;
  orders?: OrderListRelationFilter;
  username?: StringFilter;
};
