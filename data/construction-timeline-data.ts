import { TimelineItem } from '@/types/timeline';

// Helper function to add working days (excluding weekends)
function addWorkingDays(startDate: Date, days: number): Date {
  const result = new Date(startDate);
  let addedDays = 0;

  while (addedDays < days) {
    result.setDate(result.getDate() + 1);
    const dayOfWeek = result.getDay();
    // Skip weekends (0 = Sunday, 6 = Saturday)
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      addedDays++;
    }
  }

  return result;
}

// Starting date: Today
const projectStartDate = new Date('2025-11-07');

// Calculate dates based on dependencies
const dates: { [key: string]: Date } = {};

// Phase 1: Pre-Planning (1-3 months)
dates['1.1'] = projectStartDate;
dates['1.2'] = addWorkingDays(dates['1.1'], 30);
dates['1.3'] = addWorkingDays(dates['1.2'], 5);
dates['1.4'] = addWorkingDays(dates['1.3'], 15);
dates['1.5'] = addWorkingDays(dates['1.4'], 5);
dates['1.6'] = addWorkingDays(dates['1.5'], 5);
dates['1.7'] = addWorkingDays(dates['1.6'], 30);

// Phase 2: Detailed Planning (3-8 months)
dates['2.1'] = addWorkingDays(dates['1.6'], 10);
dates['2.2'] = addWorkingDays(dates['2.1'], 60);
dates['2.3'] = addWorkingDays(dates['2.1'], 10);
dates['2.4'] = addWorkingDays(dates['2.3'], 75);
dates['2.5'] = addWorkingDays(dates['2.4'], 45);

// Phase 3: Permit Application (3-5 months)
dates['3.1'] = addWorkingDays(dates['2.5'], 15);
dates['3.2'] = addWorkingDays(dates['3.1'], 5);
dates['3.3'] = addWorkingDays(dates['3.2'], 10);
dates['3.4'] = addWorkingDays(dates['3.3'], 90);
dates['3.5'] = addWorkingDays(dates['3.4'], 30);

// Phase 4: Design Review & Fees (2 months)
dates['4.1'] = addWorkingDays(dates['3.5'], 5);
dates['4.2'] = addWorkingDays(dates['4.1'], 15);
dates['4.3'] = addWorkingDays(dates['4.2'], 10);
dates['4.4'] = addWorkingDays(dates['4.3'], 30);
dates['4.5'] = addWorkingDays(dates['4.4'], 5);
dates['4.6'] = addWorkingDays(dates['4.5'], 10);
dates['4.7'] = addWorkingDays(dates['4.6'], 7);

// Phase 5: Tender & Contractor (2 months)
dates['5.1'] = addWorkingDays(dates['4.7'], 5);
dates['5.2'] = addWorkingDays(dates['5.1'], 30);

// Phase 6: Execution Planning (1-2 months)
dates['6.1'] = addWorkingDays(dates['5.2'], 30);
dates['6.2'] = addWorkingDays(dates['6.1'], 5);
dates['6.3'] = addWorkingDays(dates['5.2'], 10);
dates['6.4'] = addWorkingDays(dates['6.3'], 30);
dates['6.5'] = addWorkingDays(dates['6.4'], 15);
dates['6.6'] = addWorkingDays(dates['6.5'], 15);
dates['6.7'] = addWorkingDays(dates['6.6'], 10);

// Phase 7: Work Commencement Approval (5-10 days)
dates['7.1'] = addWorkingDays(dates['6.7'], 3);
dates['7.2'] = addWorkingDays(dates['7.1'], 3);
dates['7.3'] = addWorkingDays(dates['7.2'], 5);

// Phase 8: Construction Start
dates['8.1'] = addWorkingDays(dates['7.3'], 1);
dates['8.2'] = addWorkingDays(dates['8.1'], 1);

