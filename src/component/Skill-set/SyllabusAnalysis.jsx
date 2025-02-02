import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

const progressData = [
  { label: 'HTML Tools, Forms, History', value: 80, color: 'primary' },
  { label: 'Tags & References in HTML', value: 60, color: 'warning' },
  { label: 'Tables & References in HTML', value: 24, color: 'error' },
  { label: 'Tables & CSS Basics', value: 96, color: 'success' },
];

const SyllabusAnalysis = () => {
  return (
    <Box className="p-8 relative bg-white border border-gray-300 rounded-xl shadow-sm flex flex-col justify-between max-w-[40rem] w-full">
      <Typography variant="h6" fontWeight="bold" marginBottom={2}>
        Syllabus Wise Analysis
      </Typography>
      {progressData.map((item, index) => (
        <Box key={index} className="flex items-center justify-between mb-8 flex-wrap md:flex-nowrap">
          <Box className="w-full md:w-3/4 my-4">
            <Typography variant="body2" fontWeight="medium" gutterBottom>
              {item.label}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={item.value}
              color={item.color}
              sx={{
                height: 8,
                borderRadius: '4px',
                backgroundColor: '#f0f0f0',
              }}
            />
          </Box>
          <Typography variant="body2" fontWeight="bold" className="ml-2 md:ml-0 w-full md:w-auto text-center md:text-right">
            {item.value}%
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SyllabusAnalysis;
