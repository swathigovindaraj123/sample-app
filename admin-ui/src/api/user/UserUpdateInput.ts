export type UserUpdateInput = {
  age?: number | null;
  firstName?: string | null;
  gender?: "Male" | "Female" | "Other" | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
