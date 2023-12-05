import nProgress from "nprogress";
import React, { Suspense } from "react";

export const LazyLoading = ({ children }) => {
  React.useEffect(() => {
    nProgress.start();

    return () => {
      nProgress.done();
    };
  });

  return children;
};

// eslint-disable-next-line react/prop-types
const SuspenseContainer = ({ children }) => (
  <Suspense fallback={<LazyLoading />}>{children}</Suspense>
);

export default SuspenseContainer;
