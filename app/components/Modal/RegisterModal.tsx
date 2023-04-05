'use client';
import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';
import axios from 'axios';
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import useRegisterModal from '@/hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';
function RegisterModal() {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, formState: {
        errors,
    }} = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);
        try {
            await axios.post('/api/register', data);
            registerModal.onClose();
        } catch (error: any) {
            toast.error(error.message);
        }
    }
    const body = (
        <div className='flex flex-col gap-4'>
            <Heading 
                title='Welcome to Airbnb' 
                subtitle='Create an account'
            />
            <Input 
                id='email'
                label='Email'
                disabled={isLoading}
                errors={errors}
                register={register}
                required
            />
            <Input 
                id='name'
                label='Name'
                disabled={isLoading}
                errors={errors}
                register={register}
                required
            />
            <Input 
                id='password'
                label='Password'
                disabled={isLoading}
                errors={errors}
                register={register}
                required
                type='password'
            />
        </div>
    );
    const footer = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <Button 
                outline
                label='Continue with Google'
                icon={FcGoogle}
                onClick={() => {}}
            />
            <Button 
                outline
                label='Continue with Github'
                icon={AiFillGithub}
                onClick={() => {}}
            />
            <div className='text-neutral-500 text-center mt-4 font-light'>
                <div className='flex flex-row items-center gap-2 justify-center'>
                    <div>
                        Already have an account?
                    </div>
                    <div className='text-neutral-800 cursor-pointer hover:underline'>
                        Log In
                    </div>
                </div>        
            </div>
        </div>
    )
  return (
    <Modal 
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title='Register'
        actionLabel='Continue'
        body={body}
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        footer={footer}
    />
  )
}

export default RegisterModal