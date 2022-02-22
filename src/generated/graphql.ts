import { FileUpload } from '../types/graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: FileUpload;
};

export type CategoriesOutput = {
  __typename?: 'CategoriesOutput';
  categories?: Maybe<Array<Maybe<Category>>>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
  shops: Array<Maybe<CoffeeShop>>;
  slug: Scalars['String'];
  totalShops: Scalars['Int'];
};


export type CategoryShopsArgs = {
  items: Scalars['Int'];
  lastId?: InputMaybe<Scalars['Int']>;
};

export type CategoryOutput = {
  __typename?: 'CategoryOutput';
  category?: Maybe<Category>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CoffeeShop = {
  __typename?: 'CoffeeShop';
  categories: Array<Maybe<Category>>;
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  isMine: Scalars['Boolean'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  name: Scalars['String'];
  photos: Array<Maybe<CoffeeShopPhoto>>;
  updatedAt: Scalars['String'];
  user: User;
};


export type CoffeeShopCategoriesArgs = {
  items: Scalars['Int'];
  lastId?: InputMaybe<Scalars['Int']>;
};


export type CoffeeShopPhotosArgs = {
  items: Scalars['Int'];
  lastId?: InputMaybe<Scalars['Int']>;
};

export type CoffeeShopOutput = {
  __typename?: 'CoffeeShopOutput';
  coffeeShop?: Maybe<CoffeeShop>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CoffeeShopPhoto = {
  __typename?: 'CoffeeShopPhoto';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  shop: CoffeeShop;
  updatedAt: Scalars['String'];
  url: Scalars['String'];
};

export type CoffeeShopsOutput = {
  __typename?: 'CoffeeShopsOutput';
  coffeeShops?: Maybe<Array<Maybe<CoffeeShop>>>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CommonOutput = {
  __typename?: 'CommonOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: CommonOutput;
  createCoffeeShop: CommonOutput;
  deleteCoffeeShop: CommonOutput;
  editCoffeeShop: CommonOutput;
  editProfile: CommonOutput;
  followUser: CommonOutput;
  login: TokenOutput;
  unfollowUser: CommonOutput;
};


export type MutationCreateAccountArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateCoffeeShopArgs = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  name: Scalars['String'];
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationDeleteCoffeeShopArgs = {
  id: Scalars['Int'];
};


export type MutationEditCoffeeShopArgs = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['Int'];
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationEditProfileArgs = {
  avatarURL?: InputMaybe<Scalars['Upload']>;
  email?: InputMaybe<Scalars['String']>;
  githubUsername?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationFollowUserArgs = {
  username: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUnfollowUserArgs = {
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  me: UserOutput;
  searchUsers: UsersOutput;
  seeCategories: CategoriesOutput;
  seeCategory: CategoryOutput;
  seeCoffeeShop: CoffeeShopOutput;
  seeCoffeeShops: CoffeeShopsOutput;
  seeUser: UserOutput;
};


export type QuerySearchUsersArgs = {
  items: Scalars['Int'];
  keyword: Scalars['String'];
  lastId?: InputMaybe<Scalars['Int']>;
};


export type QuerySeeCategoriesArgs = {
  items: Scalars['Int'];
  lastId?: InputMaybe<Scalars['Int']>;
};


export type QuerySeeCategoryArgs = {
  id: Scalars['Int'];
};


export type QuerySeeCoffeeShopArgs = {
  id: Scalars['Int'];
};


export type QuerySeeCoffeeShopsArgs = {
  items: Scalars['Int'];
  lastId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};


export type QuerySeeUserArgs = {
  username: Scalars['String'];
};

export type TokenOutput = {
  __typename?: 'TokenOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  avatarURL?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  email: Scalars['String'];
  followers: Array<Maybe<User>>;
  following: Array<Maybe<User>>;
  githubUsername?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  totalFollowers: Scalars['Int'];
  totalFollowing: Scalars['Int'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};


export type UserFollowersArgs = {
  items: Scalars['Int'];
  lastId?: InputMaybe<Scalars['Int']>;
};


export type UserFollowingArgs = {
  items: Scalars['Int'];
  lastId?: InputMaybe<Scalars['Int']>;
};

export type UserOutput = {
  __typename?: 'UserOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type UsersOutput = {
  __typename?: 'UsersOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  users: Array<Maybe<User>>;
};

export type CreateAccountMutationVariables = Exact<{
  name: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount: { __typename?: 'CommonOutput', ok: boolean, error?: string | null } };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'TokenOutput', ok: boolean, error?: string | null, token?: string | null } };

export type SeeCoffeeShopsQueryVariables = Exact<{
  items: Scalars['Int'];
  lastId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
}>;


export type SeeCoffeeShopsQuery = { __typename?: 'Query', seeCoffeeShops: { __typename?: 'CoffeeShopsOutput', ok: boolean, error?: string | null, coffeeShops?: Array<{ __typename?: 'CoffeeShop', id: number, name: string, photos: Array<{ __typename?: 'CoffeeShopPhoto', id: number, url: string } | null>, categories: Array<{ __typename?: 'Category', id: number, slug: string } | null> } | null> | null } };


export const CreateAccountDocument = gql`
    mutation CreateAccount($name: String!, $username: String!, $email: String!, $password: String!) {
  createAccount(
    name: $name
    username: $username
    email: $email
    password: $password
  ) {
    ok
    error
  }
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      name: // value for 'name'
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    ok
    error
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SeeCoffeeShopsDocument = gql`
    query SeeCoffeeShops($items: Int!, $lastId: Int, $userId: Int) {
  seeCoffeeShops(items: $items, lastId: $lastId, userId: $userId) {
    ok
    error
    coffeeShops {
      id
      name
      photos(items: 10) {
        id
        url
      }
      categories(items: 5) {
        id
        slug
      }
    }
  }
}
    `;

/**
 * __useSeeCoffeeShopsQuery__
 *
 * To run a query within a React component, call `useSeeCoffeeShopsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeeCoffeeShopsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeeCoffeeShopsQuery({
 *   variables: {
 *      items: // value for 'items'
 *      lastId: // value for 'lastId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useSeeCoffeeShopsQuery(baseOptions: Apollo.QueryHookOptions<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>(SeeCoffeeShopsDocument, options);
      }
export function useSeeCoffeeShopsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>(SeeCoffeeShopsDocument, options);
        }
export type SeeCoffeeShopsQueryHookResult = ReturnType<typeof useSeeCoffeeShopsQuery>;
export type SeeCoffeeShopsLazyQueryHookResult = ReturnType<typeof useSeeCoffeeShopsLazyQuery>;
export type SeeCoffeeShopsQueryResult = Apollo.QueryResult<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>;