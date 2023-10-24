import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import HomeCards from "../components/cards/HomeCards";
import Hero from "../components/Hero";
import detailAction from "../redux/actions/detailActions";
import About from "./About";

const Home = () => {
  // console.log(information);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailAction());
  }, [dispatch]);
  return (
    <>
      <Hero />
      <div className='lg:mx-[5%] lg:mt-[3%] sm:mb-5'>
      {/* <HomeCards/> */}
      <About/>
      </div>
    </>
  );
};

export default Home;
