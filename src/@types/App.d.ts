declare module "App" {
  import { Component } from react;
  import type { QueryClient } from react - query

  export declare type RenderAndFunctionReturnType = JSX.Element;
  declare interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: number;
        lng: number;
      };
    };
  }

  declare interface IApp {
    count: number;
    users: IUser[];
    queryClient: QueryClient;
  }

  declare type CatchBlockErrorType = Error;

  declare type _incrementCountType = () => void;
  declare type _incrementCountReturnType = void;
}