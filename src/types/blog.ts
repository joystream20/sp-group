import type { MicroCMSListContent } from "microcms-js-sdk";

export type Category = {
  name: string
} & MicroCMSListContent

export type Topics = {
  title:string,
  category: Category[],
  text: string
} & MicroCMSListContent

export type News = {
  title: string,
  content: string
} & MicroCMSListContent
