import { combineReducers } from "redux";
import authReducer from "./authReducer";
import ancestryReducer from "./ancestryReducer";
import backgroundReducer from "./backgroundReducer";
import classReducer from "./classReducer";
import featReducer from "./featReducer";
import itemReducer from "./itemReducer";
import mechanicReducer from "./mechanicReducer";
import monsterReducer from "./monsterReducer";
import professionReducer from "./professionReducer";
import retainerReducer from "./retainersReducer";
import spellReducer from "./spellReducer";
import subclassReducer from "./subclassReducer";
import postReducer from "./postReducer";

export default combineReducers({
  auth: authReducer,
  ancestries: ancestryReducer,
  backgrounds: backgroundReducer,
  classes: classReducer,
  feats: featReducer,
  items: itemReducer,
  mechanics: mechanicReducer,
  monsters: monsterReducer,
  professions: professionReducer,
  retainers: retainerReducer,
  spells: spellReducer,
  subclasses: subclassReducer,
  post: postReducer,
});
