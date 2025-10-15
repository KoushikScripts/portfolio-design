import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
/**
 * Helper function to get the correct asset path for static deployment
 * Handles both development and production (GitHub Pages) environments
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production (GitHub Pages), we need to add the base path
  if (process.env.NODE_ENV === 'production') {
    return `/portfolio/${cleanPath}`;
  }
  
  // In development, use the path as-is
  return `/${cleanPath}`;
}

/**
 * Helper function specifically for skill icons
 */
export function getSkillIconPath(iconName: string): string {
  return getAssetPath(`skills/${iconName}`);
}

/**
 * Helper function specifically for project images
 */
export function getProjectImagePath(imageName: string): string {
  return getAssetPath(`projects/${imageName}`);
}