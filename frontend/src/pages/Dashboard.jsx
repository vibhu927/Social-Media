import { Card } from '@mui/material'
import React from 'react'
import MyCard from '../components/Card'
import { Option } from '../components/Option'

export const Dashboard = () => {
  return (
    <div class="grid grid-cols-12 gap-4">

      <div class="col-span-2 bg-gray-900 p-4">
        <div class="flex flex-col h-full">
          <Option text={"Home"} />
          <Option text={"Account"} />
          <Option text={"Settings"} />
        </div>
      </div>

      <div class="col-span-4 bg-gray-900 p-4">
        Card 1
      </div>

      <div class="col-span-2 bg-gray-900 p-4">
        Notifications
      </div>

      <div class="grid col-span-4 bg-gray-900 p-4 text-white">
        <div class="grid grid-cols-2">
          <div class="bg-blue-600 p-4 m-2 rounded">
            Feed 1
          </div>
          <div class="bg-blue-600 p-4 m-2 rounded">
            Feed 2
          </div>
        </div>

      </div>

    </div>

  )
}
