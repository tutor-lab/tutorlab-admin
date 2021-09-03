import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import { SimpleList, List, Datagrid, EmailField, TextField } from "react-admin";
import axios from "axios";
import { useState, useEffect } from "react";
axios.defaults.baseURL = "http://3.35.255.192:8081/tutors";
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});

export const ClassL = (props) => {
  const [response, setResponse] = useState("");
  const [res, setRes] = useState(false);
  const GetClass = async () => {
    try {
      setResponse(await axios.get("/mylectures"));
      setRes(true);
      return response;
    } catch (e) {
      setRes(false);
      return Promise.reject(e);
    }
  };
  useEffect(() => {
    GetClass();
  }, []);
  console.log(response);

  return (
    <List title="All Classes" {...props}>
      <SimpleList
        primaryText={(record) => record.name}
        secondaryText={(record) => record.username}
        tertiaryText={(record) => record.email}
      />
    </List>
  );
};

// export const UserList = (props) => {
//   const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

//   return (
//     <List title="All users" {...props}>
//       {isSmall ? (
//         <SimpleList
//           primaryText={(record) => record.name}
//           secondaryText={(record) => record.username}
//           tertiaryText={(record) => record.email}
//         />
//       ) : (
//         <Datagrid>
//           <TextField source="id" />
//           <TextField source="name" />
//           <TextField source="username" />
//           <EmailField source="email" />
//         </Datagrid>
//       )}
//     </List>
//   );
// };
