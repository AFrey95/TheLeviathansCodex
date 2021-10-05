import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ListItem from "components/ListItem";
import { PageFields } from "resources/constants";
import SingleAsset from "components/SingleAsset";

const MonsterView = (props) => {
  const { currentMonster, fetchMonster, monsters, fetchMonsters } = props;

  useEffect(() => {
    !!props.match?.params?.id ? fetchMonster(props.match.params.id) : fetchMonsters();
  }, []);

  return (
    <div>
      {props.match?.params?.id ? (
        <SingleAsset data={currentMonster} fields={PageFields.MONSTER} />
      ) : (
        monsters?.map((monster) => <ListItem data={monster} fields={PageFields.MONSTER} />)
      )}
    </div>
  );
};

const mapStateToProps = ({ currentMonster, monsters }) => {
  return { currentMonster, monsters };
};

export default connect(mapStateToProps, actions)(MonsterView);
