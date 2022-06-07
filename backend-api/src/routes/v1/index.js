const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const courseRoute = require('./courses.route');
const vendorRoute = require('./vendor.route');
const courseDetailsRoute = require('./course-details.route');
const practiceTestRoute = require('./practice-test.route');
const questionBankRoute = require('./question-bank.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path:'/courses',
    route:courseRoute
  },
  {
    path:'/vendor',
    route:vendorRoute
  },
  {
    path:'/course-details',
    route:courseDetailsRoute
  },
  {
    path:'/practice-test',
    route:practiceTestRoute
  },
  {
    path:'/question-bank',
    route:questionBankRoute
  }
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
