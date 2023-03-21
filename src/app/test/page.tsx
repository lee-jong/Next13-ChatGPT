import ClientComponent from "./client";
import ServerComponent from "./test.server";
const test = () => {
  return (
    <ClientComponent>
      {/* @ts-expect-error Async Server Component */}
      <ServerComponent />
    </ClientComponent>
  );
};

export default test;
