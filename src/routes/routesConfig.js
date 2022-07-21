import HomePage from '@containers/HomePage'
import PeoplePage from '@containers/PeoplePage'
import NotFoundPage from '@containers/NotFoundPage'
import PersonPage from '@containers/PersonPage'

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: <HomePage />
  },
  {
    path: '/people',
    exact: true,
    component: <PeoplePage />
  },
  {
    path: '/people/:id',
    exact: false,
    component: <PersonPage />
  },
  {
    path: '*',
    exact: false,
    component: <NotFoundPage />
  },
  {
    path: '/not-found',
    exact: true,
    component: <NotFoundPage />
  }
];

export default routesConfig;
