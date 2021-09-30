import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import c from "classnames";

import styles from "./index.module.scss";

const Home = () => {
  const CollectionCard = (props) => {
    const ref = useRef();
    return (
      <div
        className={c(styles.collectionCard, "card-panel hoverable")}
        onClick={() => ref.current.click()}
      >
        <div className={c(styles.cardContent, "card-content valign-wrapper")}>
          <h3 className={c(styles.cardText)}>
            <FontAwesomeIcon icon={props.icon} />
            <div className={c(styles.cardTitle)}>{props.title}</div>
          </h3>
        </div>
        <Link to={props.route} innerRef={ref} />
      </div>
    );
  };

  const CollectionRow = (props) => (
    <div className="row">
      <div className="col s6">{props.children[0]}</div>
      <div className="col s6">{props.children?.[1]}</div>
    </div>
  );

  const CollectionTwoColumns = (props) => (
    <React.Fragment>
      {props.children.map((child, index) => {
        if (index % 2 === 0)
          return (
            <CollectionRow>
              {child}
              {props.children?.[index + 1]}
            </CollectionRow>
          );
        else return null;
      })}
    </React.Fragment>
  );

  return (
    <div>
      <CollectionTwoColumns>
        <CollectionCard
          title="Ancestries"
          icon={icons.faUsers}
          route="/ancestries"
        />
        <CollectionCard
          title="Classes"
          icon={icons.faSchool}
          route="/classes"
        />
        <CollectionCard
          title="Subclasses"
          icon={icons.faTheaterMasks}
          route="/subclasses"
        />
        <CollectionCard
          title="Backgrounds"
          icon={icons.faUserGraduate}
          route="/backgrounds"
        />
        <CollectionCard
          title="Professions"
          icon={icons.faHammer}
          route="/professions"
        />
        <CollectionCard title="Spells" icon={icons.faMagic} route="/spells" />
        <CollectionCard title="Feats" icon={icons.faRunning} route="/running" />
        <CollectionCard title="Items" icon={icons.faFlask} route="/items" />
        <CollectionCard
          title="Mechanics"
          icon={icons.faBookDead}
          route="/items"
        />
        <CollectionCard
          title="Monsters"
          icon={icons.faPastafarianism}
          route="/monsters"
        />
      </CollectionTwoColumns>
    </div>
  );
};

export default Home;
