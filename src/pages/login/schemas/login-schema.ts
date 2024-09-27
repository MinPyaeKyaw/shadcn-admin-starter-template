import { requiredString } from "@helpers/form-schemas-validators";
import { z } from "zod";

export const loginSchema = z.object({
  username: requiredString("This field is required!"),
  password: requiredString("This field is required!"),
});
