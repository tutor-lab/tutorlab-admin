import styles from "../styles/newclass02.module.scss";
import BottomTab from "./bottomtab";
// import { CKEditor } from "ckeditor4-react";
import Image from "next/image";
import { useState, useEffect } from "react";
// import "../ckeditor/ckeditor.js";

const NewClass02 = ({ form, nextStep, prevStep, handleChange, showModal }) => {
  return (
    <>
      <div className={styles.whitesection}>
        <div className={styles.prev} onClick={prevStep}>
          <Image
            src="/images/prev.png"
            alt=""
            width="10px"
            height="14px"
          ></Image>
        </div>
        <h1 className={styles.title}>강의 등록</h1>
        <div className={styles.category}>
          <h2 className={styles.unselected}>1단계</h2>
          <h2 className={styles.selected}>2단계</h2>
          <h2 className={styles.unselected}>3단계</h2>
        </div>{" "}
      </div>
      <div className={styles.graysection}>
        <div>
          <p className={styles.question}>1. 강의 종류를 선택해주세요.</p>
          <div className={styles.selectType}>
            <span
              className={styles.selectBtn}
              onClick={handleChange("classtype")}
            >
              <span className={styles.selector}>강의 종류</span>
              <span className={styles.elements}>개발</span>
            </span>
            {/* 아직 카테고리가 개발밖에 없어서 button이 아닌 span으로 처리! */}
            <button className={styles.selectBtn} id="btn" onClick={showModal}>
              <span className={styles.selector}>언어</span>
              <span className={styles.elements} id="result">
                {form.update.language}
              </span>
            </button>
          </div>
          <div className={styles.modal} id="menu">
            <label htmlFor="Java">
              <div
                className={styles.modalElement}
                onClick={handleChange("language")}
              >
                <input type="radio" name="modalElement" id="Java"></input>
                Java
              </div>
            </label>
            <label htmlFor="JavaScript">
              <div
                className={styles.modalElement}
                onClick={handleChange("language")}
              >
                <input type="radio" name="modalElement" id="JavaScript"></input>
                JavaScript
              </div>
            </label>
            <label htmlFor="Python">
              <div
                className={styles.modalElement}
                onClick={handleChange("language")}
              >
                <input type="radio" name="modalElement" id="Python"></input>
                Python
              </div>
            </label>
            <label htmlFor="R">
              <div
                className={styles.modalElement}
                onClick={handleChange("language")}
              >
                <input type="radio" name="modalElement" id="R"></input>R
              </div>
            </label>
            <label htmlFor="SQL">
              <div
                className={styles.modalElement}
                onClick={handleChange("language")}
              >
                <input type="radio" name="modalElement" id="SQL"></input>
                SQL
              </div>
            </label>
          </div>
        </div>
        <div>
          <p className={styles.question}>
            2. 강의 상세 내용 및 이미지를 등록해주세요.
          </p>
          <ul className={styles.example}>
            <li>튜터 간략 소개</li>
            <li>커리큘럼</li>
            <li>강의 예시화면 - gif 등록 가능(00mb 이하)</li>
          </ul>
        </div>
        {/* <textarea name="editor1" id="editor1" rows={10} cols={80}></textarea>
        <script>CKEDITOR.replace({"editor1"})</script> */}
        {/* <CKEditor
          replace="editor"
          config={{
            filebrowserUploadUrl: "/upload.do?type=Files",
            filebrowserImageUploadUrl: "/upload.do?type=Images",
            filebrowserUploadMethod: "form",
          }} //이미지 업로드 부분! */}
        {/* //<resources location="/WEB-INF/views/ckeditor/" mapping="/ckeditor/**"></resources>을 servlet-context.xml에 추가
          onChange={handleChange("ckEditor")}
        ></CKEditor>{" "} */}
      </div>
      <div className={styles.bottom}>
        <button type="button" className={styles.next} onClick={nextStep}>
          다음
        </button>
        <div className={styles.fixedTab}>
          <BottomTab />
        </div>
      </div>{" "}
    </>
  );
};
export default NewClass02;
