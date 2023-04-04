'use client';
import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';
import axios from 'axios';
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import useRegisterModal from '@/hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
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
        } catch (error) {
            
        }
    }
    const body = (
        <div className='flex flex-col gap-4'>
            <Heading 
                title='Welcome to Airbnb' 
                subtitle='Create an account'
            />
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

    />
  )
}

export default RegisterModal