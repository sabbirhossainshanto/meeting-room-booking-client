import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { ReactNode } from "react";

export type TChildren = {
  children: ReactNode;
};

export type THeading = {
  to: string;
  title: string;
  color?:string
  padding:string
};


export type TError = {
  data: {
    error: Record<string, unknown>;
    errorSource: {
      message: string;
      path: string;
    }[];
    message: string;
    stack: string;
    success: boolean;
  };
  statusCode: number;
};

export type TMeta = {
  limit:number;
  page:number;
  total:number;
  totalPage:number
}

export type TResponse<T> = {
  data?:T;
  error?: TError;
  meta?:TMeta;
  success:boolean;
  message:string
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi

export type TQueryParam = {
  name:string;
  value:boolean | React.Key
}
