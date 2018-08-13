import * as React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import TDEEForm from "../../container/TDEE/TDEEContainer";
import { InlineTopBlock } from "../Common/CommonUI";

const StyledCard = styled(Card)`
  min-width: 275px;
  max-width: 300px;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 12px;
  fontsize: 12px;
`;

const StyledTitleTypography = StyledTypography.extend`
  margin-bottom: 16px;
  fontsize: 14px;
`;

export default class BMRCard extends React.Component {
  public render() {
    return (
      <InlineTopBlock>
        <StyledCard>
          <CardContent>
            <StyledTitleTypography color="textSecondary">
              Total Daily Energy Expenditure
            </StyledTitleTypography>
            <TDEEForm title="TDEE calculator" subTitle="每日總消耗熱量 TDEE" />
          </CardContent>
          <CardActions>
            <Button size="small" href="https://ifitness.tw/bmr-and-tdee/">
              資料來源
            </Button>
          </CardActions>
        </StyledCard>
      </InlineTopBlock>
    );
  }
}
