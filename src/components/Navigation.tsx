"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBasket, BookOpen, Wallet, Calendar } from "lucide-react";

const navItems = [
  { href: "/ingredients", label: "재료 관리", icon: ShoppingBasket },
  { href: "/recipes", label: "레시피", icon: BookOpen },
  { href: "/budget", label: "가계부", icon: Wallet },
  { href: "/calendar", label: "식사 계획", icon: Calendar },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            WTE
          </Link>

          <div className="flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-md transition-colors
                    ${isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
