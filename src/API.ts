/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateActionCounterInput = {
  id?: string | null,
  counter?: number | null,
  _version?: number | null,
};

export type ModelActionCounterConditionInput = {
  counter?: ModelIntInput | null,
  and?: Array< ModelActionCounterConditionInput | null > | null,
  or?: Array< ModelActionCounterConditionInput | null > | null,
  not?: ModelActionCounterConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ActionCounter = {
  __typename: "ActionCounter",
  id: string,
  counter?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateActionCounterInput = {
  id: string,
  counter?: number | null,
  _version?: number | null,
};

export type DeleteActionCounterInput = {
  id: string,
  _version?: number | null,
};

export type CreateArticlesInput = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  text?: string | null,
  uploaded_file_url?: string | null,
  published?: boolean | null,
  scheduled_pubilsh_date?: string | null,
  _version?: number | null,
};

export type ModelArticlesConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  text?: ModelStringInput | null,
  uploaded_file_url?: ModelStringInput | null,
  published?: ModelBooleanInput | null,
  scheduled_pubilsh_date?: ModelStringInput | null,
  and?: Array< ModelArticlesConditionInput | null > | null,
  or?: Array< ModelArticlesConditionInput | null > | null,
  not?: ModelArticlesConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Articles = {
  __typename: "Articles",
  id: string,
  title?: string | null,
  description?: string | null,
  text?: string | null,
  uploaded_file_url?: string | null,
  published?: boolean | null,
  scheduled_pubilsh_date?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateArticlesInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  text?: string | null,
  uploaded_file_url?: string | null,
  published?: boolean | null,
  scheduled_pubilsh_date?: string | null,
  _version?: number | null,
};

export type DeleteArticlesInput = {
  id: string,
  _version?: number | null,
};

export type ModelActionCounterFilterInput = {
  id?: ModelIDInput | null,
  counter?: ModelIntInput | null,
  and?: Array< ModelActionCounterFilterInput | null > | null,
  or?: Array< ModelActionCounterFilterInput | null > | null,
  not?: ModelActionCounterFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelActionCounterConnection = {
  __typename: "ModelActionCounterConnection",
  items:  Array<ActionCounter | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelArticlesFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  text?: ModelStringInput | null,
  uploaded_file_url?: ModelStringInput | null,
  published?: ModelBooleanInput | null,
  scheduled_pubilsh_date?: ModelStringInput | null,
  and?: Array< ModelArticlesFilterInput | null > | null,
  or?: Array< ModelArticlesFilterInput | null > | null,
  not?: ModelArticlesFilterInput | null,
};

export type ModelArticlesConnection = {
  __typename: "ModelArticlesConnection",
  items:  Array<Articles | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionActionCounterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  counter?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionActionCounterFilterInput | null > | null,
  or?: Array< ModelSubscriptionActionCounterFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionArticlesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  text?: ModelSubscriptionStringInput | null,
  uploaded_file_url?: ModelSubscriptionStringInput | null,
  published?: ModelSubscriptionBooleanInput | null,
  scheduled_pubilsh_date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionArticlesFilterInput | null > | null,
  or?: Array< ModelSubscriptionArticlesFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateActionCounterMutationVariables = {
  input: CreateActionCounterInput,
  condition?: ModelActionCounterConditionInput | null,
};

export type CreateActionCounterMutation = {
  createActionCounter?:  {
    __typename: "ActionCounter",
    id: string,
    counter?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateActionCounterMutationVariables = {
  input: UpdateActionCounterInput,
  condition?: ModelActionCounterConditionInput | null,
};

export type UpdateActionCounterMutation = {
  updateActionCounter?:  {
    __typename: "ActionCounter",
    id: string,
    counter?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteActionCounterMutationVariables = {
  input: DeleteActionCounterInput,
  condition?: ModelActionCounterConditionInput | null,
};

export type DeleteActionCounterMutation = {
  deleteActionCounter?:  {
    __typename: "ActionCounter",
    id: string,
    counter?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateArticlesMutationVariables = {
  input: CreateArticlesInput,
  condition?: ModelArticlesConditionInput | null,
};

export type CreateArticlesMutation = {
  createArticles?:  {
    __typename: "Articles",
    id: string,
    title?: string | null,
    description?: string | null,
    text?: string | null,
    uploaded_file_url?: string | null,
    published?: boolean | null,
    scheduled_pubilsh_date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateArticlesMutationVariables = {
  input: UpdateArticlesInput,
  condition?: ModelArticlesConditionInput | null,
};

export type UpdateArticlesMutation = {
  updateArticles?:  {
    __typename: "Articles",
    id: string,
    title?: string | null,
    description?: string | null,
    text?: string | null,
    uploaded_file_url?: string | null,
    published?: boolean | null,
    scheduled_pubilsh_date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteArticlesMutationVariables = {
  input: DeleteArticlesInput,
  condition?: ModelArticlesConditionInput | null,
};

export type DeleteArticlesMutation = {
  deleteArticles?:  {
    __typename: "Articles",
    id: string,
    title?: string | null,
    description?: string | null,
    text?: string | null,
    uploaded_file_url?: string | null,
    published?: boolean | null,
    scheduled_pubilsh_date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetActionCounterQueryVariables = {
  id: string,
};

export type GetActionCounterQuery = {
  getActionCounter?:  {
    __typename: "ActionCounter",
    id: string,
    counter?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListActionCountersQueryVariables = {
  filter?: ModelActionCounterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActionCountersQuery = {
  listActionCounters?:  {
    __typename: "ModelActionCounterConnection",
    items:  Array< {
      __typename: "ActionCounter",
      id: string,
      counter?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncActionCountersQueryVariables = {
  filter?: ModelActionCounterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncActionCountersQuery = {
  syncActionCounters?:  {
    __typename: "ModelActionCounterConnection",
    items:  Array< {
      __typename: "ActionCounter",
      id: string,
      counter?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetArticlesQueryVariables = {
  id: string,
};

export type GetArticlesQuery = {
  getArticles?:  {
    __typename: "Articles",
    id: string,
    title?: string | null,
    description?: string | null,
    text?: string | null,
    uploaded_file_url?: string | null,
    published?: boolean | null,
    scheduled_pubilsh_date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListArticlesQueryVariables = {
  filter?: ModelArticlesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticlesQuery = {
  listArticles?:  {
    __typename: "ModelArticlesConnection",
    items:  Array< {
      __typename: "Articles",
      id: string,
      title?: string | null,
      description?: string | null,
      text?: string | null,
      uploaded_file_url?: string | null,
      published?: boolean | null,
      scheduled_pubilsh_date?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncArticlesQueryVariables = {
  filter?: ModelArticlesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncArticlesQuery = {
  syncArticles?:  {
    __typename: "ModelArticlesConnection",
    items:  Array< {
      __typename: "Articles",
      id: string,
      title?: string | null,
      description?: string | null,
      text?: string | null,
      uploaded_file_url?: string | null,
      published?: boolean | null,
      scheduled_pubilsh_date?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateActionCounterSubscriptionVariables = {
  filter?: ModelSubscriptionActionCounterFilterInput | null,
};

export type OnCreateActionCounterSubscription = {
  onCreateActionCounter?:  {
    __typename: "ActionCounter",
    id: string,
    counter?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateActionCounterSubscriptionVariables = {
  filter?: ModelSubscriptionActionCounterFilterInput | null,
};

export type OnUpdateActionCounterSubscription = {
  onUpdateActionCounter?:  {
    __typename: "ActionCounter",
    id: string,
    counter?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteActionCounterSubscriptionVariables = {
  filter?: ModelSubscriptionActionCounterFilterInput | null,
};

export type OnDeleteActionCounterSubscription = {
  onDeleteActionCounter?:  {
    __typename: "ActionCounter",
    id: string,
    counter?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateArticlesSubscriptionVariables = {
  filter?: ModelSubscriptionArticlesFilterInput | null,
};

export type OnCreateArticlesSubscription = {
  onCreateArticles?:  {
    __typename: "Articles",
    id: string,
    title?: string | null,
    description?: string | null,
    text?: string | null,
    uploaded_file_url?: string | null,
    published?: boolean | null,
    scheduled_pubilsh_date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateArticlesSubscriptionVariables = {
  filter?: ModelSubscriptionArticlesFilterInput | null,
};

export type OnUpdateArticlesSubscription = {
  onUpdateArticles?:  {
    __typename: "Articles",
    id: string,
    title?: string | null,
    description?: string | null,
    text?: string | null,
    uploaded_file_url?: string | null,
    published?: boolean | null,
    scheduled_pubilsh_date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteArticlesSubscriptionVariables = {
  filter?: ModelSubscriptionArticlesFilterInput | null,
};

export type OnDeleteArticlesSubscription = {
  onDeleteArticles?:  {
    __typename: "Articles",
    id: string,
    title?: string | null,
    description?: string | null,
    text?: string | null,
    uploaded_file_url?: string | null,
    published?: boolean | null,
    scheduled_pubilsh_date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
