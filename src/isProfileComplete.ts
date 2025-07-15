export function isProfileComplete(profile: {
  full_name?: string;
  preferred_positions?: string;
  skill_level?: string | number;
}): boolean {
  return Boolean(
    profile?.full_name &&
    profile?.preferred_positions &&
    profile?.skill_level
  );
}