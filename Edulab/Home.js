import React from 'react'
import s1 from "../image/s1.jpg"
import s2 from "../image/s2.jpg"
import s3 from "../image/s3.jpg"
import a1 from "../image/a1.png"
import a2 from "../image/a2.png"
import a3 from "../image/a3.png"
import a4 from "../image/a4.png"
const Home = () => {
  return (
    <div className="container-fluid mt-4">
		<div class="carousel slide" data-bs-ride="carousel" id="car">
    <div class="carousel-indicators">
    <button type="button" data-bs-target="#car" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#car" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#car" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={s1} class="d-block w-100" alt="..." height="500" width="100%"/>
    </div>
    <div class="carousel-item">
      <img src={s2} class="d-block w-100" alt="..." height="500" width="100%"/>
    </div>
    <div class="carousel-item">
      <img src={s3} class="d-block w-100" alt="..." height="500" width="100%"/>
    </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#car" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#car" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
		</div>
    <div className='row'>
      <h1 className='text-center'>EDULAB</h1>
      <div className='col-3'>
        <div class="card" >
        <img src={a1} class="card-img-top" alt="..." width="18px"/>
          <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>
      </div>
      <div className='col-3'>
      <div class="card" >
        <img src={a2} class="card-img-top" alt="..." width="18px"/>
          <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>
      </div>
      <div className='col-3'>
      <div class="card" >
        <img src={a3} class="card-img-top" alt="..." width="18px"/>
          <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>
      </div>
      <div className='col-3'>
      <div class="card" >
        <img src={a4} class="card-img-top" alt="..." width="18px"/>
          <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>
      </div>
    </div>
	</div> 
    
  )
}

export default Home