import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import ApiAuth from '../api/ApiAuth'


export default function Signin(props) {

  const [values, setValues] = useState({
    username: undefined,
    password: undefined,
    redirect: false,
    error: ''
  });

  const handleOnChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      user_name: values.username || undefined,
      user_password: values.password || undefined
    }

    //setValues({ ...values, error: '', redirect: true })
 
    ApiAuth.signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        setValues({ ...values, error: '', redirect: true })

      }
    }) 
 

  }

  const { from } = props.location.state || {
    from: {
      pathname: '/gitjobs/list/'
    }
  }

  if (values.redirect) {
    console.log('redirect : ' || { from })
    return (<Redirect to={from} />)
  }


  
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />

      <div class="bg-gradient-to-br from-gray-500 to-blue-500 min-h-screen overflow-auto">
        <div class="container max-w-5xl mx-auto px-4 pt-20">
          <div class="w-4/5">
            <h1 class="mt-32 text-white text-6xl font-bold">Looking for a Job? <br /><span class="text-blue-400">Urgently Need?</span></h1>
          </div>
          <div class="w-5/6 my-10 ml-6">
            <h3 class="text-gray-300">
              Right site for you who have abilities <br />
              <strong class="text-white">With Easiest Way</strong>
              <br /> More Choices and Experiences Only In <h1><span class="font-bold text-blue-400" > gitjob.com </span> </h1>
            </h3>
            

          </div>
          <div class="hidden sm:block opacity-50 z-0">
            <div class="shadow-2xl w-96 h-96 rounded-full -mt-72"></div>
            <div class="shadow-2xl w-96 h-96 rounded-full -mt-96"></div>
            <div class="shadow-xl w-80 h-80 rounded-full ml-8 -mt-96"></div>
          </div>
          <div class="text-white relative">
            <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-5 uppercase">
            </div>

            <div class=" h-screen w-full flex flex-col-reverse md:flex-row items-right justify-center pl-96 " >

              <div class="container mx-auto flex flex-col items-center ">
                <form class="pr-shadow-lg w-80 p-4 flex flex-col rounded-lg text-black " action="#" method="POST">
                  {values.error &&
                    <p class="text-blue text-lg italic">{values.error}</p>}

                  <input type="text" placeholder="Email or Phone Number" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={handleOnChange('user_email')}
                    required />
                  <input type="text" placeholder="Pasword" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={handleOnChange('user_password')}
                    required />
                  <button type="submit" onClick={onSubmit} class="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">Login</button>
                  <p class="text-center text-gray-300 text-sm my-4">
                <a href="#" class="font-bold hover:text-blue-400" > Forgot Password</a>
                </p>
                  <hr />
                  <a href="#" class="w-full bg-green-400 mt-8 mb-4 text-white pl-16 p-3 rounded-lg font-semibold text-lg">Create New Account</a>
                </form>
                <p class="text-center text-gray-300 text-sm my-4">
    
                </p>
                <div class="bg-indigo-700 text-indigo-200 md:text-center py-2 px-4">
                  <a href="http://localhost:3000/gitjobs/list" class="font-bold hover:text-blue-400" >gitjob.com</a>
</div>



              </div>
            </div>

          </div>
        </div>
        
      </div>


    </>
  )
}