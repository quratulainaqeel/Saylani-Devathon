import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleEvent = (e) => {
    e.preventDefault();
    const payload = {
      username: username,
      email: email,
      password: password,
    };

    fetch('http://localhost:3000/api/get-all-user')
      .then((response) => response.json())
      .then((data) => {
        const users = data.User;
        const userExists = users.some((user) => user.email === email);

        if (userExists) {
          Swal.fire({
            title: 'User Already Exists',
            text: 'The provided email is already associated with an existing user.',
            icon: 'error',
            confirmButtonText: 'OK',
            timer: 3000,
          });
        } else {
          fetch('http://localhost:3000/api/Signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.error(error);
            });
          Swal.fire({
            title: 'Registration Successful!',
            text: 'Your account has been created successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
            timer: 3000,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: 'Error',
          text: 'An error occurred while retrieving user data.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });

    setEmail('');
    setPassword('');
    setUsername('');
  };

  return (
    <>
      <div className="container  d-flex justify-content-center align-items-center " style={{ width: '100vw', height: '100vh' }}>
        <div className='bg-light p-5 rounded'>
          <h3 className='text-center mb-4'>Create your Account</h3>
          <form onSubmit={handleEvent}>
            <div className="mb-3">
              <div className="container">
                <label className='form-label' htmlFor="\">Username</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder='Enter Userame'
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="container">
                <label className='form-label' htmlFor="\">Email</label>
                <input
                  type="email"
                  placeholder='Enter your Email'
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="container">
                <label className='form-label' htmlFor="\">Password</label>
                <input
                  type="password"
                  placeholder='Create new Password'
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="d-grid col-12 mx-auto mt-4">
              <button className="btn btn-primary p-2" type='submit'>Sign Up</button>
            </div>
          </form>
          <Link className='nav-link text-primary text-end' to="/login"><small><span className='text-dark'>Already a member ?</span> Login</small></Link>
        </div>
      </div>
    </>
  );
}
