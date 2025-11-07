'use client';

import { useState, useEffect } from 'react';
import { TimelineItem as TimelineItemType, TimelineFormData, TimelineStatus } from '@/types/timeline';
import TimelineItem from './TimelineItem';
import AddTimelineItemForm from './AddTimelineItemForm';
import { generateConstructionTimeline } from '@/data/construction-timeline-data';

export default function ConstructionTimelineWidget() {
  const [items, setItems] = useState<TimelineItemType[]>([]);
  const [editingItem, setEditingItem] = useState<TimelineItemType | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState<TimelineStatus | 'all'>('all');
  const [isInitialized, setIsInitialized] = useState(false);

  // Load items from localStorage on mount or initialize with construction data
  useEffect(() => {
    const savedItems = localStorage.getItem('constructionTimelineItems');
    if (savedItems) {
      try {
        setItems(JSON.parse(savedItems));
        setIsInitialized(true);
      } catch (error) {
        console.error('Failed to load construction timeline items:', error);
        // Fallback to generated data
        const generatedItems = generateConstructionTimeline();
        setItems(generatedItems);
        setIsInitialized(true);
      }
    } else {
      // Initialize with construction data
      const generatedItems = generateConstructionTimeline();
      setItems(generatedItems);
      setIsInitialized(true);
    }
  }, []);

  // Save items to localStorage whenever they change
  useEffect(() => {
    if (isInitialized && items.length > 0) {
      localStorage.setItem('constructionTimelineItems', JSON.stringify(items));
    }
  }, [items, isInitialized]);

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

  const handleResetData = () => {
    if (confirm('האם אתה בטוח שברצונך לאפס את כל הנתונים ולטעון מחדש את גאנט הבנייה המקורי?')) {
      const generatedItems = generateConstructionTimeline();
      setItems(generatedItems);
      localStorage.setItem('constructionTimelineItems', JSON.stringify(generatedItems));
    }
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

  // Calculate project duration
  const projectStartDate = items.length > 0 ? new Date(Math.min(...items.map(i => new Date(i.date).getTime()))) : null;
  const projectEndDate = items.length > 0 ? new Date(Math.max(...items.map(i => new Date(i.date).getTime()))) : null;

  const formatDate = (date: Date | null) => {
    if (!date) return 'N/A';
    return date.toLocaleDateString('he-IL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header with statistics */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-6 mb-8 shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-4">🏗️ גאנט שלבי תכנון, רישוי והוצאת צו תחילת עבודות</h2>

        <div className="bg-white/20 backdrop-blur rounded-lg p-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white">
            <div>
              <span className="font-semibold">תאריך התחלה:</span> {formatDate(projectStartDate)}
            </div>
            <div>
              <span className="font-semibold">תאריך סיום משוער:</span> {formatDate(projectEndDate)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-white">{stats.total}</div>
            <div className="text-sm text-white/90">סה"כ משימות</div>
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
              ? 'bg-orange-500 text-white shadow-md'
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

      {/* Action buttons */}
      <div className="flex gap-3 mb-6">
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="flex-1 px-6 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
          >
            ➕ הוסף משימה חדשה
          </button>
        )}
        <button
          onClick={handleResetData}
          className="px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
        >
          🔄 אפס נתונים
        </button>
      </div>

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
              ? 'אין משימות בגאנט'
              : `אין משימות עם סטטוס "${
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
