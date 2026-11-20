interface PublicationDetails {
  title: string;
  authors?: readonly string[];
  venue?: string;
  venueDetails?: string;
  summary?: string;
  doi?: string;
  url?: string;
}

type Published = PublicationDetails & {
  status: "published";
  citationDate: string; // ISO year, month, or day precision.
  firstOnline?: string;
};

type UnderReview = PublicationDetails & {
  status: "under-review";
  provisionalTitle?: boolean;
};

export type Publication = Published | UnderReview;

export const publications: readonly Publication[] = [
  {
    status: "published",
    title: "End-to-end deep learning pipeline for on-board extraterrestrial rock segmentation",
    authors: ["Daniel Marek", "Jakub Nalepa"],
    venue: "Engineering Applications of Artificial Intelligence",
    venueDetails: "127 (Part B), 107311",
    citationDate: "2024-01",
    summary:
      "Proposed and evaluated a complete deep learning pipeline for lunar surface segmentation, optimized for on-board inference in resource-constrained space systems.",
    doi: "10.1016/j.engappai.2023.107311",
    url: "https://doi.org/10.1016/j.engappai.2023.107311",
  },
  {
    status: "published",
    title: "Channel State Information Variability in BLE Positioning Measurements",
    authors: ["Daniel Marek", "Krzysztof Grochla", "Jakub Duda"],
    venue: "Advances in Systems Engineering (ICSEng 2021)",
    venueDetails: "Springer · pp. 293–300",
    citationDate: "2022",
    firstOnline: "2021-12-11",
    summary:
      "Measured signal variability across Bluetooth Low Energy channels and examined how changes in receiver orientation limit their use for indoor positioning.",
    doi: "10.1007/978-3-030-92604-5_26",
    url: "https://link.springer.com/chapter/10.1007/978-3-030-92604-5_26",
  },
  {
    status: "under-review",
    title: "Bird's Eye View perception for autonomous planetary rovers",
    venue: "Acta Astronautica",
    provisionalTitle: true,
  },
];
