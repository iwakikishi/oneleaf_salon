/**
 * Type-safe environment variable validation and management
 * Ensures all required environment variables are present at runtime
 */

function getEnvVar(key: string, isPublic: boolean = false): string {
  const value = isPublic
    ? process.env[key]
    : process.env[key];

  if (!value) {
    throw new Error(
      `Missing required environment variable: ${key}\n` +
      `Please add ${key} to your .env file`
    );
  }

  return value;
}

function getOptionalEnvVar(key: string): string | undefined {
  return process.env[key];
}

/**
 * Validated environment variables
 * All variables are validated at module load time
 */
export const env = {
  // Server-side only
  RESEND_API_KEY: getOptionalEnvVar('RESEND_API_KEY'),

  // Client-side (public)
  GOOGLE_MAPS_API_KEY: getOptionalEnvVar('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY'),
  INSTAGRAM_APP_ID: getOptionalEnvVar('NEXT_PUBLIC_INSTAGRAM_APP_ID'),
  INSTAGRAM_REDIRECT_URI: getOptionalEnvVar('NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI'),
} as const;

/**
 * Runtime checks for optional variables
 */
export function requireEnv<K extends keyof typeof env>(key: K): NonNullable<typeof env[K]> {
  const value = env[key];
  if (!value) {
    throw new Error(
      `Environment variable ${key} is required for this operation but not configured.\n` +
      `Please add the corresponding variable to your .env file.`
    );
  }
  return value as NonNullable<typeof env[K]>;
}

/**
 * Check if an optional environment variable is configured
 */
export function hasEnv<K extends keyof typeof env>(key: K): boolean {
  return env[key] !== undefined && env[key] !== '';
}
