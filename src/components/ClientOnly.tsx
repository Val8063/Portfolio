"use client";

import { useEffect, useState } from 'react';
import CustomCursor from './CustomCursor';

export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Curseur personnalisé pour l'ambiance futuriste */}
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
      <CustomCursor />
      {children}
    </>
  );
}
