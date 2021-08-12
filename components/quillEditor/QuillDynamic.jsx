import dynamic from "next/dynamic";
const Dynamic = dynamic(
  () => {
    return import("./EditorComponent");
  },
  { ssr: false }
);

const Quill = () => {
  const onChange = (e,content,delta,source) =>{
    console.log('ee',e)
  }


  return <Dynamic onChange={onChange}/>;
};

export default Quill;
