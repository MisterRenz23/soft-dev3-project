import React from "react";
import styles from "./About.module.css";
import Profile from "./Profile";
import NavbarUser from "../../components/NavbarUser/NavbarUser";

const AboutUser = () => {
  return (
    <div className={styles["page-container"]}>
      <NavbarUser />
      <div className={styles["image-section"]}>
        <div className={styles["text-containers"]}>
          <div className={styles["title-text"]}>
            <h1>WHO WE ARE</h1>
          </div>
          <div className={styles["description-text"]}>
            <p>
              At Arvanthea, we are committed to providing affordable catering
              while never sacrificing quality of food or service. We will always
              strive to exceed your every expectation and are looking forward to
              working with you.
            </p>
          </div>
        </div>
      </div>
      <div className={styles["divider"]}></div>
      <div className={styles["picture-section"]}>
        <div className={styles["text-picture-container"]}>
          <div className={styles["meet-the-team-text"]}>
            <h1>MEET OUR TEAM</h1>
          </div>
          <div className={styles["team-pictures"]}>
            <Profile
              right="81px"
              Name="John Renz Valencia"
              Position="Developer"
              altImage="john-renz-image"
              Image="john-renz.png"
            />
            <Profile
              right="81px"
              Name="Armand Van Romanillos"
              Position="Product Owner"
              altImage="vandam-image"
              Image="vandam.png"
            />
            <Profile
              right="81px"
              Name="EN Rex George Verdida"
              Position="Scrum Master"
              altImage="vandam-image"
              Image="en-rex.png"
            />
            <Profile
              right="81px"
              Name="Johnjorge Stuart Capuras"
              Position="Quality Assurance"
              altImage="johnjorge-stuart-image"
              Image="johnjorge-stuart.png"
            />
            <Profile
              Name="Krishna Carla Tamosa"
              Position="Developer"
              altImage="krishna-carla-tamosa-image"
              Image="krishna-carla-tamosa.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUser;
