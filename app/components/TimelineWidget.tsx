'use client';

import React from 'react';
import { Milestone } from '../types/timeline';
import {
  formatDate,
  getStatusColor,
  getStatusBackgroundColor,
  calculateTimelinePosition,
} from '../utils/timelineUtils';

interface TimelineWidgetProps {
  milestones: Milestone[];
  projectName: string;
  startDate: Date;
  endDate: Date;
  onClick: () => void;
}

export default function TimelineWidget({
  milestones,
  projectName,
  startDate,
  endDate,
  onClick,
}: TimelineWidgetProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
      style={{ minWidth: '600px', maxWidth: '800px' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            {projectName}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Project Timeline Overview
          </p>
        </div>
        <button className="text-blue-600 dark:text-blue-400 text-xs hover:underline">
          View Details →
        </button>
      </div>

      {/* Timeline Comparison */}
      <div className="space-y-3">
        {/* Planned Timeline */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
              Planned Timeline
            </span>
            <span className="text-xs text-gray-500">
              {formatDate(startDate)} - {formatDate(endDate)}
            </span>
          </div>
          <div className="relative h-8 bg-gray-100 dark:bg-gray-700 rounded overflow-hidden">
            {milestones.map((milestone) => {
              const position = calculateTimelinePosition(milestone.planned, startDate, endDate);
              return (
                <div
                  key={`planned-${milestone.id}`}
                  className="absolute top-0 bottom-0 flex items-center justify-center"
                  style={{
                    left: `${position}%`,
                    transform: 'translateX(-50%)',
                  }}
                >
                  <div className="relative group">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs border-2 border-white dark:border-gray-800"
                      style={{ backgroundColor: '#9ca3af' }}
                    >
                      {milestone.icon}
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      <div className="bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                        {milestone.name}
                        <br />
                        {formatDate(milestone.planned)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actual Timeline */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-900 dark:text-white">
              Actual Timeline
            </span>
            <span className="text-xs text-gray-500">Current Progress</span>
          </div>
          <div className="relative h-8 bg-gray-100 dark:bg-gray-700 rounded overflow-hidden">
            {milestones.map((milestone) => {
              const position = calculateTimelinePosition(milestone.actual, startDate, endDate);
              const statusColor = getStatusColor(milestone.status);
              const bgColor = getStatusBackgroundColor(milestone.status);

              return (
                <div
                  key={`actual-${milestone.id}`}
                  className="absolute top-0 bottom-0 flex items-center justify-center"
                  style={{
                    left: `${position}%`,
                    transform: 'translateX(-50%)',
                  }}
                >
                  <div className="relative group">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white dark:border-gray-800 shadow-sm"
                      style={{ backgroundColor: statusColor, color: 'white' }}
                    >
                      {milestone.icon}
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      <div className="bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                        {milestone.name}
                        <br />
                        {formatDate(milestone.actual)}
                        <br />
                        <span style={{ color: bgColor }}>●</span> {milestone.status}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Key Milestones Summary */}
      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-3 gap-2">
          {milestones.map((milestone) => {
            const statusColor = getStatusColor(milestone.status);
            const daysDiff = Math.ceil(
              (milestone.actual.getTime() - milestone.planned.getTime()) / (1000 * 60 * 60 * 24)
            );
            const isDelayed = daysDiff > 0;

            return (
              <div
                key={milestone.id}
                className="flex items-center space-x-2 text-xs"
                style={{ direction: 'ltr' }}
              >
                <span style={{ color: statusColor, fontSize: '14px' }}>
                  {milestone.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 dark:text-white truncate">
                    {milestone.name}
                  </div>
                  <div
                    className={`text-xs ${
                      isDelayed ? 'text-red-600' : 'text-green-600'
                    }`}
                  >
                    {isDelayed ? '+' : ''}{daysDiff} days
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
