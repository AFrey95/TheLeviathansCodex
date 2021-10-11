import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ListItem from "components/ListItem";
import { PageFields } from "resources/constants";

const ProfessionView = (props) => {
  const { currentProfession, fetchProfession, professions, fetchProfessions } = props;

  useEffect(() => {
    !!props.match?.params?.id && currentProfession ? fetchProfession(props.match.params.id) : fetchProfessions();
  }, []);

  return (
    <div>
      {props.match?.params?.id && currentProfession ? (
        <ListItem data={currentProfession} fields={PageFields.PROFESSION} />
      ) : (
        professions?.map((profession) => <ListItem data={profession} fields={PageFields.PROFESSION} />)
      )}
    </div>
  );
};

const mapStateToProps = ({ currentProfession, professions }) => {
  return { currentProfession, professions };
};

export default connect(mapStateToProps, actions)(ProfessionView);
