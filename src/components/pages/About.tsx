import React from "react";

import Container from "../ui/Shared/Container";

import "../styles/image-headers.css";
import AboutHeader from "../graphic-assets/about.png";
import { StyleSheet, css } from "aphrodite";

export const About: React.FC = () => (
  <React.Fragment>
    <br />
    <div className={css(styles.containerOne)}>
      <Container type="normal">
        <h4>About The Developers' Guild</h4>
        <p className="text-justify">Learn more about the Developers' Guild.</p>
      </Container>
      <img
        className="open-source-header lazyload"
        style={{ width: "30vw", alignSelf: "center" }}
        data-src={AboutHeader}
        alt="Header"
      />
      <Container type="normal">
        <br />
        <p className="text-justify">
          Developers’ Guild started in 2014 with the goal of facilitating the
          exploration of computer science through hands-on experience.
          Developers’ Guild creates a casual environment to practice real-world
          programming. We foster a community of avid programmers by tackling
          projects that interest us, participating and competing in events, and
          gathering skills and experience for the future. Our members are
          divided into various groups that focus on a different aspect of
          computer science, such as video game development, machine learning/AI,
          and web application development. Members in these groups will learn
          these computer science concepts and create projects to apply what they
          learn. We have various projects for skill levels ranging from beginner
          to more experienced programming projects.
        </p>
        <p className="text-justify">
          Even people who aren’t majoring in computer science can still join!
          Learn to work with computer programmers and create software that’s
          appealing to end-users! There are more aspects of software development
          than just coding and we at Developers’ Guild understand that. Create
          assets for games and UI mockups for websites and applications!
        </p>
        <p className="text-justify">
          When you join DG and attend our meetings, you can help contribute code
          and more to existing and new projects that you can add to your
          portfolio for future jobs or even transfer. Learn new concepts with a
          community of people that share a passion for programming!
        </p>
        <br />
        <h5>TL;DR</h5>
        <ul>
          <li>No prior experience necessary!</li>
          <li>Provide a good way to get real-world programming experience.</li>
          <li>
            To facilitate the exploration of computer science through hands-on
            experience.
          </li>
          <li>
            Adept programmers can work on new challenges and mentor others.
          </li>
          <li>
            Contribute/Create open-source projects for your portfolio and
            resume!
          </li>
          <li>
            Collaboration with individuals with different skills, perspectives
            and backgrounds.
          </li>
          <li>Communication with mentors, industry leaders and speakers.</li>
        </ul>
        <br />
      </Container>
    </div>
  </React.Fragment>
);

const styles = StyleSheet.create({
  containerOne: { display: "flex", flexDirection: "column" },
});
