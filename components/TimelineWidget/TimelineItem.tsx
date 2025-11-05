import { TimelineItem as TimelineItemType } from '@/types/timeline';

interface TimelineItemProps {
  item: TimelineItemType;
  onEdit: (item: TimelineItemType) => void;
  onDelete: (id: string) => void;
  isLast: boolean;
}

const statusConfig = {
  pending: {
    label: 'ממתין',
    color: 'bg-gray-500',
    textColor: 'text-gray-700 dark:text-gray-300',
    bgColor: 'bg-gray-100 dark:bg-gray-800',
  },
  in_progress: {
    label: 'בתהליך',
    color: 'bg-blue-500',
    textColor: 'text-blue-700 dark:text-blue-300',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
  },
  completed: {
    label: 'הושלם',
    color: 'bg-green-500',
    textColor: 'text-green-700 dark:text-green-300',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
  },
  cancelled: {
    label: 'בוטל',
    color: 'bg-red-500',
    textColor: 'text-red-700 dark:text-red-300',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
  },
};

export default function TimelineItem({ item, onEdit, onDelete, isLast }: TimelineItemProps) {
  const config = statusConfig[item.status];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('he-IL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="relative pr-8 pb-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute top-6 right-2 w-0.5 h-full bg-gray-300 dark:bg-gray-700" />
      )}

      {/* Timeline dot */}
      <div className={`absolute top-1 right-0 w-5 h-5 rounded-full ${config.color} border-4 border-white dark:border-gray-900`} />

      {/* Content card */}
      <div className={`mr-12 rounded-lg p-4 shadow-md border-2 ${config.bgColor} border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg`}>
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {item.title}
            </h3>
            <p className={`text-sm font-medium ${config.textColor}`}>
              {config.label}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 mr-2">
            <button
              onClick={() => onEdit(item)}
              className="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
              aria-label="ערוך"
            >
              ✏️ ערוך
            </button>
            <button
              onClick={() => onDelete(item.id)}
              className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded transition-colors"
              aria-label="מחק"
            >
              🗑️ מחק
            </button>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-3">
          {item.description}
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span>📅</span>
          <time dateTime={item.date}>{formatDate(item.date)}</time>
        </div>
      </div>
    </div>
  );
}
