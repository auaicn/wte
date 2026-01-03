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

const sampleIngredients: Ingredient[] = [
  {
    id: "1",
    name: "양파",
    currentPrice: 2000,
    unit: "1kg",
    category: "채소",
    priceChange: -5.2,
    priceHistory: [
      { date: "12-20", price: 2300 },
      { date: "12-23", price: 2200 },
      { date: "12-26", price: 2100 },
      { date: "12-29", price: 2050 },
      { date: "01-01", price: 2000 },
      { date: "01-03", price: 2000 },
    ],
  },
  {
    id: "2",
    name: "당근",
    currentPrice: 3200,
    unit: "1kg",
    category: "채소",
    priceChange: 6.7,
    priceHistory: [
      { date: "12-20", price: 3000 },
      { date: "12-23", price: 3050 },
      { date: "12-26", price: 3100 },
      { date: "12-29", price: 3150 },
      { date: "01-01", price: 3200 },
      { date: "01-03", price: 3200 },
    ],
  },
  {
    id: "3",
    name: "계란",
    currentPrice: 5000,
    unit: "10개",
    category: "유제품",
    priceChange: 0,
    priceHistory: [
      { date: "12-20", price: 5000 },
      { date: "12-23", price: 5000 },
      { date: "12-26", price: 5000 },
      { date: "12-29", price: 5000 },
      { date: "01-01", price: 5000 },
      { date: "01-03", price: 5000 },
    ],
  },
  {
    id: "4",
    name: "대파",
    currentPrice: 4500,
    unit: "1단",
    category: "채소",
    priceChange: -10.0,
    priceHistory: [
      { date: "12-20", price: 5000 },
      { date: "12-23", price: 4900 },
      { date: "12-26", price: 4800 },
      { date: "12-29", price: 4600 },
      { date: "01-01", price: 4500 },
      { date: "01-03", price: 4500 },
    ],
  },
  {
    id: "5",
    name: "감자",
    currentPrice: 2800,
    unit: "1kg",
    category: "채소",
    priceChange: 3.7,
    priceHistory: [
      { date: "12-20", price: 2700 },
      { date: "12-23", price: 2720 },
      { date: "12-26", price: 2750 },
      { date: "12-29", price: 2780 },
      { date: "01-01", price: 2800 },
      { date: "01-03", price: 2800 },
    ],
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

              <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-[600px] overflow-y-auto">
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
