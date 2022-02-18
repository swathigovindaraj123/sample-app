import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  age?: IntNullableFilter;
  firstName?: StringNullableFilter;
  gender?: "Male" | "Female" | "Other";
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
