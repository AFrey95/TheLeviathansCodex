import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ListItem from "components/ListItem";
import { PageFields } from "resources/constants";

const SpellView = (props) => {
  const { currentSpell, fetchSpell, spells, fetchSpells } = props;

  useEffect(() => {
    !!props.match?.params?.id ? fetchSpell(props.match.params.id) : fetchSpells();
  }, []);

  return (
    <div>
      {props.match?.params?.id && currentSpell ? (
        <ListItem data={currentSpell} fields={PageFields.SPELL} />
      ) : (
        spells?.map((spell) => <ListItem data={spell} fields={PageFields.SPELL} />)
      )}
    </div>
  );
};

const mapStateToProps = ({ currentSpell, spells }) => {
  return { currentSpell, spells };
};

export default connect(mapStateToProps, actions)(SpellView);
