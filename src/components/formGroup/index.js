import React, { useState, useEffect } from "react";

function FormGroup({ data, name, label, type }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const initialValue = data && data[name] ? data[name] : undefined;
    if (initialValue !== undefined) setValue(initialValue);
  }, [name, data]);

  const handleChange = (e) => {
    if (value === e.target.value) return;
    setValue(e.target.value);
  };

  const inputProps = {
    type,
    name,
    value: value || "",
    onChange: handleChange,
  };

  return (
    <div>
      <label>{label}</label>
      <input {...inputProps} placeholder={data} />
    </div>
  );
}

export default FormGroup;
