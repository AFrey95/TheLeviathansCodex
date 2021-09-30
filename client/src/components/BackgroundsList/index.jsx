import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ListItem from "components/ListItem";

const BackgroundsList = (props) => {
  const { backgrounds, fetchBackgrounds } = props;

  useEffect(() => {
    fetchBackgrounds();
  }, []);

  return (
    <div>
      {backgrounds?.map((background) => (
        <ListItem
          data={background}
          star={background.isAdvancedBg}
          fields={[
            ["Skill Proficiencies", "skillProficiencies"],
            ["Languages", "languages"],
            ["Equipment", "equipment"],
            ["Professions", "professions", "isAdvancedBg"],
          ]}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ backgrounds }) => {
  return { backgrounds };
};

export default connect(mapStateToProps, actions)(BackgroundsList);
