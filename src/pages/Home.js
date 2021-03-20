import Banner from 'components/Banner';
import Heading from 'components/Heading';
import Navbar from 'components/Navbar';
import Services from 'components/Services';
import TeamSlider from 'components/TeamSlider';
import Reviews from 'components/Reviews';
import React from 'react';

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Heading title="meet the team" />
      <TeamSlider />
      <Heading title="reviews" />
      <Reviews />
    </>
  );
};

export default Home;
