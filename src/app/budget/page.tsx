"use client";

import { useState } from "react";
import { Plus, Calendar, TrendingUp, TrendingDown } from "lucide-react";

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
}

export default function BudgetPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "1",
      date: "2024-01-03",
      description: "마트 장보기",
      amount: 45000,
      category: "식재료",
    },
    {
      id: "2",
      date: "2024-01-02",
      description: "외식 - 저녁",
      amount: 28000,
      category: "외식",
    },
    {
      id: "3",
      date: "2024-01-01",
      description: "편의점",
      amount: 8500,
      category: "간식",
    },
  ]);

  const totalSpent = transactions.reduce((sum, t) => sum + t.amount, 0);
  const avgDaily = totalSpent / 7;
  const monthlyBudget = 300000;
  const remaining = monthlyBudget - totalSpent;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            가계부
          </h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Plus className="w-5 h-5" />
            <span>지출 추가</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                총 지출
              </h3>
              <TrendingUp className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {totalSpent.toLocaleString()}원
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                남은 예산
              </h3>
              <TrendingDown className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {remaining.toLocaleString()}원
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                일평균 지출
              </h3>
              <Calendar className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {Math.round(avgDaily).toLocaleString()}원
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              최근 거래 내역
            </h2>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">
                      {transaction.description}
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {transaction.date}
                      </span>
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-xs">
                        {transaction.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-red-600 dark:text-red-400">
                      -{transaction.amount.toLocaleString()}원
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
