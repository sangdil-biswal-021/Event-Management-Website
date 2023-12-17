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
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

function LayoutProvider({ children }: { children: React.ReactNode }) {
  const menusForAdmin = [
    { title: "Home", path: "/" },
    { title: "Events", path: "/admin/events" },
    { title: "Bookings", path: "/admin/bookings" },
    { title: "Users", path: "/admin/users" },
    { title: "Reports", path: "/admin/reports" },
  ];
  const menusForUser = [
    { title: "Home", path: "/" },
    { title: "Bookings", path: "/user/bookings" },
  ];
  const getUserData = async () => {
    try {
      const response = await axios.get("/api/current-user"); //In Next.js, the "pages/api" directory is a special directory where you can create server-side API endpoints. When you create a file inside the "pages/api" directory, it automatically becomes an API route that can handle HTTP requests.
      if (response.data.user.isAdmin) {
        setMenusToShow(menusForAdmin);
      } else {
        setMenusToShow(menusForUser);
      }
    } catch (error: any) {
      // console.log("error:", error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (isPrivateRoute) {
      getUserData();
    }
  }, []);

  const pathname = usePathname();
  const [menusToShow, setMenusToShow] = useState<any[]>([]);
  const isPrivateRoute = !["/sign-in", "/sign-up"].includes(pathname);
  const router = useRouter();
  return (
    <div className="bg-gray-200 h-screen lg:px-20 px-5">
      {isPrivateRoute && (
        <div className="bg-white flex justify-between items-center shadow px-3 py-5">
          <h1 className="font-semibold text-2xl cursor-pointer text-blue-900" onClick={() => router.push("/")}>FF EVENTS</h1>
          <div className="flex gap-5 items-center">
            <Dropdown size="sm">
              <DropdownTrigger>
                <Button variant="flat" color="primary" size="sm">Profile</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                {menusToShow.map((menu) => (
                  <DropdownItem
                    key={menu.title}
                    onClick={() => {
                      router.push(menu.path);
                    }}
                  >
                    {menu.title}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      )}
      <div className="py-3">{children}</div>
    </div>
  );
}

export default LayoutProvider;
