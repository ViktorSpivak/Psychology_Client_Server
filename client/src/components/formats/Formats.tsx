import React from "react";
import { Logo } from "../logo/Logo";
import icon1 from "../../images/icons/unicorn.png";
import icon2 from "../../images/icons/people.png";
import icon3 from "../../images/icons/timer.png";
import icon4 from "../../images/icons/books.png";
import icon5 from "../../images/icons/years_sales.png";
import icon6 from "../../images/icons/heads.png";
import icon7 from "../../images/icons/ЕМВА.png";
import icon8 from "../../images/icons/light.png";
import MyPhoto from "../../images/handsPhoto/баннер сайт блог.png";
import style from "./formats.module.css";

export const Formats = () => {
  return (
    <main className={style.container}>
      <Logo />
      <section>
        <img src={MyPhoto} alt="photo" className={style.myPhoto} />
        <h1 className={style.title}>форматы работы</h1>
        <p className={style.text}>видео</p>
        <video src=""></video>
      </section>
      <section>
        <h2 className={style.topic}>когда коучинг лучшее решение</h2>
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
        <h2 className={style.topic}>коучинг vs менторинг</h2>
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
        <h2 className={style.topic}>психологическое консультирование</h2>
        <ul className={style.diplomas}>
          <li className={style.diploma}></li>
          <li className={style.diploma}></li>
          <li className={style.diploma}></li>
        </ul>
      </section>
      <section>
        <h2 className={style.topic}>как выбрать специалиста</h2>
        <ul className={style.list}>
          <li className={style.card1}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
          <li className={style.card1}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
          <li className={style.card1}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
          <li className={style.card1}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
          <li className={style.card1}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
          <li className={style.card1}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
          <li className={style.card1}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
          <li className={style.card1}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
          <li className={style.card1}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
          <li className={style.card1}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
          <li className={style.card1}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
          <li className={style.card1}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
        </ul>
      </section>
      <section>
        <h2 className={style.topic}>этапы работы</h2>
        <ol className={style.programs}>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
        </ol>
      </section>
      <section>
        <h2 className={style.topic}>стандарты работы</h2>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          dolores provident vero reiciendis similique dolor soluta nemo officiis
          suscipit quasi. Ducimus labore repudiandae maxime, sequi illum
          voluptate suscipit cum, dolore nostrum totam ad quaerat aliquam? Nisi
          asperiores quam dolore adipisci voluptates amet, similique fuga
          quaerat temporibus odio, voluptate molestiae doloribus excepturi
          beatae repellendus soluta perferendis quidem quibusdam iste quasi?
          Maiores consequuntur ab labore odio! Velit consectetur magni quis
          reprehenderit ratione.
        </p>
      </section>
      <section>
        <h2 className={style.topic}>записатся на бесплатную консультацию</h2>
        <ul className={style.consultations}>
          <li className={style.consultation}></li>
          <li className={style.consultation}></li>
          <li className={style.consultation}></li>
        </ul>
      </section>
      <section>
        <h2 className={style.topic}>записатся на программу</h2>
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
      {/* <p className={style.story} data-cursor-active>
      My story
    </p>
    <footer className={style.footer}>
      <Logo />
    </footer> */}
    </main>
  );
};
// <div className={style.how}>
//   <p className={style.text} data-cursor-active>
//     How it works
//   </p>
//   <footer className={style.footer}>
//     <Logo />
//   </footer>
// </div>
