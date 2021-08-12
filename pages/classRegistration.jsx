import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ChangeField,
  Initialize,
  NextStep,
  PrevStep,
} from "../redux/reducers/update";
import MyClass from "./myclass";
import Step01 from "../components/classRegistration/step/step01";
import Step02 from "../components/classRegistration/step/step02";
import Step03 from "../components/classRegistration/step/step03";

const ClassRegistration = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ update }) => ({
    form: update.update,
  }));
  const step = form.step;
  const onChange = (name) => (e) => {
    //update values
    var value = e.target.value;
    switch (name) {
      case "maintitle":
        TextLimit(e, 40);
        value = e.target.value;
        break;
      case "subheading":
      case "introduction":
        TextLimit(e, 25);
        value = e.target.value;
        break;
      case "image":
        ImagePreview(e);
        break;
      case "language":
        const selected = radiobox(1);
        value = selected;
        break;
      case "languageInput":
        if (e.code == "Enter") {
          name = "language";
          hideModal();
        }
        break;
      case "level":
        const level = radiobox(2);
        value = level;
        break;
      case "online":
        value = form.online == "on" ? "off" : "on";
        break;
      case "offline":
        value = form.offline == "on" ? "off" : "on";
        break;
      case "discuss":
        value = form.discuss == "on" ? "off" : "on";
        break;
      case "personal":
        value = form.personal == "on" ? "off" : "on";
        break;
      case "group":
        value = form.group == "on" ? "off" : "on";
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
    //이전 페이지
    e.preventDefault();
    dispatch(NextStep());
  };

  const Prev = (e) => {
    //다음 페이지
    e.preventDefault();
    dispatch(PrevStep());
  };

  const [preview, setPreview] = useState({ selectedFile: [] });
  const ImagePreview = (e) => {
    //이미지 프리뷰
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setPreview(base64.toString().split(",")[1]);
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const TextLimit = (e, limit) => {
    //글자 수 제한
    if (e.target.value.length > limit) {
      alert(`최대 ${limit}자까지 작성하실 수 있습니다.`);
      e.target.value = e.target.value.substring(0, limit);
    }
  };

  const showModal = () => {
    //modal 보이게
    const menu = document.getElementById("menu");
    menu ? (menu.style.display = "block") : "";
    const back = document.getElementById("LanBackground");
    back ? (back.style.display = "block") : "";
    const modal = document.getElementById("languageModal");
    modal ? (modal.style.display = "block") : "";
  };

  const hideModal = () => {
    //modal 숨기기
    const menu = document.getElementById("menu");
    menu ? (menu.style.display = "none") : "";
    const back = document.getElementById("LanBackground");
    back ? (back.style.display = "none") : "";
    const modal = document.getElementById("languageModal");
    modal ? (modal.style.display = "none") : "";
  };

  const showLevel = () => {
    const level = document.getElementById("level");
    level ? (level.style.display = "block") : "";
    const back = document.getElementById("LevBackground");
    back ? (back.style.display = "block") : "";
    const modal = document.getElementById("levelModal");
    modal ? (modal.style.display = "block") : "";
  };

  const hideLevel = () => {
    const level = document.getElementById("level");
    level ? (level.style.display = "none") : "";
    const back = document.getElementById("LevBackground");
    back ? (back.style.display = "none") : "";
    const modal = document.getElementById("levelModal");
    modal ? (modal.style.display = "none") : "";
  };

  const showGray = () => {
    const menu = document.getElementById("modal");
    menu ? (menu.style.display = "block") : "";
    const back = document.getElementById("goBackModal");
    back ? (back.style.display = "block") : "";
    const gray = document.getElementById("grayOne");
    gray ? (gray.style.display = "block") : "";
  };

  const hideGray = () => {
    const menu = document.getElementById("modal");
    menu ? (menu.style.display = "none") : "";
    const back = document.getElementById("goBackModal");
    back ? (back.style.display = "none") : "";
    const gray = document.getElementById("grayOne");
    gray ? (gray.style.display = "none") : "";
  };
  const radiobox = (num) => {
    //체크한 라디오박스 구별
    const check =
      num == 1
        ? document.querySelector('input[name="modalElement"]:checked')
        : document.querySelector('input[name="levelElement"]:checked');
    const selected = check ? check.id.valueOf() : "";
    num == 1 ? hideModal() : hideLevel();
    return selected;
  };

  useEffect(() => {
    //페이지 initialize
    dispatch(Initialize("update"));
  }, [dispatch]);

  switch (step) {
    case 1:
      return (
        <Step01
          type="update"
          form={form}
          nextStep={Next}
          handleChange={onChange}
          preview={preview}
          showGray={showGray}
          hideGray={hideGray}
        />
      );
    case 2:
      return (
        <Step02
          type="update"
          form={form}
          nextStep={Next}
          prevStep={Prev}
          handleChange={onChange}
          showModal={showModal}
          showLevel={showLevel}
        />
      );
    case 3:
      return (
        <Step03
          type="update"
          form={form}
          prevStep={Prev}
          handleChange={onChange}
        />
      );

    default:
      return <MyClass />;
  }
};

export default ClassRegistration;
