import * as React from "react";
import * as Yup from "yup";
import styled from "styled-components";
import { withFormik, FormikProps, Form, Field } from "formik";
import MenuItem from "@material-ui/core/MenuItem";
import MaterialInputField from "../Common/MaterialInputField";
import Button from "@material-ui/core/Button";
import BMRCalculator from "../../libs/BmrCalculator";

const StyledField = styled(Field)`
  display: block !important;
  margin: 20px;
`;

const StyledButton = styled(Button)`
  && {
    margin-top: 20px;
  }
`;

const StyledResultArea = styled.div`
  margin-top: 20px;
  font-weight: bold;
`;

// Shape of form values
interface IFormValues {
  age: string;
  gender: string;
  height: string;
  weight: string;
}

interface IOtherProps {
  title: string;
  subTitle: string;
  bmrResult: number;
  setUserBMRResult?: (result: number) => void;
}

interface IResultAreaProps {
  bmrResult: number;
}

const ResultArea = ({ bmrResult }: IResultAreaProps) => {
  return (
    bmrResult !== 0 && (
      <StyledResultArea>{`你的 BMR 為：${bmrResult}`}</StyledResultArea>
    )
  );
};

// You may see / user InjectedFormikProps<OtherProps, FormValues> instead of what comes below. They are the same--InjectedFormikProps was artifact of when Formik only exported an HOC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: IOtherProps & FormikProps<IFormValues>) => {
  const { touched, errors, isSubmitting, title, subTitle, bmrResult } = props;
  return (
    <Form>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <StyledField
        select={true}
        id="gender"
        name="gender"
        label="性別"
        fullWidth={true}
        component={MaterialInputField}
      >
        <MenuItem key="male" value="male" name="male" id="male">
          男性
        </MenuItem>
        <MenuItem key="female" value="female" name="female" id="female">
          女性
        </MenuItem>
      </StyledField>

      <StyledField
        name="age"
        label="年齡"
        adornment="歲"
        fullWidth={true}
        component={MaterialInputField}
      />
      {touched.age && errors.age && <div>{errors.age}</div>}

      <StyledField
        name="height"
        label="身高"
        adornment="cm"
        fullWidth={true}
        component={MaterialInputField}
      />
      {touched.height && errors.height && <div>{errors.height}</div>}

      <StyledField
        name="weight"
        label="體重"
        adornment="kg"
        fullWidth={true}
        component={MaterialInputField}
      />
      {touched.weight && errors.weight && <div>{errors.weight}</div>}
      <StyledButton
        type="submit"
        color="primary"
        disabled={isSubmitting}
        variant="outlined"
      >
        計算
      </StyledButton>
      <ResultArea bmrResult={bmrResult} />
    </Form>
  );
};

// The type of props BMRForm receives
interface IBMRFormProps {
  title: string; // if this passed all the way through you might do this or make a union type,
  subTitle: string;
  setUserBMRResult?: (result: number) => void;
}

// Wrap our form with the using withFormik HoC
const BMRForm = withFormik<IBMRFormProps, IFormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      age: "",
      gender: "",
      height: "",
      weight: ""
    };
  },

  validationSchema: Yup.object().shape({
    age: Yup.string().required("Age is required!"),
    height: Yup.string().required("Height is required!"),
    weight: Yup.string().required("Weight is required!")
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    // do submitting things
    const { gender, age, weight, height } = values;
    const bmrCalculator = new BMRCalculator(gender, +age, +weight, +height);
    props.setUserBMRResult(bmrCalculator.calculate());
    setSubmitting(false);
    return true;
  },
  displayName: "BMRForm"
})(InnerForm);

export default BMRForm;
