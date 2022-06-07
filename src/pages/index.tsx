import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Content, Header } from "../../styles/home";
import { Task } from '../components/Task';

type Tasks = {
  id: string;
  description: string;
  isCompleted: boolean;
}

const Home = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [newTask, setNewTask] = useState('');

  const completedTasks = tasks.reduce((acc, value) => {
    if (value.isCompleted == true) {
      acc += 1
    }

    return acc;
  }, 0)

  const handleCreateTask = (event: FormEvent) => {
    event.preventDefault();

    if (newTask.length == 0) {
      return
    }

    setTasks([...tasks, {
      id: uuid(),
      description: newTask,
      isCompleted: false,
    }])

    setNewTask('');
  }

  const handleCompleteTask = (id: string) => {
    const completeTask = tasks.map((task) => {

      if (task.id === id ) {
        return {
          id: task.id,
          description: task.description,
          isCompleted: !task.isCompleted,
        }
      } else {
        return task;
      }
    })

    setTasks(completeTask);

  }

  const handleDeleteTask = (id: string) => {
    const updateTask = tasks.filter(task => task.id !== id);

    setTasks(updateTask);
  }

  return (
    <>
      <Header>
        <img src="/logo.svg" alt="Logo Todo list" />
      </Header>

      <Content>
        <div className="wrapper">
          <form onSubmit={handleCreateTask}>
            <input 
              type="text" 
              placeholder="Adicione uma nova tarefa"
              value={newTask}
              onChange={e => setNewTask(e.target.value)}
              
            />
            <button type="submit">
                Criar 
                <PlusCircle size={18} weight="bold"
            />  
            </button>
          </form>

          <div className="tasks">
            <div className="tasks-title">
             <strong>Tarefas criadas <span>{tasks.length}</span></strong>
             <strong>Concluidas <span>{completedTasks > 0 ? `${completedTasks} de ${tasks.length}` : 0}</span></strong>
            </div>

            <div className="tasks-content">
              
              { tasks.length > 0 ? (
                
                tasks.map(task => (
                  <Task 
                    key={task.id} 
                    task={task} 
                    onCompleteTask={handleCompleteTask} 
                    onDeleteTask = {handleDeleteTask}
                  />
                ))

              ) : (
                <div className="tasks-empty">
                <img src="/clipboard.svg" alt="Não há tarefas" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
              )  }
            </div>
          </div>
        </div>
      </Content>
    </>
  )
}

export default Home
