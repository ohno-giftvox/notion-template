/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, SelectField } from "@aws-amplify/ui-react";
export default function AmountSelect(props) {
  const {
    buttonLabel = "\u8FFD\u52A0\u3059\u308B",
    buttonState = true,
    templateSelect,
    overrides,
    ...rest
  } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="600px"
      height="400px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="54px 60px 54px 60px"
      backgroundColor="rgba(52,52,52,1)"
      {...getOverrideProps(overrides, "AmountSelect")}
      {...rest}
    >
      <SelectField
        width="300px"
        height="unset"
        alignItems="center"
        shrink="0"
        label="テンプレート選択"
        placeholder="選んでください"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        children={templateSelect}
        {...getOverrideProps(overrides, "SelectField")}
      ></SelectField>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="large"
        isDisabled={false}
        variation="primary"
        disabled={buttonState}
        children={buttonLabel}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
