import storyImage from "../../../assets/our-story.jpg";

import type { OurStoryConfig } from "./OurStory.types";

export const ourStoryConfig: OurStoryConfig = {
  eyebrow: "OUR STORY",

  title: "Connecting Kenyan Coffee",

  highlightedTitle: "With the World",

  paragraphs: [
    "Since our establishment, CEBBA has served as a trusted bridge between Kenyan coffee producers and  buyers. We are committed to promoting premium Kenyan coffee while fostering long-term partnerships built on transparency, quality, and mutual success.",

    "Working closely with farmers, cooperatives, millers, exporters, and global roasters, we ensure that every transaction reflects our dedication to excellence, sustainability, and fair trade. Our expertise allows us to consistently deliver exceptional coffee that meets the highest international standards.",
  ],

  image: storyImage,

  imageAlt: "Coffee farmers harvesting coffee cherries",

  features: [
    {
      id: "1",
      title: "Premium Coffee Brokerage",
    },
    {
      id: "2",
      title: "Global Export Network",
    },
    {
      id: "3",
      title: "Transparent Trade",
    },
    {
      id: "4",
      title: "Supporting Kenyan Farmers",
    },
  ],
};
