import React, { useState } from "react";

// Define the FormComponent outside of your useForm hook
const FormComponent = ({ setState, state, label }) => (
  <div className="row">
    <div className="input-field col s6 offset-s3">
      <textarea
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <label>{label}</label>
    </div>
  </div>
);

export default function useTextarea(defaultState, label) {
  const [state, setState] = useState(defaultState);

  return [
    state,
    <FormComponent state={state} setState={setState} label={label} />,
    setState,
  ];
}
