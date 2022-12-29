/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ArticlesCreateFormInputValues = {
    title?: string;
    description?: string;
    text?: string;
    uploaded_file_url?: string;
    published?: boolean;
    scheduled_pubilsh_date?: string;
};
export declare type ArticlesCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
    uploaded_file_url?: ValidationFunction<string>;
    published?: ValidationFunction<boolean>;
    scheduled_pubilsh_date?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ArticlesCreateFormOverridesProps = {
    ArticlesCreateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    text?: FormProps<TextFieldProps>;
    uploaded_file_url?: FormProps<TextFieldProps>;
    published?: FormProps<SwitchFieldProps>;
    scheduled_pubilsh_date?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ArticlesCreateFormProps = React.PropsWithChildren<{
    overrides?: ArticlesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ArticlesCreateFormInputValues) => ArticlesCreateFormInputValues;
    onSuccess?: (fields: ArticlesCreateFormInputValues) => void;
    onError?: (fields: ArticlesCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ArticlesCreateFormInputValues) => ArticlesCreateFormInputValues;
    onValidate?: ArticlesCreateFormValidationValues;
} & React.CSSProperties>;
export default function ArticlesCreateForm(props: ArticlesCreateFormProps): React.ReactElement;
