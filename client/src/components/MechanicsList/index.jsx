import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ListItem from "components/ListItem";

const MechanicsList = (props) => {
  const { mechanics, fetchMechanics } = props;

  useEffect(() => {
    fetchMechanics();
  }, []);

  return (
    <div>
      {mechanics?.map((mechanic) => (
        <ListItem data={mechanic} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ ancestries }) => {
  return { ancestries };
};

export default connect(mapStateToProps, actions)(MechanicsList);
