import {
  requiredCheckGroup,
  requiredString,
  requiredTrueValue,
} from "@helpers/form-schemas-validators";
import { z } from "zod";

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
