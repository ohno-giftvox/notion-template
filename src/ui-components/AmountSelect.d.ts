/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AmountSelectOverridesProps = {
    AmountSelect?: PrimitiveOverrideProps<FlexProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AmountSelectProps = React.PropsWithChildren<Partial<FlexProps> & {
    buttonLabel?: String;
    templateSelect?: React.ReactNode;
    buttonState?: Boolean;
    handleChange?: (event: SyntheticEvent) => void;
    handleClick?: (event: SyntheticEvent) => void;
    selectState?: Boolean;
    selectPlaceHolder?: String;
} & {
    overrides?: AmountSelectOverridesProps | undefined | null;
}>;
export default function AmountSelect(props: AmountSelectProps): React.ReactElement;
