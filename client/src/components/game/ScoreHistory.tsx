import React, { FunctionComponent, ReactElement } from "react";
import { Paper } from "../../svgcomponents/paper";
import { Stone } from "../../svgcomponents/stone";
import { Scissors } from "../../svgcomponents/scissors";
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

export const ScoreHistory: FunctionComponent<IResults> = ({
  results,
}): ReactElement => {
  const selectComponent = (color: string, choice: string): ReactElement => {
    let svgComponent!: ReactElement<any>;
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
    return svgComponent;
  };
  const GamersChoiceOfRound: FunctionComponent<IRound> = ({
    round,
  }): ReactElement => {
    const color: string =
      results[round].winner !== "gamer" ? "#e62649" : "#eb7f21";
    const choice: string = results[round].gamerChoice;
    return selectComponent(color, choice);
  };
  const AiChoiceOfRound: FunctionComponent<IRound> = ({
    round,
  }): ReactElement => {
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
