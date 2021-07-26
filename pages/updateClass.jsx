import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  ChangeField,
  Initialize,
  NextStep,
  PrevStep,
  UpdateClass,
} from "../redux/reducers/update";
import NewClass01 from "./newclass01";
import NewClass02 from "./newclass02";
import NewClass03 from "./newclass03";
import MyClass from "./myclass";

const NewClassForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ update }) => ({
    form: update,
  }));

  const step = form.update.step;
  const onChange = (name) => (e) => {
    var value = name == "ckEditor" ? "" : e.target.value;
    console.log(name);
    switch (name) {
      case "maintitle":
      case "subheading":
      case "introduction":
        TextLimit(e);
        break;
      case "image":
        ImagePreview(e);
        break;
      case "language":
        const selected = radiobox();
        value = selected;
        break;
      case "languageInput":
        if (e.code == "Enter") {
          name = "language";
          hideModal();
        }
        break;
      case "ckEditor":
        //어떤 값을 받아와야 할지.....???
        break;
      default:
        break;
    }

    dispatch(
      ChangeField({
        form: "update",
        key: name,
        value,
      })
    );
  };

  const Next = (e) => {
    e.preventDefault();
    dispatch(NextStep());
  };

  const Prev = (e) => {
    e.preventDefault();
    dispatch(PrevStep());
  };

  const [preview, setPreview] = useState({ selectedFile: [] });
  const ImagePreview = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setPreview(base64.toString().split(",")[1]); // 파일 base64 상태 업데이트
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
    }
  };

  const TextLimit = (e) => {
    if (e.target.value.length > 40) {
      e.target.value = e.target.value.slice(0, 40);
      alert("최대 40자까지 작성하실 수 있습니다.");
    }
  };

  const showModal = () => {
    const menu = document.getElementById("menu");
    menu ? (menu.style.display = "block") : "";
  };

  const hideModal = () => {
    const menu = document.getElementById("menu");
    menu ? (menu.style.display = "none") : "";
  };

  const radiobox = () => {
    const check = document.querySelector('input[name="modalElement"]:checked');
    const selected = check ? check.id.valueOf() : "";
    hideModal();
    return selected;
  };

  useEffect(() => {
    dispatch(Initialize("update"));
  }, [dispatch]);

  switch (step) {
    case 1:
      return (
        <NewClass01
          type="update"
          form={form}
          nextStep={Next}
          prevStep={Prev}
          handleChange={onChange}
          preview={preview}
        />
      );
    case 2:
      return (
        <NewClass02
          type="update"
          form={form}
          nextStep={Next}
          prevStep={Prev}
          handleChange={onChange}
          showModal={showModal}
        />
      );
    case 3:
      return (
        <NewClass03
          type="update"
          form={form}
          nextStep={Next}
          prevStep={Prev}
          handleChange={onChange}
        />
      );
    default:
      return <MyClass />;
  }
};

export default NewClassForm;
