import { createBrowserRouter } from 'react-router-dom';
import { Urls } from './urls';
import { Layout } from '../layout/layout';
import { TasksPage } from '../pages/tasks/tasks.page';
import { NewTaskPage } from '../pages/new-task/new-task.page';
import { ProfilePage } from '../pages/profile/profile.page';

export const AppRouting = createBrowserRouter([
  {
    path: Urls.HOME,
    element: <Layout />,
    children: [
        {
            path: Urls.TASKS,
            element: <TasksPage />,
          },
          {
            path: Urls.NEW_TASK,
            element: <NewTaskPage />,
          },
          {
            path: Urls.PROFILE,
            element: <ProfilePage />,
          },
    ]
  },
]);
