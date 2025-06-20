/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, SelectField } from "@aws-amplify/ui-react";
export default function Amount(props) {
  const { overrides, ...rest } = props;
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
      {...getOverrideProps(overrides, "Amount")}
      {...rest}
    >
      <SelectField
        width="300px"
        height="unset"
        shrink="0"
        label="テンプレート選択"
        placeholder="選んでください"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField")}
      ></SelectField>
    </Flex>
  );
}
