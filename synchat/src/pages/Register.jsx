import React from 'react';
import { Link, Form, useNavigation } from 'react-router-dom';


import PageTitle from '../components/PageTitle';
import { logoLight, logoDark, banner } from '../assets/assets';
import TextField from '../components/TextField';
import { Button } from '../components/Button';
import { CircularProgress } from '../components/Progress';


const Register = () => {
  //get navigation from submitting and loading
  const navigation = useNavigation();

  return (
    <>
      <PageTitle title='Create and Account' />
      <div className='relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
        <div className='flex flex-col p-4'>
          <Link
            to='/'
            className='max-w-max mb-auto sm:mx-auto lg:mx-0'
          >
            <img
              src={logoLight}
              alt='synchat logo'
              width={133}
              height={24}
              className='dark:hidden'
            />
            <img
              src={logoDark}
              alt='synchat logo'
              width={133}
              height={24}
              className='hidden dark:block'
            />
          </Link>

          <div className='flex flex-col gap-2 max-w-[480px] mx-auto w-full'>
            <h2 className='text-displaySmall font-semibold text-light-onBackground dark:text-dark-onBackground text-center'>
              Create an account
            </h2>
            <p className='text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2'>
              Register to get started with SynChat.
            </p>
            <Form
              method='POST'
              className='grid grid-cols-1 gap-4'
            >
              <TextField
                type='text'
                name='name'
                label='Full name'
                placeholder='Full name'
                required={true}
                autoFocus={true}
              />
              <TextField
                type='email'
                name='email'
                label='Email'
                placeholder='Email'
                required={true}
              ></TextField>
              <TextField
                type='password'
                name='password'
                label='Password'
                placeholder='Enter your password'
                required={true}
              ></TextField>
              <Button
                type='submit'
                disabled={navigation.state === 'submitting'}
              >
                <CircularProgress size='small' />
                {navigation.state === 'submitting'
                  ? <CircularProgress size='small' />
                  : 'Create Account'}
              </Button>
            </Form>
            <p className='text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-center'>
              Already have an account?{' '}
              <Link
                to='/login'
                className='link inline-block ms-1 text-light-onSurface dark:text-dark-onSurface'
              >
                Sign in
              </Link>
            </p>
          </div>
          <p className='mt-auto mx-auto text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-bodyMedium lg:mx-0'>
            &copy; 2021 SynChat. All rights reserved.
          </p>
        </div>

        <div className='hidden lg:block lg:relative lg:rounded-large img-box'>
          <img
            src={banner}
            alt='synchat banner'
            className='img-cover'
          />
          <p className='absolute bottom-10 left-12 right-12 z-10 text-displayLarge font-semibold leading-tight text-right text-light-onSurface drop-shadow-sm 2xl:text-[72px]'>
            Chat with SynChat to supercharge your ideas.
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
