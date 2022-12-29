/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ActionCounter } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ActionCounterUpdateFormInputValues = {
    counter?: number;
};
export declare type ActionCounterUpdateFormValidationValues = {
    counter?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActionCounterUpdateFormOverridesProps = {
    ActionCounterUpdateFormGrid?: FormProps<GridProps>;
    counter?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ActionCounterUpdateFormProps = React.PropsWithChildren<{
    overrides?: ActionCounterUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    actionCounter?: ActionCounter;
    onSubmit?: (fields: ActionCounterUpdateFormInputValues) => ActionCounterUpdateFormInputValues;
    onSuccess?: (fields: ActionCounterUpdateFormInputValues) => void;
    onError?: (fields: ActionCounterUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ActionCounterUpdateFormInputValues) => ActionCounterUpdateFormInputValues;
    onValidate?: ActionCounterUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ActionCounterUpdateForm(props: ActionCounterUpdateFormProps): React.ReactElement;
