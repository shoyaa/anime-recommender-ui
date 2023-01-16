import {
  createCampaign,
  dashboard,
  payment,
  profile,
  withdraw,
} from "../public/assets";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "createCampaign",
    imgUrl: createCampaign,
    link: "/create-campaign",
  },
  {
    name: "payment",
    imgUrl: payment,
    link: "/",
    disabled: true,
  },

  {
    name: "profile",
    imgUrl: profile,
    link: "/profile",
  },
];

export const animeType = ["TV", "Movie", "Ova", "Ona", "Special", "Music"];
export const animeStatus = ["Airing", "Complete", "Upcoming"];
