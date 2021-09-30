import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import c from "classnames";
import constants from "resources/constants";

import styles from "./index.module.scss";

const { Impression } = constants;

const ListItem = ({ data, fields, star = false }) => {
  const ref = useRef();

  const getColorFromImpression = (impression) => {
    switch (impression) {
      case Impression.USELESS:
        return "red white-text";
      case Impression.WEAK:
        return "yellow";
      case Impression.BALANCED:
        return "green";
      case Impression.STRONG:
        return "blue";
      case Impression.BUSTED:
        return "purple white-text";
      default:
        return "";
    }
  };

  const DataPoint = (props) => (
    <div className={c(styles.dataPoint)}>
      <div className={c(styles.dataLabel)}>{props.label}.</div>
      <div className={c(styles.dataValue)}>{props.value}</div>
    </div>
  );

  const handleClick = () => {
    window.open(data.link);
  };

  return (
    <div className={c(styles.row, "row")}>
      <div className="col s6 offset-s3" onClick={() => ref.current.click()}>
        <div className={c(styles.cardPanel, "card-panel hoverable")}>
          <div className={c(styles.cardHeader)}>
            <div className={c(styles.topLayer, "valign-wrapper")}>
              <div className={c(styles.titleAndIcon)}>
                <div className={c(styles.cardTitle)}>{data.name}</div>
                {star && <FontAwesomeIcon icon={icons.faStar} />}
              </div>
              <div
                className={c(
                  styles.impression,
                  getColorFromImpression(data.impression)
                )}
              >
                {data.impression}
              </div>
            </div>
            <div className={c(styles.cardSource)}>{data.source}</div>
          </div>

          <div>
            {fields.map((field) =>
              field.length > 2 ? (
                data[field[2]] && (
                  <DataPoint label={field[0]} value={data[field[1]]} />
                )
              ) : (
                <DataPoint label={field[0]} value={data[field[1]]} />
              )
            )}
            <p className={c(styles.description)}>{data.description}</p>
            <FontAwesomeIcon
              icon={icons.faExternalLinkAlt}
              className="hoverable"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      <Link to={`/ancestries/${data.docId}`} innerRef={ref} />
    </div>
  );
};

export default ListItem;
