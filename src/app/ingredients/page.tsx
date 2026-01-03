"use client";

import { useState } from "react";
import { Search, TrendingUp, TrendingDown } from "lucide-react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

interface PriceHistory {
  date: string;
  price: number;
}

interface Ingredient {
  id: string;
  name: string;
  currentPrice: number;
  unit: string;
  category: string;
  priceChange: number;
  priceHistory: PriceHistory[];
}

// 헬퍼 함수: 1달 가격 히스토리 생성
function generatePriceHistory(
  startPrice: number,
  endPrice: number
): PriceHistory[] {
  const history: PriceHistory[] = [];
  const days = 30;
  const priceChange = (endPrice - startPrice) / days;

  for (let i = 0; i <= days; i += 3) {
    const date = new Date();
    date.setDate(date.getDate() - (30 - i));
    const dateStr = `${date.getMonth() + 1}/${date.getDate()}`;
    const price = Math.round(startPrice + priceChange * i + (Math.random() - 0.5) * 200);
    history.push({ date: dateStr, price });
  }

  return history;
}

const sampleIngredients: Ingredient[] = [
  {
    id: "1",
    name: "양파",
    currentPrice: 2000,
    unit: "1kg",
    category: "채소",
    priceChange: -5.2,
    priceHistory: generatePriceHistory(2300, 2000),
  },
  {
    id: "2",
    name: "당근",
    currentPrice: 3200,
    unit: "1kg",
    category: "채소",
    priceChange: 6.7,
    priceHistory: generatePriceHistory(3000, 3200),
  },
  {
    id: "3",
    name: "대파",
    currentPrice: 4500,
    unit: "1단",
    category: "채소",
    priceChange: -10.0,
    priceHistory: generatePriceHistory(5000, 4500),
  },
  {
    id: "4",
    name: "감자",
    currentPrice: 2800,
    unit: "1kg",
    category: "채소",
    priceChange: 3.7,
    priceHistory: generatePriceHistory(2700, 2800),
  },
  {
    id: "5",
    name: "호박",
    currentPrice: 3500,
    unit: "1개",
    category: "채소",
    priceChange: 2.9,
    priceHistory: generatePriceHistory(3400, 3500),
  },
  {
    id: "6",
    name: "시금치",
    currentPrice: 2500,
    unit: "1단",
    category: "채소",
    priceChange: -3.8,
    priceHistory: generatePriceHistory(2600, 2500),
  },
  {
    id: "7",
    name: "콩나물",
    currentPrice: 1500,
    unit: "1봉",
    category: "채소",
    priceChange: 0,
    priceHistory: generatePriceHistory(1500, 1500),
  },
  {
    id: "8",
    name: "청양고추",
    currentPrice: 3000,
    unit: "100g",
    category: "채소",
    priceChange: 15.4,
    priceHistory: generatePriceHistory(2600, 3000),
  },
  {
    id: "9",
    name: "상추",
    currentPrice: 2200,
    unit: "1단",
    category: "채소",
    priceChange: -8.3,
    priceHistory: generatePriceHistory(2400, 2200),
  },
  {
    id: "10",
    name: "깻잎",
    currentPrice: 3000,
    unit: "20장",
    category: "채소",
    priceChange: 0,
    priceHistory: generatePriceHistory(3000, 3000),
  },
  {
    id: "11",
    name: "계란",
    currentPrice: 5000,
    unit: "10개",
    category: "유제품",
    priceChange: 0,
    priceHistory: generatePriceHistory(5000, 5000),
  },
  {
    id: "12",
    name: "두부",
    currentPrice: 2000,
    unit: "1모",
    category: "유제품",
    priceChange: -2.4,
    priceHistory: generatePriceHistory(2050, 2000),
  },
  {
    id: "13",
    name: "순두부",
    currentPrice: 2500,
    unit: "1팩",
    category: "유제품",
    priceChange: 4.2,
    priceHistory: generatePriceHistory(2400, 2500),
  },
  {
    id: "14",
    name: "소고기",
    currentPrice: 15000,
    unit: "500g",
    category: "육류",
    priceChange: 8.7,
    priceHistory: generatePriceHistory(13800, 15000),
  },
  {
    id: "15",
    name: "돼지고기",
    currentPrice: 8000,
    unit: "500g",
    category: "육류",
    priceChange: 3.9,
    priceHistory: generatePriceHistory(7700, 8000),
  },
  {
    id: "16",
    name: "삼겹살",
    currentPrice: 12000,
    unit: "500g",
    category: "육류",
    priceChange: 9.1,
    priceHistory: generatePriceHistory(11000, 12000),
  },
  {
    id: "17",
    name: "닭고기",
    currentPrice: 6000,
    unit: "500g",
    category: "육류",
    priceChange: 0,
    priceHistory: generatePriceHistory(6000, 6000),
  },
  {
    id: "18",
    name: "갈비",
    currentPrice: 18000,
    unit: "500g",
    category: "육류",
    priceChange: 5.9,
    priceHistory: generatePriceHistory(17000, 18000),
  },
  {
    id: "19",
    name: "김치",
    currentPrice: 8000,
    unit: "1kg",
    category: "반찬",
    priceChange: 0,
    priceHistory: generatePriceHistory(8000, 8000),
  },
  {
    id: "20",
    name: "김",
    currentPrice: 3000,
    unit: "10장",
    category: "반찬",
    priceChange: -5.0,
    priceHistory: generatePriceHistory(3150, 3000),
  },
  {
    id: "21",
    name: "간장",
    currentPrice: 5000,
    unit: "500ml",
    category: "조미료",
    priceChange: 0,
    priceHistory: generatePriceHistory(5000, 5000),
  },
  {
    id: "22",
    name: "고추장",
    currentPrice: 6000,
    unit: "500g",
    category: "조미료",
    priceChange: 2.0,
    priceHistory: generatePriceHistory(5900, 6000),
  },
  {
    id: "23",
    name: "된장",
    currentPrice: 5500,
    unit: "500g",
    category: "조미료",
    priceChange: 1.9,
    priceHistory: generatePriceHistory(5400, 5500),
  },
  {
    id: "24",
    name: "고춧가루",
    currentPrice: 8000,
    unit: "500g",
    category: "조미료",
    priceChange: 14.3,
    priceHistory: generatePriceHistory(7000, 8000),
  },
  {
    id: "25",
    name: "참기름",
    currentPrice: 7000,
    unit: "250ml",
    category: "조미료",
    priceChange: 0,
    priceHistory: generatePriceHistory(7000, 7000),
  },
  {
    id: "26",
    name: "설탕",
    currentPrice: 3000,
    unit: "1kg",
    category: "조미료",
    priceChange: 0,
    priceHistory: generatePriceHistory(3000, 3000),
  },
  {
    id: "27",
    name: "마늘",
    currentPrice: 4000,
    unit: "500g",
    category: "조미료",
    priceChange: 11.1,
    priceHistory: generatePriceHistory(3600, 4000),
  },
  {
    id: "28",
    name: "생강",
    currentPrice: 5000,
    unit: "500g",
    category: "조미료",
    priceChange: -6.5,
    priceHistory: generatePriceHistory(5350, 5000),
  },
  {
    id: "29",
    name: "쌈장",
    currentPrice: 4000,
    unit: "500g",
    category: "조미료",
    priceChange: 0,
    priceHistory: generatePriceHistory(4000, 4000),
  },
  {
    id: "30",
    name: "새우젓",
    currentPrice: 5000,
    unit: "300g",
    category: "조미료",
    priceChange: 0,
    priceHistory: generatePriceHistory(5000, 5000),
  },
  {
    id: "31",
    name: "국간장",
    currentPrice: 4500,
    unit: "500ml",
    category: "조미료",
    priceChange: 0,
    priceHistory: generatePriceHistory(4500, 4500),
  },
  {
    id: "32",
    name: "밥",
    currentPrice: 10000,
    unit: "5kg",
    category: "곡물",
    priceChange: 0,
    priceHistory: generatePriceHistory(10000, 10000),
  },
  {
    id: "33",
    name: "당면",
    currentPrice: 3000,
    unit: "500g",
    category: "곡물",
    priceChange: 0,
    priceHistory: generatePriceHistory(3000, 3000),
  },
  {
    id: "34",
    name: "떡",
    currentPrice: 5000,
    unit: "500g",
    category: "곡물",
    priceChange: 4.2,
    priceHistory: generatePriceHistory(4800, 5000),
  },
  {
    id: "35",
    name: "표고버섯",
    currentPrice: 4000,
    unit: "200g",
    category: "채소",
    priceChange: 0,
    priceHistory: generatePriceHistory(4000, 4000),
  },
  {
    id: "36",
    name: "고사리",
    currentPrice: 6000,
    unit: "200g",
    category: "채소",
    priceChange: 9.1,
    priceHistory: generatePriceHistory(5500, 6000),
  },
  {
    id: "37",
    name: "어묵",
    currentPrice: 3500,
    unit: "300g",
    category: "가공식품",
    priceChange: 0,
    priceHistory: generatePriceHistory(3500, 3500),
  },
  {
    id: "38",
    name: "조개",
    currentPrice: 7000,
    unit: "300g",
    category: "해산물",
    priceChange: -4.1,
    priceHistory: generatePriceHistory(7300, 7000),
  },
  {
    id: "39",
    name: "미역",
    currentPrice: 5000,
    unit: "100g",
    category: "해산물",
    priceChange: 0,
    priceHistory: generatePriceHistory(5000, 5000),
  },
  {
    id: "40",
    name: "멸치",
    currentPrice: 8000,
    unit: "200g",
    category: "해산물",
    priceChange: 0,
    priceHistory: generatePriceHistory(8000, 8000),
  },
  {
    id: "41",
    name: "대추",
    currentPrice: 6000,
    unit: "200g",
    category: "과일",
    priceChange: 0,
    priceHistory: generatePriceHistory(6000, 6000),
  },
  {
    id: "42",
    name: "밤",
    currentPrice: 8000,
    unit: "500g",
    category: "과일",
    priceChange: -5.9,
    priceHistory: generatePriceHistory(8500, 8000),
  },
];

