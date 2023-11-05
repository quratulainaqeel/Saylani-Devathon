import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export default function SearchBar() {
  return (
    <div className="container " >
      <h2 className='text-center text-primary fw-bold my-3'>Find a Doctor</h2>

      <InputGroup size="default" >
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='Search by Doctor name or Specialization'
        />
        <InputGroup.Text className='bg-dark'>
          <Link to={'/login'}>
            <button className='bg-dark text-white' style={{ border: 'none' }}>
              Search
            </button>
          </Link>
        </InputGroup.Text>
      </InputGroup>

      <div className="container">
        <div className="row mt-4">
          <div className="col-md-3 mb-3">
            <div className="card" >
              <img src="https://www.froedtert.com/sites/default/files/image/2022-02/how-to-find-right-cardiologist-stethoscope-1200x628.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  <p className='fw-bold'>Dr. Akber</p>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card" >
              <img src="https://www.froedtert.com/sites/default/files/image/2022-02/how-to-find-right-cardiologist-stethoscope-1200x628.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  <p className='fw-bold'>Dr. Akber</p>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card" >
              <img src="https://www.froedtert.com/sites/default/files/image/2022-02/how-to-find-right-cardiologist-stethoscope-1200x628.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  <p className='fw-bold'>Dr. Akber</p>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card" >
              <img src="https://www.froedtert.com/sites/default/files/image/2022-02/how-to-find-right-cardiologist-stethoscope-1200x628.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  <p className='fw-bold'>Dr. Akber</p>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card" >
              <img src="https://www.froedtert.com/sites/default/files/image/2022-02/how-to-find-right-cardiologist-stethoscope-1200x628.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  <p className='fw-bold'>Dr. Akber</p>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card" >
              <img src="https://www.froedtert.com/sites/default/files/image/2022-02/how-to-find-right-cardiologist-stethoscope-1200x628.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  <p className='fw-bold'>Dr. Akber</p>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
              </div>
            </div>
          </div>
         
        </div>
      </div>

    </div>
  )
}
