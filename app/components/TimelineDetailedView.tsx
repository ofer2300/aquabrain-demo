'use client';

import React from 'react';
import { ProjectTimeline, Activity } from '../types/timeline';
import {
  formatDate,
  formatDateRange,
  getStatusColor,
  getStatusBackgroundColor,
  getStatusText,
  calculateDeviation,
  calculateTimelinePosition,
} from '../utils/timelineUtils';

interface TimelineDetailedViewProps {
  timeline: ProjectTimeline;
  onClose: () => void;
}

export default function TimelineDetailedView({ timeline, onClose }: TimelineDetailedViewProps) {
  const { projectName, projectId, milestones, startDate, endDate } = timeline;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl w-full max-w-7xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {projectName}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Project ID: {projectId} | {formatDateRange(startDate, endDate)}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Timeline Comparison Bars */}
        <div className="p-6 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="space-y-4">
            {/* Planned Timeline Bar */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Planned Timeline (Baseline)
                </h3>
                <span className="text-xs text-gray-500">
                  {formatDateRange(startDate, endDate)}
                </span>
              </div>
              <div className="relative h-12 bg-white dark:bg-gray-900 rounded border border-gray-300 dark:border-gray-600 overflow-hidden">
                {/* Time markers */}
                <div className="absolute top-0 left-0 right-0 bottom-0 flex">
                  {milestones.map((milestone, index) => {
                    const position = calculateTimelinePosition(milestone.planned, startDate, endDate);
                    return (
                      <div
                        key={`marker-planned-${milestone.id}`}
                        className="absolute top-0 bottom-0 border-l border-dashed border-gray-300 dark:border-gray-600"
                        style={{ left: `${position}%` }}
                      />
                    );
                  })}
                </div>
                {/* Milestones */}
                {milestones.map((milestone) => {
                  const position = calculateTimelinePosition(milestone.planned, startDate, endDate);
                  return (
                    <div
                      key={`planned-bar-${milestone.id}`}
                      className="absolute top-0 bottom-0 flex items-center"
                      style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white dark:border-gray-900 flex items-center justify-center text-white text-sm font-bold shadow">
                          {milestone.icon}
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400 mt-1 whitespace-nowrap">
                          {formatDate(milestone.planned)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actual Timeline Bar */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Actual Timeline (Current)
                </h3>
                <span className="text-xs text-gray-500">Live Progress</span>
              </div>
              <div className="relative h-12 bg-white dark:bg-gray-900 rounded border-2 border-blue-500 dark:border-blue-400 overflow-hidden">
                {/* Milestones */}
                {milestones.map((milestone) => {
                  const position = calculateTimelinePosition(milestone.actual, startDate, endDate);
                  const statusColor = getStatusColor(milestone.status);
                  const deviation = calculateDeviation(milestone);

                  return (
                    <div
                      key={`actual-bar-${milestone.id}`}
                      className="absolute top-0 bottom-0 flex items-center"
                      style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
                    >
                      <div className="flex flex-col items-center">
                        <div
                          className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center text-white text-sm font-bold shadow-lg"
                          style={{ backgroundColor: statusColor }}
                        >
                          {milestone.icon}
                        </div>
                        <div className="text-center mt-1">
                          <span className="text-xs text-gray-900 dark:text-white whitespace-nowrap block">
                            {formatDate(milestone.actual)}
                          </span>
                          <span
                            className={`text-xs font-semibold ${
                              deviation.isDelayed ? 'text-red-600' : 'text-green-600'
                            }`}
                          >
                            {deviation.isDelayed ? '+' : ''}{deviation.daysDifference}d
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Deviation Summary */}
          <div className="mt-4 grid grid-cols-4 gap-3">
            {milestones.map((milestone) => {
              const deviation = calculateDeviation(milestone);
              const statusColor = getStatusColor(milestone.status);

              return (
                <div
                  key={`deviation-${milestone.id}`}
                  className="bg-white dark:bg-gray-900 rounded p-3 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center space-x-2 mb-1" style={{ direction: 'ltr' }}>
                    <span style={{ color: statusColor, fontSize: '16px' }}>
                      {milestone.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {milestone.name}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Deviation:{' '}
                    <span
                      className={`font-semibold ${
                        deviation.isDelayed ? 'text-red-600' : 'text-green-600'
                      }`}
                    >
                      {deviation.isDelayed ? '+' : ''}{deviation.daysDifference} days
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gantt Chart */}
        <div className="flex-1 overflow-auto p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Detailed Gantt Chart - All Activities
          </h3>

          <div className="space-y-6">
            {milestones.map((milestone) => (
              <div key={milestone.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                {/* Milestone Header */}
                <div
                  className="p-4 font-semibold text-white"
                  style={{ backgroundColor: getStatusColor(milestone.status) }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3" style={{ direction: 'ltr' }}>
                      <span className="text-xl">{milestone.icon}</span>
                      <span>{milestone.name}</span>
                    </div>
                    <span className="text-sm opacity-90">
                      {getStatusText(milestone.status)}
                    </span>
                  </div>
                </div>

                {/* Activities */}
                <div className="bg-white dark:bg-gray-800">
                  {milestone.activities.map((activity) => (
                    <ActivityRow
                      key={activity.id}
                      activity={activity}
                      projectStart={startDate}
                      projectEnd={endDate}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Activity Row Component for Gantt Chart
function ActivityRow({
  activity,
  projectStart,
  projectEnd,
}: {
  activity: Activity;
  projectStart: Date;
  projectEnd: Date;
}) {
  const plannedStartPos = calculateTimelinePosition(activity.planned.start, projectStart, projectEnd);
  const plannedEndPos = calculateTimelinePosition(activity.planned.end, projectStart, projectEnd);
  const plannedWidth = plannedEndPos - plannedStartPos;

  const actualStartPos = calculateTimelinePosition(activity.actual.start, projectStart, projectEnd);
  const actualEndPos = calculateTimelinePosition(activity.actual.end, projectStart, projectEnd);
  const actualWidth = actualEndPos - actualStartPos;

  const statusColor = getStatusColor(activity.status);
  const bgColor = getStatusBackgroundColor(activity.status);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
      <div className="grid grid-cols-12 gap-4 items-center">
        {/* Activity Name */}
        <div className="col-span-3">
          <div className="font-medium text-sm text-gray-900 dark:text-white">
            {activity.name}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Progress: {activity.progress}%
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="col-span-9">
          {/* Planned */}
          <div className="mb-2">
            <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
              Planned: {formatDateRange(activity.planned.start, activity.planned.end)} ({activity.planned.duration}d)
            </div>
            <div className="relative h-6 bg-gray-100 dark:bg-gray-600 rounded">
              <div
                className="absolute top-0 bottom-0 bg-gray-400 rounded flex items-center justify-center"
                style={{
                  left: `${plannedStartPos}%`,
                  width: `${plannedWidth}%`,
                }}
              >
                <span className="text-xs text-white font-medium">
                  {activity.planned.duration}d
                </span>
              </div>
            </div>
          </div>

          {/* Actual */}
          <div>
            <div className="text-xs text-gray-900 dark:text-white mb-1">
              Actual: {formatDateRange(activity.actual.start, activity.actual.end)} ({activity.actual.duration}d)
            </div>
            <div className="relative h-6 bg-gray-100 dark:bg-gray-600 rounded">
              <div
                className="absolute top-0 bottom-0 rounded flex items-center justify-center"
                style={{
                  left: `${actualStartPos}%`,
                  width: `${actualWidth}%`,
                  backgroundColor: statusColor,
                }}
              >
                <span className="text-xs text-white font-medium">
                  {activity.actual.duration}d
                </span>
              </div>
              {/* Progress Indicator */}
              {activity.progress < 100 && activity.progress > 0 && (
                <div
                  className="absolute top-0 bottom-0 rounded-l opacity-70"
                  style={{
                    left: `${actualStartPos}%`,
                    width: `${(actualWidth * activity.progress) / 100}%`,
                    backgroundColor: statusColor,
                    borderRight: '2px solid white',
                  }}
                />
              )}
            </div>
          </div>

          {/* Variance */}
          <div className="mt-1 text-xs">
            <span
              className={`font-medium ${
                activity.actual.duration > activity.planned.duration
                  ? 'text-red-600'
                  : activity.actual.duration < activity.planned.duration
                  ? 'text-green-600'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Variance: {activity.actual.duration > activity.planned.duration ? '+' : ''}
              {activity.actual.duration - activity.planned.duration} days
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
