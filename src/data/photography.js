import { localize } from "../i18n.js";
// Local responsive assets. Source pages and licenses are recorded in README.md.
import hero640 from "../assets/images/dark-headlight-640.webp";
import hero1040 from "../assets/images/dark-headlight-1040.webp";
import hero1600 from "../assets/images/dark-headlight-1600.webp";
import exterior400 from "../assets/images/exterior-microfiber-400.webp";
import exterior800 from "../assets/images/exterior-microfiber-800.webp";
import paint400 from "../assets/images/paint-correction-400.webp";
import paint800 from "../assets/images/paint-correction-800.webp";
import ceramic400 from "../assets/images/coating-applicator-400.webp";
import ceramic800 from "../assets/images/coating-applicator-800.webp";
import interior400 from "../assets/images/interior-care-400.webp";
import interior800 from "../assets/images/interior-care-800.webp";
import editorial640 from "../assets/images/surface-polishing-640.webp";
import editorial1200 from "../assets/images/surface-polishing-1200.webp";

export const photos = localize({
  hero: {
    src: hero1600,
    srcset: `${hero640} 640w, ${hero1040} 1040w, ${hero1600} 1600w`,
    width: 1600, height: 1200,
    alt: "Detail světlometu a odrazů na tmavé metalické karoserii.",
  },
  exterior: {
    src: exterior800,
    srcset: `${exterior400} 400w, ${exterior800} 800w`,
    width: 800, height: 501,
    alt: "Ruce s mikrovláknovou utěrkou při péči o tmavou karoserii.",
  },
  paint: {
    src: paint800,
    srcset: `${paint400} 400w, ${paint800} 800w`,
    width: 800, height: 575,
    alt: "Ruce vedoucí leštičku po laku automobilu.",
  },
  ceramic: {
    src: ceramic800,
    srcset: `${ceramic400} 400w, ${ceramic800} 800w`,
    width: 800, height: 613,
    alt: "Kapka přípravku nad mikrovláknovým aplikátorem.",
  },
  interior: {
    src: interior800,
    srcset: `${interior400} 400w, ${interior800} 800w`,
    width: 800, height: 454,
    alt: "Čištění tmavého koženého sedadla mikrovláknovou utěrkou.",
  },
  editorial: {
    src: editorial1200,
    srcset: `${editorial640} 640w, ${editorial1200} 1200w`,
    width: 1200, height: 1166,
    alt: "Detail práce s leštičkou a světelných odrazů na karoserii.",
  },
});
