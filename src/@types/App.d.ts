declare module "App" {
  import { Component } from "react";

  export declare type RenderAndFunctionReturnType = JSX.Element;
  declare interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
  }

  declare interface IApp {
    count: number;
    users: IUser[];
  }

  declare type CatchBlockErrorType = Error;

  declare type _incrementCountType = () => void;
  declare type _incrementCountReturnType = void;
}