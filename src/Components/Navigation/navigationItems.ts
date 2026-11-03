export type NavigationItem =
  | { label: string; type: "section"; id: string }
  | { label: string; type: "route"; path: string };

export const navigationItems: NavigationItem[] = [
  { label: "Home", type: "section", id: "home" },

  { label: "Services", type: "section", id: "services" },
  { label: "Our Approach", type: "section", id: "approach" },
  { label: "Contact", type: "section", id: "contact" },
  { label: "About Us", type: "route", path: "/about-us" 
  },
    { label: "Sessions", type: "route", path: "/dorisa-tv" },

  { label: "Events", type: "route", path: "/events" },
  {
    label: "Daily Motivational Quotes",
    type: "route",
    path: "/daily-motivations",
  },
  
];
