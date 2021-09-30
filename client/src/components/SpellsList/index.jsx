import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ListItem from "components/ListItem";

const SpellsList = (props) => {
  const { spells, fetchSpells } = props;

  useEffect(() => {
    fetchSpells();
  }, []);

  return (
    <div>
      {spells?.map((spell) => (
        <ListItem
          data={spell}
          fields={[
            ["Level", "level"],
            ["School", "school"],
            ["Classes", "classes"],
          ]}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ spells }) => {
  return { spells };
};

export default connect(mapStateToProps, actions)(SpellsList);
