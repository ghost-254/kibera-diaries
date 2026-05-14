export type Tour = {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  groupSize: string;
  languages: string;
  image: string;
  highlights: string[];
};

export const tours: Tour[] = [
  {
    id: "kibera-walking-tour",
    title: "Kibera Walking Tour",
    description: "Explore vibrant streets, markets, workshops, schools, and daily life with guides who know every turn of the route.",
    price: 35,
    duration: "3 hours",
    groupSize: "Small groups, max 8",
    languages: "English and Swahili",
    image: "/images/tours/1746790395_Walking-tour.jpg",
    highlights: ["Local markets", "Community stories", "Resident-led route"],
  },
  {
    id: "art-culture-experience",
    title: "Art and Culture Experience",
    description: "Meet local artists, explore Kibera's creative scene, and take home a deeper sense of the people behind the work.",
    price: 45,
    duration: "4 hours",
    groupSize: "Private tours available",
    languages: "English and Swahili",
    image: "/images/tours/1746790774_cultural.jpg",
    highlights: ["Artist visits", "Creative workshops", "Cultural exchange"],
  },
  {
    id: "community-projects-tour",
    title: "Community Projects Tour",
    description: "Visit local initiatives making a difference in education, health, entrepreneurship, and environmental care.",
    price: 40,
    duration: "4 hours",
    groupSize: "Groups up to 10",
    languages: "English and Swahili",
    image: "/images/tours/1746790813_tour.jpg",
    highlights: ["Social impact", "Youth programs", "Community initiatives"],
  },
  {
    id: "photography-tour",
    title: "Photography Tour",
    description: "Capture Kibera with guidance from local storytellers who help you frame scenes with respect and context.",
    price: 65,
    duration: "2.5 hours",
    groupSize: "Small groups, max 4",
    languages: "English and Swahili",
    image: "/images/tours/1746790796_kibera-slum-tour-experience-26.jpg",
    highlights: ["Golden hour route", "Consent-aware shooting", "Street scenes"],
  },
  {
    id: "music-dance-experience",
    title: "Music and Dance Experience",
    description: "Step into Kibera's music scene and learn how performance, rhythm, and movement carry community memory.",
    price: 50,
    duration: "3 hours",
    groupSize: "Private tours",
    languages: "English and Swahili",
    image: "/images/tours/1746790837_dance.jpg",
    highlights: ["Live performance", "Dance session", "Local artists"],
  },
];

export const guides = [
  {
    name: "Wycliffe Oketch",
    role: "Lead community guide",
    image: "/images/team/wycliffe_oketch.jpeg",
    bio: "A Kibera storyteller focused on safe routes, honest context, and guest experiences that benefit residents.",
  },
  {
    name: "Omondi Austine",
    role: "Culture and projects host",
    image: "/images/team/omondi_austine.jpeg",
    bio: "Connects visitors with artists, youth programs, and the everyday entrepreneurship that shapes Kibera.",
  },
  {
    name: "Metrine Ombuya",
    role: "Guest experience coordinator",
    image: "/images/team/metrine_ombuya.jpeg",
    bio: "Keeps tour planning clear, warm, and responsive from first message through final confirmation.",
  },
];

export const impactStats = [
  { value: "2,000+", label: "Happy visitors" },
  { value: "50+", label: "Local partners" },
  { value: "98%", label: "Positive reviews" },
  { value: "$100K+", label: "Community value" },
];
