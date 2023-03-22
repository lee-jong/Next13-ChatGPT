import React from "react";

const client = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <div>Clien Component</div>
      <div>{children}</div>
    </>
  );
};

export default client;
