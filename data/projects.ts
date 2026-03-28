export const LOCATIONS = ["Ghaziabad", "Greater Noida", "Noida", "Yamuna", "Other Locations"] as const;
export type Location = typeof LOCATIONS[number];

export const PROPERTY_TYPES = ["Residential", "Commercial", "Industrial"] as const;
export type PropertyType = typeof PROPERTY_TYPES[number];

export interface Project {
  id: number;
  location: Location;
  type: PropertyType;
  title: string;
  info: string;
  image: string;
  badge?: "Hot" | "New" | "Premium";
  slug?: string; // optional – Industrial/generic projects have no detail page
}

export const NEW_PROJECTS: Project[] = [
  // Ghaziabad – Residential
  { id: 1, location: "Ghaziabad", type: "Residential", title: "VVIP Namah", info: "Luxury Residential Apartments", image: "/Project-images/vvip-namah.jpg", badge: "Hot", slug: "vvip-namah" },
  { id: 2, location: "Ghaziabad", type: "Residential", title: "The Kutumb", info: "Premium Family Residences", image: "/Project-images/The-kutumb.jpg", slug: "the-kutumb" },
  { id: 3, location: "Ghaziabad", type: "Residential", title: "Gaur NYC", info: "New York-Inspired Living", image: "/Project-images/Gaur-nyc.jpg", badge: "New", slug: "gaur-nyc" },

  // Ghaziabad – Commercial
  { id: 4, location: "Ghaziabad", type: "Commercial", title: "SKA Arcadia", info: "Premium Commercial Spaces", image: "/Project-images/SKA-arcadia.png", badge: "New", slug: "ska-arcadia" },
  { id: 5, location: "Ghaziabad", type: "Commercial", title: "Aditya Business Center", info: "Corporate Office Suites", image: "/Project-images/Aditya-Business-Center.png", slug: "aditya-business-center" },
  { id: 6, location: "Ghaziabad", type: "Commercial", title: "Anand Habitat ISBT, Sahibabad", info: "Commercial Hub near ISBT", image: "/Project-images/Anand-Habitat.png", slug: "anand-habitat" },

  // Ghaziabad – Industrial
  { id: 7, location: "Ghaziabad", type: "Industrial", title: "Factory Units", info: "Ready-to-Move Factory Sheds", image: "/Project-images/Factory-units.jpg", slug: "factory-units-ghaziabad" },
  { id: 8, location: "Ghaziabad", type: "Industrial", title: "Warehouse", info: "Grade-A Warehousing Spaces", image: "/Project-images/Warehouse.jpg", slug: "warehouse-ghaziabad" },
  { id: 9, location: "Ghaziabad", type: "Industrial", title: "Industrial Lands", info: "UPSIDA-Approved Industrial Plots", image: "/Project-images/Industrial-lands.jpg", slug: "industrial-lands-ghaziabad" },

  // Greater Noida – Residential
  { id: 10, location: "Greater Noida", type: "Residential", title: "VVIP Addresses", info: "Signature Luxury Residences", image: "/Project-images/vvip-address-greaternoida.png", badge: "Premium", slug: "vvip-addresses" },
  { id: 11, location: "Greater Noida", type: "Residential", title: "ACE Hane", info: "Smart 3/4 BHK Homes", image: "/Project-images/Ace-hanei.webp", slug: "ace-hane" },
  { id: 12, location: "Greater Noida", type: "Residential", title: "KVD", info: "Premium Residential Project", image: "/Project-images/KVC.jpg", badge: "New", slug: "kvd" },

  // Greater Noida – Commercial
  { id: 13, location: "Greater Noida", type: "Commercial", title: "Trehan IRIS", info: "Commercial Shops & Suites", image: "/Project-images/trehan-iris.webp", slug: "trehan-iris" },
  { id: 14, location: "Greater Noida", type: "Commercial", title: "KB West Walk", info: "Retail & Entertainment Hub", image: "/Project-images/KB West Walk.webp", badge: "Hot", slug: "kb-west-walk" },
  { id: 15, location: "Greater Noida", type: "Commercial", title: "Bhutani Astrathum", info: "Premium Commercial Tower", image: "/Project-images/bhutani-astrathum.jpg", slug: "bhutani-astrathum" },

  // Greater Noida – Industrial
  { id: 16, location: "Greater Noida", type: "Industrial", title: "Factory Units", info: "Approved Industrial Units", image: "/Project-images/Factory-units-2.jpg", slug: "factory-units-greater-noida" },
  { id: 17, location: "Greater Noida", type: "Industrial", title: "Warehouse", info: "Grade-A Logistics Facilities", image: "/Project-images/Warehouse-2.jpg", slug: "warehouse-greater-noida" },
  { id: 18, location: "Greater Noida", type: "Industrial", title: "Industrial Lands", info: "UPSIDA-Approved Land Parcels", image: "/Project-images/Industrial-lands-2.jpg", slug: "industrial-lands-greater-noida" },

  // Noida – Residential
  { id: 19, location: "Noida", type: "Residential", title: "Ivory County", info: "Luxury High-Rise Residences", image: "/Project-images/Ivory-County.jpg", badge: "Premium", slug: "ivory-county" },
  { id: 20, location: "Noida", type: "Residential", title: "NBCC Aspire Silicon City", info: "Government-Backed Premium Homes", image: "/Project-images/nbcc.jpg", slug: "nbcc-aspire-silicon-city" },
  { id: 21, location: "Noida", type: "Residential", title: "Gaur Sports Wood", info: "Sports-Themed Residences", image: "/Project-images/gaurs-sportswood.png", badge: "New", slug: "gaur-sports-wood" },

  // Noida – Commercial
  { id: 22, location: "Noida", type: "Commercial", title: "M3M The Line", info: "High-Street Commercial Spaces", image: "/Project-images/m3m-the-line.webp", badge: "Hot", slug: "m3m-the-line" },
  { id: 23, location: "Noida", type: "Commercial", title: "Spectrum Metro", info: "Metro-Adjacent Commercial Hub", image: "/Project-images/spectrum-metro.jpg", slug: "spectrum-metro" },
  { id: 24, location: "Noida", type: "Commercial", title: "M3M Jewel Crest Avenue", info: "Premium Retail & Office Spaces", image: "/Project-images/m3m-jwell-crust.webp", slug: "m3m-jewel-crest-avenue" },

  // Noida – Industrial
  { id: 25, location: "Noida", type: "Industrial", title: "Factory Units", info: "Industrial Production Facilities", image: "/Project-images/Factory-units.jpg", slug: "factory-units-noida" },
  { id: 26, location: "Noida", type: "Industrial", title: "Warehouse", info: "Modern Warehousing Solutions", image: "/Project-images/Warehouse.jpg", slug: "warehouse-noida" },
  { id: 27, location: "Noida", type: "Industrial", title: "Industrial Lands", info: "UPSIDA-Approved Land Parcels", image: "/Project-images/Industrial-lands.jpg", slug: "industrial-lands-noida" },

  // Yamuna – Residential
  { id: 28, location: "Yamuna", type: "Residential", title: "Solitarian City", info: "Expressway Lifestyle Residences", image: "/Project-images/Solitarian-city.png", badge: "Hot", slug: "solitarian-city" },
  { id: 29, location: "Yamuna", type: "Residential", title: "Eldeco Whispers of Wonder", info: "Premium Gated Community", image: "/Project-images/eldeco-Whispers.png", slug: "eldeco-whispers-of-wonder" },
  { id: 30, location: "Yamuna", type: "Residential", title: "Gaur Crystalist", info: "Crystal-Themed Luxury Living", image: "/Project-images/gaur-crystalis.webp", badge: "New", slug: "gaur-crystalist" },

  // Yamuna – Commercial
  { id: 31, location: "Yamuna", type: "Commercial", title: "Ace Edit", info: "Contemporary Commercial Spaces", image: "/Project-images/Ace-edit.jpg", slug: "ace-edit" },
  { id: 32, location: "Yamuna", type: "Commercial", title: "Ace Hive", info: "Business & Co-Working Hub", image: "/Project-images/ace-hive.webp", badge: "New", slug: "ace-hive" },
  { id: 33, location: "Yamuna", type: "Commercial", title: "Gaur Yamuna City", info: "Integrated Commercial Township", image: "/Project-images/Gaur-yamuna-city.png", slug: "gaur-yamuna-city" },

  // Yamuna – Industrial
  { id: 34, location: "Yamuna", type: "Industrial", title: "Factory Units", info: "UPSIDA Industrial Factory Sheds", image: "/Project-images/Factory-units-2.jpg", slug: "factory-units-yamuna" },
  { id: 35, location: "Yamuna", type: "Industrial", title: "Warehouse", info: "Expressway Logistics Parks", image: "/Project-images/Warehouse-2.jpg", slug: "warehouse-yamuna" },
  { id: 36, location: "Yamuna", type: "Industrial", title: "Industrial Lands", info: "Industrial Zone Land Parcels", image: "/Project-images/Industrial-lands-2.jpg", slug: "industrial-lands-yamuna" },
];

export const OTHER_LOCATIONS = [
  "Himachal Pradesh", "Uttar Pradesh (Other)", "Uttarakhand", "Pune", "Mumbai", "Bangalore", "Hyderabad", "Punjab"
];
