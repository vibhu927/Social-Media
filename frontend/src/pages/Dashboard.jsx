import { Card } from '@mui/material'
import React from 'react'
import MyCard from '../components/Card'

export const Dashboard = () => {
  return (
    <div class="grid grid-cols-12 gap-4">

    <div class="col-span-2 bg-blue-500 p-4">
      
      Nav Bar
    </div>
  
  
    <div class="col-span-4 bg-green-500 p-4">
      
      Card 1
    </div>
  
  
    <div class="col-span-2 bg-red-500 p-4">
      
      Notifications
    </div>
    <div class="col-span-4 flex bg-yellow-500 p-4">
  <div class="flex-1 bg-purple-500 p-4 m-2">
    Feed 1
  </div>
  <div class="flex-1 bg-pink-500 p-4 m-2">
    Feed 2
  </div>
</div>

  </div>
  
  )
}
