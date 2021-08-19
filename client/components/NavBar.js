import React from 'react'
import git from '../assets/images/gitjob.png'

export default function NavBar() {
    return (
      <div class="text-center">
        <nav class="bg-blue-600 shadow dark:bg-gray-800 tracking-wider content-center text-center w-screen z-20">
        <img src={git} className="absolute pt-4" ></img>
          <div class="container flex items-center justify-center p-6 mx-auto text-gray-50 capitalize dark:text-gray-300">

            <a href="#" class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-50 hover:border-blue-500 mx-1.5 sm:mx-6 z-20">home</a>

            <a href="/gitjobs/list" class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-50 hover:border-blue-500 mx-1.5 sm:mx-6">Job List</a>

            <a href="/gitjobs/" class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-50 hover:border-blue-500 mx-1.5 sm:mx-6">signout</a>

            
          </div>
        </nav>
              </div>
    )
  }