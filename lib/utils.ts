import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function spacesToUnderscoresString(searchTerm: string): string {
  return searchTerm.trim().toLowerCase().replace(/\s+/g, "_");
}
