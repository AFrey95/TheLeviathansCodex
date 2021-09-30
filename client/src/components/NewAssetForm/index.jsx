import React, { useState } from "react";
import { connect } from "react-redux";
import { Select } from "react-materialize";
import _ from "lodash";
import c from "classnames";
import styles from "./index.module.scss";
import FormType from "./FormType";
import useForm from "hooks/useForm";
import useCheckbox from "hooks/useCheckbox";
import useTextarea from "hooks/useTextarea";
import * as actions from "actions";

const {
  ANCESTRIES,
  BACKGROUNDS,
  CLASSES,
  FEATS,
  ITEMS,
  MECHANICS,
  MONSTERS,
  PROFESSIONS,
  SPELLS,
  SUBCLASSES,
} = FormType;

const NewAssetForm = (props) => {
  const [formType, setFormType] = useState(ANCESTRIES);
  const [name, Name, setName] = useForm("", "Name");
  const [description, Description, setDescription] = useTextarea(
    "",
    "Description"
  );
  const [source, Source, setSource] = useForm("", "Source");
  const [impression, Impression, setImpression] = useForm("", "Impression");
  const [link, Link, setLink] = useForm("", "Link");
  const [abilityScoreIncrease, AbilityScoreIncrease, setAbilityScoreIncrease] =
    useForm("", "Ability Score Increase");
  const [ageRange, AgeRange, setAgeRange] = useForm("", "AgeRange");
  const [alignment, Alignment, setAlignment] = useForm("", "Alignment");
  const [size, Size, setSize] = useForm("", "Size");
  const [speed, Speed, setSpeed] = useForm("", "Speed");
  const [traits, Traits, setTraits] = useForm("", "Traits");
  const [isAdvancedBg, AdvancedBg, setIsAdvancedBg] = useCheckbox(
    false,
    "Advanced Background"
  );
  const [skillProficiencies, SkillProficiencies, setSkillProficiencies] =
    useForm("", "Skill Proficiencies");
  const [languages, Languages, setLanguages] = useForm("", "Languages");
  const [equipment, Equipment, setEquipment] = useForm("", "Equipment");
  const [professions, Professions, setProfessions] = useForm("", "Professions");
  const [hitDice, HitDice, setHitDice] = useForm("", "Hit Dice");
  const [proficiencies, Proficiencies, setProficiencies] = useForm(
    "",
    "Proficiencies"
  );
  const [features, Features, setFeatures] = useForm("", "Features");
  const [prerequisites, Prerequisites, setPrerequisites] = useForm(
    "",
    "Prerequisites"
  );
  const [itemType, ItemType, setItemType] = useForm("", "Item Type");
  const [isMagical, Magical, setIsMagical] = useCheckbox(false, "Magical");
  const [isRequiresAttunement, RequiresAttunement, setIsRequiresAttunement] =
    useCheckbox(false, "Requires Attunement");
  const [rarity, Rarity, setRarity] = useForm("", "Rarity");
  const [armorClass, ArmorClass, setArmorClass] = useForm("", "Armor Class");
  const [hitPoints, HitPoints, setHitPoints] = useForm("", "Hit Points");
  const [skills, Skills, setSkills] = useForm("", "Skills");
  const [senses, Senses, setSenses] = useForm("", "Senses");
  const [challengeRating, ChallengeRating, setChallengeRating] = useForm(
    "",
    "Challenge Rating"
  );
  const [actions, Actions, setActions] = useForm("", "Actions");
  const [reactions, Reactions, setReactions] = useForm("", "Reactions");
  const [lairActions, LairActions, setLairActions] = useForm(
    "",
    "Lair Actions"
  );
  const [legendaryActions, LegendaryActions, setLegendaryActions] = useForm(
    "",
    "Legendary Actions"
  );
  const [school, School, setSchool] = useForm("", "School");
  const [classes, Classes, setClasses] = useForm("", "Classes");
  const [level, Level, setLevel] = useForm("", "Level");
  const [clazz, Class, setClass] = useForm("", "Main Class");

  const inputsByType = {
    ANCESTRIES: [
      AbilityScoreIncrease,
      AgeRange,
      Alignment,
      Languages,
      Size,
      Speed,
      Traits,
    ],
    BACKGROUNDS: [
      AdvancedBg,
      SkillProficiencies,
      Languages,
      Equipment,
      Professions,
    ],
    CLASSES: [HitDice, Proficiencies, Equipment, Features],
    FEATS: [Prerequisites],
    ITEMS: [ItemType, Magical, RequiresAttunement, Rarity],
    MECHANICS: [],
    MONSTERS: [
      ArmorClass,
      HitPoints,
      Speed,
      Skills,
      Senses,
      Languages,
      ChallengeRating,
      Traits,
      Actions,
      Reactions,
      LairActions,
      LegendaryActions,
    ],
    PROFESSIONS: [SkillProficiencies, Equipment],
    SPELLS: [School, Classes, Level],
    SUBCLASSES: [Class, Features],
  };

  const formInputs = () => (
    <div>
      {[Name, Source, Impression, Link]}
      {inputsByType[formType]}
      {Description}
    </div>
  );

  const formActions = () => (
    <div className={c(styles.actions, "row")}>
      <div className="col s6 offset-s3">
        <div className="right">
          <a
            href="#!"
            className={c(
              styles.resetButton,
              "waves-effect waves-teal btn-flat"
            )}
            onClick={resetForm}
          >
            reset
          </a>
          <a
            href="#!"
            className={c(styles.submitButton, "waves-effect waves-light btn")}
            onClick={submitForm}
          >
            submit
          </a>
        </div>
      </div>
    </div>
  );

  const submitForm = () => {
    switch (formType) {
      case ANCESTRIES:
        // prettier-ignore
        props.postAncestry(name, description, source, impression, link, abilityScoreIncrease, ageRange, alignment, languages, size, speed, traits);
        resetForm();
        break;
      case BACKGROUNDS:
        // prettier-ignore
        props.postBackground(name, description, source, impression, link, isAdvancedBg, skillProficiencies, languages, equipment, professions);
        resetForm();
        break;
      case CLASSES:
        // prettier-ignore
        props.postClass(name, description, source, impression, link, hitDice, proficiencies, equipment, features);
        resetForm();
        break;
      case FEATS:
        // prettier-ignore
        props.postFeat(name, description, source, impression, link, prerequisites);
        resetForm();
        break;
      case ITEMS:
        // prettier-ignore
        props.postItem(name, description, source, impression, link, itemType, isMagical, isRequiresAttunement, rarity);
        resetForm();
        break;
      case MECHANICS:
        // prettier-ignore
        props.postMechanic(name, description, source, impression, link);
        resetForm();
        break;
      case MONSTERS:
        // prettier-ignore
        props.postMonster(name, description, source, impression, link, armorClass, hitPoints, speed, skills, senses, challengeRating, traits, actions, reactions, lairActions, legendaryActions);
        resetForm();
        break;
      case PROFESSIONS:
        // prettier-ignore
        props.postProfession(name, description, source, impression, link, skillProficiencies, equipment);
        resetForm();
        break;
      case SPELLS:
        // prettier-ignore
        props.postSpell(name, description, source, impression, link, school, classes, level);
        resetForm();
        break;
      case SUBCLASSES:
        // prettier-ignore
        props.postSubclass(name, description, source, impression, link, clazz, features);
        resetForm();
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setSource("");
    setImpression("");
    setLink("");
    setAbilityScoreIncrease("");
    setAgeRange("");
    setAlignment("");
    setSize("");
    setSpeed("");
    setTraits("");
    setIsAdvancedBg(false);
    setSkillProficiencies("");
    setLanguages("");
    setEquipment("");
    setProfessions("");
    setHitDice("");
    setProficiencies("");
    setFeatures("");
    setPrerequisites("");
    setItemType("");
    setIsMagical(false);
    setIsRequiresAttunement(false);
    setRarity("");
    setArmorClass("");
    setHitPoints("");
    setSkills("");
    setSenses("");
    setChallengeRating("");
    setActions("");
    setReactions("");
    setLairActions("");
    setLegendaryActions("");
    setSchool("");
    setClasses("");
    setLevel("");
    setClass("");
  };

  return (
    <div className={c("card-panel")}>
      <div className="card-content">
        {props.post === "pending" ? (
          <div className={c(styles.spinner)} />
        ) : (
          <div>
            <Select
              className={styles.selectType}
              label="Form Type"
              value={formType}
              onChange={(event) => setFormType(event.target.value)}
            >
              {_.map(FormType, (type) => {
                console.log(type);
                return (
                  <option key={type} value={type}>
                    {type}
                  </option>
                );
              })}
            </Select>
            {formInputs()}
          </div>
        )}
        {formActions()}
      </div>
    </div>
  );
};

const mapStateToProps = ({ post }) => {
  return { post };
};

export default connect(mapStateToProps, actions)(NewAssetForm);
