import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

import type { ContactConfig } from "./Contact.types";

import { CONTACT } from "./Contact.constants";

import contactImage from "@/assets/coffee-plaza.jpg";

export const contactConfig: ContactConfig = {
  eyebrow: CONTACT.EYEBROW,

  title: CONTACT.TITLE,

  image: {
    src: contactImage,
    alt: "Coffee Plaza",
  },

  contactItems: [
    {
      icon: PhoneIcon,

      title: "Call Us",

      items: ["0113555333", "0113555222", "0722919029"],
    },

    {
      icon: LanguageIcon,

      title: "Website",

      items: ["www.cebba.ke"],
    },

    {
      icon: LocationOnIcon,

      title: "Visit Us",

      items: ["Coffee Plaza", "Exchange Lane", "Off Haile Selassie Avenue"],
    },
  ],

  socials: [
    {
      icon: FacebookIcon,
      label: "Facebook",
      url: "#",
    },

    {
      icon: InstagramIcon,
      label: "Instagram",
      url: "#",
    },

    {
      icon: XIcon,
      label: "X",
      url: "#",
    },

    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      url: "#",
    },
  ],
};
