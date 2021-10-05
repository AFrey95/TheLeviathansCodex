import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ListItem from "components/ListItem";
import { PageFields } from "resources/constants";
import SingleAsset from "components/SingleAsset";

const SubclassView = (props) => {
  const { currentSubclass, fetchSubclass, subclasses, fetchSubclasses } = props;

  useEffect(() => {
    !!props.match?.params?.id ? fetchSubclass(props.match.params.id) : fetchSubclasses();
  }, []);

  return (
    <div>
      {props.match?.params?.id ? (
        <SingleAsset data={currentSubclass} fields={PageFields.SUBCLASS} />
      ) : (
        subclasses?.map((subclass) => <ListItem data={subclass} fields={PageFields.SUBCLASS} />)
      )}
    </div>
  );
};

const mapStateToProps = ({ currentSubclass, subclasses }) => {
  return { currentSubclass, subclasses };
};

export default connect(mapStateToProps, actions)(SubclassView);
