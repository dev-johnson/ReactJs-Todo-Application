import App from './components/main';
import HomePage from './components/home/index';
import NotFound from './components/page-not-found';
import PostTable from './components/posts/posts-list';
import UserTable from './components/users/users-list';
import CommentTable from './components/comments/comments-list';
import TodoTable from './components/todos/todos-list';

const routes = [
  { path: '/', component: HomePage },
  { path: '/posts', component: PostTable },
  { path: '/users', component: UserTable },
  { path: '/comments', component: CommentTable },
  { path: '/todos', component: TodoTable }
 ];

export default routes;
