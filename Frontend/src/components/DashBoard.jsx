import React from "react";
  import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
  } from "@material-tailwind/react";
  import { projectsData } from "../data/projects-data";
  import { Link } from "react-router-dom";
  import {
    EllipsisVerticalIcon,
    ArrowUpIcon,
  } from "@heroicons/react/24/outline";
  import { StatisticsCard } from "./statistics-card";
  import 
    statisticsCardsData
  from "../data/statistics-card-data";
  import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";
  function DashboardHome() {
    return (
      <div className="mt-12">
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl">
          {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
            <StatisticsCard
              key={title}
              {...rest}
              title={title}
              icon={React.createElement(icon, {
                className: "w-6 h-6 text-white",
              })}
              footer={
                <Typography className="font-normal text-blue-gray-600">
                  <strong className={footer.color}>{footer.value}</strong>
                  &nbsp;{footer.label}
                </Typography>
              }
            />
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
          {projectsData.map(
            ({ img, title, description, tag, route, members }) => (
              <Card key={title} color="transparent" shadow={false}>
                <CardHeader
                  floated={false}
                  color="gray"
                  className="mx-0 mt-0 mb-4 h-64 xl:h-40"
                >
                  <img
                    src={img}
                    alt={title}
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody className="py-0 px-1">
                  <Typography
                    variant="small"
                    className="font-normal text-blue-gray-500"
                  >
                    {tag}
                  </Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mt-1 mb-2"
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="small"
                    className="font-normal text-blue-gray-500"
                  >
                    {description}
                  </Typography>
                </CardBody>
                <div>
                  <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                    <Link to={route}>
                      <Button variant="outlined" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </CardFooter>
                  <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                    <Link to={route}>
                      <Button variant="outlined" size="sm">
                        Apply Now
                      </Button>
                    </Link>
                  </CardFooter>
                </div>
              </Card>
            )
          )}
        </div>
        <br/>
        <br/>
      </div>
    );
  }

export default DashboardHome;