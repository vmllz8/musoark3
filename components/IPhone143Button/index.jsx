import React from "react";
import Notification from "../Notification";
import "./IPhone143Button.css";

function IPhone143Button(props) {
  const { user, ellipse17, text10, text11, text5, text4 } = props;

  return (
    <div className="container-center-horizontal">
      <form className="iphone-14-3-button screen" name="form5" action="form5" method="post">
        <div className="overlap-group-container">
          <div className="overlap-group1">
            <Notification />
            <img
              className="undraw_anonymous_feedback_re_rc5v-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/undraw-anonymous-feedback-re-rc5v-1@2x.png"
              alt="undraw_anonymous_feedback_re_rc5v 1"
            />
            <div className="user">{user}</div>
          </div>
          <div className="overlap-group3">
            <a href="javascript:SubmitForm('form5')">
              <img className="ellipse-17" src={ellipse17} alt="Ellipse 17" />
            </a>
            <img
              className="arrow-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c41e554a57640af57fef0/img/arrow-2@2x.png"
              alt="Arrow 2"
            />
          </div>
        </div>
        <div className="overlap-group2">
          <a href="javascript:SubmitForm('form5')">
            <div className="rectangle-2"></div>
          </a>
          <h1 className="text-2 notosansarabic-normal-black-24px">{text10}</h1>
          <a href="javascript:SubmitForm('form5')">
            <img
              className="vector"
              src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-39@2x.png"
              alt="Vector"
            />
          </a>
          <img
            className="vector-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-41@2x.png"
            alt="Vector"
          />
          <img
            className="vector-2"
            src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-43@2x.png"
            alt="Vector"
          />
        </div>
        <div className="overlap-group">
          <a href="javascript:SubmitForm('form5')">
            <div className="rectangle-3"></div>
          </a>
          <a href="javascript:SubmitForm('form5')">
            <img
              className="vector-3"
              src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-39@2x.png"
              alt="Vector"
            />
          </a>
          <img
            className="vector-4"
            src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-41@2x.png"
            alt="Vector"
          />
          <img
            className="vector-5"
            src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-44@2x.png"
            alt="Vector"
          />
          <div className="text-3 notosansarabic-normal-black-24px">{text11}</div>
          <p className="text-5 notosansarabic-normal-gun-powder-11px">{text5}</p>
        </div>
        <p className="text-4 notosansarabic-normal-gun-powder-11px">{text4}</p>
        <img
          className="vector-3-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-3-1.png"
          alt="Vector 3"
        />
      </form>
    </div>
  );
}

export default IPhone143Button;
