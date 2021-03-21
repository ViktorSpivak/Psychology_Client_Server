import React, { ReactElement } from "react";
import { Paper } from "../../svgСomponents/Paper";
import { Stone } from "../../svgСomponents/Stone";
import { Scissors } from "../../svgСomponents/Scissors";
import style from "./scorehistory.module.css";

interface IResults {
  results: Array<{
    winner: string;
    aiChoice: string;
    gamerChoice: string;
    round: number;
  }>;
}
interface IRound {
  round: number;
}

export const ScoreHistory = ({ results }: IResults) => {
  const selectComponent = (color: string, choice: string): ReactElement => {
    let svgComponent: ReactElement;
    switch (choice) {
      case "stone":
        svgComponent = <Stone color={color} />;
        break;
      case "scissors":
        svgComponent = <Scissors color={color} />;
        break;
      case "paper":
        svgComponent = <Paper color={color} />;
        break;
    }
    return svgComponent!;
  };
  const GamersChoiceOfRound = ({ round }: IRound): ReactElement => {
    const color: string =
      results[round].winner !== "gamer" ? "#e62649" : "#eb7f21";
    const choice: string = results[round].gamerChoice;
    return selectComponent(color, choice);
  };
  const AiChoiceOfRound = ({ round }: IRound): ReactElement => {
    const color = results[round].winner !== "ai" ? "#e62649" : "#eb7f21";
    const choice = results[round].aiChoice;
    return selectComponent(color, choice);
  };

  return (
    <div>
      <div className={style.line}></div>
      <div className={style.scoreLine}>
        <span className={style.icon}>
          <GamersChoiceOfRound round={results.length - 1} />
        </span>
        <span className={style.round}>{results.length}</span>
        <span className={style.icon}>
          <AiChoiceOfRound round={results.length - 1} />
        </span>
      </div>
      {!!(results.length - 1) && (
        <>
          <div className={style.line}></div>
          <div className={style.scoreLine}>
            <span className={style.icon}>
              <GamersChoiceOfRound round={results.length - 2} />
            </span>
            <span className={style.round}>{results.length - 1}</span>
            <span className={style.icon}>
              <AiChoiceOfRound round={results.length - 2} />
            </span>
          </div>
        </>
      )}
    </div>
  );
};
