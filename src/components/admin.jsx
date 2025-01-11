import React from 'react';
import './styles/admin.css';

function Admin() {
  return (
    <div className="Admin page">
      <h1>Store Administration</h1>

      <div className="parent">
        <div className="prod-form">
          <h3>Register Products</h3>
        <div>
            <label className='form-label'>Title</label>
            <input type='text' className='form-control' />
        </div>

        <div>
            <label className='form-label'>Image</label>
            <input type='text' className='form-control' />
        </div>

        <div>
            <label className='form-label'>Price</label>
            <input type='text' className='form-control' />
        </div>

        <div>
            <label className='form-label'>Category</label>
            <input type='text' className='form-control' />
        </div>

        <div className='controls'>
            <button className='btn btn-sm btn-dark'>Register</button>
        </div>
          {/* Add product registration form inputs here */}
        </div>

        <div className="coupon-form">
          <h3>Register Coupons</h3>

          <div>
            <label className='form-label'>Code</label>
            <input type='text' className='form-control' />
          </div>

          <div>
            <label className='form-label'>Discount</label>
            <input type='text' className='form-control' />
          </div>

          <div className='controls'>
            <button className='btn btn-sm btn-dark'>Register Coupons</button>
        </div>
          {/* Add coupon registration form inputs here */}
        </div>
      </div>
    </div>
  );
}

export default Admin;