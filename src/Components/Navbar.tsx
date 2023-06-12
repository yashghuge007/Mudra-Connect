import Link from "next/link";
import {
  type Dispatch,
  type SetStateAction,
  useState,
  type ReactNode,
} from "react";

interface MobileNavProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface NavLinkProps {
  to: string;
  children: ReactNode;
}

function NavLink({ to, children }: NavLinkProps) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }: MobileNavProps) {
  return (
    <div
      className={`absolute left-0 top-0 h-screen w-screen transform bg-white ${
        open ? "-translate-x-0" : "translate-x-full"
      } drop-shadow-md filter transition-transform duration-300 ease-in-out `}
    >
      <div className="flex h-20 items-center justify-center bg-white drop-shadow-md filter">
        {" "}
        {/*logo container*/}
        <Link className="text-xl font-semibold" href="/">
          Mudra Connect
        </Link>
      </div>
      <div className="ml-4 flex flex-col">
        <a
          className="my-4 text-xl font-medium"
          href="/animation"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Translate
        </a>
        <a
          className="my-4 text-xl font-medium"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </a>
        <a
          className="my-4 text-xl font-medium"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed mx-auto flex h-20 w-screen max-w-7xl items-center bg-white px-4 py-4 drop-shadow-md filter">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex w-3/12 items-center">
        <Link className="text-2xl font-semibold" href="/">
          Mudra Connect
        </Link>
      </div>
      <div className="flex w-9/12 items-center justify-end">
        <div
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-between md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full transform rounded-lg bg-black transition duration-300 ease-in-out ${
              open ? "translate-y-3.5 rotate-45" : ""
            }`}
          />
          <span
            className={`h-1 w-full rounded-lg bg-black transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full transform rounded-lg bg-black transition duration-300 ease-in-out ${
              open ? "-translate-y-3.5 -rotate-45" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <NavLink to="/animation">
            <span className="font-semibold">Translate</span>
          </NavLink>
          <NavLink to="/contact">
            <span className="font-semibold">Contact</span>
          </NavLink>
          <NavLink to="/about">
            <span className="font-semibold">About</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
