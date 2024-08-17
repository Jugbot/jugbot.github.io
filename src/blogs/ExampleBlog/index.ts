import type { Blog } from '..'

export const blog: Blog = {
  path: 'example-blog',
  component: () => import('./ExampleBlog.vue'),
  title: 'My First Blog',
  subtitle: 'This is my first blog post',
  date: new Date(1723860490635),
  image: 'https://via.placeholder.com/150',
  tags: ['first', 'blog']
}
