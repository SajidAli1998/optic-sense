import client from "./client";
import clientDescription from "./clientDescription";
import contactInfo from "./contactInfo";
import service from "./service";
import serviceExp from "./serviceExp";
import socialLinks from "./socialLinks";
import stats from "./stats";

export const schema = {
  types: [
    contactInfo,
    socialLinks,
    service,
    serviceExp,
    client,
    stats,
    clientDescription,
  ],
};
