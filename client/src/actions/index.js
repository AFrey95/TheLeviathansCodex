import axios from "axios";
import {
  FETCH_ANCESTRIES,
  FETCH_ANCESTRY_ONE,
  FETCH_BACKGROUNDS,
  FETCH_BACKGROUND_ONE,
  FETCH_CLASSES,
  FETCH_CLASS_ONE,
  FETCH_FEATS,
  FETCH_FEAT_ONE,
  FETCH_ITEMS,
  FETCH_ITEM_ONE,
  FETCH_MECHANICS,
  FETCH_MECHANIC_ONE,
  FETCH_MONSTERS,
  FETCH_MONSTER_ONE,
  FETCH_PROFESSIONS,
  FETCH_PROFESSION_ONE,
  FETCH_SPELLS,
  FETCH_SPELL_ONE,
  FETCH_SUBCLASSES,
  FETCH_SUBCLASS_ONE,
  FETCH_USER,
  POST,
} from "./types";

export const fetchUser = () => {
  return async (dispatch) => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
  };
};

export const fetchAncestries = () => {
  return async (dispatch) => {
    const res = await axios.get("/api/ancestries");
    dispatch({ type: FETCH_ANCESTRIES, payload: res.data });
  };
};

export const fetchAncestry = (id) => {
  return async (dispatch) => {
    const res = await axios.get(`/api/ancestries/${id}`);
    dispatch({ type: FETCH_ANCESTRY_ONE, payload: res.data });
  };
};

// prettier-ignore
export const postAncestry = (name, description, source, impression, link, abilityScoreIncrease, ageRange, alignment, languages, size, speed, traits) => { 
  return async (dispatch) => {
    dispatch({ type: POST, payload: "pending" });
    const res = await axios.post("/api/ancestries", {
      // prettier-ignore
      name, description, source, impression, link, abilityScoreIncrease, ageRange, alignment, languages, size, speed, traits
    });
    dispatch({ type: POST, payload: res.status });
  };
};

export const fetchBackgrounds = () => {
  return async (dispatch) => {
    const res = await axios.get("/api/backgrounds");
    dispatch({ type: FETCH_BACKGROUNDS, payload: res.data });
  };
};

export const fetchBackground = (id) => {
  return async (dispatch) => {
    const res = await axios.get(`/api/backgrounds/${id}`);
    dispatch({ type: FETCH_BACKGROUND_ONE, payload: res.data });
  };
};

// prettier-ignore
export const postBackground = (name, description, source, impression, link, isAdvancedBg, skillProficiencies, languages, equipment, professions) => {
  return async (dispatch) => {
    dispatch({ type: POST, payload: "pending"});
    const res = await axios.post('/api/backgrounds', {
      // prettier-ignore
      name, description, source, impression, link, isAdvancedBg, skillProficiencies, languages, equipment, professions
    })
    dispatch({ type: POST, payload: res.status })
  }
}

export const fetchClasses = () => {
  return async (dispatch) => {
    const res = await axios.get("/api/classes");
    dispatch({ type: FETCH_CLASSES, payload: res.data });
  };
};

export const fetchClass = (id) => {
  return async (dispatch) => {
    const res = await axios.get(`/api/classes/${id}`);
    dispatch({ type: FETCH_CLASS_ONE, payload: res.data });
  };
};

// prettier-ignore
export const postClass = (name, description, source, impression, link, hitDice, proficiencies, equipment, features) => {
  return async (dispatch) => {
    dispatch({ type: POST, payload: "pending" });
    const res = await axios.post('/api/classes', {
      // prettier-ignore
      name, description, source, impression, link, hitDice, proficiencies, equipment, features
    })
    dispatch({ type: POST, payload: res.status })
  }
}

export const fetchFeats = () => {
  return async (dispatch) => {
    const res = await axios.get("/api/feats");
    dispatch({ type: FETCH_FEATS, payload: res.data });
  };
};

export const fetchFeat = (id) => {
  return async (dispatch) => {
    const res = await axios.get(`/api/feats/${id}`);
    dispatch({ type: FETCH_FEAT_ONE, payload: res.data });
  };
};

// prettier-ignore
export const postFeat = (name, description, source, impression, link, prerequisites) => {
  return async (dispatch) => {
    dispatch({ type: POST, payload: "pending" });
    const res = await axios.post('/api/feats', {
      // prettier-ignore
      name, description, source, impression, link, prerequisites
    })
    dispatch({ type: POST, payload: res.status });
  }
}

export const fetchItems = () => {
  return async (dispatch) => {
    const res = await axios.get("/api/items");
    dispatch({ type: FETCH_ITEMS, payload: res.data });
  };
};

