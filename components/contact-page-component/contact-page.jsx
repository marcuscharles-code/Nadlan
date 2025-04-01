import React, { useState } from "react";
import {
  FaCoins,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaPhone,
} from "react-icons/fa";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import WhatWeDoCard from "../home-page-components/whatwedocard";
import { Button, Input, Textarea, useToast } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";

const ContactPage = () => {
  const toast = useToast();
  const [btnLoader, setBtnLoader] = useState(false);

  const showToast = () => {
    toast({
      title: "Message Sent",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        zIndex: 9999,
      },
    });
  };
  const errorToast = (res, status) => {
    toast({
      title: res,
      status: status,
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        zIndex: 9999,
      },
    });
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    const errors = validateForm(formData);

    if (errors === false) {
      setBtnLoader(true);
      axios
        .post("https://homyz-server.vercel.app/contact", formData)
        .then((response) => {
          showToast();
          setFormData({
            firstName: "",
            lastName: "",
            phoneNo: "",
            email: "",
            message: "",
          });
          setBtnLoader(false);
        })
        .catch((error) => {
          setBtnLoader(false);
          errorToast(error.message, "error");
          console.error("Error submitting form:", error);
        });
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateForm = (data) => {
    let _error;
    if (
      data.firstName &&
      data.firstName.trim() &&
      data.lastName &&
      data.lastName.trim() &&
      data.email &&
      data.email.trim() &&
      isValidEmail(data.email.trim()) &&
      data.phoneNo &&
      data.phoneNo.trim() &&
      data.message &&
      data.message.trim()
    ) {
      _error = false;
    } else {
      if (
        !data.firstName &&
        !data.firstName.trim() &&
        !data.lastName &&
        !data.lastName.trim() &&
        !data.email &&
        !data.email.trim() &&
        !isValidEmail(data.email.trim()) &&
        !data.phoneNo &&
        !data.phoneNo.trim() &&
        !data.message &&
        !data.message.trim()
      ) {
        errorToast("Fill the fields first!", "error");
      } else if (!data.firstName || !data.firstName.trim()) {
        errorToast("Enter the firstName!", "error");
      } else if (!data.lastName || !data.lastName.trim()) {
        errorToast("Enter the lastName!", "error");
      } else if (!data.email || !data.email.trim()) {
        errorToast("Enter the email!", "error");
      } else if (!isValidEmail(data.email.trim())) {
        errorToast("Enter the valid  email!", "error");
      } else if (!data.phoneNo || !data.phoneNo.trim()) {
        errorToast("Enter the phone no!", "error");
      } else if (!data.message || !data.message.trim()) {
        errorToast("Enter the message!", "error");
      }
    }
    return _error;
  };

  return (
    <div className=" w-full overflow-hidden">
      <div className="  flex bg-[url('/hero-bg-image.jpg')] pt-44 max-sm:pt-40 pb-32 bg-top bg-no-repeat bg-cover  ">
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto w-full text-white px-10 max-sm:px-5 flex flex-col max-lg:items-center max-lg:text-center gap-16"
        >
          <motion.h1
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className="text-6xl max-lg:mx-auto font-semibold max-sm:text-5xl max-w-lg "
          >
            Contact Us
          </motion.h1>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
            className="grid gap-4 w-full text-start grid-cols-3 grid-rows-1 max-md:grid-cols-1 max-md:grid-rows-3"
          >
            <motion.div
              variants={animationVariants.fadeUp}
              className="card bg-white text-black rounded-md gap-5  p-6 pb-10 max-lg:p-5 max-lg:pb-8 max-md:p-6 max-md:py-7 max-md:pb-10 flex flex-col gap text-xl "
            >
              <div className="card-header text-2xl flex items-center gap-4">
                <div className="bg-red-500 w-[60px] h-[58px] rounded-md text-xl flex gap-4 justify-center items-center">
                  <FaEnvelope className="text-white" />
                </div>
                <h2 className="title-font font-semibold ">Services</h2>
              </div>
              <p>Neque porro quisquam est, qui dolorem ipsum.</p>
            </motion.div>
            <motion.div
              variants={animationVariants.fadeUp}
              className="card bg-white text-black rounded-md gap-5  p-6 pb-10 max-lg:p-5 max-lg:pb-8 max-md:p-6 max-md:py-7 max-md:pb-10 flex flex-col gap text-xl "
            >
              <div className="card-header text-2xl flex items-center gap-4">
                <div className="bg-red-500 w-[60px] h-[58px] rounded-md text-xl flex gap-4 justify-center items-center">
                  <FaCoins className="text-white" />
                </div>
                <h2 className="title-font font-semibold ">Pricing</h2>
              </div>
              <p>Neque porro quisquam est, qui dolorem ipsum.</p>
            </motion.div>
            <motion.div
              variants={animationVariants.fadeUp}
              className="card bg-white text-black rounded-md gap-5  p-6 pb-10 max-lg:p-5 max-lg:pb-8 max-md:p-6 max-md:py-7 max-md:pb-10 flex flex-col gap text-xl "
            >
              <div className="card-header text-2xl flex items-center gap-4">
                <div className="bg-red-500 w-[60px] h-[58px] rounded-md text-xl flex gap-4 justify-center items-center">
                  <FaMobileAlt className="text-white" />
                </div>
                <h2 className="title-font font-semibold ">Support</h2>
              </div>
              <p>Neque porro quisquam est, qui dolorem ipsum.</p>
            </motion.div>
          </motion.div>
        </div>

        {/* </Reveal> */}
      </div>

      {/* contact form section start */}
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto w-full p-10 py-28 max-sm:px-5 flex max-lg:flex-wrap-reverse  gap-12"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          id="contact"
          style={{ boxShadow: "0 20px 50px rgba(0, 43, 86, .1)" }}
          className="w-1/2 max-lg:w-full p-6 py-7 rounded-md flex flex-col h-auto justify-between items-start gap-5"
        >
          <div className="name w-full gap-5 text-white max-sm:flex-col flex">
            <Input
              pl={3}
              fontSize={19}
              variant={"outline"}
              borderColor={"#002b561a"}
              focusBorderColor="#001d3b4d"
              maxLength={20}
              autoComplete="off"
              _focus={{ borderWidth: 0.1 }}
              color={"black"}
              _placeholder={{ color: "#696969" }}
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              pl={3}
              fontSize={19}
              variant={"outline"}
              borderColor={"#002b561a"}
              focusBorderColor="#001d3b4d"
              maxLength={20}
              autoComplete="off"
              color={"black"}
              _placeholder={{ color: "#696969" }}
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <Input
            pl={3}
            fontSize={19}
            variant={"outline"}
            borderColor={"#002b561a"}
            focusBorderColor="#001d3b4d"
            autoComplete="off"
            maxLength={40}
            color={"black"}
            _placeholder={{ color: "#696969" }}
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            pl={3}
            fontSize={19}
            variant={"outline"}
            borderColor={"#002b561a"}
            focusBorderColor="#001d3b4d"
            max={15}
            maxLength={15}
            autoComplete="off"
            color={"black"}
            _placeholder={{ color: "#696969" }}
            type="number"
            placeholder="Phone No"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
          />
          <Textarea
            pl={3}
            fontSize={19}
            variant={"outline"}
            borderColor={"#002b561a"}
            focusBorderColor="#001d3b4d"
            autoComplete="off"
            maxLength={200}
            color={"black"}
            _placeholder={{ color: "#696969" }}
            placeholder="Message"
            minHeight={"180px"}
            className="w-ful text-white"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button
            _hover={{ backgroundColor: "white", color: "#d5515e" }}
            backgroundColor={"#d5515e"}
            color={"white"}
            borderColor={"#d5515e"}
            variant={"outline"}
            size={"lg"}
            isLoading={btnLoader}
            loadingText={"Sending.."}
            onClick={handleSubmit}
            className="w-full"
            transitionDuration={"300ms"}
            fontWeight={"normal"}
            fontSize={"20px"}
            borderRadius={"4px"}
          >
            Submit
          </Button>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeRight}
          viewport={{ once: true, amount: 0.2 }}
          className="w-1/2 flex flex-col gap-5 max-lg:w-full"
        >
          <div className="text-5xl max-md:text-4xl max-md:text-center">
            <h1 className="font-semibold ">
              Get expert advice from our{" "}
              <span className="font-semibold title-font  text-red-500">
                dedicated support team
              </span>
            </h1>
          </div>
          <p className="text-xl">
            Our property specialists are ready to help you navigate the market, whether you're looking to invest, sell, or find your dream home. Reach out today for personalized assistance.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex  gap-3 text-xl items-center">
              <div>
                <FaMapMarkerAlt className="text-red-500" />
              </div>
              <p>123 Property Lane, London, UK</p>
            </div>
            <div className="flex  gap-3 text-xl items-center">
              <div>
                <FaPhone className="rotate-90 text-red-500" />
              </div>
              <p>+44 20 7946 0958</p>
            </div>
            <div className="flex  gap-3 text-xl items-center">
              <div>
                <FaEnvelope className="text-red-500" />
              </div>
              <p>contact@homyzproperties.co.uk</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* map section start */}
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto w-full p-10 py-28 pt-10 max-sm:py-16 max-sm:pt-5 max-sm:px-5"
      >
        <div className="bg-center bg-no-repeat bg-cover">
          <div className="relative">
            <img
              src="/contact-page-images/map.png"
              className="h-[379px] max-md:h-[440px] max-sm:h-[500px] max-md:object-cover max-md:object-[70%] max-sm:object-[60%]"
              alt="Global property network coverage"
            />
            <div className="absolute flex justify-center items-center bg-white/90 top-0 left-0 right-0 bottom-0">
              <motion.div
                initial="initial"
                whileInView="animate"
                variants={animationVariants.zoomOut}
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-xl max-lg:max-w-lg max-sm:w-full text-center"
              >
                <h1 className="text-[46px] max-lg:text-4xl max-sm:text-[34px] max-[500px]:text-3xl leading-tight font-semibold">
                  Your Global Property Partner
                  <br /> Across Continents
                </h1>
                <p className="text-xl mt-3">
                  From London townhouses to New York penthouses, we connect you with premium properties and investment opportunities worldwide.
                </p>
              </motion.div>
            </div>

            {/* map human images start */}
            <div className="absolute top-24 max-md:top-6 left-16 max-lg:left-10 max-md:left-16 w-12 h-12 rounded-full overflow-hidden">
              <img
                src="/contact-page-images/1.jpg"
                className="w-full h-full object-cover object-center"
                alt="UK property specialist"
              />
            </div>
            <div className="absolute bottom-20 max-lg:bottom-12 left-36 max-lg:left-20 max-sm:left-10 w-12 h-12 rounded-full overflow-hidden">
              <img
                src="/contact-page-images/2.jpg"
                className="w-full h-full object-cover object-center"
                alt="US real estate expert"
              />
            </div>
            <div className="absolute top-12 right-36 max-lg:right-24 max-sm:right-12 w-12 h-12 rounded-full overflow-hidden">
              <img
                src="/contact-page-images/3.jpg"
                className="w-full h-full object-cover object-center"
                alt="Middle East investment advisor"
              />
            </div>
            {/* map human images end */}

            {/* map points start */}
            <div className="w-7 h-7 bg-[#d5515e66] flex justify-center items-center rounded-full absolute top-5 left-32 max-sm:left-5 max-sm:top-24">
              <div className="w-[18px] h-[18px] bg-red-500 rounded-full"></div>
            </div>
            <div className="w-7 h-7 bg-[#d5515e66] flex justify-center items-center rounded-full absolute top-10 max-md:top-16 max-md:right-44 max-sm:right-32 right-64">
              <div className="w-[18px] h-[18px] bg-red-500 rounded-full"></div>
            </div>
            <div className="w-7 h-7 bg-[#d5515e66] flex justify-center items-center rounded-full absolute bottom-16 right-28 max-md:right-0 max-md:bottom-20 max-md:left-44 max-sm:bottom-24 max-sm:left-32">
              <div className="w-[18px] h-[18px] bg-red-500 rounded-full"></div>
            </div>
            {/* map points end */}
          </div>
        </div>
      </div>

      {/* what we do section start */}
      <div className="bg-gray-100">
        <div
          style={{ maxWidth: 1200 }}
          className=" mx-auto flex gap-5 justify-between items-start p-10 py-28 max-md:py-16 max-md:px-5 max-lg:flex-col max-lg:items-center  max-lg:gap-12"
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className="w-1/3 max-lg:w-full max-lg:text-center flex flex-col gap-2 items-start max-lg:items-center"
          >
            <h2 className="text-5xl max-md:text-4xl font-bold title-font">
              Global Property Experts
            </h2>
            <p className="text-xl">
              Headquartered in the UK with international reach, we deliver bespoke property solutions across continents, specializing in both residential and commercial markets.
            </p>
            <Link to="/about" onClick={scrollToTop}>
              <button
                style={{ borderWidth: 1.5, borderRadius: 4 }}
                className="bg-transparent text-black border-red-500 text-xl px-5 py-2 duration-300 hover:bg-red-500 hover:text-white transition-all mt-5 max-md:mt-3"
              >
                About Us
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className="cards w-2/3 max-lg:w-full flex justify-center max-md:flex-col max-md:items-center gap-7"
          >
            <div className="flex flex-col gap-7">
              <WhatWeDoCard
                iconSrc={"/icons/reliability.png"}
                iconAlt={"reliability"}
                title={"International Network"}
                desc={
                  "With offices in London, New York, and Dubai, we provide seamless cross-border transactions and local market expertise worldwide."
                }
              />
              <WhatWeDoCard
                iconSrc={"/icons/communication.png"}
                iconAlt={"communication"}
                title={"24/7 Global Support"}
                desc={
                  "Our multilingual team offers round-the-clock service across timezones, ensuring smooth communication for international clients."
                }
              />
            </div>
            <div className="flex flex-col gap-7">
              <div
                style={{ height: 130 }}
                className="max-md:hidden rounded-lg w-80 bg-gradient-to-t from-white to-transparent"
              ></div>
              <WhatWeDoCard
                iconSrc={"/icons/quality-first.png"}
                iconAlt={"quality-first"}
                title={"Market Intelligence"}
                desc={
                  "We provide comprehensive analysis of both UK and international property markets, helping clients make informed investment decisions."
                }
              />
              <div
                style={{ height: 130 }}
                className="max-md:hidden rounded-lg w-80 h-36 bg-gradient-to-b from-white to-transparent"
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto p-10 py-28 max-md:py-14 max-md:px-5"
      >
        <motion.h1
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          className="text-5xl max-md:text-4xl font-semibold text-center mb-16 max-md:mb-12"
        >
          Property Questions Answered
        </motion.h1>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Accordion className="flex max-md:flex-col gap-5" allowToggle={true}>
            <div className="w-1/2 max-md:w-full text-xl flex flex-col gap-5">
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Do you sell houses?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Yes! We sell all types of properties - houses, flats, commercial spaces, and land.
                  Check our listings or tell us what you're looking for at enquiries@homyzproperties.com.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      How do I buy a property?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Simple process:
                  1. Browse our listings online
                  2. Contact the agent via the property page
                  3. View the property (in-person or virtual tour)
                  4. Make an offer through your agent
                  5. We'll handle all paperwork and completion
                  Start now by calling +44 20 1234 5678
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Can I sell my house through you?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Absolutely. We offer:
                  - Free valuation
                  - Professional photography
                  - Listing on all major property portals
                  - Dedicated sales agent
                  Email sales@homyzproperties.com or call us to arrange a valuation.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      What areas do you cover?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  We cover all UK regions plus international markets in:
                  - USA (New York, Miami, LA)
                  - Europe (Spain, France, Portugal)
                  - UAE (Dubai, Abu Dhabi)
                  Need a specific area? Ask us: +44 20 1234 5678
                </AccordionPanel>
              </AccordionItem>
            </div>

            <div className="w-1/2 max-md:w-full text-xl flex flex-col gap-5">
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      How much are your fees?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  For buyers: No fees - our service is free
                  <br />
                  For sellers: Typically 1-2% + VAT (depending on property value)
                  <br />
                  Email fees@homyzproperties.com for exact quote.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Can I rent properties through you?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Yes! We have hundreds of rental properties across the UK and internationally.
                  View available rentals on our site or call our lettings team: +44 20 1234 5679
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      How do I contact an agent?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Three easy ways:
                  1. Click "Contact Agent" on any property listing
                  2. Call our main line: +44 20 1234 5678
                  3. Visit our contact page and fill out the form
                  We respond within 1 business hour.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Do you help with mortgages?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Yes! Our mortgage advisors can:
                  - Compare 100+ lenders
                  - Get you pre-approved
                  - Handle all paperwork
                  Book a free consultation at mortgages@homyzproperties.com
                </AccordionPanel>
              </AccordionItem>
            </div>
          </Accordion>
        </motion.div>
      </div>
      {/* what we do section end */}
    </div>
  );
};

export default ContactPage;
