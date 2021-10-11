import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ListItem from "components/ListItem";
import { PageFields } from "resources/constants";

const FeatView = (props) => {
  const { currentFeat, fetchFeat, feats, fetchFeats } = props;

  useEffect(() => {
    !!props.match?.params?.id ? fetchFeat(props.match.params.id) : fetchFeats();
  }, []);

  return (
    <div>
      {props.match?.params?.id && currentFeat ? (
        <ListItem data={currentFeat} fields={PageFields.FEAT} />
      ) : (
        feats?.map((feat) => <ListItem data={feat} fields={PageFields.FEAT} />)
      )}
    </div>
  );
};

const mapStateToProps = ({ currentFeat, feats }) => {
  return { currentFeat, feats };
};

export default connect(mapStateToProps, actions)(FeatView);
