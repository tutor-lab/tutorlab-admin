import dynamic from "next/dynamic";
const Dynamic = dynamic(
  () => {
    return import("./EditorComponent");
  },
  { ssr: false }
);

const Quill = () => {
  return <Dynamic />;
};

export default Quill;
