import { Trash } from "phosphor-react";
import { Container } from "./styles";

type TaskProps = {
  task: {
    id: string;
    description: string;
    isCompleted: boolean;
  }
  onCompleteTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export const Task = ({ task, onCompleteTask, onDeleteTask}: TaskProps) => {

  return (
    <Container isCompleted={task.isCompleted}>
      {task.isCompleted ? (
        <button onClick={() => onCompleteTask(task.id)} className="completed" type="button">
          <img src="/completed.svg" alt="Completed" />
        </button>
      ) : (
        <button 
          onClick={() => onCompleteTask(task.id)} 
          className="not-completed" 
          type="button">
        </button>
      )}
      <p>{task.description}</p>
      <button onClick={() => onDeleteTask(task.id)} className="delete">
        <Trash size={20} />
      </button>

    </Container>
  );
}