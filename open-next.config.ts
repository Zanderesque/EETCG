// default open-next.config.ts file created by @opennextjs/cloudflare
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Enable standalone output for Cloudflare Pages deployment
  standalone: true,
  // Set the output directory explicitly
  outputStandalone: ".open-next/standalone"
});
