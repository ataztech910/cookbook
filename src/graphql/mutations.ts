/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createActionCounter = /* GraphQL */ `
  mutation CreateActionCounter(
    $input: CreateActionCounterInput!
    $condition: ModelActionCounterConditionInput
  ) {
    createActionCounter(input: $input, condition: $condition) {
      id
      counter
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateActionCounter = /* GraphQL */ `
  mutation UpdateActionCounter(
    $input: UpdateActionCounterInput!
    $condition: ModelActionCounterConditionInput
  ) {
    updateActionCounter(input: $input, condition: $condition) {
      id
      counter
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteActionCounter = /* GraphQL */ `
  mutation DeleteActionCounter(
    $input: DeleteActionCounterInput!
    $condition: ModelActionCounterConditionInput
  ) {
    deleteActionCounter(input: $input, condition: $condition) {
      id
      counter
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createArticles = /* GraphQL */ `
  mutation CreateArticles(
    $input: CreateArticlesInput!
    $condition: ModelArticlesConditionInput
  ) {
    createArticles(input: $input, condition: $condition) {
      id
      title
      description
      text
      uploaded_file_url
      published
      scheduled_pubilsh_date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateArticles = /* GraphQL */ `
  mutation UpdateArticles(
    $input: UpdateArticlesInput!
    $condition: ModelArticlesConditionInput
  ) {
    updateArticles(input: $input, condition: $condition) {
      id
      title
      description
      text
      uploaded_file_url
      published
      scheduled_pubilsh_date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteArticles = /* GraphQL */ `
  mutation DeleteArticles(
    $input: DeleteArticlesInput!
    $condition: ModelArticlesConditionInput
  ) {
    deleteArticles(input: $input, condition: $condition) {
      id
      title
      description
      text
      uploaded_file_url
      published
      scheduled_pubilsh_date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
