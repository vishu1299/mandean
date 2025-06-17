import Image from "next/image";
import Link from "next/link";
import { IoSettings } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="w-full h-16 border-b border-black/10">
      <div className="h-full flex items-center justify-between px-10">
        <Link href="/student/home" className="flex items-center pl-3">
          <Image
            src="/xcrino.png"
            alt="Logo"
            width={100}
            height={40}
            className="object-contain mt-3"
          />
        </Link>

        <div className="flex items-center gap-4 h-full">
          <Link href="/student/profile">
            <div className="relative w-10 h-10">
              <Image
                src="/profile.png"
                alt="userImage"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <Link href="/student/settings">
            <IoSettings className="h-6 w-6 text-blue-500" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
