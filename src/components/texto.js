export function Texto({ children, style }) {
  return (
    <p style={{ ...style, color: 'white', fontSize: '25px' }}>
      {children}
    </p>
  );
}