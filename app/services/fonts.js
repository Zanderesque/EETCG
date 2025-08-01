// Using CSS variables for system fonts instead of Google Fonts
// This approach eliminates external network requests during build

// Define the font stacks as CSS variables
export const fontVariables = {
  // Primary font (replacing Montserrat)
  primary: "var(--font-primary)",
  // Secondary font (replacing Open Sans)
  secondary: "var(--font-secondary)",
};

// These classes will be applied to the HTML element
export const fontClasses = "font-system";
