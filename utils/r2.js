/**
 * R2 bucket utilities for accessing public assets
 */

/**
 * Get the base URL for the R2 bucket
 * @returns {string} The public URL for the R2 bucket
 */
export function getR2PublicUrl() {
  // Use environment variable if available, otherwise fall back to the public development URL
  return (
    process.env.R2_PUBLIC_URL ||
    "https://pub-d5883a1087a64093842347fe88ba41.r2.dev"
  );
}

/**
 * Generate a full URL for an asset in the R2 bucket
 * @param {string} path - The path to the asset within the bucket
 * @returns {string} The full URL to the asset
 */
export function getR2AssetUrl(path) {
  const baseUrl = getR2PublicUrl();
  // Ensure path doesn't start with a slash when concatenating
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;
  return `${baseUrl}/${cleanPath}`;
}
