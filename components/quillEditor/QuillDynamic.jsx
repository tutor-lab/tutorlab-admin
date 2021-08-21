import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { ChangeField } from "../../redux/reducers/update";
const Dynamic = dynamic(
  () => {
    return import("./EditorComponent");
  },
  { ssr: false }
);

const Quill = () => {
  const dispatch = useDispatch();
  const onChange = (e, content, delta, source) => {
    var value = e;
    dispatch(
      ChangeField({
        form: "update",
        key: "content",
        value,
      })
    );
  };
  return <Dynamic onChange={onChange} />;
};

export default Quill;
