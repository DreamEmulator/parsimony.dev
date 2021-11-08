import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Steps from "../../components/steps/Steps";
import Step from "../../components/steps/Step";
import { Step as StepType } from "../../../src/utils/types/content/home";
import StepContent from "../../components/steps/StepContent";
import { UserProfile } from "../../components/images/UserProfile";
import useSteps from "../../utils/hooks/useSteps";

type Props = {
  steps: StepType[];
};
const StepsGroup: React.FC<Props> = ({ steps }) => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const renderStep = (
    { Title, Body }: StepType,
    isFirst: boolean,
    isLast: boolean
  ) =>
    Title &&
    Body && (
      <Step key={Title} title={Title}>
        <StepContent>
          <Stack shouldWrapChildren spacing="4">
            <Text>{Body}</Text>
            <HStack>
              <Button
                size="sm"
                variant="ghost"
                isDisabled={isFirst}
                onClick={() => !isFirst && prevStep()}
              >
                Back
              </Button>
              <Button size="sm" onClick={nextStep}>
                {!isLast ? "Next" : "Let's do it"}
              </Button>
            </HStack>
          </Stack>
        </StepContent>
      </Step>
    );
  return (
    <Box py="10" px={{ base: "6", md: "8" }} minH="400px">
      <Steps activeStep={activeStep}>
        {steps.map(
          (step, index) =>
            step !== null &&
            renderStep(step, index === 0, index === steps.length - 1)
        )}
      </Steps>
      <Stack display={activeStep === steps.length ? "flex" : "none"}>
        <UserProfile
          name="Sebastiaan Hols"
          image="https://media-exp1.licdn.com/dms/image/C5603AQFBkup1Vmpgdw/profile-displayphoto-shrink_400_400/0/1584641650431?e=1639612800&v=beta&t=fpsXE-yero-QY2nepLFnI1QWAAkRuJ_TFkT6DpoHkrY"
          email="s.hols@icloud.com"
        />
        <HStack mt="10" spacing="4" shouldWrapChildren>
          <Button size="sm" onClick={reset}>
            Back
          </Button>
          <Button size="sm" variant="outline" verticalAlign="baseline">
            Get in touch
          </Button>
        </HStack>
      </Stack>
    </Box>
  );
};

export default StepsGroup;
