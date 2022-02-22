import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  status?: "Ordered" | "InTransit" | "OutForDelivery" | "Delivered";
  user?: UserWhereUniqueInput;
};
