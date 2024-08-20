import React from 'react'

const Login = () => {
  return (
    <div className='container-fluid mt-4 '>
      <div className='row offset-4'>
        <div className='col-6 '>
        <form method='post' >
          <label className="form-label" for="uname">Enter Username: </label>
          <input type="text" placeholder="Enter Username" className="form-control " />
          <label className="form-label mt-4" for="pass">Enter Password: </label>
          <input type="password" placeholder="Enter Password" className="form-control"/>
          <div class="row mt-4">
    <div class="col d-flex justify-content-center">
      
      <div class="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form" />
        <label className="form-check-label" for="form2"> Remember me </label>
      </div>
    </div>

    <div class="col">
    
      <a href="#!">Forgot password?</a>
      <p><a href='/#'>Click Here!</a> for new user</p>
    </div>
  </div>

          <button type="button" className="btn btn-warning mt-3">Login</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login