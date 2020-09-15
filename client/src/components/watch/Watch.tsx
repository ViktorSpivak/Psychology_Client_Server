import React, { useState, useEffect, useRef, FunctionComponent } from "react";
import { Link } from "react-router-dom";
// import { Logo } from "../../svgcomponents/Logo";
import axios from "axios";
import style from "./watch.module.css";
import { Loader } from "../loader/Loader";
import { IPosterList } from "../../../../common/interfaces";
import { Logo } from "../logo/Logo";

const apiKey = "3f3d3dc7a4319cc8bb935aa9323bdeea";
axios.defaults.baseURL = "https://api.themoviedb.org/3/movie/";

export const Watch: FunctionComponent = () => {
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
      .get(`top_rated?api_key=${apiKey}&language=en-US&page=${page}`)
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
        <Logo />
        <p className={style.text}>Watch </p>
        <h1>Lorem ipsum dolor, sit amet elit. Eius, repellendus?</h1>
      </header>
      <main>
        <ul className={style.list}>
          {list &&
            list.map((el, idx) => (
              <li key={idx} className={style.card}>
                {/* <Link to="/"> */}
                <img
                  className={style.img}
                  src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                  alt="poster"
                  data-cursor-active
                />
                <div className={style.cardDescription}>
                  <div>
                    <span>Date</span>
                    <span>Theme</span>
                  </div>
                  <h3 data-cursor-active>Headline</h3>
                  <p className={style.cardText} data-cursor-active>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium, nisi illo sequi soluta officia saepe quis rerum
                    molestiae quaerat aliquid.
                  </p>
                  <Link to="/" data-cursor-active>
                    <p>Continue Reading</p>
                  </Link>
                </div>
                {/* </Link> */}
              </li>
            ))}
        </ul>
      </main>
      <footer ref={loader} className={style.footer}>
        <Loader />
      </footer>
    </div>
  );
};
