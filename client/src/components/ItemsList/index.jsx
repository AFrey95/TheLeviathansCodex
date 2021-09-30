import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ListItem from "components/ListItem";

const ItemsList = (props) => {
  const { items, fetchItems } = props;

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      {items?.map((item) => (
        <ListItem
          data={item}
          fields={[
            ["Type", "type"],
            ["Magical", "isMagical"],
            ["Requires Attunement", "isRequiresAttunement"],
            ["Rarity", "rarity"],
          ]}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ items }) => {
  return { items };
};

export default connect(mapStateToProps, actions)(ItemsList);
