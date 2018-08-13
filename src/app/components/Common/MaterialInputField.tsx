import * as React from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

interface IProps extends TextFieldProps {
  field: {
    name: string;
    value: any;
    onChange: (e: React.FormEvent<HTMLInputElement>) => {};
    onBlur: (e: React.FormEvent<HTMLInputElement>) => {};
  };
  form: {
    touched?: any;
    errors?: any;
  };
  label: string;
  adornment: string;
}

const MaterialInput = ({
  field: { ...fields },
  form: { touched, errors, ...rest },
  ...props
}: IProps) => {
  return (
    <TextField
      {...props}
      {...fields}
      error={Boolean(touched[fields.name] && errors[fields.name])}
      helperText={touched[fields.name] && errors[fields.name]}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end"> {props.adornment}</InputAdornment>
        )
      }}
      margin="normal"
    />
  );
};

export default MaterialInput;
