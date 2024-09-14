import { z } from "zod";

const requiredString = (message: string) => {
  return z.string().min(1, {
    message,
  });
};

export const normalFormSchema = z.object({
  textInput: requiredString("This field is required!"),
  textInputWithDesc: requiredString("This field is required!"),
  selectInput: requiredString("This field is required!"),
});
