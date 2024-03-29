import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProducts = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorage_key ='c1e98868c1d43acae982c32d2ad25d4f'
    const onSubmit = async data => {
        const image = data.image[0]
        console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const url =`https://api.imgbb.com/1/upload?key=${imageStorage_key}`
        fetch(url,
         {
             method:'POST',
             body:formData
         })
          .then(res=> res.json())
          .then(result=>{
             if(result.success){
                 const image = result.data.url;
                 const tool = {
                     name: data.name,
                     shortDescription: data.shortDescription,
                     orderQuantity:data.orderQuantity,
                     availableQuantity:data.availableQuantity,
                     price:data.price,
                     image: image
                 }
             
                fetch('https://manufacturer-website-t9g0.onrender.com/tools',{
                    method:'POST',
                    headers: {
                     'content-type': 'application/json',
                     authorization: `Bearer ${localStorage.getItem('accessToken')}`
                 },
                 body: JSON.stringify(tool)
                }) 
                .then(res=> res.json())
                .then(inserted=>{
                    if(inserted.insertedId){
                        toast.success('Great add a products')
                       reset()
                    }
                    else{
                        toast.error('Oh no try again later')
                    }
                })
             }
             
          })
      };
    return (
        <div className="card w-96 mx-auto bg-base-100 shadow-xl">
  <div className="card-body">
  <div>
            <h2  className="text-3xl text-center text-purple-700">Add a Products</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div  className="form-control w-full max-w-xs">
                    <label  className="label">
                        <span  className="label-text">Tool Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                         className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label  className="label">
                        {errors.name?.type === 'required' && <span  className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div  className="form-control w-full max-w-xs">
                    <label  className="label">
                        <span  className="label-text">Short Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Short Description"
                         className="input input-bordered w-full max-w-xs"
                        {...register("shortDescription", {
                            required: {
                                value: true,
                                message: 'Descripiton is Required'
                            }
                        })}
                    />
                    <label  className="label">
                        {errors?.shortDescription?.type === 'required' && <span  className="label-text-alt text-red-500">{errors?.shortDescription?.message}</span>}
                       
                    </label>
                </div>
                <div  className="form-control w-full max-w-xs">
                    <label  className="label">
                        <span  className="label-text">Order Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Order Quantity"
                         className="input input-bordered w-full max-w-xs"
                        {...register("orderQuantity", {
                            required: {
                                value: true,
                                message: 'Order Quantity is Required'
                            }
                        })}
                    />
                    <label  className="label">
                        {errors?.shortDescription?.type === 'required' && <span  className="label-text-alt text-red-500">{errors?.shortDescription?.message}</span>}
                       
                    </label>
                </div>
                <div  className="form-control w-full max-w-xs">
                    <label  className="label">
                        <span  className="label-text">Available Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Available Quantity"
                         className="input input-bordered w-full max-w-xs"
                        {...register("availableQuantity", {
                            required: {
                                value: true,
                                message: 'Descripiton is Required'
                            }
                        })}
                    />
                    <label  className="label">
                        {errors?.shortDescription?.type === 'required' && <span  className="label-text-alt text-red-500">{errors?.shortDescription?.message}</span>}
                       
                    </label>
                </div>

               
                <div  className="form-control w-full max-w-xs">
                    <label  className="label">
                        <span  className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Price"
                         className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            }
                        })}
                    />
                    <label  className="label">
                        {errors?.shortDescription?.type === 'required' && <span  className="label-text-alt text-red-500">{errors?.shortDescription?.message}</span>}
                       
                    </label>
                </div>

                <div  className="form-control w-full max-w-xs">
                    <label  className="label">
                        <span  className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                         className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label  className="label">
                        {errors.image?.type === 'required' && <span  className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>

                <input  className='btn w-full max-w-xs text-white' type="submit" value="Add Product" />
            </form>
        </div>
    </div>
  </div>

        
    );
};

export default AddProducts;