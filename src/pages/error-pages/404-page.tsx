import { Error } from "./components/Error";

export function Error404() {
  return (
    <Error
      code={404}
      description="The page you are looking for doesn't exist. Please return to the homepage."
    />
  );
}
