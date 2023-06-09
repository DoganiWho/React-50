import Timer from '../projects/project-01/timer';
import TodoList from '../projects/project-02/todoList';
import TicTacToe from '../projects/project-03/game';
import MultiSelectInput from '../projects/project-04/multiselect';
import Accordion from '../projects/project-05/Accordion' 
import {accordionData} from '../projects/project-05/utils/content' 


const Projects = () => {
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
      <section id="project-04">
        <p className="project__title">4. Multiselect Input</p>
        {/* <MultiSelectInput onSelectionChange={setSelectedOptions} options={inputValue}/> */}
      </section>
      <section id="project-05">
        <p className="project__title">5. Accordion</p>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
      </section>
    </div>
  );
};

export default Projects;