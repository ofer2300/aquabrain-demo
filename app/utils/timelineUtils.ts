import { Milestone, TimelineDeviation, MilestoneStatus } from '../types/timeline';

// Calculate difference in days between two dates
export const getDaysDifference = (date1: Date, date2: Date): number => {
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

// Format date to readable string
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

// Format date range
export const formatDateRange = (start: Date, end: Date): string => {
  return `${formatDate(start)} - ${formatDate(end)}`;
};

// Get status color
export const getStatusColor = (status: MilestoneStatus): string => {
  const colors = {
    completed: '#10b981', // green
    'in-progress': '#3b82f6', // blue
    delayed: '#ef4444', // red
    pending: '#6b7280', // gray
  };
  return colors[status];
};

// Get status background color (lighter)
export const getStatusBackgroundColor = (status: MilestoneStatus): string => {
  const colors = {
    completed: '#d1fae5',
    'in-progress': '#dbeafe',
    delayed: '#fee2e2',
    pending: '#f3f4f6',
  };
  return colors[status];
};

// Get status text
export const getStatusText = (status: MilestoneStatus): string => {
  const texts = {
    completed: 'Completed',
    'in-progress': 'In Progress',
    delayed: 'Delayed',
    pending: 'Pending',
  };
  return texts[status];
};

// Calculate timeline deviation
export const calculateDeviation = (milestone: Milestone): TimelineDeviation => {
  const daysDiff = getDaysDifference(milestone.planned, milestone.actual);
  const isDelayed = milestone.actual > milestone.planned;

  // Calculate percentage based on total project duration
  const totalDays = getDaysDifference(milestone.planned, new Date());
  const percentageDiff = totalDays > 0 ? (daysDiff / totalDays) * 100 : 0;

  return {
    milestoneId: milestone.id,
    daysDifference: isDelayed ? daysDiff : -daysDiff,
    percentageDifference: Math.round(percentageDiff * 10) / 10,
    isDelayed,
  };
};

// Calculate progress percentage between start and end dates
export const calculateProgress = (start: Date, end: Date, current: Date = new Date()): number => {
  if (current <= start) return 0;
  if (current >= end) return 100;

  const total = end.getTime() - start.getTime();
  const elapsed = current.getTime() - start.getTime();

  return Math.round((elapsed / total) * 100);
};

// Calculate position percentage for timeline visualization
export const calculateTimelinePosition = (
  date: Date,
  startDate: Date,
  endDate: Date
): number => {
  const total = endDate.getTime() - startDate.getTime();
  const elapsed = date.getTime() - startDate.getTime();

  const position = (elapsed / total) * 100;
  return Math.max(0, Math.min(100, position));
};

// Get icon for milestone status
export const getStatusIcon = (status: MilestoneStatus): string => {
  const icons = {
    completed: '✓',
    'in-progress': '◆',
    delayed: '⚠',
    pending: '○',
  };
  return icons[status];
};
