import './App.css'
import Timer from '../project-01/timer';
import TodoList from '../project-02/todoList';
import TicTacToe from '../project-03/game';

export default function App() {
  return (
    <div>
      <section id="project-01">
        <p className="project__title">1. Timer App</p>
        <Timer initialTime={120} />
      </section>
      <section id="project-02">
        <p className="project__title">2. Todo App</p>
        <TodoList />
      </section>
      <section id="project-03">
        <p className="project__title">3. Tic-Tac-Toe</p>
        <TicTacToe />
      </section>
    </div>
  )
}