import React from "react";
import ProfileCard from "../../components/ProfileCard/profilecard";
import Filter from "../../components/Filters/filters";
import JobCard from "../../components/JobCard/jobcard";
import { Link } from "react-router-dom";

function dashboard() {
  const Jobs = [
    {
      id: 1,
      title: "UI/UX Designer (m/f/d)",
      location: "Germany",
      img: "https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227",
      company: "Google",
      Tags: ["UI/UX", "Design", "Frontend"],
      description:
        "We're looking for a UI/UX Designer (m/f/d) to join our team in Berlin. You will be responsible for the design of our products and services. You will be working closely with our product and engineering teams to create a great user experience.",
      days: "2",
      applicants: "10",
    },
    {
      id: 2,
      title: "UI/UX Designer (m/f/d)",
      location: "Germany",
      img: "https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227",
      company: "Google",
      Tags: ["UI/UX", "Design", "Frontend"],
      description:
        "We're looking for a UI/UX Designer (m/f/d) to join our team in Berlin. You will be responsible for the design of our products and services. You will be working closely with our product and engineering teams to create a great user experience.",
      days: "2",
      applicants: "10",
    },
    {
      id: 3,
      title: "UI/UX Designer (m/f/d)",
      location: "Germany",
      img: "https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227",
      company: "Google",
      Tags: ["UI/UX", "Design", "Frontend"],
      description:
        "We're looking for a UI/UX Designer (m/f/d) to join our team in Berlin. You will be responsible for the design of our products and services. You will be working closely with our product and engineering teams to create a great user experience.",
      days: "2",
      applicants: "10",
    },
    {
      id: 4,
      title: "UI/UX Designer (m/f/d)",
      location: "Germany",
      img: "https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227",
      company: "Google",
      Tags: ["UI/UX", "Design", "Frontend"],
      description:
        "We're looking for a UI/UX Designer (m/f/d) to join our team in Berlin. You will be responsible for the design of our products and services. You will be working closely with our product and engineering teams to create a great user experience.",
      days: "2",
      applicants: "10",
    },
    {
      id: 5,
      title: "UI/UX Designer (m/f/d)",
      location: "Germany",
      img: "https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227",
      company: "Google",
      Tags: ["UI/UX", "Design", "Frontend"],
      description:
        "We're looking for a UI/UX Designer (m/f/d) to join our team in Berlin. You will be responsible for the design of our products and services. You will be working closely with our product and engineering teams to create a great user experience.",
      days: "2",
      applicants: "10",
    },
    {
      id: 6,
      title: "UI/UX Designer (m/f/d)",
      location: "Germany",
      img: "https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227",
      company: "Google",
      Tags: ["UI/UX", "Design", "Frontend"],
      description:
        "We're looking for a UI/UX Designer (m/f/d) to join our team in Berlin. You will be responsible for the design of our products and services. You will be working closely with our product and engineering teams to create a great user experience.",
      days: "2",
      applicants: "10",
    },
    {
      id: 7,
      title: "UI/UX Designer (m/f/d)",
      location: "Germany",
      img: "https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227",
      company: "Google",
      Tags: ["UI/UX", "Design", "Frontend"],
      description:
        "We're looking for a UI/UX Designer (m/f/d) to join our team in Berlin. You will be responsible for the design of our products and services. You will be working closely with our product and engineering teams to create a great user experience.",
      days: "2",
      applicants: "10",
    },
  ];

  return (
    <>
      <div className="flex p-4">
        <div className="flex flex-col w-[20%] flex-wrap">
          <div>
            <ProfileCard />
          </div>
          <div className="pt-4">
            <Filter />
          </div>
        </div>
        <div className="w-[80%]">
          {Jobs.length === 0 && (
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold text-gray-500">
                No Jobs Found
              </h1>
            </div>
          )}
          <div className="grid grid-cols-3 pl-2 ">
            {Jobs.length !== 0 &&
              Jobs.map((job) => (
                <JobCard
                  key={job.id}
                  title={job.title}
                  location={job.location}
                  img={job.img}
                  company={job.company}
                  Tags={job.Tags}
                  description={job.description}
                  days={job.days}
                  applicants={job.applicants}
                  identity={job.id}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default dashboard;
