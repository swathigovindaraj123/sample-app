import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  age?: IntNullableFilter;
  country?: StringFilter;
  firstName?: StringFilter;
  gender?: "Male" | "Female" | "Other";
  id?: StringFilter;
  lastName?: StringFilter;
  username?: StringFilter;
};
