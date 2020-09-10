import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

import * as awsAutoAPI from "./API.service";

// export const query = async (queryStatement: string, gqlArguments: any) => {
//   return ((await API.graphql(graphqlOperation(queryStatement, gqlArguments))) as any).data;
// };

export type GetUserWithProjectQuery = {
  __typename: "User";
  cognitoId: string;
  username: string;
  email: string;
  projects: {
    __typename: "ModelProejctMembersConnection";
    items: Array<{
      __typename: "ProejctMembers";
      id: string;
      userId: string;
      projectId: string;
      project: {
        __typename: "Project";
        id: string;
        name: string;
        firstSprintStartAt: string | null;
        cycle: number | null;
        members: {
          __typename: "ModelProejctMembersConnection";
          items: Array<{
            __typename: "ProejctMembers";
            id: string;
            userId: string;
            member: {
              __typename: "User";
              cognitoId: string;
              username: string;
              email: string;
            };
            projectId: string;
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        description: string | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export const GetUserWithProject = async (cognitoId: string): Promise<GetUserWithProjectQuery> => {
  const statement = `query GetUser($cognitoId: ID!) {
      getUser(cognitoId: $cognitoId) {
        __typename
        cognitoId
        username
        email
        projects {
          __typename
          items {
            __typename
            id
            userId
            projectId
            project {
              __typename
              id
              name
              firstSprintStartAt
              cycle
              members {
                __typename
                items {
                  __typename
                  id
                  member {
                    cognitoId
                    username
                    email
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
    }`;
  const gqlAPIServiceArguments: any = {
    cognitoId
  };
  const response = (await API.graphql(
    graphqlOperation(statement, gqlAPIServiceArguments)
  )) as any;
  return <GetUserWithProjectQuery>response.data.getUser;
};

// export type GetProjectQuery = {
//   __typename: "Project";
//   id: string;
//   name: string;
//   members: {
//     __typename: "ModelProejctMembersConnection";
//     items: Array<{
//       __typename: "ProejctMembers";
//       id: string;
//       member
//     } | null> | null;
//     nextToken: string | null;
//   } | null;
//   description: string | null;
//   Boards: {
//     __typename: "ModelBoardConnection";
//     items: Array<{
//       __typename: "Board";
//       id: string;
//       name: string;
//       category: awsAutoAPI.BoardCategory;
//       description: string | null;
//       projectId: string;
//       createdAt: string;
//       updatedAt: string;
//     } | null> | null;
//     nextToken: string | null;
//   } | null;
//   createdAt: string;
//   updatedAt: string;
// };

// export const GetProject = async (id: string): Promise<GetProjectQuery> => {
//   const statement = `query GetProject($id: ID!) {
//       getProject(id: $id) {
//         __typename
//         id
//         name
//         members {
//           __typename
//           items {
//             __typename
//             id
//             userId
//             projectId
//             createdAt
//             updatedAt
//           }
//           nextToken
//         }
//         description
//         Boards {
//           __typename
//           items {
//             __typename
//             id
//             name
//             category
//             description
//             projectId
//             createdAt
//             updatedAt
//           }
//           nextToken
//         }
//         createdAt
//         updatedAt
//       }
//     }`;
//   const gqlAPIServiceArguments: any = {
//     id
//   };
//   const response = (await API.graphql(
//     graphqlOperation(statement, gqlAPIServiceArguments)
//   )) as any;
//   return <GetProjectQuery>response.data.getProject;
// };

export type GetBoardsByProjectIdQuery = {
  __typename: "ModelBoardConnection";
  items: Array<{
    __typename: "Board";
    id: string;
    name: string;
    category: awsAutoAPI.BoardCategory;
    cycle: number | null;
    description: string | null;
    projectId: string;
    project: {
      __typename: "Project";
      id: string;
      name: string;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    };
    cards: {
      __typename: "ModelCardConnection";
      items: Array<{
        __typename: "Card";
        id: string;
        boardId: string;
        board: { category: awsAutoAPI.BoardCategory };
        belongCardID: string | null;
        title: string | null;
        subTitle: string | null;
        content: string | null;
        totalTime: string | null;
        currentDuration: string | null;
        status: awsAutoAPI.CardStatus | null;
        lastActivityAt: number | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export const GetBoardsByProjectId = async (
  projectId?: string,
  sortDirection?: awsAutoAPI.ModelSortDirection,
  filter?: awsAutoAPI.ModelBoardFilterInput,
  limit?: number,
  nextToken?: string
): Promise<GetBoardsByProjectIdQuery> => {
  const statement = `query GetBoardsByProjectId($projectId: ID, $sortDirection: ModelSortDirection, $filter: ModelBoardFilterInput, $limit: Int, $nextToken: String) {
      getBoardsByProjectId(projectId: $projectId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
        __typename
        items {
          __typename
          id
          projectId
          name
          cycle
          category
          description
          project {
            __typename
            id
            name
            description
            createdAt
            updatedAt
          }
          cards {
            __typename
            items {
              __typename
              id
              boardId
              board {
                category
              }
              belongCardID
              title
              subTitle
              content
              totalTime
              currentDuration
              status
              lastActivityAt
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
    }`;
  const gqlAPIServiceArguments: any = {};
  if (projectId) {
    gqlAPIServiceArguments.projectId = projectId;
  }
  if (sortDirection) {
    gqlAPIServiceArguments.sortDirection = sortDirection;
  }
  if (filter) {
    gqlAPIServiceArguments.filter = filter;
  }
  if (limit) {
    gqlAPIServiceArguments.limit = limit;
  }
  if (nextToken) {
    gqlAPIServiceArguments.nextToken = nextToken;
  }
  const response = (await API.graphql(
    graphqlOperation(statement, gqlAPIServiceArguments)
  )) as any;
  return <GetBoardsByProjectIdQuery>response.data.getBoardsByProjectId;
};

export const ListSprintRecords = async (
  filter?: awsAutoAPI.ModelSprintRecordFilterInput,
  limit?: number,
  nextToken?: string
): Promise<any> => {
  const statement = `query ListSprintRecords($filter: ModelSprintRecordFilterInput, $limit: Int, $nextToken: String) {
      listSprintRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
        __typename
        items {
          __typename
          id
          sprintId
          daysHistory {
            __typename
            date
            actualEffort
            reports {
              __typename
              userId
              title
              content
            }
          }
          createdAt
          updatedAt
        }
        nextToken
      }
    }`;
  const gqlAPIServiceArguments: any = {};
  if (filter) {
    gqlAPIServiceArguments.filter = filter;
  }
  if (limit) {
    gqlAPIServiceArguments.limit = limit;
  }
  if (nextToken) {
    gqlAPIServiceArguments.nextToken = nextToken;
  }
  const response = (await API.graphql(
    graphqlOperation(statement, gqlAPIServiceArguments)
  )) as any;
  return <any>response.data.listSprintRecords;
};
