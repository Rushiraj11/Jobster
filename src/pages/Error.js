import React from 'react'
import {Link} from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'


const Error = () => {
  return (
    <Wrapper className='full-page'>
        <div>
            <img src={img} alt="not found" />
            <h3>ohh! Page Not Found</h3>
            <p>Sorry can't the page your looking for</p>
            <Link to='/'>Back Home</Link>
        </div>
    </Wrapper>
  )
}

export default Error