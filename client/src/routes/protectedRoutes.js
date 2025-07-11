import routes from "./routes";

const protectedRoutes = [
  routes.dashboard,
  routes.campaigns,
  routes.automation,
  routes.crm,
  routes.forms,
  routes.analytics,
  routes.integrations,
  routes.settings,
];

export default protectedRoutes;
