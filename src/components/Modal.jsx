import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Drawer from './Drawer'

const Modal = ({statemodal}) => {
    const portalid = document.getElementById('overlay')
    const Backdrop = () =>{
        return <div className='fixed z-20 w-screen h-screen bg-black/20'/>
    }
  return (
    <>
    {ReactDOM.createPortal(<Backdrop/>,portalid)}
    {ReactDOM.createPortal(<Drawer statemodal1={statemodal}/>,portalid)}
    </>
  )
}

export default Modal