

type Props = {
    tarea:string
    eliminarTask: ()=> void
}

export const Tarea = ({tarea,eliminarTask}: Props) => {
  return (
    <div className="containerTask">
        <span>{tarea}</span>
        <button onClick={()=>eliminarTask()}>Eliminar</button>
    </div>
  )
}