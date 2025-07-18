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
    templateSelect,
    buttonState = true,
    handleChange,
    handleClick,
    selectState = true,
    selectPlaceHolder,
    overrides,
    ...rest
  } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="20px 20px 20px 20px"
      backgroundColor="rgba(52,52,52,1)"
      {...getOverrideProps(overrides, "AmountSelect")}
      {...rest}
    >
      <SelectField
        width="300px"
        height="unset"
        alignItems="center"
        shrink="0"
        placeholder={selectPlaceHolder}
        size="default"
        isDisabled={selectState}
        labelHidden={false}
        variation="default"
        children={templateSelect}
        onChange={handleChange}
        {...getOverrideProps(overrides, "SelectField")}
      ></SelectField>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={buttonState}
        variation="primary"
        children={buttonLabel}
        onClick={handleClick}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
