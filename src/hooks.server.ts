import * as Sentry from "@sentry/sveltekit";

Sentry.init({
  dsn: "https://8b06f683cb2842be986103fb7b8a7b91@o4505099417550848.ingest.sentry.io/4505159102365696",
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions. Adjust this value in production as necessary.
});