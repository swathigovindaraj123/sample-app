import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  status?: "Ordered" | "InTransit" | "OutForDelivery" | "Delivered";
  user?: UserWhereUniqueInput;
};
