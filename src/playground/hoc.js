import React from 'react'
import ReactDom from 'react-dom'

const Info = () => {
  return (
    <div>
      
    </div>
  )
}
const requireAuth =  (WrappedInfo)=>{
    return (props)=> (
        <div>
            {props.isAuth && <p>You are authenticated!!</p>}
            <h4>Welcome backs</h4>
        </div>
    )
}

const AUthInfo = requireAuth()
ReactDom.render(<AUthInfo  isAuth={false}/>,document.getElementById('app'))
