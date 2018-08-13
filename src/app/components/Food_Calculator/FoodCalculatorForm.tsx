import * as React from "react";
import * as Yup from "yup";
import styled from "styled-components";
import { withFormik, FormikProps, Form, Field } from "formik";
import MenuItem from "@material-ui/core/MenuItem";
import MaterialInputField from "../Common/MaterialInputField";
import Button from "@material-ui/core/Button";
import FoodCalculator, {
  IPercentage as IFoodCalResult
} from "../../libs/FoodCalculator";

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

const StyledResultSubArea = styled.div``;

// Shape of form values
interface IFormValues {
  tdee: number;
  mealNums: number;
  percentage: string;
}

interface IOtherProps {
  title: string;
  subTitle: string;
  foodCalResult: IFoodCalResult;
  setUserFoodCalResult?: (result: object) => void;
}

interface IResultAreaProps {
  foodCalResult: IFoodCalResult;
}

const ResultArea = ({ foodCalResult }: IResultAreaProps) => {
  return (
    Object.keys(foodCalResult).length !== 0 && (
      <StyledResultArea>
        你每日的食物熱量分配應為：
        <StyledResultSubArea>{`碳水化合物：${
          foodCalResult.carb
        } 克`}</StyledResultSubArea>
        <StyledResultSubArea>{`蛋白質：${
          foodCalResult.protein
        } 克`}</StyledResultSubArea>
        <StyledResultSubArea>{`脂肪：${
          foodCalResult.fat
        } 克`}</StyledResultSubArea>
      </StyledResultArea>
    )
  );
};

// You may see / user InjectedFormikProps<OtherProps, FormValues> instead of what comes below.
// They are the same--InjectedFormikProps was artifact of when Formik only exported an HOC.
// It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: IOtherProps & FormikProps<IFormValues>) => {
  const {
    touched,
    errors,
    isSubmitting,
    title,
    subTitle,
    foodCalResult
  } = props;
  return (
    <Form>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <StyledField
        name="tdee"
        label="TDEE"
        fullWidth={true}
        component={MaterialInputField}
      />
      {touched.tdee && errors.tdee && <div>{errors.tdee}</div>}

      <StyledField
        name="mealNums"
        label="每日幾餐"
        adornment="餐"
        fullWidth={true}
        component={MaterialInputField}
      />
      {touched.mealNums && errors.mealNums && <div>{errors.mealNums}</div>}

      <StyledField
        select={true}
        id="percentage"
        name="percentage"
        label="熱量分配"
        fullWidth={true}
        component={MaterialInputField}
      >
        <MenuItem key="normal" value="normal" name="normal" id="normal">
          一般 (50%/30%/20%)
        </MenuItem>
        <MenuItem key="highCarb" value="highCarb" name="highCarb" id="highCarb">
          高碳水 (60%/25%/15%)
        </MenuItem>
        <MenuItem
          key="highProtein"
          value="highProtein"
          name="highProtein"
          id="highProtein"
        >
          高蛋白質 (25%/45%/30%)
        </MenuItem>
        <MenuItem
          key="ketoneDiet"
          value="ketoneDiet"
          name="ketoneDiet"
          id="ketoneDiet"
        >
          生酮飲食 (10%/20%/70%)
        </MenuItem>
      </StyledField>

      <StyledButton
        type="submit"
        color="primary"
        disabled={isSubmitting}
        variant="outlined"
      >
        計算
      </StyledButton>
      <ResultArea foodCalResult={foodCalResult} />
    </Form>
  );
};

// The type of props FoodCalculatorForm receives
interface IFoodCalculatorFormProps {
  title: string; // if this passed all the way through you might do this or make a union type,
  subTitle: string;
  setUserFoodCalResult?: (result: object) => void;
}

// Wrap our form with the using withFormik HoC
const FoodCalculatorForm = withFormik<IFoodCalculatorFormProps, IFormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      tdee: 0,
      mealNums: 0,
      percentage: ""
    };
  },

  validationSchema: Yup.object().shape({
    tdee: Yup.string().required("TDEE is required!"),
    mealNums: Yup.string().required("mealNums is required!"),
    percentage: Yup.string().required("percentage is required!")
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    // do submitting things
    const { tdee, mealNums, percentage } = values;
    const foodCalculator = new FoodCalculator(tdee, mealNums, percentage);
    props.setUserFoodCalResult(foodCalculator.calculate());
    setSubmitting(false);
    return true;
  },
  displayName: "FoodCalculatorForm"
})(InnerForm);

export default FoodCalculatorForm;
