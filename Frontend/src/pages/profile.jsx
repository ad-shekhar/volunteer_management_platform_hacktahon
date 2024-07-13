import { FeatureCard, TeamCard } from "@/widgets/cards";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { featuresData, teamData, contactData } from "@/data";
export function Profile() {
  return (
    <>
      <section className="relative block h-[20vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              Volunteering for an NGO offers a unique opportunity to make a tangible difference in the world. By joining as a volunteer, you become part of a collective effort to address pressing social issues and contribute to positive change in communities. NGOs often operate in areas such as education, healthcare, environmental conservation, and social justice, providing volunteers with diverse opportunities to apply their skills and passion.
                <br />
                <br />
                Creating an account on our website offers NGOs a streamlined platform to enhance their outreach and operational efficiency. By registering, organizations gain access to a range of resources and tools designed to support their mission. This includes the ability to showcase their projects, connect with potential volunteers and donors, and promote their events and campaigns to a broader audience.
              </Typography>
              
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.png"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Enterprise</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Top Notch Services  and Innovative Solutions Provided here  
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                   
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
     
     

    </>
  );
}

export default Profile;
