import { media, type MediaKey } from "./media";

export type GalleryImage = { key: MediaKey; alt: string };

export type Villa = {
  slug: string;
  code: string;
  name: string;
  plotArea: string;
  units: number;
  style: string;
  builtUpArea: string;
  totalBuildingArea: string;
  greenArea: string;
  floors: string;
  facade: string;
  tagline: string;
  intro: string;
  hero: MediaKey;
  card: MediaKey;
  groundPlan: MediaKey;
  firstPlan: MediaKey;
  groundFeatures: string[];
  firstFeatures: string[];
  gallery: GalleryImage[];
};

export const villas: Villa[] = [
  {
    slug: "type-a",
    code: "01",
    name: "Villa Type A",
    plotArea: "500 sqm",
    units: 112,
    style: "Contemporary Classical",
    builtUpArea: "255 sqm",
    totalBuildingArea: "510 sqm",
    greenArea: "115 sqm",
    floors: "2 floors",
    facade: "Stone, plaster, ceramic, glass",
    tagline: "The signature residence",
    intro:
      "The largest typology in Knowledge Village. A 500 sqm plot with a full stone facade, a double-height arched entrance, and 255 sqm on each of two floors — planned around four bedrooms, dual kitchens and generous reception spaces.",
    hero: "p-004-007",
    card: "p-008-017",
    groundPlan: "p-005-008",
    firstPlan: "first-6",
    groundFeatures: [
      "Entrance",
      "Living room",
      "Dining",
      "Reception",
      "Cold kitchen",
      "Hot kitchen",
      "Master bedroom",
      "Bathroom",
      "Service",
    ],
    firstFeatures: [
      "Master bedroom 1",
      "Master bedroom 2",
      "Master bedroom 3",
      "Bedroom (two single beds)",
      "Laundry",
    ],
    gallery: [
      { key: "p-008-017", alt: "Villa Type A stone facade with dark mansard roof" },
      { key: "p-005-009", alt: "Villa Type A front elevation seen from the street" },
      { key: "p-006-010", alt: "Grand entrance of Villa Type A with columns and white double doors" },
      { key: "p-006-011", alt: "Full facade of Villa Type A among mature landscaping" },
      { key: "p-007-012", alt: "Close-up of the Type A entrance doors and stone detailing" },
      { key: "p-007-013", alt: "Aerial view of the Type A garden and seating area" },
      { key: "p-007-014", alt: "Resident standing on the arched balcony of Villa Type A" },
      { key: "p-007-015", alt: "Wrought iron gate at the entrance of Villa Type A" },
      { key: "p-007-016", alt: "Low-angle view of the Type A columns and flower beds" },
      { key: "p-009-018", alt: "Outdoor patio furniture in the Type A garden" },
      { key: "p-009-019", alt: "Lavender and tulip planting beside the Type A terrace" },
      { key: "p-009-020", alt: "Classical entrance of Villa Type A framed by flowers" },
      { key: "p-009-021", alt: "Dormer window and carved stone corbels on the Type A roofline" },
      { key: "p-026-061", alt: "Villa Type A at dusk with manicured landscaping" },
      { key: "p-027-062", alt: "Stone facade of Villa Type A with residents in the foreground" },
    ],
  },
  {
    slug: "type-b",
    code: "02",
    name: "Villa Type B",
    plotArea: "300 sqm",
    units: 234,
    style: "Contemporary Classical",
    builtUpArea: "171.5 sqm",
    totalBuildingArea: "343 sqm",
    greenArea: "62.56 sqm",
    floors: "2 floors",
    facade: "Stone, brick, plaster, ceramic, glass",
    tagline: "Brick elegance, family scale",
    intro:
      "A 300 sqm plot with a warm brick and stone facade, arched windows and a private front garden. Two floors of 171.5 sqm deliver four bedrooms plus separate reception and family living areas.",
    hero: "p-010-022",
    card: "p-014-032",
    groundPlan: "p-011-023",
    firstPlan: "first-12",
    groundFeatures: [
      "Entrance",
      "Living room",
      "Dining",
      "Reception",
      "Cold kitchen",
      "Hot kitchen",
      "Master bedroom",
      "Bathroom",
      "Storage",
      "WC",
    ],
    firstFeatures: ["Master bedroom 1", "Master bedroom 2", "Master bedroom 3", "Laundry"],
    gallery: [
      { key: "p-014-032", alt: "Villa Type B brick facade with dark mansard roof" },
      { key: "p-011-024", alt: "Front elevation of Villa Type B seen from the street" },
      { key: "p-012-025", alt: "Columned entrance of Villa Type B in brick and stone" },
      { key: "p-012-026", alt: "Full brick facade of Villa Type B with landscaping" },
      { key: "p-013-027", alt: "Arched window and black metal railing on the Type B facade" },
      { key: "p-013-028", alt: "Aerial view of the Type B house, garden and driveway" },
      { key: "p-013-029", alt: "Stone balcony detail on the Type B brick facade" },
      { key: "p-013-030", alt: "Dormer window set into the slate roof of Villa Type B" },
      { key: "p-013-031", alt: "Patio furniture surrounded by lavender at Villa Type B" },
      { key: "p-015-033", alt: "Entrance columns and brickwork detail of Villa Type B" },
      { key: "p-015-034", alt: "Black metal fence and planting in front of Villa Type B" },
      { key: "p-015-035", alt: "Garden seating with fabric cushions at Villa Type B" },
      { key: "p-015-036", alt: "Red brickwork meeting a light stone element on Type B" },
    ],
  },
  {
    slug: "type-c",
    code: "03",
    name: "Villa Type C",
    plotArea: "250 sqm",
    units: 364,
    style: "Contemporary Classical",
    builtUpArea: "142 sqm",
    totalBuildingArea: "284 sqm",
    greenArea: "56.5 sqm",
    floors: "2 floors",
    facade: "Stone, brick, plaster, ceramic, glass",
    tagline: "The most requested typology",
    intro:
      "With 364 units, Type C is the heart of Knowledge Village. A 250 sqm plot with a central balcony, brick and stone detailing, and 142 sqm per floor arranged for efficient, comfortable family living.",
    hero: "p-016-037",
    card: "p-020-047",
    groundPlan: "p-017-038",
    firstPlan: "first-18",
    groundFeatures: [
      "Entrance",
      "Living room",
      "Dining",
      "Reception",
      "Cold kitchen",
      "Hot kitchen",
      "Master bedroom",
      "Bathroom",
      "Storage",
      "WC",
    ],
    firstFeatures: [
      "Master bedroom 1",
      "Master bedroom 2",
      "Master bedroom 3",
      "Bathroom",
      "Laundry",
    ],
    gallery: [
      { key: "p-020-047", alt: "Villa Type C brick facade with balconies and mansard roof" },
      { key: "p-017-039", alt: "Villa Type C front elevation with central balcony" },
      { key: "p-018-040", alt: "Wrought iron gate at the entrance of Villa Type C" },
      { key: "p-018-041", alt: "Resident on the central balcony of Villa Type C" },
      { key: "p-019-042", alt: "Woman looking out from a Type C balcony" },
      { key: "p-019-043", alt: "Garden path leading to the Type C entrance" },
      { key: "p-019-044", alt: "White entrance door with brass handle at Villa Type C" },
      { key: "p-019-045", alt: "Iron gate and planting in front of Villa Type C" },
      { key: "p-019-046", alt: "Arched window on the brick facade of Villa Type C" },
      { key: "p-021-048", alt: "Villa Type C brick facade against an open sky" },
      { key: "p-022-049", alt: "White double doors with dark shutters at Villa Type C" },
      { key: "p-022-050", alt: "Arched dormer window in the slate roof of Type C" },
      { key: "p-022-051", alt: "Light brickwork and stone window sill with lavender" },
      { key: "p-022-052", alt: "Red brick wall meeting a light stone element on Type C" },
    ],
  },
  {
    slug: "type-d",
    code: "04",
    name: "Villa Type D",
    plotArea: "200 sqm",
    units: 310,
    style: "Contemporary Classical",
    builtUpArea: "122 sqm",
    totalBuildingArea: "244 sqm",
    greenArea: "49 sqm",
    floors: "2 floors",
    facade: "Stone, plaster, ceramic, glass",
    tagline: "The efficient entry into the village",
    intro:
      "A 200 sqm plot that keeps the same classical language at a compact scale. 122 sqm per floor, a private green area of 49 sqm, and a layout that still delivers four bedrooms across two floors.",
    hero: "p-023-054",
    card: "p-025-060",
    groundPlan: "p-023-053",
    firstPlan: "first-24",
    groundFeatures: [
      "Entrance",
      "Living room",
      "Dining",
      "Reception",
      "Cold kitchen",
      "Hot kitchen",
      "Master bedroom",
      "Bathroom",
      "Service",
    ],
    firstFeatures: [
      "Master bedroom 1",
      "Master bedroom 2",
      "Master bedroom 3",
      "Bathroom",
      "Laundry",
    ],
    gallery: [
      { key: "p-025-060", alt: "Villa Type D facade with balcony and dormer windows" },
      { key: "p-023-054", alt: "Villa Type D front elevation with garden planting" },
      { key: "p-024-055", alt: "Entrance columns of Villa Type D with a resident" },
      { key: "p-024-056", alt: "Full facade of Villa Type D with windows and dormers" },
      { key: "p-025-057", alt: "Resident on the balcony of Villa Type D" },
      { key: "p-025-058", alt: "Aerial view of the Type D garden with people at a table" },
      { key: "p-025-059", alt: "Wrought iron gate and white columns at Villa Type D" },
    ],
  },
];

