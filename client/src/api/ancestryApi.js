import { getRequest } from "./methods";
import { ANCESTRIES } from "./routeDefinitions";
import { setAncestries } from "redux/ancestries";

export const fetchAncestries = async () => {
  return await getRequest(ANCESTRIES);
};

export const fetchAncestryById = async (id) => {
  return await getRequest(ANCESTRIES, id);
};

export const updateAncestries = async () => {
  const ancestries = await fetchAncestries();
  setAncestries(ancestries);
};
