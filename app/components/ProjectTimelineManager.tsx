'use client';

import React, { useState } from 'react';
import TimelineWidget from './TimelineWidget';
import TimelineDetailedView from './TimelineDetailedView';
import { projectTimelineData, getKeyMilestones } from '../data/timelineData';

export default function ProjectTimelineManager() {
  const [isDetailedViewOpen, setIsDetailedViewOpen] = useState(false);

  const keyMilestones = getKeyMilestones();

  return (
    <>
      <TimelineWidget
        milestones={keyMilestones}
        projectName={projectTimelineData.projectName}
        startDate={projectTimelineData.startDate}
        endDate={projectTimelineData.endDate}
        onClick={() => setIsDetailedViewOpen(true)}
      />

      {isDetailedViewOpen && (
        <TimelineDetailedView
          timeline={projectTimelineData}
          onClose={() => setIsDetailedViewOpen(false)}
        />
      )}
    </>
  );
}