export const constructionTimelineData: Omit<TimelineItem, 'id' | 'createdAt'>[] = [
  // Phase 1: Pre-Planning
  {
    title: '1.1 החלטת יזם ובדיקת היתכנות ראשונית',
    description: 'החלטה על הפרויקט ובדיקת כדאיות כלכלית בסיסית. משך: 30 ימי עבודה.',
    date: dates['1.1'].toISOString().split('T')[0],
    status: 'completed' as const,
  },
  {
    title: '1.2 מינוי עורך בקשה ראשי',
    description: 'שכירת אדריכל/מהנדס/הנדסאי מוסמך שילווה את התהליך (עורך הבקשה). משך: 5 ימי עבודה.',
    date: dates['1.2'].toISOString().split('T')[0],
    status: 'completed' as const,
  },
  {
    title: '1.3 הזמנת מודד מוסמך ומפת מדידה',
    description: 'הזמנת מפת מדידה טופוגרפית עדכנית (תוקף המפה: שנה). משך: 15 ימי עבודה.',
    date: dates['1.3'].toISOString().split('T')[0],
    status: 'completed' as const,
  },
  {
    title: '1.4 הגשת בקשה למידע להיתר',
    description: 'עורך הבקשה מגיש בקשה באמצעות מערכת "רישוי זמין", בצירוף מפת המדידה. משך: 5 ימי עבודה.',
    date: dates['1.4'].toISOString().split('T')[0],
    status: 'completed' as const,
  },
  {
    title: '1.5 קליטת הבקשה ואימות נתונים (ועדה)',
    description: 'בדיקת עמידה בתנאים המקדמיים לבקשת מידע על ידי הוועדה. משך: 5 ימי עבודה.',
    date: dates['1.5'].toISOString().split('T')[0],
    status: 'completed' as const,
  },
  {
    title: '1.6 קבלת תיק מידע להיתר',
    description: 'מסירת התיק על ידי מהנדס רשות הרישוי (כולל זכויות בנייה, הנחיות מרחביות ודרישות גורמים מאשרים). תוקף התיק: שנתיים. משך: 30 ימי עבודה.',
    date: dates['1.6'].toISOString().split('T')[0],
    status: 'completed' as const,
  },
  {
    title: '1.7 הזמנת יועץ גיאוטכני',
    description: 'הזמנת בדיקת קרקע (נדרש בשלב זה או לפני כן, כתנאי לתיק המידע או לביסוס). משך: 10 ימי עבודה.',
    date: dates['1.7'].toISOString().split('T')[0],
    status: 'in_progress' as const,
  },

  // Phase 2: Detailed Planning
  {
    title: '2.1 תכנון אדריכלי מפורט (על בסיס המידע)',
    description: 'תכנון המבנה, חתכים וחזיתות, כולל חישוב שטחים ופירוט חומרי גמר (גרמושקה). משך: 60 ימי עבודה.',
    date: dates['2.1'].toISOString().split('T')[0],
    status: 'in_progress' as const,
  },
  {
    title: '2.2 שכירת צוות תכנון מורחב',
    description: 'מינוי מתכנן שלד (קונסטרוקטור), יועץ חשמל, יועץ אינסטלציה (תברואה), יועץ מיזוג, יועץ בטיחות אש, יועץ נגישות, יועץ תנועה/חניה. משך: 10 ימי עבודה.',
    date: dates['2.2'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '2.3 תכנון שלד ומערכות (יועצים)',
    description: 'הכנת נספחים הנדסיים על ידי כל היועצים המומחים (קונסטרוקציה, תשתיות, בטיחות אש). משך: 75 ימי עבודה.',
    date: dates['2.3'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '2.4 קבלת אישורי גורמים מאשרים מוקדמים',
    description: 'השגת אישורים מגופים כמו פיקוד העורף (מיגון), כבאות, משרד הבריאות וכד\', כנדרש בתיק המידע. משך: 45 ימי עבודה.',
    date: dates['2.4'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '2.5 עריכת תוכנית ראשית וטופסי מינויים',
    description: 'הכנת קובץ התוכנית הראשית, תשריט סכמטי של שטחים, וטופס מינוי מתכנן שלד והצהרות ראשוניות. משך: 15 ימי עבודה.',
    date: dates['2.5'].toISOString().split('T')[0],
    status: 'pending' as const,
  },

  // Phase 3: Permit Application
  {
    title: '3.1 הגשת בקשה להיתר ותשלום פיקדון',
    description: 'עורך הבקשה מגיש את התוכנית הראשית והצרופות הנדרשות (לרבות נסח טאבו עדכני) דרך "רישוי זמין". משך: 5 ימי עבודה.',
    date: dates['3.1'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '3.2 בדיקת תנאים מוקדמים (סף) וקליטה',
    description: 'מהנדס הוועדה בודק שלמות המסמכים והצרופות. משך: מקסימום 10 ימי עבודה.',
    date: dates['3.2'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '3.3 בקרה מרחבית',
    description: 'בדיקת התאמת הבקשה לתב"ע החלה, להנחיות המרחביות ולמידע להיתר שנמסר. משך: 45-90 ימי עבודה.',
    date: dates['3.3'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '3.4 פרסום הקלות והתנגדויות (אם נדרש)',
    description: 'אם הוגשה בקשה הכוללת הקלות, יש צורך בפרסום להתנגדויות (משך הפרסום: 14 ימים). משך: 30 ימי עבודה.',
    date: dates['3.4'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '3.5 דיון ברשות הרישוי וקבלת החלטה',
    description: 'רשות הרישוי (מהנדס ויו"ר ועדה) מחליטה על אישור, דחייה, או אישור בכפוף לתנאים. משך: 5 ימי עבודה.',
    date: dates['3.5'].toISOString().split('T')[0],
    status: 'pending' as const,
  },

  // Phase 4: Design Review & Permit Issuance
  {
    title: '4.1 השלמת תנאי הוועדה (פוסט-החלטה)',
    description: 'עורך הבקשה משלים את כל הדרישות והתיקונים שנקבעו בהחלטת הוועדה. משך: 15 ימי עבודה.',
    date: dates['4.1'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '4.2 התקשרות עם מכון בקרה לבקרת תכן',
    description: 'חובה בפרויקטים מורכבים. המבקש מתקשר עם מכון בקרה להעברת הבקשה לבקרת תכן. משך: 10 ימי עבודה.',
    date: dates['4.2'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '4.3 ביצוע בקרת תכן ואישורה',
    description: 'מכון הבקרה בודק שהתכנון עומד בתקנות ובתקנים (בטיחות, יציבות, אש). אם נדרשים תיקונים, חוזר לאדריכל. משך: 30 ימי עבודה.',
    date: dates['4.3'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '4.4 הגשת דוח עורך הבקשה למהנדס',
    description: 'עורך הבקשה מגיש את אישור מכון הבקרה ואת דוח המפרט שינויים מרחביים (אם היו) למהנדס הוועדה. משך: 5 ימי עבודה.',
    date: dates['4.4'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '4.5 חישוב אגרות והיטלים',
    description: 'בודק התוכניות מחשב את החיובים (אגרות בנייה, היטל השבחה והיטלי פיתוח). משך: 10 ימי עבודה.',
    date: dates['4.5'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '4.6 תשלום מלוא החיובים',
    description: 'תשלום אגרות בנייה והיטלים (כנדרש). משך: 7 ימי עבודה.',
    date: dates['4.6'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '4.7 🎯 הפקת היתר בנייה (אבן דרך)',
    description: 'הוועדה מפיקה את ההיתר החתום לאחר אישור התשלום. אבן דרך קריטית! משך: 5 ימי עבודה.',
    date: dates['4.7'].toISOString().split('T')[0],
    status: 'pending' as const,
  },

  // Phase 5: Tender & Contractor Selection
  {
    title: '5.1 הכנת מסמכי מכרז מפורטים',
    description: 'מנהל הפרויקט/מזמין מכין כתבי כמויות ומפרטים טכניים מלאים (בהתבסס על התכנון המאושר). משך: 30 ימי עבודה.',
    date: dates['5.1'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '5.2 פרסום מכרז ובחירת קבלן',
    description: 'קבלת הצעות, בדיקתן, משא ומתן וחתימת חוזה עם קבלן ראשי רשום. משך: 30 ימי עבודה.',
    date: dates['5.2'].toISOString().split('T')[0],
    status: 'pending' as const,
  },

  // Phase 6: Execution Planning
  {
    title: '6.1 מינוי בעלי תפקידים לביצוע',
    description: 'בעל ההיתר ממנה את האחראי לביקורת על הביצוע (מפקח), קבלן ואת האחראי לביצוע שלד הבניין. משך: 5 ימי עבודה.',
    date: dates['6.1'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '6.2 התקשרות עם מכון בקרה לבקרת ביצוע',
    description: 'בעל ההיתר מתקשר עם מכון בקרה שיבצע בקרת ביצוע על העבודות (חובה בבנייה רוויה/מורכבת). משך: 10 ימי עבודה.',
    date: dates['6.2'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '6.3 קבלן מגיש תוכניות ייצור (Shop Drawings)',
    description: 'הקבלן מכין ומגיש תוכניות ייצור מפורטות (Shop Drawings) לכל המערכות (למשל: שלד, אלומיניום, HVAC). משך: 30 ימי עבודה.',
    date: dates['6.3'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '6.4 אישור תוכניות ייצור',
    description: 'המתכננים והמפקח מאשרים את תוכניות הייצור הסופיות. משך: 15 ימי עבודה.',
    date: dates['6.4'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '6.5 הכנת תוכנית ארגון אתר והסדרי תנועה',
    description: 'הקבלן מכין תוכנית התארגנות אתר (כולל מיגון, גידור, פינוי פסולת) ותוכנית הסדרי תנועה (כולל אישור משטרה, אם נדרש). משך: 15 ימי עבודה.',
    date: dates['6.5'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '6.6 התקשרות עם מעבדה מאושרת ובדיקות מוקדמות',
    description: 'חתימה על הסכם עם מעבדה מאושרת לבדיקות הנדרשות (בטון, קרקע, איטום). משך: 10 ימי עבודה.',
    date: dates['6.6'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '6.7 סימון מתווה הבניין בשטח',
    description: 'מודד מוסמך מבצע סימון של מתווה הבניין במגרש ומנפיק אישור על כך. משך: 3 ימי עבודה.',
    date: dates['6.7'].toISOString().split('T')[0],
    status: 'pending' as const,
  },

  // Phase 7: Work Commencement Approval
  {
    title: '7.1 הגשת בקשה לאישור תחילת עבודות',
    description: 'האחראי לביקורת על הביצוע מגיש למהנדס הוועדה בקשה רשמית (טופס 2/אישור מקוון) בצירוף כל האישורים, המינויים, ותוכנית ארגון האתר. משך: 3 ימי עבודה.',
    date: dates['7.1'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '7.2 בדיקה והחלטה על ידי מהנדס הוועדה',
    description: 'מהנדס הוועדה בודק את הבקשה לאישור תחילת עבודות. אם לא ניתנה החלטה בתוך 5 ימי עבודה, רואים בבקשה כמאושרת. משך: 5 ימי עבודה.',
    date: dates['7.2'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '7.3 🎯 קבלת אישור תחילת עבודות (אבן דרך סופית)',
    description: 'האישור ניתן על ידי מהנדס הוועדה וכולל אישור זמני לחיבור לתשתיות (חשמל, מים). אבן דרך קריטית! משך: 1 יום.',
    date: dates['7.3'].toISOString().split('T')[0],
    status: 'pending' as const,
  },

  // Phase 8: Construction Start
  {
    title: '8.1 התקנת שלט באתר',
    description: 'הצבת שלט בולט לעין הכולל את פרטי הפרויקט, הקבלן, בעלי התפקידים ומספר אישור תחילת העבודה. משך: 1 יום.',
    date: dates['8.1'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
  {
    title: '8.2 🚀 תחילת עבודות קבלן בשטח',
    description: 'הקמת אתר הבנייה, גידור והתחלת עבודות פיזיות. תחילת הביצוע בפועל! משך: 1 יום.',
    date: dates['8.2'].toISOString().split('T')[0],
    status: 'pending' as const,
  },
];

export function generateConstructionTimeline(): TimelineItem[] {
  return constructionTimelineData.map((item) => ({
    ...item,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  }));
}
