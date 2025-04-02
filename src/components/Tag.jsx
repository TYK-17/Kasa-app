function Tag({ label }) {
    return (
      <span style={{
        backgroundColor: '#ff6060',
        color: 'white',
        padding: '0.3rem 0.8rem',
        borderRadius: '0.5rem',
        fontSize: '0.8rem'
      }}>
        {label}
      </span>
    );
  }
  
  export default Tag;
  