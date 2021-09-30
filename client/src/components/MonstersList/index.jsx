import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ListItem from "components/ListItem";

const MonstersList = (props) => {
  const { monsters, fetchMonsters } = props;

  useEffect(() => {
    fetchMonsters();
  }, []);

  return (
    <div>
      {monsters?.map((monster) => (
        <ListItem
          data={monster}
          fields={[
            ["Terrain", "terrain"],
            ["Armor Class", "armorClass"],
            ["Hit Points", "hitPoints"],
            ["Speed", "speed"],
            ["Skills", "skills"],
            ["Senses", "senses"],
            ["Languages", "languages"],
            ["CR", "challengeRating"],
            ["Traits", "traits"],
            ["Actions", "actions"],
            ["Reactions", "reactions"],
            ["Lair Actions", "Lair Actions"],
            ["Legendary Actions", "legendaryActions"],
          ]}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ monsters }) => {
  return { monsters };
};

export default connect(mapStateToProps, actions)(MonstersList);
