import { Tarea } from "./Tarea"

type Props = {
    lista:string[];
    eliminar:(index:number)=>void

}

export const Lista = ({lista,eliminar}: Props) => {


  return (
    <>
    {lista.map( (tarea,index)=>(
        <Tarea key={index} tarea={tarea} eliminarTask={()=>eliminar(index)} ></Tarea>
        
    )
    
)
    }
    </>
  )
}