/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateActionCounter = /* GraphQL */ `
  subscription OnCreateActionCounter(
    $filter: ModelSubscriptionActionCounterFilterInput
  ) {
    onCreateActionCounter(filter: $filter) {
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
export const onUpdateActionCounter = /* GraphQL */ `
  subscription OnUpdateActionCounter(
    $filter: ModelSubscriptionActionCounterFilterInput
  ) {
    onUpdateActionCounter(filter: $filter) {
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
export const onDeleteActionCounter = /* GraphQL */ `
  subscription OnDeleteActionCounter(
    $filter: ModelSubscriptionActionCounterFilterInput
  ) {
    onDeleteActionCounter(filter: $filter) {
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
export const onCreateArticles = /* GraphQL */ `
  subscription OnCreateArticles($filter: ModelSubscriptionArticlesFilterInput) {
    onCreateArticles(filter: $filter) {
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
export const onUpdateArticles = /* GraphQL */ `
  subscription OnUpdateArticles($filter: ModelSubscriptionArticlesFilterInput) {
    onUpdateArticles(filter: $filter) {
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
export const onDeleteArticles = /* GraphQL */ `
  subscription OnDeleteArticles($filter: ModelSubscriptionArticlesFilterInput) {
    onDeleteArticles(filter: $filter) {
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
