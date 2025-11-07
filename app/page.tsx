import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl text-center space-y-8">
        <div className="space-y-4">
          <div className="text-6xl font-bold">AquaBrain</div>
          <div className="text-xl text-gray-600 dark:text-gray-400">
            פלטפורמת דמו מתקדמת
          </div>
        </div>
        
        <div className="space-y-6">
          <p className="text-lg">
            ברוכים הבאים ל-AquaBrain - פלטפורמה המציגה את היכולות של Next.js 14 עם TypeScript,
            תמיכה מלאה בעברית ו-RTL, Tailwind CSS ומבנה אפליקציה מודרני.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/construction"
              className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-700 hover:to-red-700 transition-colors shadow-lg"
            >
              🏗️ גאנט בנייה
            </Link>
            <Link
              href="/timeline"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors shadow-lg"
            >
              🚀 ציר זמן כללי
            </Link>
            <Link
              href="/demo"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              מעבר לדמו
            </Link>
            <a
              href="https://github.com/ofer2300/aquabrain-demo"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              צפייה ב-GitHub
            </a>
          </div>
        </div>
        
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
            <h3 className="font-bold mb-2">🏗️ גאנט תכנון ורישוי</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              תהליך מלא של רישוי בנייה - 8 שלבים ו-40+ משימות
            </p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="font-bold mb-2">🚀 ציר זמן לפרויקט</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              ניהול משימות ואבני דרך עם ממשק אינטראקטיבי
            </p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="font-bold mb-2">Next.js 14</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              גרסה עדכנית עם App Router ותמיכה ב-TypeScript
            </p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="font-bold mb-2">תמיכה מלאה בעברית</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              RTL וכיוון טקסט מימין לשמאל
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
