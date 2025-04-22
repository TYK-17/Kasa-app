import { useState } from 'react';
import './Collapse.scss';

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <div
        className={`collapse-title ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        {title}
      </div>
      {open && (
        <div className="collapse-content">
          {content}
        </div>
      )}
    </div>
  );
}

export default Collapse;
