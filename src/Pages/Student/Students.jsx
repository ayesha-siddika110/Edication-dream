import { HiListBullet } from "react-icons/hi2";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Student from "./Student";
import Slider from "react-slick";
import Navbar from "../../Components/Navbar/Navbar";

const Students = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    Students: (dots) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
          marginRight: "5px",
        }}
      >
        <ul style={{ margin: "4px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "40px",
          color: "blue",
          hover: {
            backgroundColor: "red",
          },
          marginRight: "10px",
        }}
      >
        <div
          style={{
            marginRight: "10px",
            border: "1px gray solid",
            padding: "5px",
          }}
        >
          {" "}
          {i + 1}
        </div>
      </div>
    ),
  };
  return (
    <div>
      <Navbar />
      <div className="bg-[#FAFAFA]">
        <div className="max-w-screen-xl mx-auto px-4 xl:px-0">
        <div className='bg-[#fafafa] mt-12'>
            {/* head area */}
            <div className='mb-20 head-image text-center flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold'>Students</h1><br />
                <div className='flex items-center space-x-2'>
                    <p className='font-semibold'>Home</p>
                    <div className='bg-orange-500 w-2 h-1 rounded-xl'>{""}</div>
                    <p className='font-semibold'>Students</p>
                </div>
            </div>
        </div>
          <div className="flex items-center gap-4 mb-16">
            <Link to="/sudents" className="">
              <img
                className="w-9 hover:scale-105 duration-300"
                src="studentsPageIcon.png"
                alt="students page Icon"
              />
            </Link>
            <Link
              to="/students"
              className="text-2xl p-1 border-[1px] border-gray-300 hover:text-red-600 hover:border-orange-700 transition-all duration-200"
            >
              <HiListBullet />
            </Link>
            <span className="text-lg text-gray-600">Showing 24 results</span>
          </div>

          {/* React slic */}
          <div className="slider-container ">
            <Slider {...settings}>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <Student
                    imgLink="avatar-02.jpg"
                    userName="Betty Richards"
                    title="student"
                    gmail="bettyrichards@example.com"
                  />
                  <Student
                    imgLink="user2-3.jpg"
                    userName="Brooke Hayes"
                    title="student"
                    gmail="brookehayes@example.com"
                  />
                  <Student
                    imgLink="user6.jpg"
                    userName="5555 555"
                    title="student"
                    gmail="letasoh607@storesr.com"
                  />
                  <Student
                    imgLink="user4-1.jpg"
                    userName="Betty Richards"
                    title="student"
                    gmail="bettyrichards@example.com"
                  />
                  <Student
                    imgLink="user3-3.jpg"
                    userName="Brooke Hayes"
                    title="student"
                    gmail="brookehayes@example.com"
                  />
                  <Student
                    imgLink="user5.jpg"
                    userName="5555 555"
                    title="student"
                    gmail="letasoh607@storesr.com"
                  />
                </div>
              </div>
              <div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <Student
                    imgLink="user6.jpg"
                    userName="5555 555"
                    title="student"
                    gmail="letasoh607@storesr.com"
                  />
                  <Student
                    imgLink="user4-1.jpg"
                    userName="Betty Richards"
                    title="student"
                    gmail="bettyrichards@example.com"
                  />
                  <Student
                    imgLink="user3-3.jpg"
                    userName="Brooke Hayes"
                    title="student"
                    gmail="brookehayes@example.com"
                  />
                  <Student
                    imgLink="user5.jpg"
                    userName="5555 555"
                    title="student"
                    gmail="letasoh607@storesr.com"
                  />
                  <Student
                    imgLink="user14.jpg"
                    userName="Betty Richards"
                    title="student"
                    gmail="bettyrichards@example.com"
                  />
                  <Student
                    imgLink="user11.jpg"
                    userName="Brooke Hayes"
                    title="student"
                    gmail="brookehayes@example.com"
                  />
                </div>
              </div>
              <div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <Student
                    imgLink="user2-3.jpg"
                    userName="Brooke Hayes"
                    title="student"
                    gmail="brookehayes@example.com"
                  />
                  <Student
                    imgLink="user6.jpg"
                    userName="5555 555"
                    title="student"
                    gmail="letasoh607@storesr.com"
                  />
                  <Student
                    imgLink="user4-1.jpg"
                    userName="Betty Richards"
                    title="student"
                    gmail="bettyrichards@example.com"
                  />
                  <Student
                    imgLink="user3-3.jpg"
                    userName="Brooke Hayes"
                    title="student"
                    gmail="brookehayes@example.com"
                  />
                  <Student
                    imgLink="user5.jpg"
                    userName="5555 555"
                    title="student"
                    gmail="letasoh607@storesr.com"
                  />
                </div>
              </div>
              <div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <Student
                    imgLink="user6.jpg"
                    userName="5555 555"
                    title="student"
                    gmail="letasoh607@storesr.com"
                  />
                  <Student
                    imgLink="user4-1.jpg"
                    userName="Betty Richards"
                    title="student"
                    gmail="bettyrichards@example.com"
                  />
                  <Student
                    imgLink="user3-3.jpg"
                    userName="Brooke Hayes"
                    title="student"
                    gmail="brookehayes@example.com"
                  />
                  <Student
                    imgLink="user3-3.jpg"
                    userName="Brooke Hayes"
                    title="student"
                    gmail="brookehayes@example.com"
                  />
                  <Student
                    imgLink="user5.jpg"
                    userName="5555 555"
                    title="student"
                    gmail="letasoh607@storesr.com"
                  />
                </div>
              </div>
              <div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <Student
                    imgLink="user4-1.jpg"
                    userName="Betty Richards"
                    title="student"
                    gmail="bettyrichards@example.com"
                  />
                  <Student
                    imgLink="user3-3.jpg"
                    userName="Brooke Hayes"
                    title="student"
                    gmail="brookehayes@example.com"
                  />
                  <Student
                    imgLink="user3-3.jpg"
                    userName="Brooke Hayes"
                    title="student"
                    gmail="brookehayes@example.com"
                  />

                  <Student
                    imgLink="user3-3.jpg"
                    userName="Brooke Hayes"
                    title="student"
                    gmail="brookehayes@example.com"
                  />
                  <Student
                    imgLink="user5.jpg"
                    userName="5555 555"
                    title="student"
                    gmail="letasoh607@storesr.com"
                  />
                  <Student
                    imgLink="user5.jpg"
                    userName="5555 555"
                    title="student"
                    gmail="letasoh607@storesr.com"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;

//#FAFAFA
