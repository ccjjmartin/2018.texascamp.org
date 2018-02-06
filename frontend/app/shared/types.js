// @flow

// these are subject to change via drupal, and may not be up-to-date
export type SkillLevelT = 'Beginner' | 'Intermediate' | 'Advanced';

// these are subject to change via drupal, and may not be up-to-date
export type TrackT =
  | 'Coding and Development'
  | 'Devops'
  | 'Frontend'
  | 'Horizons'
  | 'PHP'
  | 'Project Management'
  | 'Site Building'
  | 'UX and Content Strategy';

export type SessionT = {
  body: string,
  summary: string,
  isPublished: boolean,
  room?: string,
  skillLevel: SkillLevelT,
  speakers: string[],
  status?: 'selected' | 'not selected',
  timeslot?: Date,
  title: string,
  track: TrackT,
  urlString: string,
};

export type SponsorT = {
  id: number,
  title: string,
  body: string,
  sponsorLevel: 'Platinum' | 'Gold' | 'Silver' | 'Bronze' | 'Individual',
  sponsorUrl: string,
  image: {
    alt?: string,
    url?: string,
  },
};

export type NewsT = {
  title: string,
  body: string,
  summary: string,
  publishedDate: Date,
  urlString: string,
  id: number,
};
