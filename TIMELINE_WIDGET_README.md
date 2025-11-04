# Project Timeline Management Widget

A comprehensive, production-ready React/Next.js component for visualizing and managing construction project timelines.

## Features

### 1. Compact Widget (Header Display)
- **Dual Timeline Visualization**: Shows both planned (baseline) and actual timelines side-by-side
- **Key Milestone Display**: Displays 3 most important milestones with color-coded status indicators
- **Interactive Elements**:
  - Hover tooltips showing detailed dates and status
  - Click to expand to full-screen detailed view
- **Status Icons**:
  - ✓ (Completed - Green)
  - ◆ (In Progress - Blue)
  - ⚠ (Delayed - Red)
  - ○ (Pending - Gray)

### 2. Full-Screen Detailed View
- **Comprehensive Timeline Comparison**:
  - Two detailed data bars showing planned vs actual timelines
  - Visual deviation indicators
  - Day-by-day variance calculations
- **Complete Gantt Chart**:
  - All project phases and activities
  - Side-by-side comparison of planned vs actual durations
  - Progress indicators for in-progress activities
  - Color-coded status for each activity
- **Deviation Summary**:
  - Quick overview cards for each milestone
  - Days difference calculations
  - Percentage-based variance metrics

## Project Structure

```
app/
├── components/
│   ├── ProjectTimelineManager.tsx    # Main container component
│   ├── TimelineWidget.tsx            # Compact header widget
│   └── TimelineDetailedView.tsx      # Full-screen detailed view
├── types/
│   └── timeline.ts                   # TypeScript type definitions
├── data/
│   └── timelineData.ts               # Mock project data
└── utils/
    └── timelineUtils.ts              # Helper functions and calculations
```

## Component Architecture

### ProjectTimelineManager
Main orchestrator component that manages state and renders both compact and detailed views.

```tsx
import ProjectTimelineManager from '../components/ProjectTimelineManager';

export default function Page() {
  return <ProjectTimelineManager />;
}
```

### TimelineWidget
Compact widget component for header display.

**Props:**
- `milestones`: Array of milestone objects
- `projectName`: Project name string
- `startDate`: Project start date
- `endDate`: Project end date
- `onClick`: Callback function for expansion

### TimelineDetailedView
Full-screen modal view with comprehensive Gantt chart.

**Props:**
- `timeline`: Complete ProjectTimeline object
- `onClose`: Callback function to close the modal

## Data Model

### Core Types

```typescript
type MilestoneStatus = 'completed' | 'in-progress' | 'delayed' | 'pending';

interface TimelineDate {
  start: Date;
  end: Date;
  duration: number; // in days
}

interface Activity {
  id: string;
  name: string;
  planned: TimelineDate;
  actual: TimelineDate;
  status: MilestoneStatus;
  progress: number; // 0-100
  dependencies?: string[];
}

interface Milestone {
  id: string;
  name: string;
  icon: string;
  planned: Date;
  actual: Date;
  status: MilestoneStatus;
  activities: Activity[];
}

interface ProjectTimeline {
  projectName: string;
  projectId: string;
  milestones: Milestone[];
  overallStatus: MilestoneStatus;
  startDate: Date;
  endDate: Date;
}
```

## Sample Data

The widget comes pre-loaded with mock data for "AquaBrain Weizmann 11" project including:

1. **Planning & Permits** (Completed)
   - Initial Site Survey
   - Environmental Impact Assessment
   - Permit Applications

2. **Tender** (Completed)
   - Tender Documentation Preparation
   - Contractor Bidding Period
   - Bid Evaluation

3. **Negotiation** (In Progress)
   - Contract Negotiation
   - Final Contract Review

4. **Ground Breaking** (Delayed)
   - Site Mobilization
   - Ground Breaking Ceremony
   - Foundation Work

## Customization Guide

### Using Your Own Data

1. **Replace Mock Data**: Edit `app/data/timelineData.ts`

