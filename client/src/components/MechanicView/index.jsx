import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ListItem from "components/ListItem";

import { PageFields } from "resources/constants";

const MechanicView = (props) => {
  const { currentMechanic, fetchMechanic, mechanics, fetchMechanics } = props;

  useEffect(() => {
    !!props.match?.params?.id ? fetchMechanic(props.match.params.id) : fetchMechanics();
  }, []);

  return (
    <div>
      {props.match?.params?.id && currentMechanic ? (
        <ListItem data={currentMechanic} fields={PageFields.MECHANIC} />
      ) : (
        mechanics?.map((mechanic) => <ListItem data={mechanic} />)
      )}
    </div>
  );
};

const mapStateToProps = ({ currentMechanic, mechanics }) => {
  return { currentMechanic, mechanics };
};

export default connect(mapStateToProps, actions)(MechanicView);
