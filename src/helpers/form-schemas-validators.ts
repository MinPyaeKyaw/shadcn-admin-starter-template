import { z } from "zod";

export const requiredString = (message: string) => {
  return z.string().min(1, {
    message,
  });
};

export const requiredNumber = (message: string) => {
  return z.number().gte(1, { message });
};

export const requiredCheckGroup = (message: string) => {
  return z.array(z.string()).refine((value) => value.some((item) => item), {
    message,
  });
};

export const requiredTrueValue = (message: string) => {
  return z.literal(true).refine((value) => value === true, {
    message,
  });
};
