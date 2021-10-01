import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ListItem from "components/ListItem";

const RetainersList = (props) => {
  const { retainers, fetchRetainers } = props;

  useEffect(() => {
    fetchRetainers();
  }, []);

  return (
    <div>
      {retainers?.map((retainer) => (
        <ListItem
          data={retainer}
          fields={[
            ["Armor Class", "armorClass"],
            ["Primary Ability", "primaryAbility"],
            ["Saves", "saves"],
            ["Skills", "skills"],
            ["Signature Attack", "signatureAttack"],
            ["Special Actions", "specialActions"],
          ]}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ retainers }) => {
  return { retainers };
};

export default connect(mapStateToProps, actions)(RetainersList);
