'use client';

import { useState, useEffect } from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
}

export default function DemoPage() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Load tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/tasks');
      const data = await response.json();
      if (data.status === 'success') {
        setTasks(data.tasks);
      }
    } catch (err) {
      setError('שגיאה בטעינת המשימות');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    if (!inputValue.trim()) return;

    try {
      setLoading(true);
      setError('');
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: inputValue.trim() }),
      });

      const data = await response.json();
      if (data.status === 'success') {
        setTasks([...tasks, data.task]);
        setInputValue('');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('שגיאה בהוספת המשימה');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch(`/api/tasks?id=${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (data.status === 'success') {
        setTasks(tasks.filter((task) => task.id !== id));
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('שגיאה במחיקת המשימה');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold">אזור הדמו</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            ניהול משימות עם API Routes
          </p>
        </div>

        {error && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400">
            {error}
          </div>
        )}

        <div className="p-6 border rounded-lg space-y-4">
          <h2 className="text-2xl font-semibold">ניהול משימות</h2>
          <p className="text-gray-600 dark:text-gray-400">
            הוסף ומחק משימות באמצעות API Routes של Next.js
          </p>

          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !loading && handleAdd()}
              placeholder="הכנס משימה חדשה..."
              disabled={loading}
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 disabled:opacity-50"
            />
            <button
              onClick={handleAdd}
              disabled={loading || !inputValue.trim()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'מוסיף...' : 'הוסף'}
            </button>
          </div>

          {tasks.length > 0 && (
            <div className="space-y-2 mt-4">
              <h3 className="font-semibold">המשימות שלי ({tasks.length}):</h3>
              <ul className="space-y-2">
                {tasks.map((task) => (
                  <li
                    key={task.id}
                    className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="flex-1">
                      <div>{task.title}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        נוצר: {new Date(task.createdAt).toLocaleString('he-IL')}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(task.id)}
                      disabled={loading}
                      className="px-3 py-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors disabled:opacity-50"
                    >
                      מחק
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tasks.length === 0 && !loading && (
            <div className="text-center py-8 text-gray-400">
              אין משימות ברשימה. הוסף משימה ראשונה!
            </div>
          )}

          {loading && tasks.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              טוען משימות...
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">תכונות מרכזיות</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• ניהול משימות אינטראקטיבי</li>
              <li>• API Routes עם Next.js</li>
              <li>• תמיכה מלאה ב-RTL</li>
              <li>• עיצוב מודרני ורספונסיבי</li>
              <li>• מצב כהה/בהיר אוטומטי</li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">טכנולוגיות</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• Next.js 14 App Router</li>
              <li>• TypeScript 5</li>
              <li>• Tailwind CSS 3</li>
              <li>• React 18 Hooks</li>
              <li>• RESTful API Routes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
