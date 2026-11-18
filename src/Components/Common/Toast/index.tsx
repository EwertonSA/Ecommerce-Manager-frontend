import { Toast, ToastBody } from "reactstrap"

interface props{
isOpen:boolean
message:string
color:string
}
export const ToastComponent=({isOpen,message,color}:props)=>{

return(
<div 
className="position-fixed top-0 end-0 p-3" 
      style={{ zIndex: 9999 }}
>
<Toast className={`${color} text-white`} isOpen={isOpen}>
<ToastBody className='text-center'>{message}</ToastBody>
</Toast>
</div>
)
}