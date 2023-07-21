import {
  Img,
  Heading,
  Button,
  Box,
  HStack,
  VStack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  Input,
  FormLabel,
  useConst,
  Highlight,
} from "@chakra-ui/react";
import source from "../Images/home sight  (1).png";
import twitter from "../Images/erest__1_-removebg-preview.png";
import insta from "../Images/Untitled_design__5_-removebg-preview.png";
import facebook from "../Images/Untitled_design__6_-removebg-preview.png";
import pinterest from "../Images/erest-removebg-preview.png";

import done from "../Images/successfully-done.gif"

import location from "../Images/location copy.png";
import call from "../Images/call.png";
import email from "../Images/email.png";
import linkdin from "../Images/linkedin.png";

import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContextProvider";

function Home() {
  const themes = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    paddingLeft: "17px",
    justifyContent: "space-around",
    gap: "30px",
    paddingTop: "32px",
  };

  const noTheme = {
    display: "none",
  };

  const [viewMore, setViewMore] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const {isAuth, token} = useContext(AuthContext)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = () => {
    // alert("We will contact you shortly!");
    onClose()
    
    const timeout = setTimeout(function(){
      setIsModalOpen(true);
  }, 1000);

  };

  const handleClose = () => {
    // alert('Closing in..');
    setIsModalOpen(false);
  };

  return (
    <div>
      <div>
        <Img
          style={{ position: "absolute", zIndex: -10 }}
          src={source}
          width="100%"
          height="705"
        />

        <Box style={{ paddingTop: "15%", color: "white" }}>
          <Heading  as="h1" size="3xl">
            Over a long period of work we have
          </Heading>

          <Heading marginTop="10px" as="h1" size="3xl">
           provided hundreds of thousands of eye
          </Heading>

          <Heading marginTop="10px" as="h1" size="3xl">
          care services
          </Heading>

          {/* //////////////////////////// OPEN MODEL //////////////////////// */}

          <Button
            colorScheme="blue"
            style={{ marginTop: "40px", width: "160px" }}
            onClick={onOpen}
          >
            Book Appointment
          </Button>

          {/* FIRST MODAL */}

          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Fill in the details</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input ref={initialRef} placeholder="Name" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="Email" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Mobile Number</FormLabel>
                  <Input placeholder="Mobile Number" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Subject</FormLabel>
                  <Input placeholder="Why you want to book a session?" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Message</FormLabel>
                  <Input style={{height: '100px'}} placeholder="Your Message Here" />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button onClick={handleSubmit} colorScheme="blue" mr={3}>
                  Submit
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          {/* SECOND MODAL */}

      <Modal  isOpen={isModalOpen}
            onClose={handleClose}>
        <ModalOverlay />
        <ModalContent maxW="60rem" style={{borderRadius:'25px' ,height:"400px", marginTop: '200px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}>
          <ModalCloseButton />
          <ModalBody marginLeft="240px">
            <Img marginLeft="120px" width="200px" marginTop="35px" src={done}/>
            <ModalHeader> Sit back and relax ! We will contact you shortly</ModalHeader>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleClose} colorScheme="blue">Okay</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>



          {/* //////////////////////////// OPEN MODEL //////////////////////// */}
        </Box>
      </div>

      <div
        style={{
          backgroundColor: "beige",
          marginTop: "195px",
          padding: "15px",
        }}
      >
        <Heading size="xl" style={{ marginBottom: "10px", marginTop: "10px" }}>
        Services that <span style={{ color: "#DF4C73" }}> Bright Sight </span> offers? {" "}
        </Heading>

        <Text style={{ marginBottom: "25px" }}>
          <span style={{ color: "#DF4C73" }}>Below are</span> the services
          that we offer{" "}
          {/* <span style={{ color: "#DF4C73" }}>mental health</span> needs. */}
        </Text>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            paddingLeft: "17px",
            justifyContent: "space-around",
            gap: "30px",
          }}
        >
          <Box
            style={{
              width: "450px",
              height: "350px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "15px",
              backgroundColor: "white",
              display: "flex",
              padding: "15px",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HStack style={{ color: "#DF4C73" }}>
              <Img src="https://www.eyecarehospital.org/wp-content/uploads/2019/01/Cataract-Surgery.jpg" />
              <Heading as="h3">Cataract Surgery</Heading>
            </HStack>

            <Text>
            In the normal eye the lens inside is clear and transparent, but when cataract develops it becomes cloudy and opaque.
            </Text>

            <Link style={{ color: "#DF4C73", fontWeight: "bold" }}>
              LEARN MORE    ➤
            </Link>
          </Box>

          <Box
            style={{
              width: "450px",
              height: "350px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "15px",
              backgroundColor: "white",
              display: "flex",
              padding: "15px",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HStack style={{ color: "#DF4C73" }}>
              <Img src="https://www.eyecarehospital.org/wp-content/uploads/2019/01/OptiLasik.jpg" />
              <Heading as="h3">OptiLasik</Heading>
            </HStack>

            <Text>
            A 10 minute procedure that corrects the shape of the cornea, helps the light falling on the cornea to properly reach the retina, thus improving the vision.
            </Text>

            <Link style={{ color: "#DF4C73", fontWeight: "bold" }}>
            LEARN MORE    ➤
            </Link>
          </Box>

          <Box
            style={{
              width: "450px",
              height: "350px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "15px",
              backgroundColor: "white",
              display: "flex",
              padding: "15px",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HStack style={{ color: "#DF4C73" }}>
              <Img width='150px' src="https://www.rominoptical.ca/wp-content/uploads/2022/01/contact-lens.png" />
              <Heading as="h3">Contact Lenses</Heading>
            </HStack>

            <Text>
            Are small visual devices made with curved pieces of plastic shaped in a way to conform directly to the wearer’s eye.
            </Text>

            <Link style={{ color: "#DF4C73", fontWeight: "bold" }}>
            LEARN MORE    ➤
            </Link>
          </Box>

          <Box
            style={{
              width: "450px",
              height: "350px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "15px",
              backgroundColor: "white",
              display: "flex",
              padding: "15px",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HStack style={{ color: "#DF4C73" }}>
              <Img src="https://www.eyecarehospital.org/wp-content/uploads/2019/01/yagg.jpg" />
              <Heading as="h3">Yag Laser</Heading>
            </HStack>

            <Text>
            A produces a concentrated beam of light that can focus on the iris or any thick membrane behind the intraocular lens. 
            </Text>

            <Link style={{ color: "#DF4C73", fontWeight: "bold" }}>
            LEARN MORE    ➤
            </Link>
          </Box>

          {/* 2nd row */}

          <Box
            style={{
              width: "450px",
              height: "350px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "15px",
              backgroundColor: "white",
              display: "flex",
              padding: "15px",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HStack style={{ color: "#DF4C73" }}>
              <Img src="https://www.eyecarehospital.org/wp-content/uploads/2019/01/Bladeless-Lasik-Surgery.jpg" />
              <Heading as="h3">Bladeless Lasik Surgery</Heading>
            </HStack>

            <Text>
            No matter how ready you are for a life without spectacles or contact lemses, the decision to have Lasik is a big one.
            </Text>

            <Link style={{ color: "#DF4C73", fontWeight: "bold" }}>
            LEARN MORE    ➤
            </Link>
          </Box>

          <Box
            style={{
              width: "450px",
              height: "350px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "15px",
              backgroundColor: "white",
              display: "flex",
              padding: "15px",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HStack style={{ color: "#DF4C73" }}>
              <Img src="https://www.eyecarehospital.org/wp-content/uploads/2019/01/Perimetry1.jpg" />
              <Heading as="h3">Perimetry</Heading>
            </HStack>

            <Text>
            In that direction we are happy to inform you that a new high precision equipment having most advanced features for the early detection and treatment of Glaucoma.
            </Text>

            <Link style={{ color: "#DF4C73", fontWeight: "bold" }}>
            LEARN MORE    ➤
            </Link>
          </Box>
        </div>

        <div style={viewMore ? themes : noTheme}>
          <Box
            style={{
              width: "450px",
              height: "350px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "15px",
              backgroundColor: "white",
              display: "flex",
              padding: "15px",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HStack style={{ color: "#DF4C73" }}>
              <Img src="https://www.eyecarehospital.org/wp-content/uploads/2019/01/Glaucoma.jpg" />
              <Heading as="h3">Glaucoma</Heading>
            </HStack>

            <Text>
            It is an eye disease that can cause loss of vision. Often called as “Sneak Thief Of Sight” , Glaucoma is deadly because there are no early warning signs.
            </Text>

            <Link style={{ color: "#DF4C73", fontWeight: "bold" }}>
            LEARN MORE    ➤
            </Link>
          </Box>

          <Box
            style={{
              width: "450px",
              height: "350px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "15px",
              backgroundColor: "white",
              display: "flex",
              padding: "15px",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HStack style={{ color: "#DF4C73" }}>
              <Img src="https://www.eyecarehospital.org/wp-content/uploads/2019/01/Floaters.jpg" />
              <Heading as="h3">Floaters and Flashes</Heading>
            </HStack>

            <Text>
            Sometimes people see small spots or specks moving in their field of vision or experience flashes of light.
            </Text>

            <Link style={{ color: "#DF4C73", fontWeight: "bold" }}>
            LEARN MORE    ➤
            </Link>
          </Box>
        </div>

        <Button
          style={{
            marginTop: "30px",
            backgroundColor: "white",
            boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
            color: "#DF4C73",
          }}
          onClick={() => setViewMore(!viewMore)}
        >
          {" "}
          {viewMore ? "View Less" : "View More"}{" "}
        </Button>
      </div>

      <div
        style={{
          backgroundColor: "#FFEEE4",
          //   marginTop: "285px", Our platform is built by psychiatrists, therapists and mental health experts with immense global experience.
          padding: "15px",
        }}
      >
        <Heading size="xl" style={{ marginBottom: "10px", marginTop: "10px" }}>
          Why Choose <span style={{ color: "#DF4C73" }}>Bright Sight</span>?
        </Heading>

        <Text style={{ marginBottom: "25px", marginTop: "10px" }}>
          Our platform is built by{" "}
          <span style={{ color: "#DF4C73" }}>doctors</span>,{" "}
          <span style={{ color: "#DF4C73" }}>consultant</span> and{" "}
          <span style={{ color: "#DF4C73" }}>ophthalmologist</span> experts with
          immense global experience.
        </Text>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            // paddingLeft: "17px",
            justifyContent: "space-around",
            gap: "30px",
            width: "90%",
            margin: "auto",
            paddingBottom: "40px",
          }}
        >
          <Box
            style={{
              //   width: "400px",
              //   height: "450px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "15px",
              backgroundColor: "white",
              display: "flex",
              padding: "15px",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <VStack style={{ color: "#DF4C73" }}>
              <Img width='120px' src="https://cdn0.iconfinder.com/data/icons/medical-health-care-1-1/256/Hospital-512.png" />
              <Heading as="h3">Largest network of hospitals</Heading>
            </VStack>

            <Text>
            We are the world's largest network of eye care hospitals with 100+ hospitals pan India.
            </Text>
          </Box>

          <Box
            style={{
              //   width: "400px",
              //   height: "450px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "15px",
              backgroundColor: "white",
              display: "flex",
              padding: "15px",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <VStack style={{ color: "#DF4C73" }}>
              <Img width='120px' src="https://cdn-icons-png.flaticon.com/512/5015/5015696.png" />
              <Heading as="h3">Dedicated, expert doctors</Heading>
            </VStack>

            <Text>
            We have over 600 specialists dedicated to provide patients with excellent care.
            </Text>
          </Box>

          <Box
            style={{
              //   width: "400px",
              //   height: "450px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "15px",
              backgroundColor: "white",
              display: "flex",
              padding: "15px",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <VStack style={{ color: "#DF4C73" }}>
              <Img width='120px' src="https://cdn-icons-png.flaticon.com/512/150/150625.png" />
              <Heading as="h3">State-of-the-art technology</Heading>
            </VStack>

            <Text>
            We have introduced various cutting edge ophthalmic technologies in India.
            </Text>
          </Box>

          <Box
            style={{
              //   width: "400px",
              height: "400px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "15px",
              backgroundColor: "white",
              display: "flex",
              padding: "35px",
              flexDirection: "column",
              gap: "50px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <VStack style={{ color: "#DF4C73" }}>
              <Img width='120px' src="https://img.freepik.com/free-icon/doctor_318-643631.jpg?w=360" />
              <Heading as="h3">Well trained Care staff</Heading>
            </VStack>

            <Text>
            We have over 6000 Care staff that are well trained to take the best care of our patients.
            </Text>
          </Box>
        </div>
      </div>

      <footer
        style={{
          backgroundColor: "#13162f",
          display: "flex",
          justifyContent: "space-around",
          color: "white",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <span>
            {" "}
            <b>QUICK LINKS</b>
          </span>
          <Link>- Faq's</Link>
          <Link>- Privacy Policy</Link>
          <Link>- Terms & Conditions</Link>
          <Link>- Sitemap</Link>
          <Link>- Cookies Policy</Link>
          <Link>- Cancellation & Refund Policy</Link>
        </div>

        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <span>
            {" "}
            <b>FOLLOW US ON</b>
          </span>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Img width={30} height={30} src={insta} alt="" />
            <p>Instagram</p>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Img width={30} height={30} src={facebook} alt="" />
            <p>Facebook</p>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Img width={30} height={30} src={twitter} alt="" />
            <p>Twitter</p>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Img width={30} height={30} src={pinterest} alt="" />
            <p>Pinterest</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <span>
            <b>GET IN TOUCH</b>
          </span>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Img width={30} height={30} src={email} alt="" />
            <p>bright_sight@gmail.com</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Img width={30} height={30} src={call} alt="" />
            <p>+91 987654321</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "justify",
            }}
          >
            <Img width={30} height={30} src={location} alt="" />
            <p>
              Regd. Address: Sarojini nagar, <br /> New Delhi, 847211
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Img width={30} height={30} src={linkdin} alt="" />
            <p>Bright Sight</p>
          </div>
        </div>
      </footer>

      <div
        style={{
          backgroundColor: "#13162f",
          display: "flex",
          justifyContent: "space-around",
          color: "white",
          paddingBottom: "10px",
        }}
      >
        <p>2023 © Bright Sight. All right reserved.</p>
      </div>
    </div>
  );
}

export default Home;
