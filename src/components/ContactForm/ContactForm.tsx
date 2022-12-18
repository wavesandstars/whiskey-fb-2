import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseBrand, chooseCountry, chooseYear, chooseFlavor, choosePrice} from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

interface ContactFormProps {
  id?:string;
  data?:{}
};

interface ContactState {
  brand: string;
  country: string;
  year: string;
  flavor: string;
  price: string;
  
};

export const ContactForm = (props:ContactFormProps) => {

    const dispatch = useDispatch(); 
    const store = useStore();
    const name = useSelector<ContactState>(state => state.brand);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
      
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
           
            dispatch(chooseBrand(data.brand));
            dispatch(chooseCountry(data.country));
            dispatch(chooseYear(data.year));
            dispatch(chooseFlavor(data.flavor));
            dispatch(choosePrice(data.price));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
            
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="brand">Brand</label>
                    <Input {...register('brand')} name="brand" placeholder='Brand'/>
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <Input {...register('country')} name="country" placeholder='Country'/>
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name="year" placeholder='Year'/>
                </div>
                <div>
                    <label htmlFor="flavor">Flavor</label>
                    <Input {...register('flavor')} name="flavor" placeholder='Flavor'/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder='Price'/>
                </div>
                
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}