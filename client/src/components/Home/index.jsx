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
        <div className={c(styles.cardContent, "valign-wrapper")}>
          <h3 className={c(styles.cardText)}>
            <FontAwesomeIcon icon={props.icon} />
            <div className={c(styles.cardTitle)}>{props.title}</div>
          </h3>
        </div>
        <Link to={props.route} innerRef={ref} />
      </div>
      //   </Link>
    );
  };

  const CollectionRow = (props) => (
    <div className="row">
      <div className="col s6">{props.children[0]}</div>
      <div className="col s6">{props.children[1]}</div>
    </div>
  );

  return (
    <div>
      <CollectionRow>
        <CollectionCard
          title="Ancestries"
          icon={icons.faUsers}
          route="/ancestries"
        />
        <CollectionCard
          title="Backgrounds"
          icon={icons.faUserGraduate}
          route="/backgrounds"
        />
      </CollectionRow>
      <CollectionRow>
        <CollectionCard
          title="Subclasses"
          icon={icons.faTheaterMasks}
          route="/subclasses"
        />
        <CollectionCard title="Spells" icon={icons.faMagic} route="/spells" />
      </CollectionRow>
      <CollectionRow>
        <CollectionCard title="Feats" icon={icons.faRunning} route="/running" />
        <CollectionCard title="Items" icon={icons.faFlask} route="/items" />
      </CollectionRow>
      <CollectionRow>
        <CollectionCard
          title="Mechanics"
          icon={icons.faBookDead}
          route="/items"
        />
        {null}
      </CollectionRow>
    </div>
  );
};

export default Home;
