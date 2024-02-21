/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyTodo?: Maybe<Array<Maybe<Todo>>>;
  createManyUser?: Maybe<Array<Maybe<User>>>;
  createTodo?: Maybe<Todo>;
  createUser?: Maybe<User>;
  removeTodo?: Maybe<Todo>;
  removeUser?: Maybe<User>;
  updateTodo?: Maybe<Todo>;
  updateUser?: Maybe<User>;
};


export type MutationCreateManyTodoArgs = {
  data?: InputMaybe<Array<InputMaybe<TodoInput>>>;
};


export type MutationCreateManyUserArgs = {
  data?: InputMaybe<Array<InputMaybe<UserInput>>>;
};


export type MutationCreateTodoArgs = {
  completed: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
};


export type MutationCreateUserArgs = {
  name: Scalars['String']['input'];
};


export type MutationRemoveTodoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateTodoArgs = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  Todo?: Maybe<Todo>;
  User?: Maybe<User>;
  _allTodosMeta?: Maybe<ListMetadata>;
  _allUsersMeta?: Maybe<ListMetadata>;
  allTodos?: Maybe<Array<Maybe<Todo>>>;
  allUsers?: Maybe<Array<Maybe<User>>>;
};


export type QueryTodoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type Query_AllTodosMetaArgs = {
  filter?: InputMaybe<TodoFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllUsersMetaArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllTodosArgs = {
  filter?: InputMaybe<TodoFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};

export type Todo = {
  __typename?: 'Todo';
  User?: Maybe<User>;
  completed: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  user_id: Scalars['ID']['output'];
};

export type TodoFilter = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  q?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_neq?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
  user_id_neq?: InputMaybe<Scalars['ID']['input']>;
};

export type TodoInput = {
  completed: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  Todos?: Maybe<Array<Maybe<Todo>>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type UserFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_neq?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
};

export type UserInput = {
  name: Scalars['String']['input'];
};

export type AllTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTodosQuery = { __typename?: 'Query', todos?: Array<{ __typename?: 'Todo', id: string, title: string, completed: boolean } | null> | null };


export const AllTodosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllTodos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"todos"},"name":{"kind":"Name","value":"allTodos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}}]}}]}}]} as unknown as DocumentNode<AllTodosQuery, AllTodosQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyTodo?: Maybe<Array<Maybe<Todo>>>;
  createManyUser?: Maybe<Array<Maybe<User>>>;
  createTodo?: Maybe<Todo>;
  createUser?: Maybe<User>;
  removeTodo?: Maybe<Todo>;
  removeUser?: Maybe<User>;
  updateTodo?: Maybe<Todo>;
  updateUser?: Maybe<User>;
};


export type MutationCreateManyTodoArgs = {
  data?: InputMaybe<Array<InputMaybe<TodoInput>>>;
};


export type MutationCreateManyUserArgs = {
  data?: InputMaybe<Array<InputMaybe<UserInput>>>;
};


export type MutationCreateTodoArgs = {
  completed: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
};


export type MutationCreateUserArgs = {
  name: Scalars['String']['input'];
};


export type MutationRemoveTodoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateTodoArgs = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  Todo?: Maybe<Todo>;
  User?: Maybe<User>;
  _allTodosMeta?: Maybe<ListMetadata>;
  _allUsersMeta?: Maybe<ListMetadata>;
  allTodos?: Maybe<Array<Maybe<Todo>>>;
  allUsers?: Maybe<Array<Maybe<User>>>;
};


export type QueryTodoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type Query_AllTodosMetaArgs = {
  filter?: InputMaybe<TodoFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllUsersMetaArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllTodosArgs = {
  filter?: InputMaybe<TodoFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};

export type Todo = {
  __typename?: 'Todo';
  User?: Maybe<User>;
  completed: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  user_id: Scalars['ID']['output'];
};

export type TodoFilter = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  q?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_neq?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
  user_id_neq?: InputMaybe<Scalars['ID']['input']>;
};

export type TodoInput = {
  completed: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  Todos?: Maybe<Array<Maybe<Todo>>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type UserFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_neq?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
};

export type UserInput = {
  name: Scalars['String']['input'];
};
