export default function About() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">אודות AquaBrain</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            פלטפורמת דמו מתקדמת לפיתוח אפליקציות Next.js
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <div className="space-y-6">
            <section className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">מה זה AquaBrain?</h2>
              <p className="text-gray-700 dark:text-gray-300">
                AquaBrain היא פלטפורמת דמו המציגה את הטכנולוגיות המתקדמות ביותר לפיתוח אפליקציות web
                מודרניות. הפרויקט בנוי על Next.js 14 עם תמיכה מלאה ב-TypeScript, RTL לעברית, ו-Tailwind CSS
                לעיצוב רספונסיבי ומהיר.
              </p>
            </section>

            <section className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">תכונות עיקריות</h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 ml-2">✓</span>
                  <span><strong>Next.js 14</strong> - פריימוורק React מתקדם עם App Router</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 ml-2">✓</span>
                  <span><strong>TypeScript</strong> - קוד מאובטח עם type safety מלא</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 ml-2">✓</span>
                  <span><strong>Tailwind CSS</strong> - עיצוב מהיר ורספונסיבי</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 ml-2">✓</span>
                  <span><strong>תמיכה מלאה בעברית</strong> - RTL וכיוון טקסט מימין לשמאל</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 ml-2">✓</span>
                  <span><strong>מצב כהה/בהיר</strong> - תמיכה אוטומטית במצבי תצוגה שונים</span>
                </li>
              </ul>
            </section>

            <section className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">טכנולוגיות בשימוש</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
                  <div className="font-bold text-blue-600 dark:text-blue-400">Next.js</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">14.2.5</div>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
                  <div className="font-bold text-blue-600 dark:text-blue-400">React</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">18.3</div>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
                  <div className="font-bold text-blue-600 dark:text-blue-400">TypeScript</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">5.x</div>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
                  <div className="font-bold text-blue-600 dark:text-blue-400">Tailwind</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">3.4</div>
                </div>
              </div>
            </section>

            <section className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">מטרת הפרויקט</h2>
              <p className="text-gray-700 dark:text-gray-300">
                הפרויקט נועד לשמש כבסיס להתחלת פיתוח אפליקציות Next.js עם תמיכה מלאה בעברית.
                הוא כולל דוגמאות לשימוש ב-components, routing, styling ועוד, ומאפשר למפתחים להתחיל
                במהירות עם פרויקט מקצועי ומסודר.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
