'use client';

import React, { useEffect, useState } from 'react';
import AuthModal from '@/components/AuthModal';
import UploadModal from '@/components/UploadModal';
import { ProductWithPrice } from '@/types';
import SubscibeModal from '@/components/SubscibeModal';

interface ModalProviderProps {
  products: ProductWithPrice[];
}

function ModalProvider({ products }: ModalProviderProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <AuthModal />
      <UploadModal />
      <SubscibeModal products={products} />
    </>
  );
}

export default ModalProvider;
