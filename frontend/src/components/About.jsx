
import Testimonial from "./Testimonial";
import React from "react";
//import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";

//import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icon panah
const About = () => {
  return (
    <section>
      {/* Hero section */}
      <div
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contoh.jpg" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white flex justify-center">
            <h1 className="text-2xl text-center text-wrap w-2/3 md:text-6xl font-bold">
              About Sribudaya
            </h1>
          </div>
        </div>
      </div>
      {/* end of hero section */}
      {/* testing section */}
      <div className="w-full h-full mt-[30rem] lg:mt-[15rem]">
        <div className="relative px-8 md:px-20 bg-[url(https://thumbs.dreamstime.com/b/idyllic-summer-landscape-clear-mountain-lake-alps-45054687.jpg)] w-full h-[100vh] bg-no-repeat bg-cover lg:px-40 ">
          <div className="absolute text  bg-main w-auto h-auto  left-4 right-4 top-[-24rem]  p-8 lg:left-32 lg:right-32 lg:px-32 lg:py-24 lg:top-[-15rem]">
            <div className=" mb-12 about-title text-center  ">
              <h1 className="title relative">
                About Sribudaya{" "}
                <span className="absolute left-0 w-1/2 top-20 h-[2px] bg-blue-600"></span>
              </h1>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate odio perspiciatis, nobis quidem impedit, harum ad natus
              est repudiandae asperiores dolorum a accusamus tempora fugit
              libero similique, mollitia rerum Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quidem officiis accusantium
              cupiditate sint, maxime beatae provident. Suscipit voluptates esse
              expedita, sint aut totam, atque, excepturi commodi tenetur minima
              aspernatur cum.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              quaerat natus eius, exercitationem voluptatum doloribus nesciunt
              vel optio vero quos unde, mollitia rem impedit labore culpa
              debitis? Doloribus, sit nam. Unde facere officia excepturi
              incidunt quisquam labore error iure quam, perspiciatis velit sit
              quo. Libero delectus aliquid voluptates ducimus repellat! Aliquid
              at voluptatibus explicabo eius, placeat possimus inventore harum
              rem! Impedit, quibusdam quidem laudantium aspernatur at eveniet
              suscipit quis? Deleniti cum placeat cupiditate voluptatum. Porro
              in illo ipsa quia harum repellat facilis sed pariatur, est libero
              a corrupti perspiciatis repudiandae. Perspiciatis corporis a ipsum
              veritatis sit maxime animi repellendus, obcaecati dignissimos
              excepturi eius dolore delectus perferendis aperiam, voluptas
              nesciunt. Cum pariatur ab necessitatibus minima quo magnam laborum
              distinctio veniam aspernatur.
            </p>
            <br />
          </div>
        </div>
      </div>

      <Testimonial />
    </section>
  );
  };
export default About;