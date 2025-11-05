export type TimelineStatus = 'pending' | 'in_progress' | 'completed' | 'cancelled';

export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  date: string;
  status: TimelineStatus;
  createdAt: string;
}

export interface TimelineFormData {
  title: string;
  description: string;
  date: string;
  status: TimelineStatus;
}
