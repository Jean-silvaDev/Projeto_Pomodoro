import { Play } from 'lucide-react';

export function Botao() {
  return (
    <button style={styles.botao}>
        <Play style={styles.icon} />
    </button>
  );
}

const styles = {
  botao: {
    borderRadius: "100%",
    width: "6vw",
    height: "20vh",
    borderColor: 'white',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  icon: {
    width: "4vw",
    height: "12vh",
    backgroundColor: 'white',
    fill: 'red',
    color: 'red',
    borderRadius: 60,
  }
};