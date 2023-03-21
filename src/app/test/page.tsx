"use client";
import React, { useEffect } from "react";

const test = () => {
  useEffect(() => {
    console.log("#");
  }, []);

  return (
    <>
      <div>
        <h1>Hello Bell</h1>
      </div>
    </>
  );
};

export default test;
