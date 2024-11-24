import { Link, useLoaderData } from "react-router-dom"
import Container from "../../Components/Container/Container";
import { useState } from "react";
import Instructor from "./instructor";
import Navbar from "../../Components/Navbar/Navbar";

const Instructors = () => {
    const instructorsData = useLoaderData()
    const [showInstructor, setShowInstructor] = useState(6)

    return (
        <div>
            <Navbar/>
            <Container>
            <div className='bg-[#fafafa] mt-12'>
            {/* head area */}
            <div className='mb-20 head-image text-center flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold'>Instructors</h1><br />
                <div className='flex items-center space-x-2'>
                    <p className='font-semibold'>Home</p>
                    <div className='bg-orange-500 w-2 h-1 rounded-xl'>{""}</div>
                    <p className='font-semibold'>Instructors</p>
                </div>
            </div>

           
            


        </div>
            <div className="mt-20 grid md:grid-cols-3 grid-cols-1 gap-6 rounded-lg">

                {
                    instructorsData && instructorsData.slice(0, showInstructor).map(instructor => <Instructor key={instructor.id} instructor={instructor} />)
                }
            </div>
            <div className="text-center my-14">
                {
                    showInstructor < instructorsData.length && <div>
                        <button onClick={() => { setShowInstructor(prevData => prevData + 3) }} className="btn btn-error ">View all</button>
                    </div>
                }
            </div>
        </Container>
        </div>
    )
}

export default Instructors