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
          
          <div className="flex gap-4 justify-center">
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
        
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
          <div className="p-6 border rounded-lg">
            <h3 className="font-bold mb-2">Next.js 14</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              גרסה עדכנית עם App Router ותמיכה ב-TypeScript
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-bold mb-2">תמיכה מלאה בעברית</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              RTL וכיוון טקסט מימין לשמאל
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-bold mb-2">Tailwind CSS</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              עיצוב מודרני ורספונסיבי
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
