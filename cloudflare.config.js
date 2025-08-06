import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Specify the output directory for the worker
  outputDir: ".open-next/worker",

  // Enable minification for production
  minify: true,

  // Include all static assets from public directory
  includeFiles: ["public/**/*"],

  // Add any other specific configuration options here
});
