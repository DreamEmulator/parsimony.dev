import * as React from "react";
import StepContext from "../../providers/StepContext";
import StepConnector from "./StepConnector";

interface Props {
  activeStep: number;
  children?: React.ReactNode;
}

const Steps = (props: Props) => {
  const { activeStep, children } = props;
  const steps = React.useMemo(
    () =>
      React.Children.toArray(children).map((step, i, arr) => (
        <StepContext.Provider
          key={i}
          value={{
            isActive: activeStep === i,
            isCompleted: activeStep > i,
            isLastStep: arr.length !== i + 1,
            step: i + 1,
          }}
        >
          {step}
          {arr.length !== i + 1 && <StepConnector />}
        </StepContext.Provider>
      )),
    [activeStep, children]
  );
  return <>{steps}</>;
};

export default Steps;
