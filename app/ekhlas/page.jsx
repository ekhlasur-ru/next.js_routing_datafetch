import React, { Suspense, lazy } from "react";
const Details = lazy(() => import("./_components/Details"));

export default function page() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Details />
      </Suspense>
    </div>
  );
}
