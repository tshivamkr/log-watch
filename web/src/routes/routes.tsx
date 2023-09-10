import { useRoutes } from "react-router-dom";
import LogList from "../pages/log-list";

function Routes() {
    const routes = useRoutes([
        {path: 'logs', Component: LogList}
    ]);
    return routes;
}

export default Routes;
