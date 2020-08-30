import React, {
  useState,
  useEffect,
  FunctionComponent,
  MouseEvent,
} from "react";
import style from "./game.module.css";
import stone from "../../images/handsPhoto/stone.png";
import rock from "../../images/handsPhoto/rock.png";
import scissors from "../../images/handsPhoto/scissors.png";
import paper from "../../images/handsPhoto/paper.png";
import AI from "../../images/handsPhoto/ai.png";
import { Paper } from "../../svgcomponents/paper";
import { Stone } from "../../svgcomponents/stone";
import { Scissors } from "../../svgcomponents/scissors";
import { ScoreHistory } from "./ScoreHistory";
// import { Logo } from "../logo/Logo";
import { Logo } from "../../svgcomponents/Logo";
// type TPhoto = { [key: string]: string };

export const Game: FunctionComponent = () => {
  type TResults = {
    winner: string;
    aiChoice: string;
    round: number;
    gamerChoice: string;
  };
  const [isThinking, setIsThinking] = useState<Boolean>(false);
  const [round, setRound] = useState<number>(0);
  const [score, setScore] = useState({ ai: 0, player: 0, ties: 0 });
  const [winner, setWinner] = useState<string>("");
  const [aiChoice, setAIChoice] = useState<string>("rock");
  const [gamerChoice, setGamerChoice] = useState<string>("rock");
  const [results, setResults] = useState<TResults[]>([]);
  useEffect(() => {
    round &&
      setResults((results) => [
        ...results,
        { round, gamerChoice, aiChoice, winner },
      ]);
  }, [round]); // eslint-disable-line

  const photos: Record<string, string> = { stone, paper, scissors, rock };

  const startRound = (ev: MouseEvent) => {
    ev.preventDefault();
    const { name } = ev.currentTarget as HTMLInputElement;
    setIsThinking(true);
    setGamerChoice(name);
    const numberOfImage = Math.floor(Math.random() * 3);
    const aiPhoto = Object.entries(photos)[numberOfImage];
    setAIChoice(aiPhoto[0]);
    const isTie = name === aiPhoto[0];
    const playerWin =
      (name === "stone" && aiPhoto[0] === "scissors") ||
      (name === "scissors" && aiPhoto[0] === "paper") ||
      (name === "paper" && aiPhoto[0] === "stone");

    if (isTie) {
      setWinner("tie");
      setScore({ ...score, ties: score.ties + 1 });
    } else {
      if (playerWin) {
        setWinner("gamer");
        setScore({ ...score, player: score.player + 1 });
      } else {
        setWinner("ai");
        setScore({ ...score, ai: score.ai + 1 });
      }
    }
    setTimeout(() => setIsThinking(false), 200);
    setRound(round + 1);
  };
  return (
    <div>
      <main className={style.container}>
        <h2 className={style.round}>
          <span>ROUND</span> <span>{round + 1}</span>
        </h2>
        <ul className={style.results}>
          <li className={style.list}>
            <h3 className={style.title}>победа</h3>
            <p className={style.result}>{score.player}</p>
          </li>
          <li className={style.listTie}>
            <h3 className={style.title}>ничья</h3>
            <p className={style.result}>{score.ties}</p>
          </li>
          <li className={style.list}>
            <h3 className={style.title}>победа</h3>
            <p className={style.result}>{score.ai}</p>
          </li>
        </ul>
        <div className={style.game}>
          <ul className={style.player}>
            <div className={style.hands}>
              <img
                src={isThinking ? rock : photos[gamerChoice]}
                alt={gamerChoice}
                className={style.hands__left}
              />
            </div>
            <ul className={style.select}>
              <li>
                <button
                  type="button"
                  className={style.player__selectBtn}
                  name="stone"
                  onClick={startRound}
                >
                  <Stone isButton={true} color={"#FAF9F8"} />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={style.player__selectBtn}
                  name="paper"
                  onClick={startRound}
                >
                  <Paper isButton={true} color={"#FAF9F8"} />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={style.player__selectBtn}
                  name="scissors"
                  onClick={startRound}
                >
                  <Scissors isButton={true} color={"#FAF9F8"} />
                </button>
              </li>
            </ul>
          </ul>
          <div className={style.board}>
            <h2 className={style.boardTitle}>ROUNDS</h2>
            {!!results.length && <ScoreHistory results={results} />}
          </div>
          <ul className={style.ai}>
            <div className={style.hands}>
              <img
                src={isThinking ? rock : photos[aiChoice]}
                alt={aiChoice}
                className={style.hands__right}
              />
            </div>
            <div className={style.select}>
              <img src={AI} alt="ai" className={style.ai__image} />
            </div>
          </ul>
        </div>
      </main>
      <footer className={style.footer}>
        <Logo />
      </footer>
    </div>
  );
};
