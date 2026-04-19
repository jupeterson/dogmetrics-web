'use client';

import { useEffect } from 'react';

export default function RootRedirect() {
  useEffect(() => {
    location.replace('./sv/');
  }, []);
  return (
    <p style={{ padding: 24 }}>
      Redirecting to <a href="./sv/">DogMetrics</a>…
    </p>
  );
}
