import type { MicroCMSListContent } from "microcms-js-sdk";

export type Category = {
  name: string
} & MicroCMSListContent

export type Topics = {
  title:string,
  icatch:string,
  category: Category[],
  content: string
} & MicroCMSListContent

export type News = {
  title: string,
  category: Category[],
  content: string
} & MicroCMSListContent
