import { Admin, Resource } from "react-admin";
import { createHashHistory } from "history";
import { Provider } from "react-redux";
import adminStore from "./adminStore";
import { ClassL } from "./users";
import simpleRestProvider from "ra-data-simple-rest";
import { BrowserRouter } from "react-router-dom";
const dataProvider = simpleRestProvider("http://3.35.255.192:8081/");
const history = createHashHistory();
const authProvider = () => Promise.resolve();

const ReactAdmin = () => {
  return (
    <BrowserRouter>
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
          <Resource name="tutors" list={ClassL} />
          {/*tutors에서 제대로 받아오는지 확인용*/}
        </Admin>
      </Provider>
    </BrowserRouter>
  );
};

export default ReactAdmin;
