import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ListItem from "components/ListItem";
import { PageFields } from "resources/constants";

const RetainerView = (props) => {
  const { currentRetainer, fetchRetainer, retainers, fetchRetainers } = props;

  useEffect(() => {
    !!props.match?.params?.id ? fetchRetainer(props.match.params.id) : fetchRetainers();
  }, []);

  return (
    <div>
      {props.match?.params?.id && currentRetainer ? (
        <ListItem data={currentRetainer} fields={PageFields.RETAINER} />
      ) : (
        retainers?.map((retainer) => <ListItem data={retainer} fields={PageFields.RETAINER} />)
      )}
    </div>
  );
};

const mapStateToProps = ({ currentRetainer, retainers }) => {
  return { currentRetainer, retainers };
};

export default connect(mapStateToProps, actions)(RetainerView);
