import { ProjectTimeline, Milestone, Activity } from '../types/timeline';

// Helper function to create dates
const createDate = (year: number, month: number, day: number): Date => {
  return new Date(year, month - 1, day);
};

// Mock activities for each phase
const planningActivities: Activity[] = [
  {
    id: 'plan-1',
    name: 'Initial Site Survey',
    planned: {
      start: createDate(2024, 1, 15),
      end: createDate(2024, 2, 15),
      duration: 31,
    },
    actual: {
      start: createDate(2024, 1, 15),
      end: createDate(2024, 2, 10),
      duration: 26,
    },
    status: 'completed',
    progress: 100,
  },
  {
    id: 'plan-2',
    name: 'Environmental Impact Assessment',
    planned: {
      start: createDate(2024, 2, 16),
      end: createDate(2024, 4, 30),
      duration: 74,
    },
    actual: {
      start: createDate(2024, 2, 11),
      end: createDate(2024, 5, 5),
      duration: 84,
    },
    status: 'completed',
    progress: 100,
  },
  {
    id: 'plan-3',
    name: 'Permit Applications',
    planned: {
      start: createDate(2024, 5, 1),
      end: createDate(2024, 6, 30),
      duration: 60,
    },
    actual: {
      start: createDate(2024, 5, 6),
      end: createDate(2024, 7, 15),
      duration: 70,
    },
    status: 'completed',
    progress: 100,
  },
];

const tenderActivities: Activity[] = [
  {
    id: 'tender-1',
    name: 'Tender Documentation Preparation',
    planned: {
      start: createDate(2024, 7, 1),
      end: createDate(2024, 8, 15),
      duration: 45,
    },
    actual: {
      start: createDate(2024, 7, 16),
      end: createDate(2024, 9, 1),
      duration: 47,
    },
    status: 'completed',
    progress: 100,
  },
  {
    id: 'tender-2',
    name: 'Contractor Bidding Period',
    planned: {
      start: createDate(2024, 8, 16),
      end: createDate(2024, 10, 15),
      duration: 60,
    },
    actual: {
      start: createDate(2024, 9, 2),
      end: createDate(2024, 10, 30),
      duration: 58,
    },
    status: 'completed',
    progress: 100,
  },
  {
    id: 'tender-3',
    name: 'Bid Evaluation',
    planned: {
      start: createDate(2024, 10, 16),
      end: createDate(2024, 11, 15),
      duration: 30,
    },
    actual: {
      start: createDate(2024, 10, 31),
      end: createDate(2024, 11, 20),
      duration: 20,
    },
    status: 'completed',
    progress: 100,
  },
];

const negotiationActivities: Activity[] = [
  {
    id: 'nego-1',
    name: 'Contract Negotiation',
    planned: {
      start: createDate(2024, 11, 16),
      end: createDate(2024, 12, 31),
      duration: 45,
    },
    actual: {
      start: createDate(2024, 11, 21),
      end: createDate(2025, 1, 10),
      duration: 50,
    },
    status: 'in-progress',
    progress: 85,
  },
  {
    id: 'nego-2',
    name: 'Final Contract Review',
    planned: {
      start: createDate(2025, 1, 1),
      end: createDate(2025, 1, 20),
      duration: 20,
    },
    actual: {
      start: createDate(2025, 1, 11),
      end: createDate(2025, 2, 5),
      duration: 25,
    },
    status: 'in-progress',
    progress: 60,
  },
];

const groundBreakingActivities: Activity[] = [
  {
    id: 'ground-1',
    name: 'Site Mobilization',
    planned: {
      start: createDate(2025, 1, 21),
      end: createDate(2025, 2, 15),
      duration: 25,
    },
    actual: {
      start: createDate(2025, 2, 6),
      end: createDate(2025, 3, 10),
      duration: 32,
    },
    status: 'delayed',
    progress: 30,
  },
  {
    id: 'ground-2',
    name: 'Ground Breaking Ceremony',
    planned: {
      start: createDate(2025, 2, 16),
      end: createDate(2025, 2, 16),
      duration: 1,
    },
    actual: {
      start: createDate(2025, 3, 11),
      end: createDate(2025, 3, 11),
      duration: 1,
    },
    status: 'pending',
    progress: 0,
  },
  {
    id: 'ground-3',
    name: 'Foundation Work',
    planned: {
      start: createDate(2025, 2, 17),
      end: createDate(2025, 4, 30),
      duration: 72,
    },
    actual: {
      start: createDate(2025, 3, 12),
      end: createDate(2025, 5, 25),
      duration: 74,
    },
    status: 'pending',
    progress: 0,
  },
];

// Main milestones
const milestones: Milestone[] = [
  {
    id: 'milestone-1',
    name: 'Planning & Permits',
    icon: '✓',
    planned: createDate(2024, 6, 30),
    actual: createDate(2024, 7, 15),
    status: 'completed',
    activities: planningActivities,
  },
  {
    id: 'milestone-2',
    name: 'Tender',
    icon: '✓',
    planned: createDate(2024, 11, 15),
    actual: createDate(2024, 11, 20),
    status: 'completed',
    activities: tenderActivities,
  },
  {
    id: 'milestone-3',
    name: 'Negotiation',
    icon: '◆',
    planned: createDate(2025, 1, 20),
    actual: createDate(2025, 2, 5),
    status: 'in-progress',
    activities: negotiationActivities,
  },
  {
    id: 'milestone-4',
    name: 'Ground Breaking',
    icon: '⚠',
    planned: createDate(2025, 2, 16),
    actual: createDate(2025, 3, 11),
    status: 'delayed',
    activities: groundBreakingActivities,
  },
];

// Main project timeline data
export const projectTimelineData: ProjectTimeline = {
  projectName: 'AquaBrain Weizmann 11',
  projectId: 'ABW-11-2024',
  milestones,
  overallStatus: 'in-progress',
  startDate: createDate(2024, 1, 15),
  endDate: createDate(2025, 4, 30),
};

// Get top 3 key milestones for compact view
export const getKeyMilestones = (): Milestone[] => {
  return milestones.slice(1, 4); // Tender, Negotiation, Ground Breaking
};
