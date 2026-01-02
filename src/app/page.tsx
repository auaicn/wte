export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            음식 가계부 & 레시피 관리
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            재료 가격 관리, 레시피, 가계부 및 식사 계획을 한 곳에서
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* 재료 관리 카드 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-4">🥬</div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              재료 관리
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              재료별 가격 추적 및 재고 관리
            </p>
          </div>

          {/* 레시피 카드 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-4">📖</div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              레시피
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              즐겨찾는 레시피 저장 및 관리
            </p>
          </div>

          {/* 가계부 카드 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-4">💰</div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              가계부
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              식비 지출 내역 및 통계 확인
            </p>
          </div>

          {/* 캘린더 카드 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-4">📅</div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              식사 계획
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              주간/월간 식사 스케줄링
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            각 카드를 클릭하여 기능을 사용하세요 (곧 추가될 예정)
          </p>
        </div>
      </div>
    </div>
  );
}
