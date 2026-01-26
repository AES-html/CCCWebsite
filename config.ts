
import { ClubEvent, BoardMember, CountdownConfig } from './types';

/**
 * ==========================================
 * CLUB LOGO
 * If you have your logo file in the same folder, 
 * change this to "./logo.png" or whatever your filename is.
 * ==========================================
 */
export const CLUB_LOGO = "ccclogo.jpg"; // Example: "/logo.png"

/**
 * ==========================================
 * COUNTDOWN CONFIGURATION
 * Edit this to update the homepage timer!
 * ==========================================
 */
export const COUNTDOWN_CONFIG: CountdownConfig = {
  targetDate: "2026-01-30T18:00:00", // CHANGE THIS: Format is YYYY-MM-DDTHH:mm:ss
  title: "Next Event", // CHANGE THIS: Displayed above the timer
  details: "Join us at the Student Union room 3408 on January 30th @6pm for our first interest meeting!" // CHANGE THIS: Detailed info
};

/**
 * ==========================================
 * CALENDAR EVENTS
 * Add or remove events here. They will appear on the Calendar tab.
 * ==========================================
 */
export const CLUB_EVENTS: ClubEvent[] = [
  {
    id: '1',
    title: 'Interest Meeting',
    date: new Date('2026-01-30T18:00:00'),
    location: 'Student Union Room 3408',
    description: 'Come learn about upcoming service opportunities and meet the club!',
    type: 'Meeting'
  },
];

export const BOARD_MEMBERS: BoardMember[] = [
  {
    name: "Ian Mcduffie",
    role: "Co-President",
    image: "./IMG_4879.jpeg",
    bio: "For me, compassionate healthcare doesn’t have take place in a hospital or doctor’s office. CCC offers me the chance to learn and serve in overlooked areas, which are often some of the most genuine and welcome people."
  },
  {
    name: "Rebecca Laruffa",
    role: "Co-President",
    image: "./IMG_3874.jpeg",
    bio: "I’m passionate about helping the unhoused population because housing insecurity is not just a lack of shelter—it’s a loss of stability, dignity, and opportunity. I believe everyone deserves to feel safe, seen, and supported, and I’m driven to help provide that."
  },
  {
    name: "Anderson Stark",
    role: "Vice President",
    image: "./squareheadshot.jpg",
    bio: "I’m passionate about CCC because in this day and age, we need to be able to rely on our neighbors especially when it comes to healthcare. With rising costs, I think that making healthcare accessible to everyone should be a priority of the volunteer community!"
  },
  {
    name: "James Dudek",
    role: "Marketing Officer",
    image: "./james.jpg",
    bio: "From the moment I became passionate about pursuing a career in healthcare, I realized the system was far from perfect and was leaving too many people behind. CCC gives me the ability to put actions before words and connect with other passionate individuals who want to help bridge the gaps in healthcare inequity for those experiencing homelessness, and make some real meaningful, necessary change in the community."
  },
    {
    name: "Isabel levine",
    role: "Treasurer",
    image: "./IMG_2819.jpeg",
    bio: "I am passionate about mental and physical health especially relating to underfunded or overlooked populations. CCC is a way to engage in community outreach and help people while meeting other students who have the same goals."
  }
];

export const EXTERNAL_LINKS = {
  quiz: "https://aes-html.github.io/CCCMatcher/",
  groupme: "https://groupme.com/join_group/111422460/BTN6Netm",
  instagram: "https://www.instagram.com/care.collective.at.carolina?igsh=MTg0enlmamZrNzBqeQ==",
  email: "carecollective0@gmail.com"
};
