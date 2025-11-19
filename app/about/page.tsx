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

                    {/* סקשן מפורט מהשיחות - תיעוד מלא */}
        <section className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">תיעוד מפורט - על בסיס שיחותינו</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">10 דוגמאות למה שניתן לעשות עם הפרויקט</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>פיתוח אתר עסקי חדש בעברית מלאה, כולל דף בית, דפי שירותים, ועמוד אודות</li>
                <li>יצירת מערכת ניהול תוכן (CMS) מותאמת לעברית, עם ניהול משתמשים, פוסטים ותכנים</li>
                <li>הקמת חנות אינטרנטית רספונסיבית, עם תמיכה בעברית, עגלת קניות ותשלום מקוון</li>
                <li>בניית דשבורד נתונים אינטראקטיבי, עם גרפים, פילוחים, ותמיכה בתצוגה RTL</li>
                <li>מערכת רישום וניהול אירועים: שמירת אירועים עם לוח שנה וניהול משתתפים</li>
                <li>פיתוח פורטל לקהל יעד ישראלי: פורום, מערכת הודעות, וניהול קהילות</li>
                <li>אתר תדמית לסטארטאפ או יזם: פרופיל חברה, חזון, צוות, ומידע למשקיעים</li>
                <li>אפליקציית בלוג אישי בעברית עם תגובות וממשק עריכה נוח</li>
                <li>ממשק ניהול לקוחות (CRM) הכולל ניהול לקוחות, דוחות וסטטיסטיקות</li>
                <li>אתר תרגום או לימוד שפות הכולל דוגמה לאינטגרציה עם שירותי תרגום</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">הערך הנוסף של הפרויקט</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400">חיסכון בזמן ומשאבים</h4>
                  <p className="text-gray-700 dark:text-gray-300">חוסך מאות שעות פיתוח תשתיתי בהתמודדות עם עברית ו-RTL. אפס צורך בהתעסקות בבעיות RTL/עברית – הכל עובד מהקופסה.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400">תשתית מודרנית ואיכותית</h4>
                  <p className="text-gray-700 dark:text-gray-300">בסיס קוד עדכני עם דוגמאות, פונקציות מתקדמות ועיצוב מודרני. תמיכה ב-App Router, מצבים כהה/בהיר, TypeScript ו-Tailwind CSS.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400">שיפור איכות המוצר</h4>
                  <p className="text-gray-700 dark:text-gray-300">פוקוס על פיתוח ייחודי במקום תשתית. שיפור נראות, נגישות וחוויית משתמש. הרמת רמת המוצרים הישראליים לסטנדרט בינלאומי.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">מה היה קורה ללא AquaBrain?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>פיתוח מאפס:</strong> כל יישום היה דורש פיתוח תשתיתי מלא להתמודדות עם עברית ו-RTL</li>
                <li><strong>עלויות גבוהות:</strong> תוספת משמעותית בזמן, עלויות ותלות במפתחי תשתית מנוסים</li>
                <li><strong>סיכון לטעויות:</strong> הסיכון לטעויות והורדת איכות המוצר עולה משמעותית</li>
                <li><strong>פיתוח איטי:</strong> תהליך פיתוח ארוך יותר וחוויה שאינה תואמת את הצרכן המקומי</li>
                <li><strong>אתגרי RTL:</strong> צורך להתמודד ידנית עם כל בעיות הכיוון, עיצוב ונגישות</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">על רכיב ה-Router</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Router הוא חלק מהאפליקציה (לא מהדפדפן) שמנהל ניווט פנימי בין דפים/רכיבים:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>מאפשר מעבר חלק ומהיר בין מסכים ללא טעינה מחדש של הדף</li>
                <li>תורם לחוויית SPA (Single Page Application) מודרנית</li>
                <li>מנהל כתובות URL פנימיות ומציג תוכן מתאים לכל Route</li>
                <li>שונה מהניווט הקלאסי של הדפדפן (Full Page Reload)</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">סיכום מרכזי</h3>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                <strong>AquaBrain הוא הרבה מעבר לכלי "לשפה העברית" בלבד</strong> - הוא תשתית חכמה, 
                יעילה ומתקדמת לפיתוח אפליקציות מודרניות, המעניקה למפתחים ישראלים:
              </p>
              <ul className="mt-3 space-y-1 text-gray-800 dark:text-gray-200">
                <li>✅ קיצור תהליכים משמעותי</li>
                <li>✅ שיפור חוויית משתמש ואיכות מוצר</li>
                <li>✅ יכולת להתמקד בחידוש ופיתוח ייחודי</li>
                <li>✅ בסיס מקצועי לסטנדרט בינלאומי</li>
              </ul>
            </div>
          </div>
        </section>
          </div>
        </div>
      </div>
    </div>
  );
}
