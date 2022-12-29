import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerActionCounter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ActionCounter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly counter?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyActionCounter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ActionCounter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly counter?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ActionCounter = LazyLoading extends LazyLoadingDisabled ? EagerActionCounter : LazyActionCounter

export declare const ActionCounter: (new (init: ModelInit<ActionCounter>) => ActionCounter) & {
  copyOf(source: ActionCounter, mutator: (draft: MutableModel<ActionCounter>) => MutableModel<ActionCounter> | void): ActionCounter;
}

type EagerArticles = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Articles, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly text?: string | null;
  readonly uploaded_file_url?: string | null;
  readonly published?: boolean | null;
  readonly scheduled_pubilsh_date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyArticles = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Articles, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly text?: string | null;
  readonly uploaded_file_url?: string | null;
  readonly published?: boolean | null;
  readonly scheduled_pubilsh_date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Articles = LazyLoading extends LazyLoadingDisabled ? EagerArticles : LazyArticles

export declare const Articles: (new (init: ModelInit<Articles>) => Articles) & {
  copyOf(source: Articles, mutator: (draft: MutableModel<Articles>) => MutableModel<Articles> | void): Articles;
}