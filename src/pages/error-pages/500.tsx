import { Error } from "./components/Error";

export function Error500() {
  return (
    <Error
      code={500}
      description="Something went wrong on our end. Please try refreshing the page or come back later."
    />
  );
}
