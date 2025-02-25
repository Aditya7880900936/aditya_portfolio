import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true, // ✅ Enable source maps in production
  env: {
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
  },
};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,

  silent: !process.env.CI, // Only log in CI

  widenClientFileUpload: true, // Upload more source maps

  reactComponentAnnotation: { enabled: true }, // Show React component names in Sentry

  tunnelRoute: "/monitoring", // Bypass ad-blockers

  disableLogger: true, // Reduce bundle size

  automaticVercelMonitors: true, // Enable Sentry Cron Monitors
});
