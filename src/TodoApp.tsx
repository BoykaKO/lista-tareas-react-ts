import { useState } from "react"
import { Lista } from "./Lista"
export const TodoApp = () => {
    const [tarea, setTarea] = useState<string>('')
    const [lista, setLista] = useState<string[]>([])

    const handleAgregar = (): void => {
        if (tarea.trim() == "") return
        setLista(task => [...task, tarea])
        setTarea("")
    }
    const handleEliminar = (index: number) => {
        setLista(tarea => tarea.filter((_, i) => i !== index))
    }
    return (
        <>
            <h1>Lista de tareas </h1>
            <hr />
            <div className="containerInput">
                <input
                    className="inputTask"
                    type="text"
                    placeholder="Nueva Tarea"
                    value={tarea}
                    onChange={(evt) => { setTarea(evt.target.value) }}
                />
                <button className="buttonTask" onClick={() => handleAgregar()}>Agregar</button>
            </div>
            <div className="containerList">
                <Lista lista={lista} eliminar={handleEliminar}></Lista>
            </div>




        </>
    )
}