import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import HowItWorks from "../HowItWorks/HowItWorks";
import Brands from "../Brands/Brands";
import WhatWeOffer from "../WhatWeOffer/WhatWeOffer";
import BecomeMerchant from "../BecomeMerchant/BecomeMerchant";
import Reviews from "../Reviews/Reviews";
import Faq from "../Faq/Faq";
import Hero from "../Hero/Hero";

// preparing data for reviews
const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div className="my-10">
      {/* <Banner></Banner> */}
      <Hero></Hero>
      <HowItWorks></HowItWorks>
      <Services></Services>
      <Brands></Brands>
      <WhatWeOffer></WhatWeOffer>
      <BecomeMerchant></BecomeMerchant>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
      <Faq></Faq>
    </div>
  );
};

export default Home;
