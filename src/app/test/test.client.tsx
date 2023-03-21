import React from "react";

const client = ({ children }: { children: React.ReactElement }) => {
  console.log("client 확인");
  return (
    <>
      <div>아직 기준이 애매하네</div>
      <div>{children}</div>
    </>
  );
};

export default client;
