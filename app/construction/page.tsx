import Link from 'next/link';
import ConstructionTimelineWidget from '@/components/TimelineWidget/ConstructionTimelineWidget';

export default function ConstructionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🏗️ גאנט תכנון ורישוי בנייה
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            תהליך מלא ורציף מרגע הפנייה לאדריכל ועד לקבלת צו תחילת העבודות
          </p>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <Link
              href="/"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              🏠 עמוד הבית
            </Link>
            <Link
              href="/timeline"
              className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              📊 ציר זמן כללי
            </Link>
            <Link
              href="/demo"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              🎮 דמו
            </Link>
          </div>
        </div>

        {/* Widget */}
        <ConstructionTimelineWidget />

        {/* Information sections */}
        <div className="mt-12 space-y-8">
          {/* Phases Overview */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              📋 שלבי הפרויקט הראשיים
            </h2>

            <div className="space-y-4">
              <div className="border-r-4 border-orange-500 pr-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  שלב 1: יוזמה וקדם-תכנון (~1-3 חודשים)
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  החלטה על הפרויקט, מינוי אדריכל, הזמנת מפת מדידה, הגשת בקשה למידע להיתר וקבלת תיק מידע מהוועדה.
                </p>
              </div>

              <div className="border-r-4 border-blue-500 pr-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  שלב 2: תכנון מפורט והכנת הבקשה (~3-8 חודשים)
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  תכנון אדריכלי מפורט, שכירת צוות יועצים (קונסטרוקטור, חשמל, אינסטלציה, מיזוג, בטיחות אש, נגישות), הכנת נספחים הנדסיים וקבלת אישורים מוקדמים.
                </p>
              </div>

              <div className="border-r-4 border-purple-500 pr-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  שלב 3: הגשת בקשה להיתר ובקרה מרחבית (~3-5 חודשים)
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  הגשת הבקשה דרך "רישוי זמין", בדיקת תנאים מוקדמים, בקרה מרחבית, פרסום הקלות (אם נדרש) ודיון ברשות הרישוי.
                </p>
              </div>

              <div className="border-r-4 border-green-500 pr-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  שלב 4: בקרת תכן, חיובים והפקת היתר (~2 חודשים)
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  השלמת תנאי הוועדה, בקרת תכן במכון מאושר, חישוב ותשלום אגרות והיטלים, והפקת היתר הבנייה החתום.
                </p>
              </div>

              <div className="border-r-4 border-yellow-500 pr-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  שלב 5: מכרז ומינוי קבלן ראשי (~2 חודשים)
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  הכנת מסמכי מכרז מפורטים, פרסום המכרז, בדיקת הצעות וחתימת חוזה עם קבלן ראשי רשום.
                </p>
              </div>

              <div className="border-r-4 border-indigo-500 pr-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  שלב 6: תכנון ביצוע והכנות לתחילת עבודה (~1-2 חודשים)
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  מינוי בעלי תפקידים, התקשרות עם מכון בקרה לביצוע, הכנת תוכניות ייצור, תוכנית ארגון אתר וסימון מתווה הבניין.
                </p>
              </div>

              <div className="border-r-4 border-red-500 pr-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  שלב 7: אישור תחילת עבודות (טופס 2) (~5-10 ימי עבודה)
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  הגשת בקשה לאישור תחילת עבודות, בדיקה על ידי מהנדס הוועדה וקבלת האישור הרשמי.
                </p>
              </div>

              <div className="border-r-4 border-pink-500 pr-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  שלב 8: תחילת ביצוע
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  התקנת שלט באתר ותחילת עבודות הקבלן בשטח - הקמת אתר הבנייה והתחלת עבודות פיזיות.
                </p>
              </div>
            </div>
          </div>

          {/* Key Milestones */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-6">
              🎯 אבני דרך קריטיות
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <div className="text-2xl mb-2">📄</div>
                <h3 className="text-xl font-bold text-white mb-2">קבלת תיק מידע להיתר</h3>
                <p className="text-white/90 text-sm">
                  תוקף: שנתיים. מכיל זכויות בנייה, הנחיות מרחביות ודרישות גורמים מאשרים.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <div className="text-2xl mb-2">🏛️</div>
                <h3 className="text-xl font-bold text-white mb-2">החלטת ועדת הרישוי</h3>
                <p className="text-white/90 text-sm">
                  אישור או דחייה של הבקשה, או אישור בכפוף לתנאים שיש להשלים.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <div className="text-2xl mb-2">✅</div>
                <h3 className="text-xl font-bold text-white mb-2">הפקת היתר בנייה</h3>
                <p className="text-white/90 text-sm">
                  אישור סופי מהוועדה לאחר עמידה בכל התנאים, בקרת תכן ותשלום חיובים.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <div className="text-2xl mb-2">🚀</div>
                <h3 className="text-xl font-bold text-white mb-2">קבלת צו תחילת עבודות</h3>
                <p className="text-white/90 text-sm">
                  אישור זמני לחיבור לתשתיות והרשאה רשמית להתחיל בעבודות בשטח.
                </p>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-400 dark:border-yellow-600 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-yellow-900 dark:text-yellow-200 mb-4">
              ⚠️ הערות חשובות
            </h2>

            <ul className="space-y-3 text-yellow-800 dark:text-yellow-300">
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span>לוחות הזמנים המצוינים הם <strong>ימי עבודה</strong> ומהווים את <strong>המועדים המקסימליים</strong> הקבועים בחוק.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span>בפועל, בייחוד בפרויקטים מורכבים בתל אביב, משך הזמן הכולל עשוי להיות <strong>ארוך משמעותית</strong> בשל עומסים ותיקונים חוזרים.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span>מפת מדידה תקפה לשנה אחת - יש לוודא שהיא עדכנית בזמן הגשת הבקשה.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span>תיק מידע להיתר תקף לשנתיים - יש להגיש את הבקשה להיתר בתוך תקופה זו.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span>בקרת תכן חובה בפרויקטים מורכבים ובבנייה רוויה.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span>אם מהנדס הוועדה לא החליט על בקשה לתחילת עבודות תוך 5 ימי עבודה, הבקשה נחשבת מאושרת לאחר 5 ימי עבודה נוספים.</span>
              </li>
            </ul>
          </div>

          {/* Required Professionals */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              👥 בעלי תפקידים נדרשים
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-2">עורך הבקשה</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">אדריכל/מהנדס/הנדסאי מוסמך</p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-bold text-green-900 dark:text-green-200 mb-2">מודד מוסמך</h3>
                <p className="text-sm text-green-700 dark:text-green-300">מפת מדידה וסימון מתווה</p>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h3 className="font-bold text-purple-900 dark:text-purple-200 mb-2">מתכנן שלד</h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">קונסטרוקטור (מבנים)</p>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h3 className="font-bold text-orange-900 dark:text-orange-200 mb-2">יועצי תשתיות</h3>
                <p className="text-sm text-orange-700 dark:text-orange-300">חשמל, אינסטלציה, מיזוג</p>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <h3 className="font-bold text-red-900 dark:text-red-200 mb-2">יועץ בטיחות אש</h3>
                <p className="text-sm text-red-700 dark:text-red-300">מערכות כיבוי וחירום</p>
              </div>

              <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <h3 className="font-bold text-indigo-900 dark:text-indigo-200 mb-2">יועץ נגישות</h3>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">התאמה לבעלי מוגבלויות</p>
              </div>

              <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                <h3 className="font-bold text-pink-900 dark:text-pink-200 mb-2">יועץ גיאוטכני</h3>
                <p className="text-sm text-pink-700 dark:text-pink-300">בדיקות קרקע וביסוס</p>
              </div>

              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h3 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">מכון בקרה</h3>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">בקרת תכן ובקרת ביצוע</p>
              </div>

              <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                <h3 className="font-bold text-teal-900 dark:text-teal-200 mb-2">קבלן ראשי</h3>
                <p className="text-sm text-teal-700 dark:text-teal-300">קבלן רשום לביצוע העבודות</p>
              </div>
            </div>
          </div>

          {/* Tech stack */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 shadow-lg">
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
      </div>
    </main>
  );
}
