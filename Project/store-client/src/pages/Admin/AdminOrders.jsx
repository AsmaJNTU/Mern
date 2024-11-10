import React from 'react'
import AdminPageHeader from '../../components/Admin/AdminPageHeader'
import { Loader2, Pencil, Trash, TriangleAlert } from 'lucide-react'
const AdminOrders = () => {
    return (
        <div className='w-full h-full flex flex-col justify-start items-start'>
            <AdminPageHeader title='Orders'/>
            <table className='w-full h-full border-collapse border shadow-lg rounded-md'>
        <thead className='shadow-sm font-bold text-purple-500 text-left'>
          <tr>
            <th className='p-6'>uid</th>
            <th className='p-6'>pid</th>
            <th className='p-6'>total</th>
            <th className='p-6'>phone</th>
            <th className='p-6'>address</th>
            <th className='p-6'>orderedAt</th>
          </tr>
        </thead>
        <tbody>
        <tr>
                <td className='p-4'>143 </td>
                <td className='p-4'>341</td>
                <td className='p-4'>78</td>
                <td className='p-4'>6565564</td>
                <td className='p-4'>mbnr</td>
                <td className='p-4'>12-10-2024</td>
                <td className='p-4 flex h-full w-full flex-row justify-start items-center gap-4'>
                  <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md
               hover:bg-blue-500 hover:text-white hover:shadow-blue-500'>
                    <Pencil />
                  </button>
                  <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md
               hover:bg-red-500 hover:text-white hover:shadow-red-500'>
                    <Trash />
                  </button>
                </td>
              </tr>

              <tr>
            <td className='p-4'>144 </td>
            <td className='p-4'>654</td>
            <td className='p-4'>999</td>
            <td className='p-4'>9999876</td>
            <td className='p-4'>hyd</td>
            <td className='p-4'>12-3-2024</td>
            <td className='p-4 flex h-full w-full flex-row justify-start items-center gap-4'>
              <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md
               hover:bg-blue-500 hover:text-white hover:shadow-blue-500'>
                <Pencil />
              </button>
              <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md
               hover:bg-red-500 hover:text-white hover:shadow-red-500'>
                <Trash />
              </button>
            </td>
          </tr>

        </tbody>

        </table>

            
        </div>
    )
}

export default AdminOrders