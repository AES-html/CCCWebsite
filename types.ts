
export interface ClubEvent {
  id: string;
  title: string;
  date: Date;
  location: string;
  description: string;
  type: 'Service' | 'Meeting' | 'Social' | 'Outreach';
}

export interface BoardMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface CountdownConfig {
  targetDate: string; // ISO format: YYYY-MM-DDTHH:mm:ss
  title: string;
  details: string;
}
