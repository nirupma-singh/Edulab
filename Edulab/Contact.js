import React from 'react'

const Contact = () => {
  return (
    <div className="container-xxl py-5">
    <div className="container">
        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Contact For Any Query</h1>
        <div className="row g-4">
            <div className="col-12">
                <div className="row gy-4">
                    <div className="col-md-4 wow fadeIn" data-wow-delay="0.1s">
                        <div className="d-flex align-items-center bg-light rounded p-4">
                            <div className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" >
                                <i className="fa fa-map-marker-alt text-primary"></i>
                            </div>
                            <span>123 Street, New York, USA</span>
                        </div>
                    </div>
                    <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
                        <div className="d-flex align-items-center bg-light rounded p-4">
                            <div className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" >
                               
                            </div>
                            <span>info@example.com</span>
                        </div>
                    </div>
                    <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
                        <div className="d-flex align-items-center bg-light rounded p-4">
                            <div className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" >
                                
                            </div>
                            <span>+012 345 6789</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                
            </div>
            <div className="col-md-6">
                <div className="wow fadeInUp" data-wow-delay="0.5s">
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type='text' placeholder='Your Name' className='form-control'/>
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" ></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact