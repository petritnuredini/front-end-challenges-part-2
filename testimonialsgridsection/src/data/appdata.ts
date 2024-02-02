import { TestimonialsType } from "../types";
import DanielImage from "../assets/images/image-daniel.jpg";
import JonathanImage from "../assets/images/image-jonathan.jpg";
import JeanetteImage from "../assets/images/image-jeanette.jpg";
import PatrickImage from "../assets/images/image-patrick.jpg";
import KiraImage from "../assets/images/image-kira.jpg";

export const testimonialsData: TestimonialsType = {
  daniel: {
    width: "70%",
    quotes: true,
    image: DanielImage,
    backgroundColor: "hsl(263, 55%, 52%)",
    name: " Daniel Clifford",
    position: "Verified Graduate",
    title:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
    description:
      " “ I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up  for the free intro course and found it incredibly fun! I enrolled shortly thereafter.  The next 12 weeks was the best - and most grueling - time of my life. Since completing  the course, I've successfully switched careers, working as a Software Engineer at a VR startup. ”",
  },
  jonathan: {
    width: "30%",
    image: JonathanImage,
    backgroundColor: "hsl(217, 19%, 35%)",
    name: "Jonathan Walters",
    position: "Verified Graduate",
    title: "The team was very supportive and kept me motivated",
    description:
      "“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself. ”",
  },
  jeanette: {
    width: "30%",
    image: JeanetteImage,
    backgroundColor: "white",
    name: "Jeanette Harmon",
    position: "Verified Graduate",
    title: "An overall wonderful and rewarding experience",
    description:
      "“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”",
  },
  patrick: {
    width: "70%",
    image: PatrickImage,
    backgroundColor: "hsl(219, 29%, 14%)",
    name: "Patrick Abrams",
    position: "Verified Graduate",
    title:
      "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and   learning from their experiences was easy.",
    description:
      "“ The staff seem genuinely concerned about my progress which I find really refreshing. The program  gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from   an incredible community of smart and amazing people. ”",
  },
  kira: {
    width: "100%",
    image: KiraImage,
    backgroundColor: "white",
    name: "Kira Whittle",
    position: "Verified Graduate",
    title: "Such a life-changing experience. Highly recommended!",
    description:
      "“ Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former   student of theirs who can only say wonderful things about the program. The entire curriculum and staff   did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team   project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial   could ever have. In fact, I've often referred to it during interviews as an example of my developent   experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”",
  },
};
