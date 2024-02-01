export interface DashBoardProfile {
  userimage: string;
  username: string;
  timeframes: string[];
  timeFrame?: string;
  setTimeFrame?: (timeFrame: string) => void;
}

export interface TimeOptions {
  current: number;
  previous: number;
}

export interface TimeFrame {
  daily: TimeOptions;
  weekly: TimeOptions;
  monthly: TimeOptions;
}

export interface Card {
  title: string;
  timeframes: TimeFrame;
  backgroundColor: string;
  backgroundImage: string;
  timeFrame?: string;
}

export interface AppDataType {
  dashboard: DashBoardProfile;
  cards: Card[];
}
