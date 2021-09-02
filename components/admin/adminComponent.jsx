import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { createHashHistory } from "history";
import { Provider } from "react-redux";
import adminStore from "./adminStore";
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const history = createHashHistory();
const authProvider = () => Promise.resolve();
const ReactAdmin = () => {
  return (
    <Provider
      store={adminStore({
        authProvider,
        dataProvider,
        history,
      })}
    >
      <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        history={history}
        title="My Admin"
      >
        <Resource name="/users"></Resource>
      </Admin>
    </Provider>
  );
};

export default ReactAdmin;
