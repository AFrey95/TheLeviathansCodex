import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ListItem from "components/ListItem";

const SubclassesList = (props) => {
  const { subclasses, fetchSubclasses } = props;

  useEffect(() => {
    fetchSubclasses();
  }, []);

  return (
    <div>
      {subclasses?.map((subclass) => (
        <ListItem
          data={subclass}
          fields={[
            ["Class", "class"],
            ["Features", "features"],
          ]}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ subclasses }) => {
  return { subclasses };
};

export default connect(mapStateToProps, actions)(SubclassesList);
