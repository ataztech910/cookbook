/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getActionCounter = /* GraphQL */ `
  query GetActionCounter($id: ID!) {
    getActionCounter(id: $id) {
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
export const listActionCounters = /* GraphQL */ `
  query ListActionCounters(
    $filter: ModelActionCounterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActionCounters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        counter
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncActionCounters = /* GraphQL */ `
  query SyncActionCounters(
    $filter: ModelActionCounterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncActionCounters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        counter
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getArticles = /* GraphQL */ `
  query GetArticles($id: ID!) {
    getArticles(id: $id) {
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
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticlesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncArticles = /* GraphQL */ `
  query SyncArticles(
    $filter: ModelArticlesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncArticles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
