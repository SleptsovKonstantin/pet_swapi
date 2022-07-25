import HomePage from '@containers/HomePage'
import PeoplePage from '@containers/PeoplePage'
import NotFoundPage from '@containers/NotFoundPage'
import PersonPage from '@containers/PersonPage'
import FavoritePage from '@containers/FavoritePage'
import SearchPage from '@containers/SearchPage'

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
    path: '/favorites',
    exact: true,
    component: <FavoritePage />
  },
  {
    path: '/search',
    exact: true,
    component: <SearchPage />
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
