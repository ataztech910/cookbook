/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Articles } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ArticlesUpdateFormInputValues = {
    title?: string;
    description?: string;
    text?: string;
    uploaded_file_url?: string;
    published?: boolean;
    scheduled_pubilsh_date?: string;
};
export declare type ArticlesUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
    uploaded_file_url?: ValidationFunction<string>;
    published?: ValidationFunction<boolean>;
    scheduled_pubilsh_date?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ArticlesUpdateFormOverridesProps = {
    ArticlesUpdateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    text?: FormProps<TextFieldProps>;
    uploaded_file_url?: FormProps<TextFieldProps>;
    published?: FormProps<SwitchFieldProps>;
    scheduled_pubilsh_date?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ArticlesUpdateFormProps = React.PropsWithChildren<{
    overrides?: ArticlesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    articles?: Articles;
    onSubmit?: (fields: ArticlesUpdateFormInputValues) => ArticlesUpdateFormInputValues;
    onSuccess?: (fields: ArticlesUpdateFormInputValues) => void;
    onError?: (fields: ArticlesUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ArticlesUpdateFormInputValues) => ArticlesUpdateFormInputValues;
    onValidate?: ArticlesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ArticlesUpdateForm(props: ArticlesUpdateFormProps): React.ReactElement;
