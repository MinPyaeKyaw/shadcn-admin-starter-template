import { z } from "zod";

const requiredString = (message: string) => {
  return z.string().min(1, {
    message,
  });
};

// const requiredNumber = (message: string) => {
//   return z.number().gte(1, { message });
// };

const requiredCheckGroup = (message: string) => {
  return z.array(z.string()).refine((value) => value.some((item) => item), {
    message,
  });
};

const requiredTrueValue = (message: string) => {
  return z.literal(true).refine((value) => value === true, {
    message,
  });
};

export const normalFormSchema = z.object({
  textInput: requiredString("This field is required!"),
  textInputWithDesc: requiredString("This field is required!"),
  selectInput: requiredString("This field is required!"),
  radioInput: requiredString("This field is required!"),
  checkgroupInput: requiredCheckGroup("This field is required!"),
  checkboxInput: requiredTrueValue("Need to be checked"),
  passwordInput: requiredString("This field is required!"),
  dateInput: requiredString("This field is required!"),
});
