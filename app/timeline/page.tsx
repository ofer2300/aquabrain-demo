import Link from 'next/link';
import TimelineWidget from '@/components/TimelineWidget/TimelineWidget';

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🚀 ניהול ציר זמן לפרויקט
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            ארגן את המשימות והאבני דרך של הפרויקט שלך בצורה חזותית ויעילה
          </p>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mb-8">
            <Link
              href="/"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              🏠 עמוד הבית
            </Link>
            <Link
              href="/demo"
              className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              🎮 דמו
            </Link>
          </div>
        </div>

        {/* Widget */}
        <TimelineWidget />

        {/* Features section */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            ✨ תכונות Widget
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl">➕</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  הוספת פריטים
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  הוסף משימות ואבני דרך חדשות עם כותרת, תיאור, תאריך וסטטוס
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✏️</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  עריכת פריטים
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  ערוך פרטים של כל פריט בקלות וגמישות מלאה
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">🗑️</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  מחיקת פריטים
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  הסר פריטים שאינם רלוונטיים עוד בלחיצה אחת
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">🎯</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  ניהול סטטוסים
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  עקוב אחר התקדמות עם סטטוסים: ממתין, בתהליך, הושלם, בוטל
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">🔍</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  סינון וחיפוש
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  סנן פריטים לפי סטטוס כדי להתמקד במה שחשוב
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">💾</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  שמירה מקומית
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  כל הנתונים נשמרים באופן אוטומטי ב-LocalStorage
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">🎨</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  עיצוב מודרני
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  ממשק משתמש יפה ואינטואיטיבי עם תמיכה ב-Dark Mode
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">📱</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  רספונסיבי
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  עובד מצוין על מסכים בכל הגדלים - מובייל עד דסקטופ
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack */}
        <div className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4">
            🛠️ טכנולוגיות
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-lg text-white font-medium">
              Next.js 14
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-lg text-white font-medium">
              React 18
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-lg text-white font-medium">
              TypeScript
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-lg text-white font-medium">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-lg text-white font-medium">
              LocalStorage API
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-lg text-white font-medium">
              RTL Support
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
