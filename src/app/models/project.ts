interface Supply {
  name: string;
  quantity: number;
}

export interface Project {
  id: string;
  title: string;
  messiness_level: string;
  grownup_involvement: string;
  time_minutes: number;
  thumbnail_url: string;
  video_url: string;
  supplies: Supply[];
  created_at: string;
}
