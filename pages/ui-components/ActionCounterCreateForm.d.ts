/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ActionCounterCreateFormInputValues = {
    counter?: number;
};
export declare type ActionCounterCreateFormValidationValues = {
    counter?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActionCounterCreateFormOverridesProps = {
    ActionCounterCreateFormGrid?: FormProps<GridProps>;
    counter?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ActionCounterCreateFormProps = React.PropsWithChildren<{
    overrides?: ActionCounterCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ActionCounterCreateFormInputValues) => ActionCounterCreateFormInputValues;
    onSuccess?: (fields: ActionCounterCreateFormInputValues) => void;
    onError?: (fields: ActionCounterCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ActionCounterCreateFormInputValues) => ActionCounterCreateFormInputValues;
    onValidate?: ActionCounterCreateFormValidationValues;
} & React.CSSProperties>;
export default function ActionCounterCreateForm(props: ActionCounterCreateFormProps): React.ReactElement;
