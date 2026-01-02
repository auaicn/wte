"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

interface MealPlan {
  date: string;
  breakfast?: string;
  lunch?: string;
  dinner?: string;
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [mealPlans, setMealPlans] = useState<MealPlan[]>([
    {
      date: "2024-01-03",
      breakfast: "토스트",
      lunch: "김치찌개",
      dinner: "된장찌개",
    },
    {
      date: "2024-01-04",
      lunch: "비빔밥",
      dinner: "삼겹살",
    },
  ]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  const days = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const getMealPlan = (day: number): MealPlan | undefined => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return mealPlans.find((plan) => plan.date === dateStr);
  };

  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            식사 계획
          </h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Plus className="w-5 h-5" />
            <span>식사 추가</span>
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={previousMonth}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {year}년 {month + 1}월
            </h2>

            <button
              onClick={nextMonth}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {weekdays.map((day) => (
              <div
                key={day}
                className="text-center font-semibold text-gray-700 dark:text-gray-300 py-2"
              >
                {day}
              </div>
            ))}

            {days.map((day, index) => {
              if (day === null) {
                return <div key={`empty-${index}`} className="aspect-square" />;
              }

              const mealPlan = getMealPlan(day);
              const isToday =
                day === new Date().getDate() &&
                month === new Date().getMonth() &&
                year === new Date().getFullYear();

              return (
                <div
                  key={day}
                  className={`
                    border border-gray-200 dark:border-gray-700 rounded-lg p-2 min-h-24
                    hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors
                    ${isToday ? "ring-2 ring-blue-500" : ""}
                  `}
                >
                  <div
                    className={`
                    text-sm font-semibold mb-1
                    ${isToday ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white"}
                  `}
                  >
                    {day}
                  </div>

                  {mealPlan && (
                    <div className="space-y-1">
                      {mealPlan.breakfast && (
                        <div className="text-xs px-1 py-0.5 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded">
                          아침: {mealPlan.breakfast}
                        </div>
                      )}
                      {mealPlan.lunch && (
                        <div className="text-xs px-1 py-0.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
                          점심: {mealPlan.lunch}
                        </div>
                      )}
                      {mealPlan.dinner && (
                        <div className="text-xs px-1 py-0.5 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">
                          저녁: {mealPlan.dinner}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            색상 안내
          </h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-100 dark:bg-yellow-900 rounded"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                아침
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-100 dark:bg-green-900 rounded"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                점심
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-100 dark:bg-purple-900 rounded"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                저녁
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