export const fetchItem = (id) => {
  return async (dispatch) => {
    const res = await axios.get(`/api/items/${id}`);
    dispatch({ type: FETCH_ITEM_ONE, payload: res.data });
  };
};

// prettier-ignore
export const postItem = (name, description, source, impression, link, type, isMagical, isRequiresAttunement, rarity) => {
  return async (dispatch) => {
    dispatch({ type: POST, payload: "pending" });
    const res = await axios.post('/api/items', {
      // prettier-ignore
      name, description, source, impression, link, type, isMagical, isRequiresAttunement, rarity
    })
    dispatch({ type: POST, payload: res.status });
  }
}

export const fetchMechanics = () => {
  return async (dispatch) => {
    const res = await axios.get("/api/mechanics");
    dispatch({ type: FETCH_MECHANICS, payload: res.data });
  };
};

export const fetchMechanic = (id) => {
  return async (dispatch) => {
    const res = await axios.get(`/api/mechanics/${id}`);
    dispatch({ type: FETCH_MECHANIC_ONE, payload: res.data });
  };
};

// prettier-ignore
export const postMechanic = (name, description, source, impression, link) => {
  return async (dispatch) => {
    dispatch({ type: POST, payload: "pending" });
    const res = await axios.post('/api/mechanics', {
      // prettier-ignore
      name, description, source, impression, link
    });
    dispatch({ type: POST, payload: res.status });
  }
}

export const fetchMonsters = () => {
  return async (dispatch) => {
    const res = await axios.get("/api/monsters");
    dispatch({ type: FETCH_MONSTERS, payload: res.data });
  };
};

export const fetchMonster = (id) => {
  return async (dispatch) => {
    const res = await axios.get(`/api/monsters/${id}`);
    dispatch({ type: FETCH_MONSTER_ONE, payload: res.data });
  };
};

// prettier-ignore
export const postMonster = (name, description, source, impression, link, armorClass, hitPoints, speed, skills, senses, challengeRating, traits, actions, reactions, lairActions, legendaryActions) => {
  return async (dispatch) => {
    dispatch({ type: POST, payload: "pending" });
    const res = await axios.post('/api/monsters', {
      // prettier-ignore
      name, description, source, impression, link, armorClass, hitPoints, speed, skills, senses, challengeRating, traits, actions, reactions, lairActions, legendaryActions
    });
    dispatch({ type: POST, payload: res.status });
  }
}

export const fetchProfessions = () => {
  return async (dispatch) => {
    const res = await axios.get("/api/professions");
    dispatch({ type: FETCH_PROFESSIONS, payload: res.data });
  };
};

export const fetchProfession = (id) => {
  return async (dispatch) => {
    const res = await axios.get(`/api/professions/${id}`);
    dispatch({ type: FETCH_PROFESSION_ONE, payload: res.data });
  };
};

// prettier-ignore
export const postProfession = (name, description, source, impression, link, skillProficiencies, equipment) => {
  return async (dispatch) => {
    dispatch({ type: POST, payload: "pending" });
    const res = await axios.post('/api/professions', {
      // prettier-ignore
      name, description, source, impression, link, skillProficiencies, equipment
    });
    dispatch({ type: POST, payload: res.status });
  }
}

export const fetchSpells = () => {
  return async (dispatch) => {
    const res = await axios.get("/api/spells");
    dispatch({ type: FETCH_SPELLS, payload: res.data });
  };
};

export const fetchSpell = (id) => {
  return async (dispatch) => {
    const res = await axios.get(`/api/spells/${id}`);
    dispatch({ type: FETCH_SPELL_ONE, payload: res.data });
  };
};

// prettier-ignore
export const postSpell = (name, description, source, impression, link, school, classes, level) => {
  return async (dispatch) => {
    dispatch({ type: POST, payload: "pending" });
    const res = await axios.post('/api/spells', {
      // prettier-ignore
      name, description, source, impression, link, school, classes, level
    });
    dispatch({ type: POST, payload: res.status })
  }
}

export const fetchSubclasses = () => {
  return async (dispatch) => {
    const res = await axios.get("/api/subclasses");
    dispatch({ type: FETCH_SUBCLASSES, payload: res.data });
  };
};

export const fetchSubclass = (id) => {
  return async (dispatch) => {
    const res = await axios.get(`/api/subclasses/${id}`);
    dispatch({ type: FETCH_SUBCLASS_ONE, payload: res.data });
  };
};

// prettier-ignore
export const postSubclass = (name, description, source, impression, link, clazz, features) => {
  return async (dispatch) => {
    dispatch({ type: POST, payload: "pending" });
    const res = await axios.post('/api/subclasses', {
      // prettier-ignore
      name, description, source, impression, link, class: clazz, features
    });
    dispatch({ type: POST, payload: res.status });
  }
}
