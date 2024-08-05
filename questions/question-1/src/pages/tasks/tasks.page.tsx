import { bind } from '../../bind'
import styles from './tasks.module.css'
import { IoMdCheckbox } from "react-icons/io";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
const cx = bind(styles)

interface Task {
    id: string;
    name: string;
    done: boolean;
}

const tasks: Task[] = [
    {
        id: 'task-1',
        name: 'Viajar en el tiempo y evitar que Colón descubriera América. Documentar el viaje con fotos y videos de alta calidad',
        done: false
    },
    {
        id: 'task-2',
        name: 'Domesticar un león y enseñarle a hacer trucos. El león debe ser capaz de realizar un salto mortal y tocar una melodía en el piano',
        done: true
    },
    {
        id: 'task-3',
        name: 'Conectar una videollamada con un extraterrestre. La conversación debe durar al menos 15 minutos y cubrir temas como la vida en otros planetas y las últimas tendencias en moda alienígena.',
        done: false
    },
    {
        id: 'task-4',
        name: 'Inventar un nuevo idioma y escribir un poema épico en él. Asegurarse de que sea gramaticalmente correcto y tenga al menos 1000 palabras.',
        done: false
    },
    {
        id: 'task-5',
        name: 'Dominar el arte del origami con un solo trozo de papel A4. Crear una réplica exacta del Coliseo Romano.',
        done: true
    },
]

export const TasksPage = () => {
    return (
        <div className={cx('wrapper')}>
            <h3>Aquí están tus tareas de hoy</h3>
           <ul className={cx('tasks')}>
            {tasks.map(task => <li key={task.id} className={cx('task', task.done && 'task--done')}>
                {task.done ? <IoMdCheckbox /> : <MdOutlineCheckBoxOutlineBlank />}
                <p>{task.name}</p>
            </li>)}
           </ul>
        </div>
    )
}
