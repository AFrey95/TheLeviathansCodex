import React, { useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import c from "classnames";
import constants from "resources/constants";

import styles from "./index.module.scss";

const { Impression } = constants;

const ListItem = ({ data, fields, star = false }) => {
  const location = useLocation();
  const history = useHistory();

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

  const DataPoint = (props) =>
    props.value !== null &&
    props.value !== undefined &&
    props.value !== "" && (
      <div className={c(styles.dataPoint)}>
        <div className={c(styles.dataLabel)}>{props.label}.</div>
        <div className={c(styles.dataValue)}>{props.value}</div>
      </div>
    );

  const openPage = () => {
    history.push(`${location.pathname}/${data.docId}`);
  };

  const openSource = () => {
    window.open(data.link);
  };

  return (
    <div className={c(styles.row, "row")}>
      <div className="col s6 offset-s3">
        <div className={c(styles.cardPanel, "card-panel")}>
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
            {fields?.map((field) =>
              field.length > 2 ? (
                data[field[2]] && (
                  <DataPoint label={field[0]} value={data[field[1]]} />
                )
              ) : (
                <DataPoint label={field[0]} value={data[field[1]]} />
              )
            )}
            <p className={c(styles.description)}>{data.description}</p>
            <div className={c(styles.buttonContainer, "right-align")}>
              <div
                className={c(styles.firstButton, "waves-effect btn")}
                onClick={openSource}
              >
                Source <FontAwesomeIcon icon={icons.faExternalLinkAlt} />
              </div>
              <div className="waves-effect btn" onClick={openPage}>
                Open
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
