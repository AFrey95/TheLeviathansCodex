import { createReduxModule } from "hooks-for-redux";

export const [useAncestries, setAncestries, ancestriesStore] = createReduxModule("ancestries", []);
