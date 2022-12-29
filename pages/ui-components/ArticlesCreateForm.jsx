/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Articles } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ArticlesCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: undefined,
    description: undefined,
    text: undefined,
    uploaded_file_url: undefined,
    published: false,
    scheduled_pubilsh_date: undefined,
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [text, setText] = React.useState(initialValues.text);
  const [uploaded_file_url, setUploaded_file_url] = React.useState(
    initialValues.uploaded_file_url
  );
  const [published, setPublished] = React.useState(initialValues.published);
  const [scheduled_pubilsh_date, setScheduled_pubilsh_date] = React.useState(
    initialValues.scheduled_pubilsh_date
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setDescription(initialValues.description);
    setText(initialValues.text);
    setUploaded_file_url(initialValues.uploaded_file_url);
    setPublished(initialValues.published);
    setScheduled_pubilsh_date(initialValues.scheduled_pubilsh_date);
    setErrors({});
  };
  const validations = {
    title: [],
    description: [],
    text: [],
    uploaded_file_url: [{ type: "URL" }],
    published: [],
    scheduled_pubilsh_date: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          description,
          text,
          uploaded_file_url: uploaded_file_url || undefined,
          published,
          scheduled_pubilsh_date,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Articles(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "ArticlesCreateForm")}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              description,
              text,
              uploaded_file_url,
              published,
              scheduled_pubilsh_date,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description: value,
              text,
              uploaded_file_url,
              published,
              scheduled_pubilsh_date,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Text"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              text: value,
              uploaded_file_url,
              published,
              scheduled_pubilsh_date,
            };
            const result = onChange(modelFields);
            value = result?.text ?? value;
          }
          if (errors.text?.hasError) {
            runValidationTasks("text", value);
          }
          setText(value);
        }}
        onBlur={() => runValidationTasks("text", text)}
        errorMessage={errors.text?.errorMessage}
        hasError={errors.text?.hasError}
        {...getOverrideProps(overrides, "text")}
      ></TextField>
      <TextField
        label="Uploaded file url"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              text,
              uploaded_file_url: value,
              published,
              scheduled_pubilsh_date,
            };
            const result = onChange(modelFields);
            value = result?.uploaded_file_url ?? value;
          }
          if (errors.uploaded_file_url?.hasError) {
            runValidationTasks("uploaded_file_url", value);
          }
          setUploaded_file_url(value);
        }}
        onBlur={() =>
          runValidationTasks("uploaded_file_url", uploaded_file_url)
        }
        errorMessage={errors.uploaded_file_url?.errorMessage}
        hasError={errors.uploaded_file_url?.hasError}
        {...getOverrideProps(overrides, "uploaded_file_url")}
      ></TextField>
      <SwitchField
        label="Published"
        defaultChecked={false}
        isDisabled={false}
        isChecked={published}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              description,
              text,
              uploaded_file_url,
              published: value,
              scheduled_pubilsh_date,
            };
            const result = onChange(modelFields);
            value = result?.published ?? value;
          }
          if (errors.published?.hasError) {
            runValidationTasks("published", value);
          }
          setPublished(value);
        }}
        onBlur={() => runValidationTasks("published", published)}
        errorMessage={errors.published?.errorMessage}
        hasError={errors.published?.hasError}
        {...getOverrideProps(overrides, "published")}
      ></SwitchField>
      <TextField
        label="Scheduled pubilsh date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              text,
              uploaded_file_url,
              published,
              scheduled_pubilsh_date: value,
            };
            const result = onChange(modelFields);
            value = result?.scheduled_pubilsh_date ?? value;
          }
          if (errors.scheduled_pubilsh_date?.hasError) {
            runValidationTasks("scheduled_pubilsh_date", value);
          }
          setScheduled_pubilsh_date(value);
        }}
        onBlur={() =>
          runValidationTasks("scheduled_pubilsh_date", scheduled_pubilsh_date)
        }
        errorMessage={errors.scheduled_pubilsh_date?.errorMessage}
        hasError={errors.scheduled_pubilsh_date?.hasError}
        {...getOverrideProps(overrides, "scheduled_pubilsh_date")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
