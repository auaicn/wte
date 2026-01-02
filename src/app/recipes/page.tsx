"use client";

import { useState } from "react";
import { Plus, Search, Clock, Users } from "lucide-react";

interface Recipe {
  id: string;
  name: string;
  description: string;
  servings: number;
  cookingTime: number;
  estimatedCost: number;
  ingredients: string[];
}

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([
    {
      id: "1",
      name: "김치찌개",
      description: "매콤하고 시원한 김치찌개",
      servings: 4,
      cookingTime: 30,
      estimatedCost: 8000,
      ingredients: ["김치", "돼지고기", "두부", "양파", "대파"],
    },
    {
      id: "2",
      name: "된장찌개",
      description: "구수한 된장찌개",
      servings: 4,
      cookingTime: 25,
      estimatedCost: 6000,
      ingredients: ["된장", "두부", "감자", "양파", "호박"],
    },
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            레시피
          </h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Plus className="w-5 h-5" />
            <span>레시피 추가</span>
          </button>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="레시피 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {recipe.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {recipe.description}
              </p>

              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{recipe.cookingTime}분</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{recipe.servings}인분</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  재료:
                </p>
                <div className="flex flex-wrap gap-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  예상 비용: {recipe.estimatedCost.toLocaleString()}원
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            검색 결과가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}
