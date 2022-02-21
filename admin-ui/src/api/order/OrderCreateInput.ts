import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  status?: "Ordered" | "InTransit" | "OutForDelivery" | "Delivered" | null;
  user?: UserWhereUniqueInput | null;
};
