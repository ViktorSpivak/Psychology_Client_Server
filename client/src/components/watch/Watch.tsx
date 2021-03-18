import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import { Logo } from "../../svgcomponents/Logo";
import axios from "axios";
import style from "./watch.module.css";
import { TuneLoader } from "../tuneLoader/TuneLoader";
import { IPosterList } from "../../../../common/interfaces";
import { Logo } from "../logo/Logo";

const apiKey = "3f3d3dc7a4319cc8bb935aa9323bdeea";
// axios.defaults.baseURL = "https://api.themoviedb.org/3/movie/";

export const Watch = () => {
  const loader = useRef<HTMLElement>(null);
  const [list, setList] = useState<IPosterList[]>([]);
  const [count, setCount] = useState<number>(1);
  const loadMore = (entries: any) => {
    if (entries[0].isIntersecting) {
      fetchTrendMovies(count);
    }
  };

  useEffect(() => {
    const x = loader.current!;
    const observer = new IntersectionObserver(loadMore);
    observer.observe(x);
    setCount((prevState) => prevState + 1);
    return () => {
      // console.log("bb");
      return observer.unobserve(x);
    };
  }, [list]); // eslint-disable-line

  // console.log("List:", list.length);

  const fetchTrendMovies = (page: number): void => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`
      )
      .then((res) => {
        setList((state) => [...state, ...res.data.results]);
        return res.data.results;
      })
      // .then((res) => console.log("Data", res))
      .catch((er) => console.log(er));
  };

  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.logo}>
          <Logo />
        </div>

        <p className={style.text}>Watch </p>
        <h1 data-cursor-active>
          Lorem ipsum dolor, sit amet elit. Eius, repellendus?
        </h1>
      </header>
      <main>
        <ul className={style.list}>
          {list &&
            list.map((el, idx) => (
              <li key={idx} className={style.card} data-cursor-active>
                <Link to="/">
                  <img
                    className={style.img}
                    src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                    alt="poster"
                  />
                  <div className={style.cardDescription}>
                    <div>
                      <span>Date</span>
                      <span>Theme</span>
                    </div>
                    <h3>Headline</h3>
                    <p className={style.cardText}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Praesentium, nisi illo sequi soluta officia saepe quis
                      rerum molestiae quaerat aliquid.
                    </p>
                    <p>Continue Reading</p>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </main>
      <footer ref={loader} className={style.footer}>
        <TuneLoader />
      </footer>
    </div>
  );
};
