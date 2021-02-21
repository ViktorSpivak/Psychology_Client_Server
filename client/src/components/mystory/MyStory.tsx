import React from "react";
// import { Logo } from "../logo/Logo";
import icon1 from "../../images/icons/unicorn.png";
import icon2 from "../../images/icons/people.png";
import icon3 from "../../images/icons/timer.png";
import icon4 from "../../images/icons/books.png";
import icon5 from "../../images/icons/years_sales.png";
import icon6 from "../../images/icons/heads.png";
import icon7 from "../../images/icons/ЕМВА.png";
import icon8 from "../../images/icons/light.png";
import style from "./myStory.module.css";
import { Logo } from "../logo/Logo";
import MyPhoto from "../../images/handsPhoto/баннер сайт блог.png";
import { SimpleSlider } from "../slider/Slider";

export const MyStory = () => {
  return (
    <main className={style.container}>
      <Logo />
      <section>
        <img src={MyPhoto} alt="photo" className={style.myPhoto} />
        <h1 className={style.title}>обо мне</h1>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat
          suscipit sed deleniti, excepturi sit tempora dolores numquam officia
          illo, ut a blanditiis quibusdam praesentium ducimus doloribus velit.
          Accusantium praesentium excepturi adipisci quidem, sapiente ratione
          amet reprehenderit animi nam doloribus itaque rem velit magni delectus
          repellat, omnis eos at sint quos obcaecati ipsa veniam nihil minima?
          Vel accusamus, voluptatem ut, temporibus, officia impedit est facilis
          quia cumque nisi fugit rem.
        </p>
      </section>
      <section>
        <h2 className={style.topic}>добро пожаловать</h2>
        <video src=""></video>
      </section>
      <section>
        <h2 className={style.topic}>факты</h2>
        <ul className={style.list}>
          <li className={style.card}>
            {/* <svg>
        <use href={sprite+"#books"}></use></svg> */}
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>Основатель школы ПР.Ж я сама</p>
          </li>
          <li className={style.card}>
            <img src={icon2} alt="people" className={style.image} />
            <p className={style.description}>
              Обучила более 3000 менеджеров и специалистов отечественных и
              иностранных компаний
            </p>
          </li>
          <li className={style.card}>
            <img src={icon3} alt="watch" className={style.image} />
            <p className={style.description}>15 лет консультирую людей </p>
          </li>
          <li className={style.card}>
            <img src={icon4} alt="book" className={style.image} />
            <p className={style.description}>3 высших образования </p>
          </li>
          <li className={style.card}>
            <img src={icon5} alt="rocket" className={style.image} />
            <p className={style.description}>
              10 лет опыта персональных побед в продажах компаний{" "}
            </p>
          </li>
          <li className={style.card}>
            <img src={icon6} alt="time" className={style.image} />
            <p className={style.description}>
              Более 1000 часов персональных консультаций
            </p>
          </li>
          <li className={style.card}>
            <img src={icon7} alt="knowledge" className={style.image} />
            <p className={style.description}>
              Степень EMBA Int.Inst of Business
            </p>
          </li>
          <li className={style.card}>
            <img src={icon7} alt="knowledge" className={style.image} />
            <p className={style.description}>
              Степень EMBA Int.Inst of Business
            </p>
          </li>
          <li className={style.card}>
            <img src={icon8} alt="certification" className={style.image} />
            <p className={style.description}>Сертификация коуча</p>
          </li>
        </ul>
      </section>
      <section>
        <h2 className={style.topic}>дипломы</h2>
        <ul className={style.diplomas}>
          <li className={style.diploma}></li>
          <li className={style.diploma}></li>
          <li className={style.diploma}></li>
          <li className={style.diploma}></li>
          <li className={style.diploma}></li>
        </ul>
      </section>
      <section>
        <h2 className={style.topic}>ценности</h2>
        <ul className={style.list}>
          <li className={style.card}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
          <li className={style.card}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
          <li className={style.card}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
          <li className={style.card}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
          <li className={style.card}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
          <li className={style.card}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
        </ul>
      </section>
      <section>
        <h2 className={style.topic}>программы</h2>
        <ul className={style.programs}>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
        </ul>
      </section>
      <section>
        <h2 className={style.topic}>отзывы</h2>
        <SimpleSlider />
      </section>
      <section>
        <h2 className={style.topic}>первая бесплатная консультация</h2>
        <p className={style.text}>записатся на встречу</p>
      </section>
      {/* <p className={style.story} data-cursor-active>
        My story
      </p>
      <footer className={style.footer}>
        <Logo />
      </footer> */}
    </main>
  );
};
