import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  status?: "Ordered" | "InTransit" | "OutForDelivery" | "Delivered" | null;
  user?: UserWhereUniqueInput | null;
};
