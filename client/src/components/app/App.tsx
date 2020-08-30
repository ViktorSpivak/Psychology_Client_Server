import React from "react";
import { Route, Switch } from "react-router-dom";
import { SignupForm } from "../../admin/signupForm/SignupForm";
import { AskMe } from "../askMe/AskMe";
import { Game } from "../game/Game";
import { HomePage } from "../homepage/HomePage";
import Menu from "../menu/Menu";
import { MiddlePage } from "../middlepage/Middlepage";
import { SocialLinks } from "../socialLinks/SocialLinks";
import style from "./app.module.css";
import { MyStory } from "../mystory/MyStory";
import { Specialization } from "../specialization/Specialization";
import { Contacts } from "../contacts/Contacts";
import HowItWorks from "../howItWorks/HowItWorks";
import { Watch } from "../watch/Watch";

export const App: React.FC = () => {
  return (
    <div className={style.container}>
      <Switch>
        {/* <Route path="/" exact>
          <HomePage />
        </Route> */}
        <Route path="/socialLinks">
          <SocialLinks />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path={"/mystory"}>
          <MiddlePage />
          <MyStory />
        </Route>
        <Route path={"/specialization"}>
          <MiddlePage />
          <Specialization />
        </Route>
        <Route path={"/contacts"}>
          <MiddlePage />
          <Contacts />
        </Route>
        <Route path={"/howItWorks"}>
          <MiddlePage />
          <HowItWorks />
        </Route>
        <Route path={"/watch"}>
          <MiddlePage />
          {/* <MiddlePage post={<SendButton />} /> */}
          <Watch />
        </Route>
        {/* <Route
          path={[
            "/mystory",
            "/specialization",
            "/contacts",
            "/howItWorks",
            "/watch",
          ]}
        >
          <MiddlePage post={<SendButton />} />
        </Route> */}
        <Route path="/askMe">
          <AskMe />
        </Route>
        <Route path="/admin">
          <AskMe />
        </Route>
        <Route path="/login">
          <AskMe />
        </Route>
        <Route path="/logout">
          <AskMe />
        </Route>
        <Route path="/signup">
          <SignupForm />
        </Route>
        <Route>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};
