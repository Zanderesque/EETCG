/** @type {import('open-next').OpenNextConfig} */
const config = {
  // Enable standalone output explicitly
  standalone: true,
  // Set the output directory to match wrangler.toml configuration
  outputPath: ".open-next/standalone",
};

module.exports = config;
