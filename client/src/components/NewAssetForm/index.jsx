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

const { ANCESTRIES, BACKGROUNDS, CLASSES, FEATS, ITEMS, MECHANICS, MONSTERS, PROFESSIONS, RETAINERS, SPELLS, SUBCLASSES } = FormType;

const NewAssetForm = (props) => {
  const [abilityScoreIncrease, AbilityScoreIncrease, setAbilityScoreIncrease] = useForm("", "Ability Score Increase");
  const [actions, Actions, setActions] = useForm("", "Actions");
  const [ageRange, AgeRange, setAgeRange] = useForm("", "AgeRange");
  const [alignment, Alignment, setAlignment] = useForm("", "Alignment");
  const [armorClass, ArmorClass, setArmorClass] = useForm("", "Armor Class");
  const [castingTime, CastingTime, setCastingTime] = useForm("", "Casting Time");
  const [challengeRating, ChallengeRating, setChallengeRating] = useForm("", "Challenge Rating");
  const [classes, Classes, setClasses] = useForm("", "Classes");
  const [_class, Class, setClass] = useForm("", "Main Class");
  const [components, Components, setComponents] = useForm("", "Components");
  const [conditionImmunities, ConditionImmunities, setConditionImmunities] = useForm("", "Condition Immunities");
  const [damageImmunities, DamageImmunities, setDamageImmunities] = useForm("", "Damage Immunities");
  const [damageResistances, DamageResistances, setDamageResistances] = useForm("", "Damage Resistances");
  const [damageVulnerabilities, DamageVulnerabilities, setDamageVulnerabilities] = useForm("", "Damage Vulnerabilities");
  const [description, Description, setDescription] = useTextarea("", "Description");
  const [duration, Duration, setDuration] = useForm("", "Duration");
  const [equipment, Equipment, setEquipment] = useForm("", "Equipment");
  const [features, Features, setFeatures] = useForm("", "Features");
  const [formType, setFormType] = useState(ANCESTRIES);
  const [hitDice, HitDice, setHitDice] = useForm("", "Hit Dice");
  const [hitPoints, HitPoints, setHitPoints] = useForm("", "Hit Points");
  const [impression, Impression, setImpression] = useForm("", "Impression");
  const [isAdvancedBg, AdvancedBg, setIsAdvancedBg] = useCheckbox(false, "Advanced Background");
  const [isMagical, Magical, setIsMagical] = useCheckbox(false, "Magical");
  const [isRequiresAttunement, RequiresAttunement, setIsRequiresAttunement] = useCheckbox(false, "Requires Attunement");
  const [itemType, ItemType, setItemType] = useForm("", "Item Type");
  const [lairActions, LairActions, setLairActions] = useForm("", "Lair Actions");
  const [languages, Languages, setLanguages] = useForm("", "Languages");
  const [legendaryActions, LegendaryActions, setLegendaryActions] = useForm("", "Legendary Actions");
  const [level, Level, setLevel] = useForm("", "Level");
  const [link, Link, setLink] = useForm("", "Link");
  const [monsterType, MonsterType, setMonsterType] = useForm("", "Type");
  const [name, Name, setName] = useForm("", "Name");
  const [prerequisites, Prerequisites, setPrerequisites] = useForm("", "Prerequisites");
  const [primaryAbility, PrimaryAbility, setPrimaryAbility] = useForm("", "Primary Ability");
  const [professions, Professions, setProfessions] = useForm("", "Professions");
  const [proficiencies, Proficiencies, setProficiencies] = useForm("", "Proficiencies");
  const [range, Range, setRange] = useForm("", "Range");
  const [rarity, Rarity, setRarity] = useForm("", "Rarity");
  const [reactions, Reactions, setReactions] = useForm("", "Reactions");
  const [saves, Saves, setSaves] = useForm("", "Saves");
  const [savingThrows, SavingThrows, setSavingThrows] = useForm("", "Saving Throws");
  const [school, School, setSchool] = useForm("", "School");
  const [senses, Senses, setSenses] = useForm("", "Senses");
  const [signatureAttack, SignatureAttack, setSignatureAttack] = useForm("", "Signature Attack");
  const [size, Size, setSize] = useForm("", "Size");
  const [skillProficiencies, SkillProficiencies, setSkillProficiencies] = useForm("", "Skill Proficiencies");
  const [skills, Skills, setSkills] = useForm("", "Skills");
  const [source, Source, setSource] = useForm("", "Source");
  const [specialActions, SpecialActions, setSpecialActions] = useForm("", "Special Actions");
  const [speed, Speed, setSpeed] = useForm("", "Speed");
  const [terrain, Terrain, setTerrain] = useForm("", "Terrain");
  const [traits, Traits, setTraits] = useForm("", "Traits");

  const inputsByType = {
    ANCESTRIES: [AbilityScoreIncrease, AgeRange, Alignment, Languages, Size, Speed, Traits],
    BACKGROUNDS: [AdvancedBg, SkillProficiencies, Languages, Equipment, Professions],
    CLASSES: [HitDice, Proficiencies, Equipment, Features],
    FEATS: [Prerequisites],
    ITEMS: [ItemType, Magical, RequiresAttunement, Rarity],
    MECHANICS: [],
    MONSTERS: [
      MonsterType,
      Terrain,
      ArmorClass,
      HitPoints,
      Speed,
      SavingThrows,
      Skills,
      DamageVulnerabilities,
      DamageResistances,
      DamageImmunities,
      ConditionImmunities,
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
    RETAINERS: [ArmorClass, PrimaryAbility, Saves, Skills, SignatureAttack, SpecialActions],
    SPELLS: [Level, School, Classes, CastingTime, Range, Components, Duration],
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
          <a href="#!" className={c(styles.resetButton, "waves-effect waves-teal btn-flat")} onClick={resetForm}>
            reset
          </a>
          <a href="#!" className={c(styles.submitButton, "waves-effect waves-light btn")} onClick={submitForm}>
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
        props.postMonster(name, description, source, impression, link, monsterType, terrain, armorClass, hitPoints, speed, savingThrows, skills, damageVulnerabilities, damageResistances, damageImmunities, conditionImmunities, senses, challengeRating, traits, actions, reactions, lairActions, legendaryActions);
        resetForm();
        break;
      case PROFESSIONS:
        // prettier-ignore
        props.postProfession(name, description, source, impression, link, skillProficiencies, equipment);
        resetForm();
        break;
      case RETAINERS:
        // prettier-ignore
        props.postRetainer(name, description, source, impression, link, armorClass, primaryAbility, saves, skills, signatureAttack, specialActions);
        resetForm();
        break;
      case SPELLS:
        // prettier-ignore
        props.postSpell(name, description, source, impression, link, level, school, classes, castingTime, range, components, duration);
        resetForm();
        break;
      case SUBCLASSES:
        // prettier-ignore
        props.postSubclass(name, description, source, impression, link, _class, features);
        resetForm();
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setAbilityScoreIncrease("");
    setActions("");
    setAgeRange("");
    setAlignment("");
    setArmorClass("");
    setCastingTime("");
    setChallengeRating("");
    setClass("");
    setClasses("");
    setComponents("");
    setConditionImmunities("");
    setDamageImmunities("");
    setDamageResistances("");
    setDamageVulnerabilities("");
    setDescription("");
    setDuration("");
    setEquipment("");
    setFeatures("");
    setHitDice("");
    setHitPoints("");
    setImpression("");
    setIsAdvancedBg(false);
    setIsMagical(false);
    setIsRequiresAttunement(false);
    setItemType("");
    setLairActions("");
    setLanguages("");
    setLegendaryActions("");
    setLevel("");
    setLink("");
    setMonsterType("");
    setName("");
    setPrerequisites("");
    setPrimaryAbility("");
    setProfessions("");
    setProficiencies("");
    setRange("");
    setRarity("");
    setReactions("");
    setSaves("");
    setSavingThrows("");
    setSchool("");
    setSenses("");
    setSignatureAttack("");
    setSize("");
    setSkillProficiencies("");
    setSkills("");
    setSource("");
    setSpecialActions("");
    setSpeed("");
    setTerrain("");
    setTraits("");
  };

  return (
    <div className={c("card-panel")}>
      <div className="card-content">
        {props.post === "pending" ? (
          <div className={c(styles.spinner)} />
        ) : (
          <div>
            <Select className={styles.selectType} label="Form Type" value={formType} onChange={(event) => setFormType(event.target.value)}>
              {_.map(FormType, (type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
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
