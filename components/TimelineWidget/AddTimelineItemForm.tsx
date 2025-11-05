import { useState, useEffect } from 'react';
import { TimelineFormData, TimelineStatus, TimelineItem } from '@/types/timeline';

interface AddTimelineItemFormProps {
  onSubmit: (data: TimelineFormData) => void;
  onCancel?: () => void;
  editItem?: TimelineItem | null;
}

export default function AddTimelineItemForm({ onSubmit, onCancel, editItem }: AddTimelineItemFormProps) {
  const [formData, setFormData] = useState<TimelineFormData>({
    title: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    status: 'pending' as TimelineStatus,
  });

  useEffect(() => {
    if (editItem) {
      setFormData({
        title: editItem.title,
        description: editItem.description,
        date: editItem.date,
        status: editItem.status,
      });
    }
  }, [editItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) {
      alert('נא למלא את כל השדות הנדרשים');
      return;
    }
    onSubmit(formData);
    setFormData({
      title: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      status: 'pending',
    });
  };

  const handleChange = (field: keyof TimelineFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700 mb-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {editItem ? '✏️ ערוך פריט' : '➕ הוסף פריט חדש'}
      </h3>

      <div className="space-y-4">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            כותרת *
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="הזן כותרת לפריט"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            תיאור *
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            rows={3}
            className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
            placeholder="הזן תיאור מפורט"
            required
          />
        </div>

        {/* Date and Status in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              תאריך *
            </label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={(e) => handleChange('date', e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            />
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              סטטוס *
            </label>
            <select
              id="status"
              value={formData.status}
              onChange={(e) => handleChange('status', e.target.value as TimelineStatus)}
              className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            >
              <option value="pending">ממתין</option>
              <option value="in_progress">בתהליך</option>
              <option value="completed">הושלם</option>
              <option value="cancelled">בוטל</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            {editItem ? '💾 שמור שינויים' : '➕ הוסף לציר הזמן'}
          </button>
          {(editItem || onCancel) && (
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              ❌ ביטול
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
