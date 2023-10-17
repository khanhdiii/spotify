'use client';

import React from 'react';
import Box from '@/components/Box';
import { BounceLoader } from 'react-spinners';

function Loading() {
  return (
    <Box className="h-full flex items-center justify-center">
      <BounceLoader color="#22c55e" />
    </Box>
  );
}

export default Loading;
