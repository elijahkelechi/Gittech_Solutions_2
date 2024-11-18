import React from "react";
import aboutUsBg from "../assets/landingImage2.webp"; // Background image for the About Us section
import LandingPageContact from "../components/LandingPageContact";
import founderPhoto from "../assets/team-photos/founder.jpeg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-secondary to-primary flex flex-col items-center py-8 px-4 ">
      {/* Company Overview Section */}
      <div className="m-4 md:mx-12">
        <div className=" bg-gradient-to-r from-secondary to-primary">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Who We Are</h2>
            <p className="text-lg max-w-3xl mx-auto mb-12 text-white">
              At <span className="font-semibold">GiiTech</span>, our team is the
              driving force behind our innovation. We are a diverse group of
              passionate professionals dedicated to pushing the boundaries of
              technology and delivering exceptional solutions. With expertise
              ranging from automation and robotics to green energy and
              artificial intelligence, we are committed to shaping a sustainable
              and technologically advanced future.
            </p>

            {/* Core Values Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description:
                    "We are at the forefront of technology, continuously creating cutting-edge solutions that drive progress.",
                },
                {
                  title: "Sustainability",
                  description:
                    "We prioritize green energy initiatives, striving to build a sustainable future for generations to come.",
                },
                {
                  title: "Collaboration",
                  description:
                    "Our multidisciplinary team thrives on collaboration, combining expertise to solve complex challenges.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-teal-600 to-teal-400 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-50">
                    {value.title}
                  </h3>
                  <p className="text-gray-50">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="py-16 bg-gradient-to-r from-secondary to-primary text-white">
          <div className="container mx-auto text-center p-2 md:p-4">
            <h2 className="text-4xl font-bold mb-8">Our Mission & Vision</h2>
            <p className="text-lg max-w-3xl mx-auto mb-12">
              Our mission is to revolutionize industries by leveraging
              cutting-edge technologies in automation, robotics, green energy,
              and AI. We envision a world where technology seamlessly enhances
              the quality of life, sustainability, and innovation.
            </p>
            <div className="flex justify-center space-x-2 md:space-x-8">
              <div className="bg-gradient-to-r from-teal-600 to-teal-400 mb-8 p-2 md:p-4 rounded-lg shadow-lg w-72">
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p>
                  To empower industries with transformative technologies that
                  drive efficiency, sustainability, and innovation.
                </p>
              </div>
              <div className="bg-gradient-to-r from-teal-600 to-teal-400 mt-8 p-2 md:p-4 rounded-lg shadow-lg w-72">
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p>
                  To be global leaders in automation, green energy, and AI,
                  shaping a sustainable, innovative future for all.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16 bg-gradient-to-r from-secondary to-primary">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">
              Meet the Team
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-12 text-white">
              Our team of engineers, developers, and visionaries are united by a
              shared passion for innovation and excellence.
            </p>

            {/* Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ethan Moore",
                  role: "Head of AI Development",
                  bio: "Ethan specializes in artificial intelligence, creating smart systems that power modern solutions.",
                  img: { aboutUsBg },
                },
                {
                  name: "Motif",
                  role: "Founder & CEO",
                  bio: "Motif leads GiiTech with a vision for sustainable technological advancement, blending innovation and strategy.",
                  img: founderPhoto,
                },
                {
                  name: "Ava Brown",
                  role: "Green Energy Lead",
                  bio: "Ava drives sustainability initiatives, integrating green technologies into GiiTech's core projects.",
                  img: { aboutUsBg },
                },
              ].map((teamMember, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-teal-600 to-teal-400 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={teamMember.img}
                    alt={teamMember.name}
                    className="w-full h-72 rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-semibold mb-2 text-gray-50">
                    {teamMember.name}
                  </h3>
                  <p className="text-gray-50 font-medium">{teamMember.role}</p>
                  <p className="text-gray-700 mt-2">{teamMember.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Call to Action */}
        <LandingPageContact />
      </div>
    </div>
  );
};

export default AboutUs;