export default function IngredientsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient>(
    sampleIngredients[0]
  );

  const filteredIngredients = sampleIngredients.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          재료 관리
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 좌측: 재료 리스트 */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="재료 검색..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-[700px] overflow-y-auto">
                {filteredIngredients.map((ingredient) => (
                  <div
                    key={ingredient.id}
                    onClick={() => setSelectedIngredient(ingredient)}
                    className={`p-4 cursor-pointer transition-colors ${
                      selectedIngredient.id === ingredient.id
                        ? "bg-blue-50 dark:bg-blue-900/20"
                        : "hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {ingredient.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {ingredient.unit}
                        </p>
                      </div>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
                        {ingredient.category}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-bold text-gray-900 dark:text-white">
                        {ingredient.currentPrice.toLocaleString()}원
                      </p>
                      <div
                        className={`flex items-center space-x-1 text-sm ${
                          ingredient.priceChange > 0
                            ? "text-red-600 dark:text-red-400"
                            : ingredient.priceChange < 0
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {ingredient.priceChange > 0 ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : ingredient.priceChange < 0 ? (
                          <TrendingDown className="w-4 h-4" />
                        ) : null}
                        <span>
                          {ingredient.priceChange > 0 ? "+" : ""}
                          {ingredient.priceChange}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 우측: 가격 추이 차트 */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedIngredient.name}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {selectedIngredient.unit} · {selectedIngredient.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">
                      {selectedIngredient.currentPrice.toLocaleString()}원
                    </p>
                    <div
                      className={`flex items-center justify-end space-x-1 mt-1 ${
                        selectedIngredient.priceChange > 0
                          ? "text-red-600 dark:text-red-400"
                          : selectedIngredient.priceChange < 0
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {selectedIngredient.priceChange > 0 ? (
                        <TrendingUp className="w-5 h-5" />
                      ) : selectedIngredient.priceChange < 0 ? (
                        <TrendingDown className="w-5 h-5" />
                      ) : null}
                      <span className="text-lg font-semibold">
                        {selectedIngredient.priceChange > 0 ? "+" : ""}
                        {selectedIngredient.priceChange}%
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  최근 30일 가격 추이
                </p>
              </div>

              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={selectedIngredient.priceHistory}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor={
                            selectedIngredient.priceChange >= 0
                              ? "#ef4444"
                              : "#3b82f6"
                          }
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor={
                            selectedIngredient.priceChange >= 0
                              ? "#ef4444"
                              : "#3b82f6"
                          }
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis
                      dataKey="date"
                      stroke="#9ca3af"
                      style={{ fontSize: "12px" }}
                    />
                    <YAxis
                      stroke="#9ca3af"
                      style={{ fontSize: "12px" }}
                      tickFormatter={(value) => `${value.toLocaleString()}`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1f2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                        color: "#fff",
                      }}
                      formatter={(value: number | undefined) => [
                        `${(value || 0).toLocaleString()}원`,
                        "가격",
                      ]}
                    />
                    <Area
                      type="monotone"
                      dataKey="price"
                      stroke={
                        selectedIngredient.priceChange >= 0
                          ? "#ef4444"
                          : "#3b82f6"
                      }
                      strokeWidth={2}
                      fill="url(#colorPrice)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    최고가
                  </p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    {Math.max(
                      ...selectedIngredient.priceHistory.map((h) => h.price)
                    ).toLocaleString()}
                    원
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    최저가
                  </p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    {Math.min(
                      ...selectedIngredient.priceHistory.map((h) => h.price)
                    ).toLocaleString()}
                    원
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    평균가
                  </p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    {Math.round(
                      selectedIngredient.priceHistory.reduce(
                        (sum, h) => sum + h.price,
                        0
                      ) / selectedIngredient.priceHistory.length
                    ).toLocaleString()}
                    원
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
