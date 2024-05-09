"use client";

import Link from "next/link";
import { CiBookmarkCheck } from "react-icons/ci";
import { usePathname } from "next/navigation";

interface Props {
  icon: React.ReactNode;
  title: string;
  path: string;
}

const SidebarItem = ({ path, title, icon }: Props) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={path}
        className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl hover:bg-gradient-r hover:bg-sky-600 hover:text-white transition-all  ${
          pathname === path && "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
        }`}
      >
        {icon}
        <span className={`-mr-1 font-medium`}>{title}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
