import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ListItem from "components/ListItem";

const ClassesList = (props) => {
  const { classes, fetchClasses } = props;

  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <div>
      {classes?.map((_class) => {
        <ListItem
          data={_class}
          fields={[
            ["Hit Dice", "hitDice"],
            ["Proficiencies", "proficiencies"],
            ["Equipment", "equipment"],
            ["Features", "features"],
          ]}
        />;
      })}
    </div>
  );
};

const mapStateToProps = ({ classes }) => {
  return { classes };
};

export default connect(mapStateToProps, actions)(ClassesList);
