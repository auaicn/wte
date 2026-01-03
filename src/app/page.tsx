import Link from "next/link";
import { ShoppingBasket, BookOpen, Wallet, Calendar } from "lucide-react";

const features = [
  {
    href: "/ingredients",
    icon: ShoppingBasket,
    title: "재료 관리",
    description: "재료별 가격 추적 및 재고 관리",
    color: "bg-green-500",
  },
  {
    href: "/recipes",
    icon: BookOpen,
    title: "레시피",
    description: "즐겨찾는 레시피 저장 및 관리",
    color: "bg-orange-500",
  },
  {
    href: "/budget",
    icon: Wallet,
    title: "가계부",
    description: "식비 지출 내역 및 통계 확인",
    color: "bg-blue-500",
  },
  {
    href: "/calendar",
    icon: Calendar,
    title: "식사 계획",
    description: "주간/월간 식사 스케줄링",
    color: "bg-purple-500",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            WTE
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.href}
                href={feature.href}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
              >
                <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
