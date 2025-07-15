export interface Profile {
  id: string;
  full_name?: string;
  preferred_positions?: string;
  skill_level?: number;
  created_at?: string;
  avatar_url?: string;
}

export interface Match {
  id: string;
  date: string;
  venue_id: string;
  team_a_id: string;
  team_b_id: string;
  created_by: string;
}

export interface Team {
  id: string;
  name: string;
  created_at: string;
  manager_id: string;
}

export interface Venue {
  id: string;
  name: string;
  location?: string;
  operating_hours?: string;
  facilities?: string[];
  pricing?: number;
  created_at?: string;
}

export interface ChatMessage {
  id: string;
  match_id?: string;
  team_id?: string;
  sender_id: string;
  content: string;
  created_at: string;
}