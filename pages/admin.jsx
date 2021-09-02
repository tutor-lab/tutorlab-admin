import dynamic from "next/dynamic";

const ReactAdmin = dynamic(
  () => {
    return import("../components/admin/adminComponent");
  },
  {
    ssr: false,
  }
);

const AdminPage = () => {
  return <ReactAdmin />;
};

export default AdminPage;
