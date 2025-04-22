import { useState } from 'react';
import './Collapse.scss';

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <button
        className={`collapse-header ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        <img
          src="/assets/vector.png"
          alt="chevron"
          className={`vector-icon ${open ? 'open' : ''}`}
        />
      </button>

      {open && (
        <div className="collapse-content">
          {typeof content === 'string' ? <p>{content}</p> : content}
        </div>
      )}
    </div>
  );
}

export default Collapse;
