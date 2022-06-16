import React, {useState , useEffect} from 'react'
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const GeneralAlert = ({show ,setShow, variant, showAll}) => {
    const [dismissAlert, setDismissAlert] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
if(variant === 'success' || variant === 'info' ){
    setDismissAlert(true)
}
         }, 2000);
       },[]);
       
  return (
    <div className="container">
        <div className="row justify-content-end">
            <div className="col-6">
            <Alert show ={!dismissAlert?show:false} variant={variant} onClose={() => setShow(false)} dismissible={variant === 'success' || variant === 'info'?false:true}>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis,
          </p>
        </Alert>
            </div>
        </div>
    </div>
    
       
  )
}

export default GeneralAlert