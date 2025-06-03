"use client";

import { useEffect, useState } from 'react';
import CustomCursor from './CustomCursor';

export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Retourne null pendant le SSR
  }

  return (
    <>
      {/* Curseur personnalisé uniquement sur les appareils non tactiles */}
      {typeof window !== 'undefined' && !window.matchMedia('(hover: none)').matches && (
        <>
          <div className="cursor-dot"></div>
          <div className="cursor-outline"></div>
          <CustomCursor />
        </>
      )}
      {children}
    </>
  );
}
