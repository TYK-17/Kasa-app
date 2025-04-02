import { useState } from 'react';

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ width: '100%' }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          backgroundColor: '#ff6060',
          color: 'white',
          padding: '0.8rem',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginBottom: open ? 0 : '1rem'
        }}
      >
        {title}
      </div>
      {open && (
        <div style={{
          backgroundColor: '#f7f7f7',
          padding: '1rem',
          marginBottom: '1rem'
        }}>
          {content}
        </div>
      )}
    </div>
  );
}

export default Collapse;
