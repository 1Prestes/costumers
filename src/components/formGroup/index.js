import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Inputroup = styled.div`
  padding: 10px 0;
`;
const Label = styled.label`
  font-size: 1.1em;
  margin-bottom: 5px;
`;
const Input = styled.input`
  padding: 10px;
  border-radius: 3px;
  font-size: 1em;
  width: 100%;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`;

function FormGroup({ data, name, label, type = "text", placeholder }) {
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
    <Inputroup>
      <Label>{label}</Label>
      <Input {...inputProps} placeholder={placeholder} />
    </Inputroup>
  );
}

export default FormGroup;
