import './App.css'
import Timer from '../project-01/timer';

export default function App() {
  return (
    <div>
      <h1>Timer App</h1>
      <Timer initialTime={120} />
    </div>
  )
}