export const getVilla = (slug: string) => villas.find((v) => v.slug === slug);

export const projectFacts = [
  { label: "Site area", value: "430,000 sqm" },
  { label: "Residential units", value: "1,020" },
  { label: "Villa typologies", value: "4" },
  { label: "Design year", value: "2026" },
];

export const amenities = [
  {
    title: "Commercial district",
    description: "Retail frontage and offices along the main boulevard, minutes from every plot.",
  },
  {
    title: "School",
    description: "An on-site school so families never commute for education.",
  },
  {
    title: "Mosque",
    description: "A community mosque placed at the centre of the neighbourhood.",
  },
  {
    title: "Supermarket",
    description: "Daily shopping within walking distance of every villa cluster.",
  },
  {
    title: "Service buildings",
    description: "Maintenance, utilities and management facilities integrated into the plan.",
  },
  {
    title: "Parks & boulevards",
    description: "Tree-lined streets, landscaped boulevards, public parks and a central plaza.",
  },
];

export const contact = {
  company: "MAP Consultancy Office",
  discipline: "Engineering Design & Consultancy",
  address: "Kurdistan, Hawler, EMPIRE — T3 · F9 · 05",
  phone: "0750 448 7852",
  phoneHref: "+9647504487852",
  email: "Architectdlo@gmail.com",
};

export const heroVideo = media["teaser-home"];
export const heroPoster = media["poster-home"];
export const eleganceVideo = media["teaser-elegance"];
export const elegancePoster = media["poster-elegance"];
export const masterplanImage = media["p-002-002"];
