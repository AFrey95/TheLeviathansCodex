import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ListItem from "components/ListItem";
import { PageFields } from "resources/constants";
import SingleAsset from "components/SingleAsset";

const ClassView = (props) => {
  const { currentClass, fetchClass, classes, fetchClasses } = props;

  useEffect(() => {
    !!props.match?.params?.id ? fetchClass(props.match.params.id) : fetchClasses();
  }, []);

  return (
    <div>
      {props.match?.params?.id ? (
        <SingleAsset data={currentClass} fields={PageFields.CLASS} />
      ) : (
        classes?.map((_class) => {
          <ListItem data={_class} fields={PageFields.CLASS} />;
        })
      )}
    </div>
  );
};

const mapStateToProps = ({ currentClass, classes }) => {
  return { currentClass, classes };
};

export default connect(mapStateToProps, actions)(ClassView);
