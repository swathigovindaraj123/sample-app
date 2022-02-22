export type UserUpdateInput = {
  age?: number | null;
  country?: string;
  firstName?: string;
  gender?: "Male" | "Female" | "Other";
  lastName?: string;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
