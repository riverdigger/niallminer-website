import { faGithub, faLinkedin, faInstagram, faSpotify, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faCode, faGamepad, faPhotoVideo, faRocket, faSearch, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export const experience = [
  {
    title: "Software Engineer II",
    subtitle: "Microsoft",
    description: [
      "Developed and maintained an API gateway for an edge/cloud IoT environment",
      "Containerized API for use in Kubernetes deployments",
      "Added deployment pipelines and E2E test pipelines for infrastructure",
      "Improved security of existing infrastructure by utilizing managed identities in 70+ services",
    ],
    image: "./aio.png",
    link: "https://azure.microsoft.com/en-us/products/iot-operations",
    tags: [
      "Golang",
      "NodeJS",
      ".NET",
    ],
    icon: faMicrosoft,
  },
  {
    title: "Ruby Developer",
    subtitle: "WellFence",
    description: [
      "Created functionality and design of entire web app that is used by ops center and clients",
      "Track user information and activity for well locations across the Permian Basin",
      "Increased automation and improved UI/UX",
      "Utilized AWS Buckets, REST APIs, Twilio, and AJAX Charts",
    ],
    image: "./wellfence-1.gif",
    link: "https://wellfence.com",
    tags: [
      "Ruby",
      "PostgreSQL",
      "FullStack",
    ],
    icon: faCode,
  },
  {
    title: "QA Tester",
    subtitle: "Six Foot Games",
    description: [
      "Troubleshooted and tracked bugs for PS4/PC versions of the video game Dreadnought",
      "Implemented pushing/pulling patches and builds to multiple machines",
      "Successfully assisted the team in releasing the product to Steam and Playstation Store",
    ],
    image: "./dreadnought-1.gif",
    link: "https://store.steampowered.com/app/835860/Dreadnought/",
    tags: [
      "Python",
      "Jira",
      "Confluence",
    ],
    icon: faGamepad,
  },
  {
    title: "Media Developer",
    subtitle: "Trefny Center",
    description: [
      "Renewed the department’s website with a whole new UI/UX with user feedback",
      "Improved the quality of teaching at Colorado School of Mines through supplemental instructional videos and graphics",
    ],
    image: "./trefnycenter-1.gif",
    link: "https://trefnycenter.mines.edu/",
    tags: [
      "HTML 5",
      "JavaScript",
      "Premiere Pro",
    ],
    icon: faPhotoVideo,
  },
  {
    title: "Software Intern",
    subtitle: "Deep Space Systems",
    description: [
      "Constructed and tested hardware kits to be used on the Orion Spacecraft",
      "Used automation in Linux environments to create and run bash scripts for command line interaction to run tests and collect camera data.",
    ],
    image: "./deepspacesystems-1.gif",
    link: "https://www.deepspacesystems.com/",
    tags: [
      "Bash Script",
      "Linux OS",
      "Automation",
    ],
    icon: faRocket,
  },
];

export const projects = [
  {
    title: "Unreal Engine 5 Project",
    description: "I am developing a competitive roguelite MOBA, with a heavy emphasis on teamwork, unique builds, and skill expression. Join and host games of 5v5, where teams will work together to eliminate all enemy players or capture their flag.",
    links: [
      {link: "https://mousen.itch.io/mousen", icon: faGithub},
    ],
    tags: [
      "UE5",
      "C++",
    ],
    image: "",
    active: true,
  },
  {
    title: "Windfall Village Website",
    description: "Created a ReactJS website to host all of the artwork for I made using my pixel art assets. These collectable villagers now have a place to live!",
    links: [
      {link: "https://www.windfallvillage.com/", icon: faExternalLinkAlt},
    ],
    tags: [
      "ReactJS",
      "Pixel Art",
    ],
    image: "./lineup.png",
    active: false,
  },
  {
    title: "Top-Down Pixel RPG",
    description: "Role playing demo written in the Godot engine with over 1,249,500 different possible character combinations. Utilizes UI/UX pixel art as well as Zelda-like game mechanics.",
    links: [
      {link: "https://github.com/riverdigger/WindFall", icon: faGithub},
    ],
    tags: [
      "Godot",
      "Pixel Art",
    ],
    image: "./run_left.gif",
    active: false,
  },
  {
    title: "Order PDF Analyzer",
    description: "Drilling Tools Intl online shopping API add-on to make it easier for part order creation. This app accepts a Schlumberger order PDF and parses the file to show resulting part list and similar items for a DTI shopping cart.",
    links: [
      {link: "https://compass-uploader.herokuapp.com/", icon: faExternalLinkAlt},
    ],
    tags: [
      "OCR",
      "Ruby",
    ],
    image: "./compass_project.png",
    active: false,
  },
  {
    title: "Drawing Mobile App",
    description: "Mobile app with mobile drawing in mind, while still keeping things simple. Coded in Android Studio, Pixelli is an app that allows for local saving to your device, as well as Pixelli’s own gallery in app.",
    links: [
      {link: "https://www.youtube.com/watch?v=mKBNUeW3T1Q", icon: faExternalLinkAlt},
    ],
    tags: [
      "Android Studio",
    ],
    image: "./pixelli.png",
    active: false,
  },
  {
    title: "Blinn-Phong Research",
    description: "Research paper about a depth based cel shader program written in OpenGL. The program optimizes render performance by lowering the polygon count of objects further away from the camera.",
    links: [
      {link: "./graphics_project_proposal.pdf", icon: faExternalLinkAlt},
    ],
    tags: [
      "OpenGL",
      "Blinn-Phong",
    ],
    image: "./cel_shaded.png",
    active: false,
  },
];

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/riverdigger",
    color: "text-black",
    icon: faGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/niallminer/",
    color: "text-blue-400",
    icon: faLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/niallmino/",
    color: "text-red-400",
    icon: faInstagram,
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/4vtCqwB29gswN0fEKFRdCA?si=EXm50OzNQFus1d7Dd4pznA&dl_branch=1",
    color: "text-green-400",
    icon: faSpotify,
  },
];
