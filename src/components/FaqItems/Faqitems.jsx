import React from "react";
import plus from "../../../assets/images/icon-plus.svg";
import minus from "../../../assets/images/icon-minus.svg";

export default function Faqitems(props) {
  const [show, setShow] = React.useState(false);

  function handleShow() {
    setShow(true);
  }

  function handleHide() {
    setShow(false);
  }

  return (
    <main>
      <div className="faq">
        <div className="question">
          <h2>{props.titleOfQuestion}</h2>
          {!show ? (
            <button className="plus" type="button">
              <img src={plus} alt="plus" onClick={handleShow} />
            </button>
          ) : (
            <button className="minus" type="button">
              <img src={minus} alt="minus" onClick={handleHide} />
            </button>
          )}
        </div>
        {show && <p className="para-response">{props.response}</p>}
      </div>
    </main>
  );
}
