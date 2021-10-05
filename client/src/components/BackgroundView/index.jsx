import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import { PageFields } from "resources/constants";
import ListItem from "components/ListItem";
import SingleAsset from "components/SingleAsset";

const BackgroundView = (props) => {
  const { currentBackground, fetchBackground, backgrounds, fetchBackgrounds } = props;

  useEffect(() => {
    !!props.match?.params?.id ? fetchBackground(props.match.params.id) : fetchBackgrounds();
  }, []);

  return (
    <div>
      {props.match?.params?.id ? (
        <SingleAsset data={currentBackground} fields={PageFields.BACKGROUND} />
      ) : (
        backgrounds?.map((background) => (
          <ListItem data={background} star={background.isAdvancedBg} fields={PageFields.BACKGROUND} />
        ))
      )}
    </div>
  );
};

const mapStateToProps = ({ currentBackground, backgrounds }) => {
  return { currentBackground, backgrounds };
};

export default connect(mapStateToProps, actions)(BackgroundView);
