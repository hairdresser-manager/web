import React from 'react';
import { useSelector } from 'react-redux';
import { Slide, Dialog } from '@material-ui/core';
import Banner from 'components/Banner';
import Heading from 'components/Heading';
import Navbar from 'components/Navbar';
import Services from 'components/Services';
import TeamSlider from 'components/TeamSlider';
import Reviews from 'components/Reviews';
import ModalAuth from 'components/ModalAuth';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Home = () => {
  const isModalOpen = useSelector((state) => state.ModalAuth.isModalOpen);
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Heading title="meet the team" />
      <TeamSlider />
      <Heading title="reviews" />
      <Reviews />
      <Dialog fullScreen open={isModalOpen} TransitionComponent={Transition}>
        <ModalAuth />
      </Dialog>
    </>
  );
};

export default Home;
