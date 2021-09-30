import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ListItem from "components/ListItem";

const AncestriesList = (props) => {
  const { ancestries, fetchAncestries } = props;

  useEffect(() => {
    fetchAncestries();
  }, []);

  return (
    <div>
      {ancestries?.map((ancestry) => (
        <ListItem
          data={ancestry}
          fields={[
            ["Ability Score Increase", "abilityScoreIncrease"],
            ["Age", "ageRange"],
            ["Size", "size"],
            ["Speed", "speed"],
            ["Traits", "traits"],
          ]}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ ancestries }) => {
  return { ancestries };
};

export default connect(mapStateToProps, actions)(AncestriesList);
