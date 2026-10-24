function Logo() {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="150"
        height="150"
        role="img"
        aria-label="Logo du site"
      >
        <circle cx="50" cy="50" r="45" fill="#3498db" />
        <text
          x="50"
          y="62"
          fontSize="36"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="Arial"
        >
          TP
        </text>
      </svg>
      <p>Illustration intégrée dynamiquement avec React</p>
    </div>
  );
}

export default Logo;