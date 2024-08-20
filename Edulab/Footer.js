import React from 'react'
import "../Components/index1.css"
const Footer = () => 
{
  return (
	<div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" >
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-4">Company</h5>
                    <ul>
                    <li><a className="btn btn-link text-white-50" href="/#">About Us</a></li>
                    <li><a className="btn btn-link text-white-50" href="/#">Contact Us</a></li>
                    
                    <li><a className="btn btn-link text-white-50" href="/#">Terms & Condition</a></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-4">Quick Links</h5>
                    <ul>
                   <li><a className="btn btn-link text-white-50" href="/#">About Us</a></li>
                   <li><a className="btn btn-link text-white-50" href="/#">Contact Us</a></li>
                   <li><a className="btn btn-link text-white-50" href="/#">Terms & Condition</a></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-4">Contact</h5>
                    <ul>
                   <li><p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p></li>
                   <li><p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p></li>
                   <li> <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p></li>
                    </ul> 
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Footer