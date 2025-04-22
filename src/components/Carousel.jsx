import { useState } from 'react';

function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0);
  const total = pictures.length;

  const next = () => current === total - 1 ? setCurrent(0) : setCurrent(current + 1);
  const prev = () => current === 0 ? setCurrent(total - 1) : setCurrent(current - 1);

  return (
    <div style={{ position: 'relative' }}>
      <img src={pictures[current]} alt={`Slide ${current}`} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
      {total > 1 && (
        <>
          <button onClick={prev} style={{ position: 'absolute', top: '50%', left: '1rem' }}>‹</button>
          <button onClick={next} style={{ position: 'absolute', top: '50%', right: '1rem' }}>›</button>
          <span style={{ position: 'absolute', bottom: '1rem', right: '50%' }}>{current + 1}/{total}</span>
        </>
      )}
    </div>
  );
}

export default Carousel;
