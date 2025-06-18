import React from "react";

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
            <button className="plus">
              <img src={props.img1} alt="plus" onClick={handleShow} />
            </button>
          ) : (
            <button className="minus">
              <img src={props.img2} alt="minus" onClick={handleHide} />
            </button>
          )}
        </div>
        {show && <p className="para-response">{props.response}</p>}
      </div>
    </main>
  );
}
