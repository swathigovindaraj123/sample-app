import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  status: "Ordered" | "InTransit" | "OutForDelivery" | "Delivered";
  user: UserWhereUniqueInput;
};
