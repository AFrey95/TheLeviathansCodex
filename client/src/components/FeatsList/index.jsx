import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ListItem from "components/ListItem";

const FeatsList = (props) => {
  const { feats, fetchFeats } = props;

  useEffect(() => {
    fetchFeats();
  }, []);

  return (
    <div>
      {feats?.map((feat) => (
        <ListItem data={feat} fields={[["Prerequisites", "prerequisites"]]} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ ancestries }) => {
  return { ancestries };
};

export default connect(mapStateToProps, actions)(FeatsList);
