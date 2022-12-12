import React from "react";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Skills } from "./Skills/Skills";
import { Projects } from "./Projects/Projects";
import { Contact } from "./Contact/Contact";
import Footer from "./Footer/Footer";
import styles from "./App.module.scss";

export const App = () => (
  <div className={styles.app}>
    <Header />
    <Main />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
);
