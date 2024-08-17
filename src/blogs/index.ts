import type { RouteRecordRaw } from 'vue-router'

import { blog as ExampleBlog } from './ExampleBlog'

export type Blog = RouteRecordRaw & {
  title: string
  subtitle: string
  date: Date
  image: string
  tags: string[]
}

export const blogs: Blog[] = [ExampleBlog]
