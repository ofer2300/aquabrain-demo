export type MilestoneStatus = 'completed' | 'in-progress' | 'delayed' | 'pending';

export interface TimelineDate {
  start: Date;
  end: Date;
  duration: number; // in days
}

export interface Activity {
  id: string;
  name: string;
  planned: TimelineDate;
  actual: TimelineDate;
  status: MilestoneStatus;
  progress: number; // 0-100
  dependencies?: string[];
}

export interface Milestone {
  id: string;
  name: string;
  icon: string;
  planned: Date;
  actual: Date;
  status: MilestoneStatus;
  activities: Activity[];
}

export interface ProjectTimeline {
  projectName: string;
  projectId: string;
  milestones: Milestone[];
  overallStatus: MilestoneStatus;
  startDate: Date;
  endDate: Date;
}

export interface TimelineDeviation {
  milestoneId: string;
  daysDifference: number;
  percentageDifference: number;
  isDelayed: boolean;
}
