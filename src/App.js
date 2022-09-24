import { useInput } from "./hooks/use-input";
import "./styles.css";

export default function App() {
  const { reversedValue, onChange } = useInput();
  return (
    <div className="App">
      <h1>{reversedValue}</h1>
      <input onChange={onChange} />
    </div>
  );
}
