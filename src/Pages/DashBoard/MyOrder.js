import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrder = () => {
  const [user, loading] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    if (user) {
      fetch(`https://manufacturer-website-t9g0.onrender.com/myorder?email=${user?.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
        // Handle the error here
      });
    }
  }, [user]);

  const cancelOrder = (id) => {
    const processed = window.confirm('Are you sure you want to cancel the order?');
    if (processed) {
      const url = `https://manufacturer-website-t9g0.onrender.com/order/${id}`;
      fetch(url, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
      })
      .then((res) => res.json())
      .then((data) => {
        toast(data);
        const remaining = orders.filter((order) => order._id !== id);
        setOrders(remaining);
      })
      .catch((error) => {
        console.error('Error canceling order:', error);
        // Handle the error here
      });
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='container mx-auto'>
      <h3>My order: {orders?.length}</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.BuyerName}</td>
                <td>{order.BuyerEmail}</td>
                <td>{order.toolName}</td>
                <td>{order.price}</td>
                <td>
                  {order.price && !order.paid ? (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs btn-success">Pay</button>
                    </Link>
                  ) : (
                    <div>
                      <p><span className="text-success">Paid</span></p>
                      <p>Transaction id: <span className="text-success">{order.transactionId}</span></p>
                    </div>
                  )}
                </td>
                <td>
                  <button onClick={() => cancelOrder(order._id)} className="btn btn-sm mt-4">
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
