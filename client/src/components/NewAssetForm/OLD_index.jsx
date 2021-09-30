import React, { useState } from "react";
import { Select } from "react-materialize";
import _ from "lodash";
import c from "classnames";
import styles from "./index.module.scss";

import FormType from "./FormType";

const NewAssetForm = () => {
  const [formType, setFormType] = useState(FormType.ANCESTRIES);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [source, setSource] = useState("");
  const [impression, setImpression] = useState("");
  const [link, setLink] = useState("");
  const [abilityScoreIncrease, setAbilityScoreIncrease] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [alignment, setAlignment] = useState("");
  const [size, setSize] = useState("");
  const [speed, setSpeed] = useState("");
  const [traits, setTraits] = useState("");
  const [isAdvancedBg, setIsAdvancedBg] = useState(false);
  const [skillProficiencies, setSkillProficiencies] = useState("");
  const [languages, setLanguages] = useState("");
  const [equipment, setEquipment] = useState("");
  const [skills, setSkills] = useState("");
  const [hitDice, setHitDice] = useState("");
  const [proficiencies, setProficiencies] = useState("");
  const [prerequisites, setPrerequisites] = useState("");
  const [itemType, setItemType] = useState("");
  const [isMagical, setIsMagical] = useState(false);
  const [isRequiresAttunement, setIsRequiresAttunement] = useState(false);
  const [rarity, setRarity] = useState("");
  const [school, setSchool] = useState("");
  const [classes, setClasses] = useState("");
  const [level, setLevel] = useState("");
  const [features, setFeatures] = useState("");

  const TextInput = (props) => {
    return (
      <div className="row">
        <div className="input-field col s6 offset-s3">
          <input type="text" value={props.value} onChange={props.onChange} />
          <label>{props.label}</label>
        </div>
      </div>
    );
  };

  const Checkbox = (props) => {
    return (
      <div className="row">
        <div className="col s6 offset-s3">
          <label>
            <input
              type="checkbox"
              className="filled-in"
              checked={props.checked}
              onChange={props.onChange}
            />
            <span>{props.label}</span>
          </label>
        </div>
      </div>
    );
  };

  const ancestriesForm = () => (
    <React.Fragment>
      <TextInput
        value={abilityScoreIncrease}
        onChange={(e) => setAbilityScoreIncrease(e.target.value)}
        label="Ability Score Increase"
      />
      <TextInput
        value={ageRange}
        onChange={(e) => setAgeRange(e.target.value)}
        label="Age Range"
      />
      <TextInput
        value={alignment}
        onChange={(e) => setAlignment(e.target.value)}
        label="Alignment"
      />
      <TextInput
        value={size}
        onChange={(e) => setSize(e.target.value)}
        label="Size"
      />
      <TextInput
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
        label="Speed"
      />
      <TextInput
        value={traits}
        onChange={(e) => setTraits(e.target.value)}
        label="Traits"
      />
    </React.Fragment>
  );

  const backgroundsForm = () => (
    <React.Fragment>
      <Checkbox
        checked={isAdvancedBg}
        onChange={(e) => setIsAdvancedBg(e.target.checked)}
        label="Advanced Background"
      />
      <TextInput
        value={skillProficiencies}
        onChange={(e) => setSkillProficiencies(e.target.value)}
        label="Skill Proficiencies"
      />
      <TextInput
        value={languages}
        onChange={(e) => setLanguages(e.target.value)}
        label="Languages"
      />
      <TextInput
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        label="Skills"
      />
    </React.Fragment>
  );

  const classesForm = () => (
    <React.Fragment>
      <TextInput
        value={hitDice}
        onChange={(e) => setHitDice(e.target.value)}
        label="Hit Dice"
      />
      <TextInput
        value={proficiencies}
        onChange={(e) => setProficiencies(e.target.value)}
        label="Proficiencies"
      />
      <TextInput
        value={equipment}
        onChange={(e) => setEquipment(e.target.value)}
        label="Equipment"
      />
      <TextInput
        value={features}
        onChange={(e) => setFeatures(e.target.value)}
        label="Features"
      />
    </React.Fragment>
  );

  const featsForm = () => (
    <React.Fragment>
      <TextInput
        value={prerequisites}
        onChange={(e) => setPrerequisites(e.target.value)}
        label="Prerequisites"
      />
    </React.Fragment>
  );

  const itemsForm = () => (
    <React.Fragment>
      <TextInput
        value={itemType}
        onChange={(e) => setItemType(e.target.value)}
        label="Type"
      />
      <Checkbox
        checked={isMagical}
        onChange={(e) => setIsMagical(e.target.checked)}
        label="Magical"
      />
      <Checkbox
        checked={isRequiresAttunement}
        onChange={(e) => setIsRequiresAttunement(e.target.checked)}
        label="Requires Attunement"
      />
      <TextInput
        value={rarity}
        onChange={(e) => setRarity(e.target.value)}
        label="Rarity"
      />
    </React.Fragment>
  );

  const mechanicsForm = () => {};

  const professionsForm = () => (
    <React.Fragment>
      <TextInput
        value={skillProficiencies}
        onChange={(e) => setSkills(e.target.value)}
        label="Skill Proficiencies"
      />
      <TextInput
        value={equipment}
        onChange={(e) => setEquipment(e.target.value)}
        label="Equipment"
      />
    </React.Fragment>
  );

  const spellsForm = () => (
    <React.Fragment>
      <TextInput
        value={school}
        onChange={(e) => setSchool(e.target.value)}
        label="School"
      />
      <TextInput
        value={classes}
        onChange={(e) => setClasses(e.target.value)}
        label="Classes"
      />
      <TextInput
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        label="Level"
      />
    </React.Fragment>
  );

  const subclassesForm = () => (
    <React.Fragment>
      <TextInput
        value={classes}
        onChange={(e) => setClasses(e.target.value)}
        label="Classes"
      />
      <TextInput
        value={features}
        onchange={(e) => setFeatures(e.target.value)}
        label="Features"
      />
    </React.Fragment>
  );

  const formByType = () => {
    let additionalContent = null;

    switch (formType) {
      case FormType.ANCESTRIES:
        additionalContent = ancestriesForm();
        break;
      case FormType.BACKGROUNDS:
        additionalContent = backgroundsForm();
        break;
      case FormType.CLASSES:
        additionalContent = classesForm();
        break;
      case FormType.FEATS:
        additionalContent = featsForm();
        break;
      case FormType.ITEMS:
        additionalContent = itemsForm();
        break;
      case FormType.MECHANICS:
        additionalContent = mechanicsForm();
        break;
      case FormType.PROFESSIONS:
        additionalContent = professionsForm();
        break;
      case FormType.SPELLS:
        additionalContent = spellsForm();
        break;
      case FormType.SUBCLASSES:
        additionalContent = subclassesForm();
        break;
      default:
        additionalContent = null;
        break;
    }

    return (
      <div>
        <TextInput
          value={name}
          onChange={(e) => setName(e.target.vale)}
          label="Name"
        />
        <TextInput
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Description"
        />
        <TextInput
          value={source}
          onChange={(e) => setSource(e.target.value)}
          label="Source"
        />
        <TextInput
          value={impression}
          onChange={(e) => setImpression(e.target.value)}
          label="Impression"
        />
        <TextInput
          value={link}
          onChange={(e) => setLink(e.target.value)}
          label="Link"
        />
        {additionalContent}
      </div>
    );
  };

  const actions = () => (
    <div className={c(styles.actions, "row")}>
      <div className="col s6 offset-s3">
        <div className="right">
          <a
            className={c(
              styles.resetButton,
              "waves-effect waves-teal btn-flat"
            )}
          >
            reset
          </a>
          <a
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
    // switch (formType) {
    //   case FormType.ANCESTRIES:
    // }
  };

  return (
    <div className={c("card-panel")}>
      <div className="card-content">
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
        {formByType()}
        {actions()}
      </div>
    </div>
  );
};

export default NewAssetForm;
