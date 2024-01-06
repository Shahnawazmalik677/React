import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({name,number}) {
 console.log(name,value);
  return (
    <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img Class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwduJqdvtsDv2lcDKdbEkftRKFMgeeHNoPXA&usqp=CAU" alt="" width="384" height="512"/>
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p class="text-lg font-medium">
          {name}
        </p>
      </blockquote>
      <figcaption class="font-medium">
        <div class="text-sky-500 dark:text-sky-400">
        {value}
        </div>
        <div class="text-slate-700 dark:text-slate-500">
        </div>
      </figcaption>
    </div>
  </figure>
  )
}

export default App
