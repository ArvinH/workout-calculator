import * as React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import FoodCalculatorForm from "../../container/FoodCalculator/FoodCalculatorContainer";
import { InlineTopBlock } from "../Common/CommonUI";

const StyledCard = styled(Card)`
  min-width: 275px;
  max-width: 350px;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 12px;
  fontsize: 12px;
`;

const StyledTitleTypography = StyledTypography.extend`
  margin-bottom: 16px;
  fontsize: 14px;
`;

export default class FoodCalculatorCard extends React.Component {
  public render() {
    return (
      <InlineTopBlock>
        <StyledCard>
          <CardContent>
            <StyledTitleTypography color="textSecondary">
              1g protein = 4 cal; 1g carb = 4 cal; 1g fat = 9 cal
            </StyledTitleTypography>
            <FoodCalculatorForm
              title="Food calculator"
              subTitle="每日食物熱量分配"
            />
          </CardContent>
          <CardActions>
            <Button size="small" href="https://ifitness.tw/food-calculator/">
              資料來源
            </Button>
          </CardActions>
        </StyledCard>
      </InlineTopBlock>
    );
  }
}
