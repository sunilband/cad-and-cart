import React from "react";
import apiData from "../assets/data.json";
import { Accordion } from "flowbite-react";
import { useRouter } from 'next/router';

type Props = {
 goBack:any,
 data:any
};

const Data = (props: Props) => {
  // const router:any = useRouter();
  // const data: any = apiData.data;
  const data=props.data
  
  return (props.data?
    <div className="h-[100vh] w-screen p-4 bg-slate-200">
      <button
        className="bg-blue-500 text-white rounded-md px-4 py-1 mt-2 hover:scale-105 transition-all ease-in-out duration-100 hover:-translate-y-1 hover:shadow-2xl mb-4"
        onClick={props.goBack}
      >
        back
      </button>
      {/* accordian */}
      <Accordion className="bg-slate-100 drop-shadow-2xl scale-95">
        {data.map((item: any, key: any) => {
          return (
            <Accordion.Panel key={key} className="flex flex-col flex-wrap">
              <Accordion.Title>ID: {item.id}</Accordion.Title>
              <Accordion.Content className="break-words flex-wrap  ">
                <ul>
                  <li>ID: {item.id}</li><hr/>
                  <li>SR No: {item.sr_no}</li><hr/>
                  <li>Movement ID: {item.movement_id}</li><hr/>
                  <li>Barcode Link: {item.barcode_link}</li><hr/>
                  <li>Barcode Image: {item.barcode_img}</li><hr/>
                  <li>Source: {item.source}</li><hr/>
                  <li>Destination: {item.destination}</li><hr/>
                  <li>Transport Type: {item.transport_type}</li><hr/>
                  <li>Transport Size: {item.transport_size}</li><hr/>
                  <li>Transport Name: {item.transport_name}</li><hr/>
                  <li>Transport Number: {item.transport_number}</li><hr/>
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
          );
        })}
      </Accordion>
    </div>:null
  );
};

export default Data;
