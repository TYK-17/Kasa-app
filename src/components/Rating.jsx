function Rating({ rating }) {
    const stars = [1, 2, 3, 4, 5];
  
    return (
      <div style={{ display: 'flex', gap: '0.2rem', justifyContent: 'flex-end' }}>
        {stars.map((star) => (
          <span key={star} style={{ color: star <= rating ? '#ff6060' : '#e3e3e3', fontSize: '1.5rem' }}>★</span>
        ))}
      </div>
    );
  }
  
  export default Rating; // ✅ TRÈS IMPORTANT
  