import { AppDataType } from "../types/types";
import ImageJeremy from "../assets/images/image-jeremy.png";
import WorkImage from "../assets/images/icon-work.svg";
import PlayImage from "../assets/images/icon-play.svg";
import StudyImage from "../assets/images/icon-study.svg";
import ExerciseImage from "../assets/images/icon-exercise.svg";
import SocialImage from "../assets/images/icon-social.svg";
import SelfCareImage from "../assets/images/icon-self-care.svg";

export const appdata: AppDataType = {
  dashboard: {
    userimage: ImageJeremy,
    username: "Jeremy Robson",
    timeframes: ["Daily", "Weekly", "Monthly"],
  },
  cards: [
    {
      title: "Work",
      backgroundImage: WorkImage,
      backgroundColor: "hsl(15, 100%, 70%)",
      timeframes: {
        daily: {
          current: 5,
          previous: 7,
        },
        weekly: {
          current: 32,
          previous: 36,
        },
        monthly: {
          current: 103,
          previous: 128,
        },
      },
    },
    {
      title: "Play",
      backgroundImage: PlayImage,
      backgroundColor: "hsl(195, 74%, 62%)",
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
    {
      title: "Study",
      backgroundImage: StudyImage,
      backgroundColor: "hsl(348, 100%, 68%)",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 7,
        },
        monthly: {
          current: 13,
          previous: 19,
        },
      },
    },
    {
      title: "Exercise",
      backgroundImage: ExerciseImage,
      backgroundColor: "hsl(145, 58%, 55%)",
      timeframes: {
        daily: {
          current: 1,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 5,
        },
        monthly: {
          current: 11,
          previous: 18,
        },
      },
    },
    {
      title: "Social",
      backgroundImage: SocialImage,
      backgroundColor: "hsl(264, 64%, 52%)",
      timeframes: {
        daily: {
          current: 1,
          previous: 3,
        },
        weekly: {
          current: 5,
          previous: 10,
        },
        monthly: {
          current: 21,
          previous: 23,
        },
      },
    },
    {
      title: "Self Care",
      backgroundImage: SelfCareImage,
      backgroundColor: "hsl(43, 84%, 65%)",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 2,
          previous: 2,
        },
        monthly: {
          current: 7,
          previous: 11,
        },
      },
    },
  ],
};
