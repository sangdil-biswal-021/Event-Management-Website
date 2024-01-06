"use client";

import React from "react";
import { Spinner,Progress } from "@nextui-org/react";

function Loading() {
  return (
    <div className="flex h-screen fixed justify-center items-center inset-0">
      <Spinner size="lg" />
      {/* <Progress aria-label="Loading..." value={10} className="max-w-md"/> */}
    </div>
  );
}

export default Loading;