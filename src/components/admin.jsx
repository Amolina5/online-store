import React, { useState } from 'react';
import './styles/admin.css';

function Admin() {
  const [coupon, setCoupon] = useState({ code: "", discount: "" });
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({ title: "", image: "", price: "", category: "" });

  function handleCoupon(e) {
    const { name, value } = e.target;
    setCoupon(prevCoupon => ({ ...prevCoupon, [name]: value }));
  }

  function handleProduct(e) {
    const { name, value } = e.target;
    setProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  }

  function addProduct() {
    setProducts(prevProducts => [...prevProducts, product]);
    setProduct({ title: "", image: "", price: "", category: "" });
  }

  function removeProduct(index) {
    setProducts(prevProducts => prevProducts.filter((_, i) => i !== index));
  }

  return (
    <div className="Admin page">
      <h1>Store Administration</h1>

      <div className="parent">
        <div className="prod-form">
          <h3>Register Products</h3>
          <div>
            <label className='form-label'>Title</label>
            <input type='text' className='form-control' name="title" value={product.title} onChange={handleProduct} />
          </div>

          <div>
            <label className='form-label'>Image</label>
            <input type='text' className='form-control' name="image" value={product.image} onChange={handleProduct} />
          </div>

          <div>
            <label className='form-label'>Price</label>
            <input type='text' className='form-control' name="price" value={product.price} onChange={handleProduct} />
          </div>

          <div>
            <label className='form-label'>Category</label>
            <input type='text' className='form-control' name="category" value={product.category} onChange={handleProduct} />
          </div>

          <div className='controls'>
            <button className='btn btn-sm btn-dark' onClick={addProduct}>Register</button>
          </div>
        </div>

        <div className="coupon-form">
          <h3>Register Coupons</h3>
          <div>
            <label className='form-label'>Code</label>
            <input type='text' className='form-control' name="code" value={coupon.code} onChange={handleCoupon} />
          </div>

          <div>
            <label className='form-label'>Discount</label>
            <input type='number' className='form-control' name="discount" value={coupon.discount} onChange={handleCoupon} />
          </div>

          <div className='controls'>
            <button className='btn btn-sm btn-dark'>Register Coupons</button>
          </div>
        </div>
      </div>

      <div className="product-list">
        <h3>Product List</h3>
        <ul>
          {products.map((prod, index) => (
            <li key={index}>
              {prod.title} - {prod.category} - ${prod.price}
              <button onClick={() => removeProduct(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Admin;