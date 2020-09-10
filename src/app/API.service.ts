/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateUserInput = {
  cognitoId: string;
  username: string;
  email: string;
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
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
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateUserInput = {
  cognitoId: string;
  username?: string | null;
  email?: string | null;
};

export type DeleteUserInput = {
  cognitoId: string;
};

export type CreateProejctMembersInput = {
  id?: string | null;
  userId: string;
  projectId: string;
};

export type ModelProejctMembersConditionInput = {
  userId?: ModelIDInput | null;
  projectId?: ModelIDInput | null;
  and?: Array<ModelProejctMembersConditionInput | null> | null;
  or?: Array<ModelProejctMembersConditionInput | null> | null;
  not?: ModelProejctMembersConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateProejctMembersInput = {
  id: string;
  userId?: string | null;
  projectId?: string | null;
};

export type DeleteProejctMembersInput = {
  id?: string | null;
};

export type CreateProjectInput = {
  id?: string | null;
  name: string;
  firstSprintStartAt?: string | null;
  cycle?: number | null;
  description?: string | null;
};

export type ModelProjectConditionInput = {
  name?: ModelStringInput | null;
  firstSprintStartAt?: ModelStringInput | null;
  cycle?: ModelIntInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelProjectConditionInput | null> | null;
  or?: Array<ModelProjectConditionInput | null> | null;
  not?: ModelProjectConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export enum BoardCategory {
  Product = "Product",
  Sprint = "Sprint"
}

export type UpdateProjectInput = {
  id: string;
  name?: string | null;
  firstSprintStartAt?: string | null;
  cycle?: number | null;
  description?: string | null;
};

export type DeleteProjectInput = {
  id?: string | null;
};

export type CreateBoardInput = {
  id?: string | null;
  name: string;
  category: BoardCategory;
  cycle?: number | null;
  description?: string | null;
  projectId: string;
};

export type ModelBoardConditionInput = {
  name?: ModelStringInput | null;
  category?: ModelBoardCategoryInput | null;
  cycle?: ModelIntInput | null;
  description?: ModelStringInput | null;
  projectId?: ModelIDInput | null;
  and?: Array<ModelBoardConditionInput | null> | null;
  or?: Array<ModelBoardConditionInput | null> | null;
  not?: ModelBoardConditionInput | null;
};

export type ModelBoardCategoryInput = {
  eq?: BoardCategory | null;
  ne?: BoardCategory | null;
};

export enum CardStatus {
  stop = "stop",
  doing = "doing"
}

export type UpdateBoardInput = {
  id: string;
  name?: string | null;
  category?: BoardCategory | null;
  cycle?: number | null;
  description?: string | null;
  projectId?: string | null;
};

export type DeleteBoardInput = {
  id?: string | null;
};

export type CreateCardInput = {
  id?: string | null;
  boardId: string;
  belongCardID?: string | null;
  title?: string | null;
  subTitle?: string | null;
  content?: string | null;
  totalTime?: number | null;
  currentDuration?: number | null;
  status?: CardStatus | null;
  lastActivityAt?: number | null;
};

export type ModelCardConditionInput = {
  boardId?: ModelIDInput | null;
  belongCardID?: ModelIDInput | null;
  title?: ModelStringInput | null;
  subTitle?: ModelStringInput | null;
  content?: ModelStringInput | null;
  totalTime?: ModelIntInput | null;
  currentDuration?: ModelIntInput | null;
  status?: ModelCardStatusInput | null;
  lastActivityAt?: ModelIntInput | null;
  and?: Array<ModelCardConditionInput | null> | null;
  or?: Array<ModelCardConditionInput | null> | null;
  not?: ModelCardConditionInput | null;
};

export type ModelCardStatusInput = {
  eq?: CardStatus | null;
  ne?: CardStatus | null;
};

export type UpdateCardInput = {
  id: string;
  boardId?: string | null;
  belongCardID?: string | null;
  title?: string | null;
  subTitle?: string | null;
  content?: string | null;
  totalTime?: number | null;
  currentDuration?: number | null;
  status?: CardStatus | null;
  lastActivityAt?: number | null;
};

export type DeleteCardInput = {
  id?: string | null;
};

export type CreateSprintRecordInput = {
  id?: string | null;
  sprintId: string;
  daysHistory: Array<DayHistoryInput | null>;
};

export type DayHistoryInput = {
  date: string;
  actualEffort: number;
  reports?: Array<DayHistoryReportInput | null> | null;
};

export type DayHistoryReportInput = {
  userId: string;
  title?: string | null;
  content: string;
};

export type ModelSprintRecordConditionInput = {
  sprintId?: ModelIDInput | null;
  and?: Array<ModelSprintRecordConditionInput | null> | null;
  or?: Array<ModelSprintRecordConditionInput | null> | null;
  not?: ModelSprintRecordConditionInput | null;
};

export type UpdateSprintRecordInput = {
  id: string;
  sprintId?: string | null;
  daysHistory?: Array<DayHistoryInput | null> | null;
};

export type DeleteSprintRecordInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  cognitoId?: ModelIDInput | null;
  username?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  firstSprintStartAt?: ModelStringInput | null;
  cycle?: ModelIntInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelProjectFilterInput | null> | null;
  or?: Array<ModelProjectFilterInput | null> | null;
  not?: ModelProjectFilterInput | null;
};

export type ModelBoardFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  category?: ModelBoardCategoryInput | null;
  cycle?: ModelIntInput | null;
  description?: ModelStringInput | null;
  projectId?: ModelIDInput | null;
  and?: Array<ModelBoardFilterInput | null> | null;
  or?: Array<ModelBoardFilterInput | null> | null;
  not?: ModelBoardFilterInput | null;
};

export type ModelCardFilterInput = {
  id?: ModelIDInput | null;
  boardId?: ModelIDInput | null;
  belongCardID?: ModelIDInput | null;
  title?: ModelStringInput | null;
  subTitle?: ModelStringInput | null;
  content?: ModelStringInput | null;
  totalTime?: ModelIntInput | null;
  currentDuration?: ModelIntInput | null;
  status?: ModelCardStatusInput | null;
  lastActivityAt?: ModelIntInput | null;
  and?: Array<ModelCardFilterInput | null> | null;
  or?: Array<ModelCardFilterInput | null> | null;
  not?: ModelCardFilterInput | null;
};

export type ModelSprintRecordFilterInput = {
  id?: ModelIDInput | null;
  sprintId?: ModelIDInput | null;
  and?: Array<ModelSprintRecordFilterInput | null> | null;
  or?: Array<ModelSprintRecordFilterInput | null> | null;
  not?: ModelSprintRecordFilterInput | null;
};

export type CreateUserMutation = {
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
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
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
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
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
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateProejctMembersMutation = {
  __typename: "ProejctMembers";
  id: string;
  userId: string;
  projectId: string;
  member: {
    __typename: "User";
    cognitoId: string;
    username: string;
    email: string;
    projects: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  project: {
    __typename: "Project";
    id: string;
    name: string;
    members: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    firstSprintStartAt: string | null;
    cycle: number | null;
    description: string | null;
    Boards: {
      __typename: "ModelBoardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateProejctMembersMutation = {
  __typename: "ProejctMembers";
  id: string;
  userId: string;
  projectId: string;
  member: {
    __typename: "User";
    cognitoId: string;
    username: string;
    email: string;
    projects: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  project: {
    __typename: "Project";
    id: string;
    name: string;
    members: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    firstSprintStartAt: string | null;
    cycle: number | null;
    description: string | null;
    Boards: {
      __typename: "ModelBoardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteProejctMembersMutation = {
  __typename: "ProejctMembers";
  id: string;
  userId: string;
  projectId: string;
  member: {
    __typename: "User";
    cognitoId: string;
    username: string;
    email: string;
    projects: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  project: {
    __typename: "Project";
    id: string;
    name: string;
    members: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    firstSprintStartAt: string | null;
    cycle: number | null;
    description: string | null;
    Boards: {
      __typename: "ModelBoardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type CreateProjectMutation = {
  __typename: "Project";
  id: string;
  name: string;
  members: {
    __typename: "ModelProejctMembersConnection";
    items: Array<{
      __typename: "ProejctMembers";
      id: string;
      userId: string;
      projectId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  firstSprintStartAt: string | null;
  cycle: number | null;
  description: string | null;
  Boards: {
    __typename: "ModelBoardConnection";
    items: Array<{
      __typename: "Board";
      id: string;
      name: string;
      category: BoardCategory;
      cycle: number | null;
      description: string | null;
      projectId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProjectMutation = {
  __typename: "Project";
  id: string;
  name: string;
  members: {
    __typename: "ModelProejctMembersConnection";
    items: Array<{
      __typename: "ProejctMembers";
      id: string;
      userId: string;
      projectId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  firstSprintStartAt: string | null;
  cycle: number | null;
  description: string | null;
  Boards: {
    __typename: "ModelBoardConnection";
    items: Array<{
      __typename: "Board";
      id: string;
      name: string;
      category: BoardCategory;
      cycle: number | null;
      description: string | null;
      projectId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProjectMutation = {
  __typename: "Project";
  id: string;
  name: string;
  members: {
    __typename: "ModelProejctMembersConnection";
    items: Array<{
      __typename: "ProejctMembers";
      id: string;
      userId: string;
      projectId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  firstSprintStartAt: string | null;
  cycle: number | null;
  description: string | null;
  Boards: {
    __typename: "ModelBoardConnection";
    items: Array<{
      __typename: "Board";
      id: string;
      name: string;
      category: BoardCategory;
      cycle: number | null;
      description: string | null;
      projectId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateBoardMutation = {
  __typename: "Board";
  id: string;
  name: string;
  category: BoardCategory;
  cycle: number | null;
  description: string | null;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    name: string;
    members: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    firstSprintStartAt: string | null;
    cycle: number | null;
    description: string | null;
    Boards: {
      __typename: "ModelBoardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  cards: {
    __typename: "ModelCardConnection";
    items: Array<{
      __typename: "Card";
      id: string;
      boardId: string;
      belongCardID: string | null;
      title: string | null;
      subTitle: string | null;
      content: string | null;
      totalTime: number | null;
      currentDuration: number | null;
      status: CardStatus | null;
      lastActivityAt: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBoardMutation = {
  __typename: "Board";
  id: string;
  name: string;
  category: BoardCategory;
  cycle: number | null;
  description: string | null;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    name: string;
    members: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    firstSprintStartAt: string | null;
    cycle: number | null;
    description: string | null;
    Boards: {
      __typename: "ModelBoardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  cards: {
    __typename: "ModelCardConnection";
    items: Array<{
      __typename: "Card";
      id: string;
      boardId: string;
      belongCardID: string | null;
      title: string | null;
      subTitle: string | null;
      content: string | null;
      totalTime: number | null;
      currentDuration: number | null;
      status: CardStatus | null;
      lastActivityAt: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBoardMutation = {
  __typename: "Board";
  id: string;
  name: string;
  category: BoardCategory;
  cycle: number | null;
  description: string | null;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    name: string;
    members: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    firstSprintStartAt: string | null;
    cycle: number | null;
    description: string | null;
    Boards: {
      __typename: "ModelBoardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  cards: {
    __typename: "ModelCardConnection";
    items: Array<{
      __typename: "Card";
      id: string;
      boardId: string;
      belongCardID: string | null;
      title: string | null;
      subTitle: string | null;
      content: string | null;
      totalTime: number | null;
      currentDuration: number | null;
      status: CardStatus | null;
      lastActivityAt: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCardMutation = {
  __typename: "Card";
  id: string;
  boardId: string;
  board: {
    __typename: "Board";
    id: string;
    name: string;
    category: BoardCategory;
    cycle: number | null;
    description: string | null;
    projectId: string;
    project: {
      __typename: "Project";
      id: string;
      name: string;
      firstSprintStartAt: string | null;
      cycle: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    };
    cards: {
      __typename: "ModelCardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  belongCardID: string | null;
  title: string | null;
  subTitle: string | null;
  content: string | null;
  totalTime: number | null;
  currentDuration: number | null;
  status: CardStatus | null;
  lastActivityAt: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCardMutation = {
  __typename: "Card";
  id: string;
  boardId: string;
  board: {
    __typename: "Board";
    id: string;
    name: string;
    category: BoardCategory;
    cycle: number | null;
    description: string | null;
    projectId: string;
    project: {
      __typename: "Project";
      id: string;
      name: string;
      firstSprintStartAt: string | null;
      cycle: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    };
    cards: {
      __typename: "ModelCardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  belongCardID: string | null;
  title: string | null;
  subTitle: string | null;
  content: string | null;
  totalTime: number | null;
  currentDuration: number | null;
  status: CardStatus | null;
  lastActivityAt: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCardMutation = {
  __typename: "Card";
  id: string;
  boardId: string;
  board: {
    __typename: "Board";
    id: string;
    name: string;
    category: BoardCategory;
    cycle: number | null;
    description: string | null;
    projectId: string;
    project: {
      __typename: "Project";
      id: string;
      name: string;
      firstSprintStartAt: string | null;
      cycle: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    };
    cards: {
      __typename: "ModelCardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  belongCardID: string | null;
  title: string | null;
  subTitle: string | null;
  content: string | null;
  totalTime: number | null;
  currentDuration: number | null;
  status: CardStatus | null;
  lastActivityAt: number | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateSprintRecordMutation = {
  __typename: "SprintRecord";
  id: string;
  sprintId: string;
  daysHistory: Array<{
    __typename: "DayHistory";
    date: string;
    actualEffort: number;
    reports: Array<{
      __typename: "DayHistoryReport";
      userId: string;
      title: string | null;
      content: string;
    } | null> | null;
  } | null>;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSprintRecordMutation = {
  __typename: "SprintRecord";
  id: string;
  sprintId: string;
  daysHistory: Array<{
    __typename: "DayHistory";
    date: string;
    actualEffort: number;
    reports: Array<{
      __typename: "DayHistoryReport";
      userId: string;
      title: string | null;
      content: string;
    } | null> | null;
  } | null>;
  createdAt: string;
  updatedAt: string;
};

export type DeleteSprintRecordMutation = {
  __typename: "SprintRecord";
  id: string;
  sprintId: string;
  daysHistory: Array<{
    __typename: "DayHistory";
    date: string;
    actualEffort: number;
    reports: Array<{
      __typename: "DayHistoryReport";
      userId: string;
      title: string | null;
      content: string;
    } | null> | null;
  } | null>;
  createdAt: string;
  updatedAt: string;
};

export type GetUserQuery = {
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
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    cognitoId: string;
    username: string;
    email: string;
    projects: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetProjectQuery = {
  __typename: "Project";
  id: string;
  name: string;
  members: {
    __typename: "ModelProejctMembersConnection";
    items: Array<{
      __typename: "ProejctMembers";
      id: string;
      userId: string;
      projectId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  firstSprintStartAt: string | null;
  cycle: number | null;
  description: string | null;
  Boards: {
    __typename: "ModelBoardConnection";
    items: Array<{
      __typename: "Board";
      id: string;
      name: string;
      category: BoardCategory;
      cycle: number | null;
      description: string | null;
      projectId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListProjectsQuery = {
  __typename: "ModelProjectConnection";
  items: Array<{
    __typename: "Project";
    id: string;
    name: string;
    members: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    firstSprintStartAt: string | null;
    cycle: number | null;
    description: string | null;
    Boards: {
      __typename: "ModelBoardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetBoardQuery = {
  __typename: "Board";
  id: string;
  name: string;
  category: BoardCategory;
  cycle: number | null;
  description: string | null;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    name: string;
    members: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    firstSprintStartAt: string | null;
    cycle: number | null;
    description: string | null;
    Boards: {
      __typename: "ModelBoardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  cards: {
    __typename: "ModelCardConnection";
    items: Array<{
      __typename: "Card";
      id: string;
      boardId: string;
      belongCardID: string | null;
      title: string | null;
      subTitle: string | null;
      content: string | null;
      totalTime: number | null;
      currentDuration: number | null;
      status: CardStatus | null;
      lastActivityAt: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListBoardsQuery = {
  __typename: "ModelBoardConnection";
  items: Array<{
    __typename: "Board";
    id: string;
    name: string;
    category: BoardCategory;
    cycle: number | null;
    description: string | null;
    projectId: string;
    project: {
      __typename: "Project";
      id: string;
      name: string;
      firstSprintStartAt: string | null;
      cycle: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    };
    cards: {
      __typename: "ModelCardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCardQuery = {
  __typename: "Card";
  id: string;
  boardId: string;
  board: {
    __typename: "Board";
    id: string;
    name: string;
    category: BoardCategory;
    cycle: number | null;
    description: string | null;
    projectId: string;
    project: {
      __typename: "Project";
      id: string;
      name: string;
      firstSprintStartAt: string | null;
      cycle: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    };
    cards: {
      __typename: "ModelCardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  belongCardID: string | null;
  title: string | null;
  subTitle: string | null;
  content: string | null;
  totalTime: number | null;
  currentDuration: number | null;
  status: CardStatus | null;
  lastActivityAt: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCardsQuery = {
  __typename: "ModelCardConnection";
  items: Array<{
    __typename: "Card";
    id: string;
    boardId: string;
    board: {
      __typename: "Board";
      id: string;
      name: string;
      category: BoardCategory;
      cycle: number | null;
      description: string | null;
      projectId: string;
      createdAt: string;
      updatedAt: string;
    };
    belongCardID: string | null;
    title: string | null;
    subTitle: string | null;
    content: string | null;
    totalTime: number | null;
    currentDuration: number | null;
    status: CardStatus | null;
    lastActivityAt: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetSprintRecordQuery = {
  __typename: "SprintRecord";
  id: string;
  sprintId: string;
  daysHistory: Array<{
    __typename: "DayHistory";
    date: string;
    actualEffort: number;
    reports: Array<{
      __typename: "DayHistoryReport";
      userId: string;
      title: string | null;
      content: string;
    } | null> | null;
  } | null>;
  createdAt: string;
  updatedAt: string;
};

export type ListSprintRecordsQuery = {
  __typename: "ModelSprintRecordConnection";
  items: Array<{
    __typename: "SprintRecord";
    id: string;
    sprintId: string;
    daysHistory: Array<{
      __typename: "DayHistory";
      date: string;
      actualEffort: number;
    } | null>;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetUserByEmailQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    cognitoId: string;
    username: string;
    email: string;
    projects: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetBoardsByProjectIdQuery = {
  __typename: "ModelBoardConnection";
  items: Array<{
    __typename: "Board";
    id: string;
    name: string;
    category: BoardCategory;
    cycle: number | null;
    description: string | null;
    projectId: string;
    project: {
      __typename: "Project";
      id: string;
      name: string;
      firstSprintStartAt: string | null;
      cycle: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    };
    cards: {
      __typename: "ModelCardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateUserSubscription = {
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
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
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
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
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
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateProejctMembersSubscription = {
  __typename: "ProejctMembers";
  id: string;
  userId: string;
  projectId: string;
  member: {
    __typename: "User";
    cognitoId: string;
    username: string;
    email: string;
    projects: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  project: {
    __typename: "Project";
    id: string;
    name: string;
    members: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    firstSprintStartAt: string | null;
    cycle: number | null;
    description: string | null;
    Boards: {
      __typename: "ModelBoardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProejctMembersSubscription = {
  __typename: "ProejctMembers";
  id: string;
  userId: string;
  projectId: string;
  member: {
    __typename: "User";
    cognitoId: string;
    username: string;
    email: string;
    projects: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  project: {
    __typename: "Project";
    id: string;
    name: string;
    members: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    firstSprintStartAt: string | null;
    cycle: number | null;
    description: string | null;
    Boards: {
      __typename: "ModelBoardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProejctMembersSubscription = {
  __typename: "ProejctMembers";
  id: string;
  userId: string;
  projectId: string;
  member: {
    __typename: "User";
    cognitoId: string;
    username: string;
    email: string;
    projects: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  project: {
    __typename: "Project";
    id: string;
    name: string;
    members: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    firstSprintStartAt: string | null;
    cycle: number | null;
    description: string | null;
    Boards: {
      __typename: "ModelBoardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnCreateProjectSubscription = {
  __typename: "Project";
  id: string;
  name: string;
  members: {
    __typename: "ModelProejctMembersConnection";
    items: Array<{
      __typename: "ProejctMembers";
      id: string;
      userId: string;
      projectId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  firstSprintStartAt: string | null;
  cycle: number | null;
  description: string | null;
  Boards: {
    __typename: "ModelBoardConnection";
    items: Array<{
      __typename: "Board";
      id: string;
      name: string;
      category: BoardCategory;
      cycle: number | null;
      description: string | null;
      projectId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProjectSubscription = {
  __typename: "Project";
  id: string;
  name: string;
  members: {
    __typename: "ModelProejctMembersConnection";
    items: Array<{
      __typename: "ProejctMembers";
      id: string;
      userId: string;
      projectId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  firstSprintStartAt: string | null;
  cycle: number | null;
  description: string | null;
  Boards: {
    __typename: "ModelBoardConnection";
    items: Array<{
      __typename: "Board";
      id: string;
      name: string;
      category: BoardCategory;
      cycle: number | null;
      description: string | null;
      projectId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProjectSubscription = {
  __typename: "Project";
  id: string;
  name: string;
  members: {
    __typename: "ModelProejctMembersConnection";
    items: Array<{
      __typename: "ProejctMembers";
      id: string;
      userId: string;
      projectId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  firstSprintStartAt: string | null;
  cycle: number | null;
  description: string | null;
  Boards: {
    __typename: "ModelBoardConnection";
    items: Array<{
      __typename: "Board";
      id: string;
      name: string;
      category: BoardCategory;
      cycle: number | null;
      description: string | null;
      projectId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateBoardSubscription = {
  __typename: "Board";
  id: string;
  name: string;
  category: BoardCategory;
  cycle: number | null;
  description: string | null;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    name: string;
    members: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    firstSprintStartAt: string | null;
    cycle: number | null;
    description: string | null;
    Boards: {
      __typename: "ModelBoardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  cards: {
    __typename: "ModelCardConnection";
    items: Array<{
      __typename: "Card";
      id: string;
      boardId: string;
      belongCardID: string | null;
      title: string | null;
      subTitle: string | null;
      content: string | null;
      totalTime: number | null;
      currentDuration: number | null;
      status: CardStatus | null;
      lastActivityAt: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBoardSubscription = {
  __typename: "Board";
  id: string;
  name: string;
  category: BoardCategory;
  cycle: number | null;
  description: string | null;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    name: string;
    members: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    firstSprintStartAt: string | null;
    cycle: number | null;
    description: string | null;
    Boards: {
      __typename: "ModelBoardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  cards: {
    __typename: "ModelCardConnection";
    items: Array<{
      __typename: "Card";
      id: string;
      boardId: string;
      belongCardID: string | null;
      title: string | null;
      subTitle: string | null;
      content: string | null;
      totalTime: number | null;
      currentDuration: number | null;
      status: CardStatus | null;
      lastActivityAt: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBoardSubscription = {
  __typename: "Board";
  id: string;
  name: string;
  category: BoardCategory;
  cycle: number | null;
  description: string | null;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    name: string;
    members: {
      __typename: "ModelProejctMembersConnection";
      nextToken: string | null;
    } | null;
    firstSprintStartAt: string | null;
    cycle: number | null;
    description: string | null;
    Boards: {
      __typename: "ModelBoardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  cards: {
    __typename: "ModelCardConnection";
    items: Array<{
      __typename: "Card";
      id: string;
      boardId: string;
      belongCardID: string | null;
      title: string | null;
      subTitle: string | null;
      content: string | null;
      totalTime: number | null;
      currentDuration: number | null;
      status: CardStatus | null;
      lastActivityAt: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCardSubscription = {
  __typename: "Card";
  id: string;
  boardId: string;
  board: {
    __typename: "Board";
    id: string;
    name: string;
    category: BoardCategory;
    cycle: number | null;
    description: string | null;
    projectId: string;
    project: {
      __typename: "Project";
      id: string;
      name: string;
      firstSprintStartAt: string | null;
      cycle: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    };
    cards: {
      __typename: "ModelCardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  belongCardID: string | null;
  title: string | null;
  subTitle: string | null;
  content: string | null;
  totalTime: number | null;
  currentDuration: number | null;
  status: CardStatus | null;
  lastActivityAt: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCardSubscription = {
  __typename: "Card";
  id: string;
  boardId: string;
  board: {
    __typename: "Board";
    id: string;
    name: string;
    category: BoardCategory;
    cycle: number | null;
    description: string | null;
    projectId: string;
    project: {
      __typename: "Project";
      id: string;
      name: string;
      firstSprintStartAt: string | null;
      cycle: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    };
    cards: {
      __typename: "ModelCardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  belongCardID: string | null;
  title: string | null;
  subTitle: string | null;
  content: string | null;
  totalTime: number | null;
  currentDuration: number | null;
  status: CardStatus | null;
  lastActivityAt: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCardSubscription = {
  __typename: "Card";
  id: string;
  boardId: string;
  board: {
    __typename: "Board";
    id: string;
    name: string;
    category: BoardCategory;
    cycle: number | null;
    description: string | null;
    projectId: string;
    project: {
      __typename: "Project";
      id: string;
      name: string;
      firstSprintStartAt: string | null;
      cycle: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    };
    cards: {
      __typename: "ModelCardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  belongCardID: string | null;
  title: string | null;
  subTitle: string | null;
  content: string | null;
  totalTime: number | null;
  currentDuration: number | null;
  status: CardStatus | null;
  lastActivityAt: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateSprintRecordSubscription = {
  __typename: "SprintRecord";
  id: string;
  sprintId: string;
  daysHistory: Array<{
    __typename: "DayHistory";
    date: string;
    actualEffort: number;
    reports: Array<{
      __typename: "DayHistoryReport";
      userId: string;
      title: string | null;
      content: string;
    } | null> | null;
  } | null>;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateSprintRecordSubscription = {
  __typename: "SprintRecord";
  id: string;
  sprintId: string;
  daysHistory: Array<{
    __typename: "DayHistory";
    date: string;
    actualEffort: number;
    reports: Array<{
      __typename: "DayHistoryReport";
      userId: string;
      title: string | null;
      content: string;
    } | null> | null;
  } | null>;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteSprintRecordSubscription = {
  __typename: "SprintRecord";
  id: string;
  sprintId: string;
  daysHistory: Array<{
    __typename: "DayHistory";
    date: string;
    actualEffort: number;
    reports: Array<{
      __typename: "DayHistoryReport";
      userId: string;
      title: string | null;
      content: string;
    } | null> | null;
  } | null>;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
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
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
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
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
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
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateProejctMembers(
    input: CreateProejctMembersInput,
    condition?: ModelProejctMembersConditionInput
  ): Promise<CreateProejctMembersMutation> {
    const statement = `mutation CreateProejctMembers($input: CreateProejctMembersInput!, $condition: ModelProejctMembersConditionInput) {
        createProejctMembers(input: $input, condition: $condition) {
          __typename
          id
          userId
          projectId
          member {
            __typename
            cognitoId
            username
            email
            projects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          project {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            firstSprintStartAt
            cycle
            description
            Boards {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProejctMembersMutation>response.data.createProejctMembers;
  }
  async UpdateProejctMembers(
    input: UpdateProejctMembersInput,
    condition?: ModelProejctMembersConditionInput
  ): Promise<UpdateProejctMembersMutation> {
    const statement = `mutation UpdateProejctMembers($input: UpdateProejctMembersInput!, $condition: ModelProejctMembersConditionInput) {
        updateProejctMembers(input: $input, condition: $condition) {
          __typename
          id
          userId
          projectId
          member {
            __typename
            cognitoId
            username
            email
            projects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          project {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            firstSprintStartAt
            cycle
            description
            Boards {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProejctMembersMutation>response.data.updateProejctMembers;
  }
  async DeleteProejctMembers(
    input: DeleteProejctMembersInput,
    condition?: ModelProejctMembersConditionInput
  ): Promise<DeleteProejctMembersMutation> {
    const statement = `mutation DeleteProejctMembers($input: DeleteProejctMembersInput!, $condition: ModelProejctMembersConditionInput) {
        deleteProejctMembers(input: $input, condition: $condition) {
          __typename
          id
          userId
          projectId
          member {
            __typename
            cognitoId
            username
            email
            projects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          project {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            firstSprintStartAt
            cycle
            description
            Boards {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProejctMembersMutation>response.data.deleteProejctMembers;
  }
  async CreateProject(
    input: CreateProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<CreateProjectMutation> {
    const statement = `mutation CreateProject($input: CreateProjectInput!, $condition: ModelProjectConditionInput) {
        createProject(input: $input, condition: $condition) {
          __typename
          id
          name
          members {
            __typename
            items {
              __typename
              id
              userId
              projectId
              createdAt
              updatedAt
            }
            nextToken
          }
          firstSprintStartAt
          cycle
          description
          Boards {
            __typename
            items {
              __typename
              id
              name
              category
              cycle
              description
              projectId
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
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProjectMutation>response.data.createProject;
  }
  async UpdateProject(
    input: UpdateProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<UpdateProjectMutation> {
    const statement = `mutation UpdateProject($input: UpdateProjectInput!, $condition: ModelProjectConditionInput) {
        updateProject(input: $input, condition: $condition) {
          __typename
          id
          name
          members {
            __typename
            items {
              __typename
              id
              userId
              projectId
              createdAt
              updatedAt
            }
            nextToken
          }
          firstSprintStartAt
          cycle
          description
          Boards {
            __typename
            items {
              __typename
              id
              name
              category
              cycle
              description
              projectId
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
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProjectMutation>response.data.updateProject;
  }
  async DeleteProject(
    input: DeleteProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<DeleteProjectMutation> {
    const statement = `mutation DeleteProject($input: DeleteProjectInput!, $condition: ModelProjectConditionInput) {
        deleteProject(input: $input, condition: $condition) {
          __typename
          id
          name
          members {
            __typename
            items {
              __typename
              id
              userId
              projectId
              createdAt
              updatedAt
            }
            nextToken
          }
          firstSprintStartAt
          cycle
          description
          Boards {
            __typename
            items {
              __typename
              id
              name
              category
              cycle
              description
              projectId
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
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProjectMutation>response.data.deleteProject;
  }
  async CreateBoard(
    input: CreateBoardInput,
    condition?: ModelBoardConditionInput
  ): Promise<CreateBoardMutation> {
    const statement = `mutation CreateBoard($input: CreateBoardInput!, $condition: ModelBoardConditionInput) {
        createBoard(input: $input, condition: $condition) {
          __typename
          id
          name
          category
          cycle
          description
          projectId
          project {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            firstSprintStartAt
            cycle
            description
            Boards {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          cards {
            __typename
            items {
              __typename
              id
              boardId
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
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBoardMutation>response.data.createBoard;
  }
  async UpdateBoard(
    input: UpdateBoardInput,
    condition?: ModelBoardConditionInput
  ): Promise<UpdateBoardMutation> {
    const statement = `mutation UpdateBoard($input: UpdateBoardInput!, $condition: ModelBoardConditionInput) {
        updateBoard(input: $input, condition: $condition) {
          __typename
          id
          name
          category
          cycle
          description
          projectId
          project {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            firstSprintStartAt
            cycle
            description
            Boards {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          cards {
            __typename
            items {
              __typename
              id
              boardId
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
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBoardMutation>response.data.updateBoard;
  }
  async DeleteBoard(
    input: DeleteBoardInput,
    condition?: ModelBoardConditionInput
  ): Promise<DeleteBoardMutation> {
    const statement = `mutation DeleteBoard($input: DeleteBoardInput!, $condition: ModelBoardConditionInput) {
        deleteBoard(input: $input, condition: $condition) {
          __typename
          id
          name
          category
          cycle
          description
          projectId
          project {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            firstSprintStartAt
            cycle
            description
            Boards {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          cards {
            __typename
            items {
              __typename
              id
              boardId
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
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBoardMutation>response.data.deleteBoard;
  }
  async CreateCard(
    input: CreateCardInput,
    condition?: ModelCardConditionInput
  ): Promise<CreateCardMutation> {
    const statement = `mutation CreateCard($input: CreateCardInput!, $condition: ModelCardConditionInput) {
        createCard(input: $input, condition: $condition) {
          __typename
          id
          boardId
          board {
            __typename
            id
            name
            category
            cycle
            description
            projectId
            project {
              __typename
              id
              name
              firstSprintStartAt
              cycle
              description
              createdAt
              updatedAt
            }
            cards {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCardMutation>response.data.createCard;
  }
  async UpdateCard(
    input: UpdateCardInput,
    condition?: ModelCardConditionInput
  ): Promise<UpdateCardMutation> {
    const statement = `mutation UpdateCard($input: UpdateCardInput!, $condition: ModelCardConditionInput) {
        updateCard(input: $input, condition: $condition) {
          __typename
          id
          boardId
          board {
            __typename
            id
            name
            category
            cycle
            description
            projectId
            project {
              __typename
              id
              name
              firstSprintStartAt
              cycle
              description
              createdAt
              updatedAt
            }
            cards {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCardMutation>response.data.updateCard;
  }
  async DeleteCard(
    input: DeleteCardInput,
    condition?: ModelCardConditionInput
  ): Promise<DeleteCardMutation> {
    const statement = `mutation DeleteCard($input: DeleteCardInput!, $condition: ModelCardConditionInput) {
        deleteCard(input: $input, condition: $condition) {
          __typename
          id
          boardId
          board {
            __typename
            id
            name
            category
            cycle
            description
            projectId
            project {
              __typename
              id
              name
              firstSprintStartAt
              cycle
              description
              createdAt
              updatedAt
            }
            cards {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCardMutation>response.data.deleteCard;
  }
  async CreateSprintRecord(
    input: CreateSprintRecordInput,
    condition?: ModelSprintRecordConditionInput
  ): Promise<CreateSprintRecordMutation> {
    const statement = `mutation CreateSprintRecord($input: CreateSprintRecordInput!, $condition: ModelSprintRecordConditionInput) {
        createSprintRecord(input: $input, condition: $condition) {
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
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSprintRecordMutation>response.data.createSprintRecord;
  }
  async UpdateSprintRecord(
    input: UpdateSprintRecordInput,
    condition?: ModelSprintRecordConditionInput
  ): Promise<UpdateSprintRecordMutation> {
    const statement = `mutation UpdateSprintRecord($input: UpdateSprintRecordInput!, $condition: ModelSprintRecordConditionInput) {
        updateSprintRecord(input: $input, condition: $condition) {
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
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSprintRecordMutation>response.data.updateSprintRecord;
  }
  async DeleteSprintRecord(
    input: DeleteSprintRecordInput,
    condition?: ModelSprintRecordConditionInput
  ): Promise<DeleteSprintRecordMutation> {
    const statement = `mutation DeleteSprintRecord($input: DeleteSprintRecordInput!, $condition: ModelSprintRecordConditionInput) {
        deleteSprintRecord(input: $input, condition: $condition) {
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
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSprintRecordMutation>response.data.deleteSprintRecord;
  }
  async GetUser(cognitoId: string): Promise<GetUserQuery> {
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
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    cognitoId?: string,
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($cognitoId: ID, $filter: ModelUserFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listUsers(cognitoId: $cognitoId, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            cognitoId
            username
            email
            projects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (cognitoId) {
      gqlAPIServiceArguments.cognitoId = cognitoId;
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
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetProject(id: string): Promise<GetProjectQuery> {
    const statement = `query GetProject($id: ID!) {
        getProject(id: $id) {
          __typename
          id
          name
          members {
            __typename
            items {
              __typename
              id
              userId
              projectId
              createdAt
              updatedAt
            }
            nextToken
          }
          firstSprintStartAt
          cycle
          description
          Boards {
            __typename
            items {
              __typename
              id
              name
              category
              cycle
              description
              projectId
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
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProjectQuery>response.data.getProject;
  }
  async ListProjects(
    filter?: ModelProjectFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProjectsQuery> {
    const statement = `query ListProjects($filter: ModelProjectFilterInput, $limit: Int, $nextToken: String) {
        listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            firstSprintStartAt
            cycle
            description
            Boards {
              __typename
              nextToken
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
    return <ListProjectsQuery>response.data.listProjects;
  }
  async GetBoard(id: string): Promise<GetBoardQuery> {
    const statement = `query GetBoard($id: ID!) {
        getBoard(id: $id) {
          __typename
          id
          name
          category
          cycle
          description
          projectId
          project {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            firstSprintStartAt
            cycle
            description
            Boards {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          cards {
            __typename
            items {
              __typename
              id
              boardId
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
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBoardQuery>response.data.getBoard;
  }
  async ListBoards(
    filter?: ModelBoardFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBoardsQuery> {
    const statement = `query ListBoards($filter: ModelBoardFilterInput, $limit: Int, $nextToken: String) {
        listBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            category
            cycle
            description
            projectId
            project {
              __typename
              id
              name
              firstSprintStartAt
              cycle
              description
              createdAt
              updatedAt
            }
            cards {
              __typename
              nextToken
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
    return <ListBoardsQuery>response.data.listBoards;
  }
  async GetCard(id: string): Promise<GetCardQuery> {
    const statement = `query GetCard($id: ID!) {
        getCard(id: $id) {
          __typename
          id
          boardId
          board {
            __typename
            id
            name
            category
            cycle
            description
            projectId
            project {
              __typename
              id
              name
              firstSprintStartAt
              cycle
              description
              createdAt
              updatedAt
            }
            cards {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCardQuery>response.data.getCard;
  }
  async ListCards(
    filter?: ModelCardFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCardsQuery> {
    const statement = `query ListCards($filter: ModelCardFilterInput, $limit: Int, $nextToken: String) {
        listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            boardId
            board {
              __typename
              id
              name
              category
              cycle
              description
              projectId
              createdAt
              updatedAt
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
    return <ListCardsQuery>response.data.listCards;
  }
  async GetSprintRecord(id: string): Promise<GetSprintRecordQuery> {
    const statement = `query GetSprintRecord($id: ID!) {
        getSprintRecord(id: $id) {
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
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSprintRecordQuery>response.data.getSprintRecord;
  }
  async ListSprintRecords(
    filter?: ModelSprintRecordFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSprintRecordsQuery> {
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
    return <ListSprintRecordsQuery>response.data.listSprintRecords;
  }
  async GetUserByEmail(
    email?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetUserByEmailQuery> {
    const statement = `query GetUserByEmail($email: AWSEmail, $sortDirection: ModelSortDirection, $filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        getUserByEmail(email: $email, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            cognitoId
            username
            email
            projects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (email) {
      gqlAPIServiceArguments.email = email;
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
    return <GetUserByEmailQuery>response.data.getUserByEmail;
  }
  async GetBoardsByProjectId(
    projectId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelBoardFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetBoardsByProjectIdQuery> {
    const statement = `query GetBoardsByProjectId($projectId: ID, $sortDirection: ModelSortDirection, $filter: ModelBoardFilterInput, $limit: Int, $nextToken: String) {
        getBoardsByProjectId(projectId: $projectId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            category
            cycle
            description
            projectId
            project {
              __typename
              id
              name
              firstSprintStartAt
              cycle
              description
              createdAt
              updatedAt
            }
            cards {
              __typename
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
  }
  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
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
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
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
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
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
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreateProejctMembersListener: Observable<
    OnCreateProejctMembersSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProejctMembers {
        onCreateProejctMembers {
          __typename
          id
          userId
          projectId
          member {
            __typename
            cognitoId
            username
            email
            projects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          project {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            firstSprintStartAt
            cycle
            description
            Boards {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateProejctMembersSubscription>;

  OnUpdateProejctMembersListener: Observable<
    OnUpdateProejctMembersSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProejctMembers {
        onUpdateProejctMembers {
          __typename
          id
          userId
          projectId
          member {
            __typename
            cognitoId
            username
            email
            projects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          project {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            firstSprintStartAt
            cycle
            description
            Boards {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateProejctMembersSubscription>;

  OnDeleteProejctMembersListener: Observable<
    OnDeleteProejctMembersSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProejctMembers {
        onDeleteProejctMembers {
          __typename
          id
          userId
          projectId
          member {
            __typename
            cognitoId
            username
            email
            projects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          project {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            firstSprintStartAt
            cycle
            description
            Boards {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteProejctMembersSubscription>;

  OnCreateProjectListener: Observable<
    OnCreateProjectSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProject {
        onCreateProject {
          __typename
          id
          name
          members {
            __typename
            items {
              __typename
              id
              userId
              projectId
              createdAt
              updatedAt
            }
            nextToken
          }
          firstSprintStartAt
          cycle
          description
          Boards {
            __typename
            items {
              __typename
              id
              name
              category
              cycle
              description
              projectId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateProjectSubscription>;

  OnUpdateProjectListener: Observable<
    OnUpdateProjectSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProject {
        onUpdateProject {
          __typename
          id
          name
          members {
            __typename
            items {
              __typename
              id
              userId
              projectId
              createdAt
              updatedAt
            }
            nextToken
          }
          firstSprintStartAt
          cycle
          description
          Boards {
            __typename
            items {
              __typename
              id
              name
              category
              cycle
              description
              projectId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateProjectSubscription>;

  OnDeleteProjectListener: Observable<
    OnDeleteProjectSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProject {
        onDeleteProject {
          __typename
          id
          name
          members {
            __typename
            items {
              __typename
              id
              userId
              projectId
              createdAt
              updatedAt
            }
            nextToken
          }
          firstSprintStartAt
          cycle
          description
          Boards {
            __typename
            items {
              __typename
              id
              name
              category
              cycle
              description
              projectId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteProjectSubscription>;

  OnCreateBoardListener: Observable<OnCreateBoardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateBoard {
        onCreateBoard {
          __typename
          id
          name
          category
          cycle
          description
          projectId
          project {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            firstSprintStartAt
            cycle
            description
            Boards {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          cards {
            __typename
            items {
              __typename
              id
              boardId
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
      }`
    )
  ) as Observable<OnCreateBoardSubscription>;

  OnUpdateBoardListener: Observable<OnUpdateBoardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBoard {
        onUpdateBoard {
          __typename
          id
          name
          category
          cycle
          description
          projectId
          project {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            firstSprintStartAt
            cycle
            description
            Boards {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          cards {
            __typename
            items {
              __typename
              id
              boardId
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
      }`
    )
  ) as Observable<OnUpdateBoardSubscription>;

  OnDeleteBoardListener: Observable<OnDeleteBoardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBoard {
        onDeleteBoard {
          __typename
          id
          name
          category
          cycle
          description
          projectId
          project {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            firstSprintStartAt
            cycle
            description
            Boards {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          cards {
            __typename
            items {
              __typename
              id
              boardId
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
      }`
    )
  ) as Observable<OnDeleteBoardSubscription>;

  OnCreateCardListener: Observable<OnCreateCardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateCard {
        onCreateCard {
          __typename
          id
          boardId
          board {
            __typename
            id
            name
            category
            cycle
            description
            projectId
            project {
              __typename
              id
              name
              firstSprintStartAt
              cycle
              description
              createdAt
              updatedAt
            }
            cards {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
      }`
    )
  ) as Observable<OnCreateCardSubscription>;

  OnUpdateCardListener: Observable<OnUpdateCardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCard {
        onUpdateCard {
          __typename
          id
          boardId
          board {
            __typename
            id
            name
            category
            cycle
            description
            projectId
            project {
              __typename
              id
              name
              firstSprintStartAt
              cycle
              description
              createdAt
              updatedAt
            }
            cards {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
      }`
    )
  ) as Observable<OnUpdateCardSubscription>;

  OnDeleteCardListener: Observable<OnDeleteCardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCard {
        onDeleteCard {
          __typename
          id
          boardId
          board {
            __typename
            id
            name
            category
            cycle
            description
            projectId
            project {
              __typename
              id
              name
              firstSprintStartAt
              cycle
              description
              createdAt
              updatedAt
            }
            cards {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
      }`
    )
  ) as Observable<OnDeleteCardSubscription>;

  OnCreateSprintRecordListener: Observable<
    OnCreateSprintRecordSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateSprintRecord {
        onCreateSprintRecord {
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
      }`
    )
  ) as Observable<OnCreateSprintRecordSubscription>;

  OnUpdateSprintRecordListener: Observable<
    OnUpdateSprintRecordSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSprintRecord {
        onUpdateSprintRecord {
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
      }`
    )
  ) as Observable<OnUpdateSprintRecordSubscription>;

  OnDeleteSprintRecordListener: Observable<
    OnDeleteSprintRecordSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSprintRecord {
        onDeleteSprintRecord {
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
      }`
    )
  ) as Observable<OnDeleteSprintRecordSubscription>;
}
