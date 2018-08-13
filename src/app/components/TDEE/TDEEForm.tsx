import * as React from "react";
import * as Yup from "yup";
import styled from "styled-components";
import { withFormik, FormikProps, Form, Field } from "formik";
import MenuItem from "@material-ui/core/MenuItem";
import MaterialInputField from "../Common/MaterialInputField";
import Button from "@material-ui/core/Button";

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
  bmr: string;
  activityAmount: string;
}

interface IOtherProps {
  title: string;
  subTitle: string;
  tdeeResult: number;
  setUserTDEEResult?: (result: number) => void;
}

interface IResultAreaProps {
  tdeeResult: number;
}

const ResultArea = ({ tdeeResult }: IResultAreaProps) => {
  return (
    tdeeResult !== 0 && (
      <StyledResultArea>{`你的 TDEE 為：${tdeeResult}`}</StyledResultArea>
    )
  );
};

// You may see / user InjectedFormikProps<OtherProps, FormValues> instead of what comes below. They are the same--InjectedFormikProps was artifact of when Formik only exported an HOC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: IOtherProps & FormikProps<IFormValues>) => {
  const { touched, errors, isSubmitting, title, subTitle, tdeeResult } = props;
  return (
    <Form>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <StyledField
        select={true}
        id="activityAmount"
        name="activityAmount"
        label="活動量"
        fullWidth={true}
        component={MaterialInputField}
      >
        <MenuItem
          key="officeWork"
          value="1.2"
          name="officeWork"
          id="officeWork"
        >
          久坐（辦公室工作、沒啥運動）- BMR * 1.2
        </MenuItem>
        <MenuItem key="easy" value="1.375" name="easy" id="easy">
          輕量運動（每週輕鬆運動 3~5 天）- BMR * 1.375
        </MenuItem>
        <MenuItem key="medium" value="1.55" name="medium" id="medium">
          中度運動量（每週中等強度運動 3~5 天）- BMR * 1.55
        </MenuItem>
        <MenuItem key="high" value="1.725" name="high" id="high">
          高度運動量（每週高強度運動 6 ~ 7 天）- BMR * 1.725
        </MenuItem>
        <MenuItem key="Intense" value="1.9" name="Intense" id="Intense">
          非常高度運動量（勞力密集工作、每天訓練或一天兩次以上）- BMR * 1.9
        </MenuItem>
      </StyledField>

      <StyledField
        name="bmr"
        label="BMR"
        fullWidth={true}
        component={MaterialInputField}
      />
      {touched.bmr && errors.bmr && <div>{errors.bmr}</div>}
      <StyledButton
        type="submit"
        color="primary"
        disabled={isSubmitting}
        variant="outlined"
      >
        計算
      </StyledButton>
      <ResultArea tdeeResult={tdeeResult} />
    </Form>
  );
};

// The type of props BMRForm receives
interface ITDEEFormProps {
  title: string; // if this passed all the way through you might do this or make a union type,
  subTitle: string;
  setUserTDEEResult?: (result: number) => void;
}

// Wrap our form with the using withFormik HoC
const TDEEForm = withFormik<ITDEEFormProps, IFormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      bmr: "",
      activityAmount: ""
    };
  },

  validationSchema: Yup.object().shape({
    bmr: Yup.string().required("bmr is required!")
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    // do submitting things
    const { activityAmount, bmr } = values;
    setSubmitting(false);
    props.setUserTDEEResult(+bmr * +activityAmount);
    return true;
  },
  displayName: "TDEEForm"
})(InnerForm);

export default TDEEForm;
