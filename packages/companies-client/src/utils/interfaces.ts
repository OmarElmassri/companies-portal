export interface Tag {
  icon: string;
  size?: string;
}

export enum Shape {
  circle = "circle",
  square = "square",
}

export enum Resize {
  cover = "cover",
  contain = "contain",
}

export interface ApiData {
  body?: { [key: string]: string | number };
  query?: { [key: string]: string };
  headers?: { [key: string]: string };
  success?: (value: any) => void;
  fail?: (value: any) => void;
  error?: () => void;
}

export interface IError {
  path?: string;
  error?: string;
}