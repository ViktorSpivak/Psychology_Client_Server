import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { SocialLinks } from "../socialLinks/SocialLinks";
import style from "./app.module.css";
import "../../fonts/fonts.css";
import { Cursor } from "../cursor/Cursor";
import { SendButton } from "../sendButton/SendButton";
import { TuneLoader } from "../tuneLoader/TuneLoader";
import { ProgramTemplate } from "../programTamplate/ProgramTemplate";

const HomePage = lazy(() =>
  import("../homepage/HomePage").then(({ HomePage }) => ({ default: HomePage }))
);
const MiddlePage = lazy(() =>
  import("../middlepage/Middlepage").then(({ MiddlePage }) => ({
    default: MiddlePage,
  }))
);
const MyStory = lazy(() =>
  import("../myStory/MyStory").then(({ MyStory }) => ({ default: MyStory }))
);
const Programs = lazy(() =>
  import("../programs/Programs").then(({ Programs }) => ({ default: Programs }))
);
const AskMe = lazy(() =>
  import("../askMe/AskMe").then(({ AskMe }) => ({ default: AskMe }))
);
const Formats = lazy(() =>
  import("../formats/Formats").then(({ Formats }) => ({ default: Formats }))
);
const Watch = lazy(() =>
  import("../watch/Watch").then(({ Watch }) => ({ default: Watch }))
);
const SignupProgram = lazy(() =>
  import("../signupProgram/SignupProgram").then(({ SignupProgram }) => ({
    default: SignupProgram,
  }))
);
const Game = lazy(() =>
  import("../game/Game").then(({ Game }) => ({
    default: Game,
  }))
);

export const App = () => {
  return (
    <div className={style.container}>
      <SendButton />
      <Cursor />
      <Suspense fallback={<TuneLoader overlay />}>
        <Switch>
          <Route path="/socialLinks">
            <SocialLinks />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          {/* <Route
            path={[
              "/myStory",
              "/programs",
              "/askMe",
              "/formats",
              "/watch",
            ]}
          >
            <MiddlePage />
          </Route> */}
          <Route path="/myStory">
            <MiddlePage />
            <MyStory />
          </Route>
          <Route path="/programs">
            <MiddlePage />
            <Programs />
          </Route>
          <Route path="/askMe">
            <MiddlePage />
            <AskMe />
          </Route>
          <Route path={"/formats"}>
            <MiddlePage />
            <Formats />
          </Route>
          <Route path="/watch">
            <MiddlePage />
            <Watch />
          </Route>
          <Route path="/signupProgram">
            <SignupProgram />
          </Route>
          <Route path="/program">
            <ProgramTemplate />
          </Route>
          <Route>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};
