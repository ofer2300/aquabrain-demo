'use client';

import { useState, useEffect } from 'react';
import { TimelineItem as TimelineItemType, TimelineFormData, TimelineStatus } from '@/types/timeline';
import TimelineItem from './TimelineItem';
import AddTimelineItemForm from './AddTimelineItemForm';

export default function TimelineWidget() {
  const [items, setItems] = useState<TimelineItemType[]>([]);
  const [editingItem, setEditingItem] = useState<TimelineItemType | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState<TimelineStatus | 'all'>('all');

  // Load items from localStorage on mount
  useEffect(() => {
    const savedItems = localStorage.getItem('timelineItems');
    if (savedItems) {
      try {
        setItems(JSON.parse(savedItems));
      } catch (error) {
        console.error('Failed to load timeline items:', error);
      }
    }
  }, []);

  // Save items to localStorage whenever they change
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem('timelineItems', JSON.stringify(items));
    }
  }, [items]);

  const handleAddItem = (formData: TimelineFormData) => {
    if (editingItem) {
      // Edit existing item
      setItems(prev =>
        prev.map(item =>
          item.id === editingItem.id
            ? { ...item, ...formData }
            : item
        )
      );
      setEditingItem(null);
    } else {
      // Add new item
      const newItem: TimelineItemType = {
        id: crypto.randomUUID(),
        ...formData,
        createdAt: new Date().toISOString(),
      };
      setItems(prev => [...prev, newItem].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
    }
    setShowForm(false);
  };

  const handleEditItem = (item: TimelineItemType) => {
    setEditingItem(item);
    setShowForm(true);
  };

  const handleDeleteItem = (id: string) => {
    if (confirm('האם אתה בטוח שברצונך למחוק פריט זה?')) {
      setItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
    setShowForm(false);
  };

  const filteredItems = filterStatus === 'all'
    ? items
    : items.filter(item => item.status === filterStatus);

  const stats = {
    total: items.length,
    pending: items.filter(i => i.status === 'pending').length,
    in_progress: items.filter(i => i.status === 'in_progress').length,
    completed: items.filter(i => i.status === 'completed').length,
    cancelled: items.filter(i => i.status === 'cancelled').length,
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header with statistics */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 mb-8 shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-4">📊 ציר זמן לניהול פרויקט</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-white">{stats.total}</div>
            <div className="text-sm text-white/90">סה"כ</div>
          </div>
          <div className="bg-gray-500/30 backdrop-blur rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-white">{stats.pending}</div>
            <div className="text-sm text-white/90">ממתין</div>
          </div>
          <div className="bg-blue-500/30 backdrop-blur rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-white">{stats.in_progress}</div>
            <div className="text-sm text-white/90">בתהליך</div>
          </div>
          <div className="bg-green-500/30 backdrop-blur rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-white">{stats.completed}</div>
            <div className="text-sm text-white/90">הושלם</div>
          </div>
          <div className="bg-red-500/30 backdrop-blur rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-white">{stats.cancelled}</div>
            <div className="text-sm text-white/90">בוטל</div>
          </div>
        </div>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilterStatus('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            filterStatus === 'all'
              ? 'bg-blue-500 text-white shadow-md'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          הכל ({stats.total})
        </button>
        <button
          onClick={() => setFilterStatus('pending')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            filterStatus === 'pending'
              ? 'bg-gray-500 text-white shadow-md'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          ממתין ({stats.pending})
        </button>
        <button
          onClick={() => setFilterStatus('in_progress')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            filterStatus === 'in_progress'
              ? 'bg-blue-500 text-white shadow-md'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          בתהליך ({stats.in_progress})
        </button>
        <button
          onClick={() => setFilterStatus('completed')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            filterStatus === 'completed'
              ? 'bg-green-500 text-white shadow-md'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          הושלם ({stats.completed})
        </button>
        <button
          onClick={() => setFilterStatus('cancelled')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            filterStatus === 'cancelled'
              ? 'bg-red-500 text-white shadow-md'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          בוטל ({stats.cancelled})
        </button>
      </div>

      {/* Add button */}
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="w-full mb-6 px-6 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
        >
          ➕ הוסף פריט חדש לציר הזמן
        </button>
      )}

      {/* Form */}
      {showForm && (
        <AddTimelineItemForm
          onSubmit={handleAddItem}
          onCancel={handleCancelEdit}
          editItem={editingItem}
        />
      )}

      {/* Timeline items */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700">
          <div className="text-6xl mb-4">📭</div>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
            {filterStatus === 'all'
              ? 'אין פריטים בציר הזמן. הוסף את הפריט הראשון!'
              : `אין פריטים עם סטטוס "${
                  filterStatus === 'pending' ? 'ממתין' :
                  filterStatus === 'in_progress' ? 'בתהליך' :
                  filterStatus === 'completed' ? 'הושלם' : 'בוטל'
                }"`
            }
          </p>
        </div>
      ) : (
        <div className="timeline-container">
          {filteredItems.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              onEdit={handleEditItem}
              onDelete={handleDeleteItem}
              isLast={index === filteredItems.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
