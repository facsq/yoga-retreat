import React from 'react';
import yogaImage from '../assets/yoga-image.png';

const PlainSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4 md:flex items-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold 2xl:pl-12">Welcome to <span className='text-sitegreen'>Yoga Retreat</span>. <br />Your Spiritual Guide</h2>
          <p className="text-lg mt-4 2xl:pl-12">
            Yoga Retreat is a gathering of people who are joining together to practice yoga in a group setting. These retreats can be daylong retreats, or multiple day trips where multiple activities are compiled together. A yoga retreat is an amazing opportunity to meet with others who are passionate about yoga. <br /> <br />
            What is the purpose of retreat? 10 Reasons you Need to go on a Retreat This Year - LifeTeen. While retreats have the potential to change our lives in the future, they also give us a chance to look back at our past. Many retreats encourage us to reflect on who we have been, who we are now, and who God desires us to be in the future.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={yogaImage} alt="yoga" className="w-full max-w-md mx-auto sm:pt-12" />
        </div>
      </div>
    </section>
  );
};

export default PlainSection;
