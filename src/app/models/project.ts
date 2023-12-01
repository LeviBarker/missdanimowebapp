interface Supply {
  name: string;
  quantity: number;
}

interface Step {
  text: string;
  illustration_url: string;
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
  steps: Step[];
}
