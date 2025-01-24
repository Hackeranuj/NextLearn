import React, { useEffect } from "react";
import {
  School,
  LogOut,
  LayoutDashboard,
  UserRoundPen,
  BookText,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DarkMode from "@/DarkMode";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "@/features/api/authApi";
import { toast } from "sonner";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await logoutUser();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message || "User log out.");
      navigate("/login");
    }
  }, [isSuccess]);

  return (
    <div className="h-16 dark:bg-[#020817] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
      {/* Desktop */}
      <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center h-full">
        <div className="flex items-center gap-2 m-4">
          <School size={"30"} />
          <h1 className="hidden md:block font-extrabold text-2xl">
            <Link to={"/"}>NextLearn</Link>
          </h1>
        </div>
        {/* User Icon and dark Mode Icon */}
        <div className="flex items-center gap-8 m-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                    className="object-cover"
                    src={user?.photoUrl || "https://github.com/shadcn.png"}
                    alt="@shadcn"
                  />
                  <AvatarFallback>{user.name}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BookText />
                    <span>
                      <Link to="my-learning">My Learning</Link>
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <UserRoundPen />
                    <span>
                      <Link to={"profile"}>Edit Profile</Link>
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={logoutHandler}
                  className="flex items-center justify-between"
                >
                  <span>Log out</span>
                  <LogOut />
                </DropdownMenuItem>

                {user?.role === "instructor" && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LayoutDashboard />
                      <span>
                        <Link to="admin/dashboard">Dashboard</Link>
                      </span>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button onClick={() => navigate("/signup")}>SignUp</Button>
            </div>
          )}
          <DarkMode />
        </div>
      </div>
      {/* Mobile device */}
      <div className="flex md:hidden items-center justify-between px-4 h-full">
        <div className="flex items-center gap-2">
          <School size={"30"} />
          <h1 className="font-extrabold text-2xl">
            <Link to={"/"}>NextLearn</Link>
          </h1>
        </div>

        <MobileNavbar user={user} logoutHandler={logoutHandler} />
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = ({ user, logoutHandler }) => {
  const navigate = useNavigate();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="rounded-full hover:bg-[#121622]"
          variant="outline"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle className="flex items-center gap-2">
            <School />
            <Link to="/">NextLearn</Link>
          </SheetTitle>
          <DarkMode />
        </SheetHeader>
        <Separator className="mr-2" />
        <nav className="flex flex-col space-y-4">
          {user ? (
            <>
              <div className="flex flex-row gap-2">
                <BookText />
                <span>
                  <Link to="my-learning">My Learning</Link>
                </span>
              </div>
              <div className="flex flex-row gap-2">
                <UserRoundPen />
                <span>
                  <Link to={"profile"}>Edit Profile</Link>
                </span>
              </div>
              <Button type="submit" onClick={logoutHandler}>
                <div className="flex flex-row items-center justify-between gap-2">
                  <span>Log out</span>
                  <LogOut />
                </div>
              </Button>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-4">
                <Button variant="outline" onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button onClick={() => navigate("/signup")}>SignUp</Button>
              </div>
            </>
          )}
        </nav>
        {user?.role === "instructor" && (
          <SheetFooter>
            <SheetClose asChild>
              <Button
                type="submit"
                onClick={() => navigate("/admin/dashboard")}
              >
                <div className="flex flex-row gap-2 items-center">
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </div>
              </Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
