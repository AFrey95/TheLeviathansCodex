import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ListItem from "components/ListItem";
import { PageFields } from "resources/constants";
import SingleAsset from "components/SingleAsset";

const ItemView = (props) => {
  const { currentItem, fetchItem, items, fetchItems } = props;

  useEffect(() => {
    !!props.match?.params?.id ? fetchItem(props.match.params.id) : fetchItems();
  }, []);

  return (
    <div>
      {props.match?.params?.id ? (
        <SingleAsset data={currentItem} fields={PageFields.FEAT} />
      ) : (
        items?.map((item) => <ListItem data={item} fields={PageFields.ITEM} />)
      )}
    </div>
  );
};

const mapStateToProps = ({ currentItem, items }) => {
  return { currentItem, items };
};

export default connect(mapStateToProps, actions)(ItemView);
