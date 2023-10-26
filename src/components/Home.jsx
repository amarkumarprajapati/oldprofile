import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const ocontactme = () => {
    window.open("https://heroic-gaufre-a3d5ed.netlify.app/Contact", "_blank");
  };

  const gotonew = () => {
    window.open("https://heroic-gaufre-a3d5ed.netlify.app/", "_blank");
  };

  const homepage = () => {
    window.open("/", "_self");
  };

  return (
    <div>
      <div>
        <nav className="snow">
          <img
            src="Screenshot2023.png"
            id="Fld2415"
            className="logo"
            onClick={homepage}
          />
          <ul>
            <motion.button
              className="hglkn"
              whileTap={{ scale: 0.9 }}
              onClick={ocontactme}>
              Contact me
            </motion.button>
            <motion.button
              onClick={gotonew}
              className="hglkn"
              whileTap={{ scale: 0.9 }}>
              New Portfolio Website
            </motion.button>
          </ul>
        </nav>
        <div className="detail">
          <h1 className="srg">Hi,</h1>
          <motion.h2 className="srg">I am Amar Kumar Prajapati</motion.h2>
          <motion.p className="fthgbj">
            This is my offical portfolio website to show all Details and work
            exiprins web development
          </motion.p>

          <motion.button className="ager" whileTap={{ scale: 0.8 }}>
            <a href="https://heroic-gaufre-a3d5ed.netlify.app/Work"></a>
            View My work
          </motion.button>
        </div>
        <div className="image">
          <img src="pngwing.com.png" className="shape" />
          <img src="IMG_3395-removebg-preview.png" className="boy" />
        </div>
      </div>
    </div>
  );
};

export default Home;
