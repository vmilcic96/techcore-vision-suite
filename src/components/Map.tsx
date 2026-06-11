import { lazy, Suspense, useEffect, useState } from "react";

const Inner = lazy(() => import("./MapInner"));

export default function Map() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <div className="h-full w-full rounded-2xl bg-card/40 animate-pulse" />;
  }
  return (
    <Suspense fallback={<div className="h-full w-full rounded-2xl bg-card/40 animate-pulse" />}>
      <Inner />
    </Suspense>
  );
}
