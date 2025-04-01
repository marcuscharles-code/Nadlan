import {
  FaArrowLeft,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWindows,
} from "react-icons/fa";
import "./aboutProject.css";
import Button from "../buttons-component/solidbutton";
import { Link, useParams } from "react-router-dom";
import { showCase } from "../../constants/showcase";
import { animationVariants } from "../../constants/animationVariants";
import { motion } from "framer-motion";
import { scrollToTop } from "../../constants/scrollToTop";
import { useEffect } from "react";

const AboutProject = ({ heroImageSrc, attachment }) => {
  const param = useParams();
  const project = showCase[param.id - 1];
  
  useEffect(() => {
    document.title = `${project.city} - Homyz Properties`;
  }, [param]);

  // City-specific content
  const cityContent = {
    London: {
      client: "London Property Group",
      services: "Valuation, Investment Consulting",
      facts: [
        "Prime Central London prices average £1,500/sqft",
        "Rental yields range from 3-5% in prime areas",
        "Over 60% of prime property buyers are international"
      ]
    },
    "New York": {
      client: "Manhattan Realty Partners",
      services: "Property Management, Relocation",
      facts: [
        "Manhattan condo prices average $1,800/sqft",
        "Commercial vacancy rates below 10% in Midtown",
        "Brooklyn prices have grown 45% since 2015"
      ]
    },
    Dubai: {
      client: "Emirates Property Holdings",
      services: "Development Consulting, Mortgages",
      facts: [
        "Freehold areas cover 25% of residential supply",
        "Average ROI of 7-9% on rental properties",
        "80% of buyers are foreign investors"
      ]
    },
    Singapore: {
      client: "Asia Pacific Investments",
      services: "Quality Assurance, Legal Services",
      facts: [
        "Core Central Region prices average SGD 2,500/sqft",
        "99-year leasehold standard for foreign buyers",
        "Additional Buyer's Stamp Duty of 20-30% for foreigners"
      ]
    },
    Sydney: {
      client: "Australian Property Network",
      services: "Valuation, Relocation Services",
      facts: [
        "Median house price AUD 1.3 million",
        "Eastern suburbs yield 2-3% gross returns",
        "Western Sydney prices growing at 8% annually"
      ]
    },
    Toronto: {
      client: "Canadian Urban Properties",
      services: "Investment Consulting, Mortgages",
      facts: [
        "Average condo price CAD 750,000",
        "Rental vacancy rate below 2% downtown",
        "Foreign buyer tax of 25% in effect"
      ]
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div
        className={`h-screen relative ${heroImageSrc} ${attachment} bg-top bg-no-repeat bg-cover`}
        style={{ backgroundImage: `url(${project.coverImage})` }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black/50">
          <motion.h1
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className="text-8xl max-lg:text-6xl max-md:text-5xl font-semibold text-white"
          >
            {project.city}
          </motion.h1>
        </div>
      </div>

      {/* City Overview */}
      <div
        style={{ maxWidth: 1200 }}
        className="flex mx-auto p-10 max-sm:px-5 gap-16 max-sm:gap-14 max-md:flex-col"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-start gap-5"
        >
          <h1 className="text-5xl font-bold">{project.city}</h1>
          <p className="text-xl">{project.shortDescription}</p>
          <Link to={"/contact"} onClick={scrollToTop}>
            <Button
              content={"Contact Our Local Agent"}
              fontSize={"text-xl max-md:text-xl"}
              padding={"px-4 py-2"}
            />
          </Link>
        </motion.div>

        {/* Property Details */}
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeRight}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-4"
        >
          <div>
            <h2 className="text-xl mb-2">Local Partner</h2>
            <h3 className="text-xl opacity-80">{cityContent[project.city].client}</h3>
          </div>
          <div>
            <h2 className="text-xl mb-2">Market Updated</h2>
            <h3 className="text-xl opacity-80">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</h3>
          </div>
          <div>
            <h2 className="text-xl mb-2">Services</h2>
            <h3 className="text-xl opacity-80">{cityContent[project.city].services}</h3>
          </div>
          <div>
            <h2 className="text-xl mb-2">Share This Market</h2>
            <div className="text-xl text-red-500 flex gap-3">
              <a
                style={{ borderWidth: 1 }}
                className="w-12 h-12 border-red-500 rounded-full flex justify-center items-center hover:bg-red-500 hover:text-white transition-colors"
                href="#"
              >
                <FaFacebookF />
              </a>
              <a
                style={{ borderWidth: 1 }}
                className="w-12 h-12 border-red-500 rounded-full flex justify-center items-center hover:bg-red-500 hover:text-white transition-colors"
                href="#"
              >
                <FaInstagram />
              </a>
              <a
                style={{ borderWidth: 1 }}
                className="w-12 h-12 border-red-500 rounded-full flex justify-center items-center hover:bg-red-500 hover:text-white transition-colors"
                href="#"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Market Description */}
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={animationVariants.fadeRight}
        viewport={{ once: true, amount: 0.05 }}
        style={{ maxWidth: 1200 }}
        className="text-lg mx-auto p-10 max-sm:px-5 max-sm:pt-5 max-sm:mb-8 mb-20"
      >
        <p>{project.description}</p>
        
        <div className="p-5 px-10 max-sm:px-4">
          <h2 className="text-2xl text-center font-semibold p-5 max-sm:p-3 border-l-4 border-red-500">
            Why Invest in {project.city}?
          </h2>
        </div>
        
        <p>
          The {project.city} property market offers unique advantages for both residential and commercial investors. 
          With {project.city.includes('New York') ? 'its unparalleled global influence' : project.city.includes('London') ? 'its stable legal framework' : project.city.includes('Dubai') ? 'its tax-free environment' : 'its strong economic fundamentals'}, 
          the city has consistently delivered solid returns even during global economic fluctuations. 
          Our local team has facilitated over 200 successful transactions in the past year alone.
        </p>
        
        <div className="flex flex-col gap-1 mt-4">
          <h2 className="text-2xl font-semibold">
            Key Market Facts
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {cityContent[project.city].facts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
          
          <h2 className="text-2xl font-semibold mt-6">
            Our Local Expertise
          </h2>
          <p>
            With offices in {project.city}'s business district since {project.city === 'London' ? '2010' : project.city === 'New York' ? '2008' : '2015'}, 
            our team combines global real estate knowledge with deep local market understanding. We've helped clients navigate everything from 
            {project.city === 'Singapore' ? ' complex ABSD regulations' : project.city === 'Toronto' ? ' foreign buyer taxes' : ' local zoning laws'} 
            to identifying emerging neighborhoods before they become mainstream.
          </p>
        </div>
      </motion.div>

      {/* Property Gallery */}
      <div className="grid grid-cols-2 max-md:grid-cols-1">
        {project.moreImages.map((e, i) => (
          <motion.div
            key={i}
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              className="w-full object-cover"
              style={{ height: 420 }}
              src={e}
              alt={`${project.city} property ${i+1}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex">
        <Link
          onClick={scrollToTop}
          to={project.prevHref}
          id="prev-btn"
          className="w-2/5 hover:text-red-500 py-7 flex justify-center items-center gap-3"
        >
          <FaArrowLeft className="prev-arrow transition-all" />
          <p className="transition-all">Previous Market</p>
        </Link>
        <div className="w-1/5 py-7 border-l-2 border-r-2 flex justify-center items-center">
          <FaWindows />
        </div>
        <Link
          onClick={scrollToTop}
          to={project.nextHref}
          id="next-btn"
          className="w-2/5 hover:text-red-500 py-7 flex justify-center items-center gap-3"
        >
          <p className="transition-all">Next Market</p>
          <FaArrowRight className="next-arrow transition-all" />
        </Link>
      </div>
    </div>
  );
};

export default AboutProject;