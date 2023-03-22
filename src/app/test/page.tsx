import ClientComponent from "./test.client";
import ServerComponent from "./test.server";
const test = () => {
  return (
    <ClientComponent>
      <ServerComponent />
    </ClientComponent>
  );
};

export default test;
