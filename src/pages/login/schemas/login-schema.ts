import { requiredString } from "@helpers/form-schemas-validators";
import { z } from "zod";

export const loginSchema = z.object({
  username: requiredString("Username is required!"),
  password: requiredString("Password is required!"),
});
