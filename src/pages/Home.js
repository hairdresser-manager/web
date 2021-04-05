import React, { useState } from 'react';
import { Slide, Dialog } from '@material-ui/core';
import Banner from 'components/Banner';
import Heading from 'components/Heading';
import Navbar from 'components/Navbar';
import Services from 'components/Services';
import TeamSlider from 'components/TeamSlider';
import Reviews from 'components/Reviews';
import AuthTemplate from 'templates/AuthTemplate';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar isModalOpen={setIsModalOpen} />
      <Banner />
      <Services />
      <Heading title="meet the team" />
      <TeamSlider />
      <Heading title="reviews" />
      <Reviews />
      <Dialog fullScreen open={isModalOpen} TransitionComponent={Transition}>
        <AuthTemplate isModalOpen={setIsModalOpen} />
      </Dialog>
    </>
  );
};

export default Home;
