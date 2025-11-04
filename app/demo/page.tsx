'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProjectTimelineManager from '../components/ProjectTimelineManager';

export default function DemoPage() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const handleAdd = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleDelete = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header with Timeline Widget */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">אזור הדמו</h1>
            <Link
              href="/"
              className="px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
            >
              חזרה לדף הבית
            </Link>
          </div>

          {/* Project Timeline Widget */}
          <div className="flex justify-center">
            <ProjectTimelineManager />
          </div>
        </div>

        <div className="p-6 border rounded-lg space-y-4 bg-white dark:bg-gray-800">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">ניהול רשימה</h2>
          <p className="text-gray-600 dark:text-gray-400">
            הוסף, ערוך ומחק פריטים ברשימה האינטראקטיבית שלך.
          </p>

          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
              placeholder="הכנס פריט חדש..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
            />
            <button
              onClick={handleAdd}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              הוסף
            </button>
          </div>

          {items.length > 0 && (
            <div className="space-y-2 mt-4">
              <h3 className="font-semibold">הפריטים שלי:</h3>
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <span>{item}</span>
                    <button
                      onClick={() => handleDelete(index)}
                      className="px-3 py-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                    >
                      מחק
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {items.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              אין פריטים ברשימה. הוסף פריט ראשון!
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">תכונות מרכזיות</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• מרתק אינטראקטיבי</li>
              <li>• תמיכה מלאה ב-RTL</li>
              <li>• עיצוב מודרני</li>
              <li>• מצב כהה/בהיר</li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">טכנולוגיות</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• Next.js 14</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• React Hooks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
