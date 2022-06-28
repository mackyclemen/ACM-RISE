import React, {useState} from 'react';
import '../style/accordion.scss'

const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = useState(false);
    return (
      <div className="accordion-wrapper">
        <div
          className={`accordion-title bg-gradient-to-r from-riseDarkBlue via-riseLightBlue to-riseDarkBlue ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
          >
          {title}
        </div>
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
          <div className="accordion-content">{children}</div>
        </div>
      </div>
    );
  };

  export default Accordion;