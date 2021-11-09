import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import Steps from "../../components/steps/Steps";
import Step from "../../components/steps/Step";
import { Strategy as StrategyProps } from "../../../src/utils/types/content/home";
import StepContent from "../../components/steps/StepContent";
import { UserProfile } from "../../components/images/UserProfile";
import useSteps from "../../utils/hooks/useSteps";

const StepsGroup: React.FC<StrategyProps> = ({ Title, Steps: StepsProps }) => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const renderStep = ({ Title, Body }, isFirst: boolean, isLast: boolean) =>
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
    <Flex
      py="10"
      pb="12rem"
      px={{ base: 6, md: 8 }}
      minH="400px"
      background={useColorModeValue("brand.50", "brand.900")}
    >
      <Box mx={{ base: 4, md: 10, lg: 20 }}>
        <Heading
          as="h3"
          size="2xl"
          py="8"
          fontFamily="mono"
          color={useColorModeValue("gray.200", "whiteAlpha.400")}
        >
          {Title}
        </Heading>
        <Steps activeStep={activeStep}>
          {StepsProps.map(
            (step, index) =>
              step !== null &&
              renderStep(step, index === 0, index === StepsProps.length - 1)
          )}
        </Steps>
        <Stack display={activeStep === StepsProps.length ? "flex" : "none"}>
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
    </Flex>
  );
};

export default StepsGroup;
