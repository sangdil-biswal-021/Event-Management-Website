"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

function LayoutProvider({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-200 h-screen lg:px-20 px-5">
      <div className="bg-white flex justify-between items-center shadow p-3">
        <h1 className="text-gray-600 font-semibold text-2xl">FF EVENTS</h1>
        <div className="flex gap-5 items-center">
          <Dropdown size="sm">
            <DropdownTrigger>
              <Button variant="bordered">Profile</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

export default LayoutProvider;
