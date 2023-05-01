import React from 'react'
import {Card,Accordion} from "flowbite-react"


type Props = {

    goBack:any,
    data:any

}

const DataCards = (props: Props) => {

    const data=props.data

  return (props.data?<div className='py-3 bg-slate-50'>
        <button
        className="bg-blue-500 text-white rounded-md px-4 py-1 mt-2 hover:scale-105 transition-all ease-in-out duration-100 hover:-translate-y-1 hover:shadow-2xl mb-4 mx-3"
        onClick={props.goBack}
        >
        back
      </button>
   
      {/* CARDs */}
      <div className='w-screen px-3 py-4  flex flex-row flex-wrap justify-center'>
        {data.map((item:any,key:any)=>{
        
     return <div className="max-w-sm w-[24rem] m-2 overflow-hidden drop-shadow-lg " key={key}>
    <Card>
    
    <div className="mb-4 flex items-center justify-between">
      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
        ID: {item.id}
      </h5>
    </div>
    <div className="flow-root">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            
            <div className="min-w-0 flex-1">
              {<p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  <li>SR No: {item.sr_no}</li><hr/>
                  <li>Movement ID: {item.movement_id}</li><hr/>
                  <li>Barcode Link: {item.barcode_link}</li><hr/>
                  <li>Barcode Image: {item.barcode_img}</li><hr/>
                  <li>Source: {item.source}</li><hr/>
                  <li>Destination: {item.destination}</li><hr/>
                  <li>Transport Type: {item.transport_type}</li><hr/>
                  <li>Transport Size: {item.transport_size}</li><hr/>
                  <li>Transport Name: {item.transport_name}</li><hr/>
                  
                 <Accordion collapseAll={true} className='mt-4 ' >
                 <Accordion.Panel key={key} className="flex flex-col flex-wrap text-black">
                 <Accordion.Title>View All</Accordion.Title>
                 <Accordion.Content className="break-words flex-wrap overflow-x-scroll">
                   <ul>
                     <li>Transport Weight: {item.transport_weight}</li><hr/>
                     <li>Transport Cost: {item.transport_cost}</li><hr/>
                     <li>Start Date: {item.start_date}</li><hr/>
                     <li>End Date: {item.end_date}</li><hr/>
                     <li>Completed: {item.completed ? "Yes" : "No"}</li><hr/>
                     <li>Request: {item.request ? "Yes" : "No"}</li><hr/>
                     <li>Started: {item.started ? "Yes" : "No"}</li><hr/>
                     <li>Picked: {item.picked ? "Yes" : "No"}</li><hr/>
   
                     {item.rider ? (
                       <><li className="my-2"><strong>Rider Details:</strong></li><hr/>
                         <li>Rider ID: {item.rider.id}</li><hr/>
                         <li>Contact No: {item.rider.contact_no}</li><hr/>
                         <li>
                           Contact No Verification:{" "}
                           {item.rider.contact_no_verification ? "Yes" : "No"}
                         </li><hr/>
                         <li>Email: {item.rider.email}</li><hr/>
                         <li>
                           Email Verification:{" "}
                           {item.rider.email_verification ? "Yes" : "No"}
                         </li><hr/>
                         <li>Address 1: {item.rider.address_1}</li><hr/>
                         <li>Address 2: {item.rider.address_2}</li><hr/>
                         <li>City: {item.rider.city}</li><hr/>
                         <li>State: {item.rider.state}</li><hr/>
                         <li>Country: {item.rider.country}</li><hr/>
                         <li>Pin: {item.rider.pin}</li><hr/>
                         <li>User ID: {item.rider.user.id}</li><hr/>
                         <li>Password: {item.rider.user.password}</li><hr/>
                         <li>Last Login: {item.rider.user.last_login}</li><hr/>
                         <li>
                           Is Superuser:{" "}
                           {item.rider.user.is_superuser ? "Yes" : "No"}
                         </li><hr/>
                         <li>Username: {item.rider.user.username}</li><hr/>
                         <li>First Name: {item.rider.user.first_name}</li><hr/>
                         <li>Last Name: {item.rider.user.last_name}</li><hr/>
                         <li>Email: {item.rider.user.email}</li><hr/>
                         <li>
                           Is Staff: {item.rider.user.is_staff ? "Yes" : "No"}
                         </li><hr/>
                         <li>
                           Is Active: {item.rider.user.is_active ? "Yes" : "No"}
                         </li><hr/>
                         <li>Date Joined: {item.rider.user.date_joined}</li><hr/>
                         <li>Groups: {item.rider.user.groups.join(", ")}</li><hr/>
                       </>
                     ) : null}
                   </ul>
                 </Accordion.Content>
               </Accordion.Panel>
               </Accordion>
   
                 

              </p>}

              {}
              
            </div>
          </div>
        </li>
      </ul>
    </div>
  </Card>
</div>

  })}
  </div>
  </div>:null
   
  )
}

export default DataCards