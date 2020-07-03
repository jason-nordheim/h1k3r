import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Input, FormHelperText } from "@material-ui/core";

export const ValidatedTextField = ({
  fieldName,
  fieldLabel,
  validationFunction,
}) => {
  const [value, setValue] = useState("");
  const [helperText, setHelperText] = useState('') 
  const styles = {
    root: {
      display: "flex",
      width: '100%'
    },
  };

  useEffect(() => {
    if (value === '') {
      setHelperText('') 
    } else {
      setHelperText(validationFunction(value));
    }
  }, [value, validationFunction])

  return (
    <FormControl styles={styles.root} error={helperText !== ''}>
      <InputLabel htmlFor={fieldName}>{fieldLabel}</InputLabel>
      <Input fullWidth
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      { helperText !== '' ? <FormHelperText>{helperText}</FormHelperText> : null }
    </FormControl>
  );
};
