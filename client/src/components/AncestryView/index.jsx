import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import { PageFields } from "resources/constants";
import ListItem from "components/ListItem";
import SingleAsset from "components/SingleAsset";

const AncestryView = (props) => {
  const { currentAncestry, fetchAncestry, ancestries, fetchAncestries } = props;

  useEffect(() => {
    !!props.match?.params?.id ? fetchAncestry(props.match.params.id) : fetchAncestries();
  }, []);

  return (
    <div>
      {props.match?.params?.id ? (
        <SingleAsset data={currentAncestry} fields={PageFields.ANCESTRY} />
      ) : (
        ancestries?.map((ancestry) => <ListItem data={ancestry} fields={PageFields.ANCESTRY} />)
      )}
    </div>
  );
};

const mapStateToProps = ({ currentAncestry, ancestries }) => {
  return { currentAncestry, ancestries };
};

export default connect(mapStateToProps, actions)(AncestryView);