```typescript
import { ProjectTimeline } from '../types/timeline';

export const projectTimelineData: ProjectTimeline = {
  projectName: 'Your Project Name',
  projectId: 'PROJECT-ID',
  milestones: [
    {
      id: 'milestone-1',
      name: 'Phase 1',
      icon: '✓',
      planned: new Date(2024, 0, 1),
      actual: new Date(2024, 0, 5),
      status: 'completed',
      activities: [
        {
          id: 'activity-1',
          name: 'Task 1',
          planned: {
            start: new Date(2024, 0, 1),
            end: new Date(2024, 0, 15),
            duration: 14,
          },
          actual: {
            start: new Date(2024, 0, 1),
            end: new Date(2024, 0, 18),
            duration: 17,
          },
          status: 'completed',
          progress: 100,
        },
        // ... more activities
      ],
    },
    // ... more milestones
  ],
  overallStatus: 'in-progress',
  startDate: new Date(2024, 0, 1),
  endDate: new Date(2025, 11, 31),
};
```

2. **Adjust Key Milestones**: Modify `getKeyMilestones()` function to select which milestones appear in compact view

### Styling Customization

The widget uses Tailwind CSS classes. Key customization points:

**Widget Size:**
```tsx
// In TimelineWidget.tsx
style={{ minWidth: '600px', maxWidth: '800px' }}
```

**Status Colors:**
```typescript
// In timelineUtils.ts
export const getStatusColor = (status: MilestoneStatus): string => {
  const colors = {
    completed: '#10b981', // Change these values
    'in-progress': '#3b82f6',
    delayed: '#ef4444',
    pending: '#6b7280',
  };
  return colors[status];
};
```

## Integration Examples

### Example 1: Dashboard Header
```tsx
import ProjectTimelineManager from './components/ProjectTimelineManager';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>Project Dashboard</h1>
        <ProjectTimelineManager />
      </header>
      {/* Rest of dashboard */}
    </div>
  );
}
```

### Example 2: Standalone Page
```tsx
export default function TimelinePage() {
  return (
    <div className="min-h-screen p-8">
      <ProjectTimelineManager />
    </div>
  );
}
```

### Example 3: Multiple Projects
```tsx
'use client';

import { useState } from 'react';
import TimelineWidget from './components/TimelineWidget';

export default function MultiProjectDashboard() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="grid grid-cols-2 gap-4">
      {projects.map(project => (
        <TimelineWidget
          key={project.id}
          milestones={project.milestones}
          projectName={project.name}
          startDate={project.startDate}
          endDate={project.endDate}
          onClick={() => setSelectedProject(project)}
        />
      ))}
    </div>
  );
}
```

## Utility Functions

### Date Calculations
- `getDaysDifference(date1, date2)`: Calculate days between dates
- `formatDate(date)`: Format date to readable string
- `formatDateRange(start, end)`: Format date range

### Timeline Calculations
- `calculateDeviation(milestone)`: Calculate timeline deviation
- `calculateProgress(start, end, current)`: Calculate progress percentage
- `calculateTimelinePosition(date, start, end)`: Calculate position on timeline

### Status Helpers
- `getStatusColor(status)`: Get color for status
- `getStatusBackgroundColor(status)`: Get background color
- `getStatusText(status)`: Get human-readable status text
- `getStatusIcon(status)`: Get icon for status

## Browser Support

- Chrome/Edge: ✓
- Firefox: ✓
- Safari: ✓
- Mobile browsers: ✓ (Responsive design)

## Performance Considerations

- Lightweight: ~15KB minified
- Uses React hooks for optimal re-rendering
- Lazy loading of detailed view (modal)
- No external dependencies beyond React/Next.js and Tailwind CSS

## Responsive Design

- Desktop: Full width display with all features
- Tablet: Optimized layout with scrollable Gantt chart
- Mobile: Stacked timeline bars, scrollable content

## Accessibility

- Keyboard navigation support
- ARIA labels for screen readers
- Color contrast compliance (WCAG 2.1 AA)
- Focus indicators

## Future Enhancements

Potential additions (not implemented):
- Export to PDF/Excel
- Real-time data integration via API
- Drag-and-drop timeline editing
- Resource allocation visualization
- Critical path highlighting
- Dependency arrows in Gantt chart
- Print-optimized view

## License

This component is part of the AquaBrain Demo project.

## Support

For questions or issues, please refer to the main project repository.

---

**Version:** 1.0.0
**Last Updated:** November 2025
**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS
