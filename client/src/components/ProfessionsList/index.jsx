import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ListItem from "components/ListItem";

const ProfessionsList = (props) => {
  const { professions, fetchProfessions } = props;

  useEffect(() => {
    fetchProfessions();
  }, []);

  return (
    <div>
      {professions?.map((profession) => (
        <ListItem
          data={profession}
          fields={[
            ["Skill Proficiencies", "skillProficiencies"],
            ["Equipment", "equipment"],
          ]}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ professions }) => {
  return { professions };
};

export default connect(mapStateToProps, actions)(ProfessionsList);
