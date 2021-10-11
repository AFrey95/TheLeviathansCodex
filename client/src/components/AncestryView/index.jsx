import React, { useEffect, useState } from "react";
import { PageFields } from "resources/constants";
import ListItem from "components/ListItem";
import { useAncestries } from "redux/ancestries";
import { updateAncestries, fetchAncestryById } from "api";

const AncestryView = (props) => {
  const id = props?.match?.params?.id;

  useEffect(() => {
    updateAncestries();
  }, []);

  return (
    <div>
      {useAncestries()
        ?.filter((ancestry) => (id ? ancestry.docId === id : true))
        ?.map((ancestry) => (
          <ListItem data={ancestry} fields={PageFields.ANCESTRY} />
        ))}
    </div>
  );
};

export default AncestryView;
