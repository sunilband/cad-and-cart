import React from "react";
import apiData from "../assets/data.json";
import { Accordion } from "flowbite-react";

type Props = {
  visiblity: any;
};

const Data = (props: Props) => {
  const data: any = apiData.data;

  return (
    <div id="olst" className="h-screen p-4 bg-slate-200 ">
      <button
        className="bg-blue-500 text-white rounded-md px-4 py-1 mt-2 hover:scale-105 transition-all ease-in-out duration-100 hover:-translate-y-1 hover:shadow-2xl mb-4"
        onClick={props.visiblity}
      >
        back
      </button>
      {/* accordian */}
      <Accordion className="bg-slate-100 drop-shadow-2xl">
        {data.map((item: any, key: any) => {
          return (
            <Accordion.Panel key={key}>
              <Accordion.Title>ID: {item.id}</Accordion.Title>
              <Accordion.Content>
                <ul>
                  <li>ID: {item.id}</li>
                  <li>SR No: {item.sr_no}</li>
                  <li>Movement ID: {item.movement_id}</li>
                  <li>Barcode Link: {item.barcode_link}</li>
                  <li>Barcode Image: {item.barcode_img}</li>
                  <li>Source: {item.source}</li>
                  <li>Destination: {item.destination}</li>
                  <li>Transport Type: {item.transport_type}</li>
                  <li>Transport Size: {item.transport_size}</li>
                  <li>Transport Name: {item.transport_name}</li>
                  <li>Transport Number: {item.transport_number}</li>
                  <li>Transport Weight: {item.transport_weight}</li>
                  <li>Transport Cost: {item.transport_cost}</li>
                  <li>Start Date: {item.start_date}</li>
                  <li>End Date: {item.end_date}</li>
                  <li>Completed: {item.completed ? "Yes" : "No"}</li>
                  <li>Request: {item.request ? "Yes" : "No"}</li>
                  <li>Started: {item.started ? "Yes" : "No"}</li>
                  <li>Picked: {item.picked ? "Yes" : "No"}</li>

                  {item.rider ? (
                    <><li className="my-2"><strong>Rider Details:</strong></li>
                      <li>Rider ID: {item.rider.id}</li>
                      <li>Contact No: {item.rider.contact_no}</li>
                      <li>
                        Contact No Verification:{" "}
                        {item.rider.contact_no_verification ? "Yes" : "No"}
                      </li>
                      <li>Email: {item.rider.email}</li>
                      <li>
                        Email Verification:{" "}
                        {item.rider.email_verification ? "Yes" : "No"}
                      </li>
                      <li>Address 1: {item.rider.address_1}</li>
                      <li>Address 2: {item.rider.address_2}</li>
                      <li>City: {item.rider.city}</li>
                      <li>State: {item.rider.state}</li>
                      <li>Country: {item.rider.country}</li>
                      <li>Pin: {item.rider.pin}</li>
                      <li>User ID: {item.rider.user.id}</li>
                      <li>Password: {item.rider.user.password}</li>
                      <li>Last Login: {item.rider.user.last_login}</li>
                      <li>
                        Is Superuser:{" "}
                        {item.rider.user.is_superuser ? "Yes" : "No"}
                      </li>
                      <li>Username: {item.rider.user.username}</li>
                      <li>First Name: {item.rider.user.first_name}</li>
                      <li>Last Name: {item.rider.user.last_name}</li>
                      <li>Email: {item.rider.user.email}</li>
                      <li>
                        Is Staff: {item.rider.user.is_staff ? "Yes" : "No"}
                      </li>
                      <li>
                        Is Active: {item.rider.user.is_active ? "Yes" : "No"}
                      </li>
                      <li>Date Joined: {item.rider.user.date_joined}</li>
                      <li>Groups: {item.rider.user.groups.join(", ")}</li>
                    </>
                  ) : null}
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Data;
