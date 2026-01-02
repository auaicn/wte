"use client";

import { useState } from "react";
import { Plus, Search, Trash2, Edit2 } from "lucide-react";

interface Ingredient {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: string;
  lastUpdated: string;
}

export default function IngredientsPage() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    {
      id: "1",
      name: "양파",
      price: 2000,
      unit: "1kg",
      category: "채소",
      lastUpdated: "2024-01-03",
    },
    {
      id: "2",
      name: "당근",
      price: 3000,
      unit: "1kg",
      category: "채소",
      lastUpdated: "2024-01-03",
    },
    {
      id: "3",
      name: "계란",
      price: 5000,
      unit: "10개",
      category: "유제품",
      lastUpdated: "2024-01-02",
    },
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIngredients = ingredients.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            재료 관리
          </h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Plus className="w-5 h-5" />
            <span>재료 추가</span>
          </button>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="재료 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  재료명
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  카테고리
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  가격
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  단위
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  최종 업데이트
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white">
                  작업
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredIngredients.map((ingredient) => (
                <tr
                  key={ingredient.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-900 dark:text-white">
                    {ingredient.name}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
                      {ingredient.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-white">
                    {ingredient.price.toLocaleString()}원
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    {ingredient.unit}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    {ingredient.lastUpdated}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredIngredients.length === 0 && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            검색 결과가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}
