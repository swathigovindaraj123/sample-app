import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  status?: "Ordered" | "InTransit" | "OutForDelivery" | "Delivered" | null;
  updatedAt: Date;
  user?: User | null;
};
