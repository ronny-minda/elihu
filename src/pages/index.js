import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({
    x: "",
    y: "",
  });

  useEffect(() => {
    const handleResize = (e) => {
      const screenWidth = window.innerWidth;

      const y = e.pageY - window.top.scrollY;
      const x = e.pageX - Math.floor(screenWidth / 2);
      setPosition({
        x,
        y,
      });
    };

    window.addEventListener("mousemove", handleResize);

    // Limpieza del efecto
    return () => {
      window.removeEventListener("mousemove", handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>ELIHU STRASSER</title>
      </Head>

      <div className="preloader"></div>
      <div className="block-1"></div>
      <div className="block-2"></div>
      <div className="logo-load">
        <Image
          width={1000}
          height={1000}
          src="/assets/img/logo.svg"
          alt=""
          style={{ height: "auto", width: "auto" }}
        />
      </div>
      <div className="logo-load spinning"></div>
      <div className="over-all"></div>

      <header>
        <nav>
          <div className="logo hover-target">
            <Link className="load-spiral" href="/">
              <Image
                width={1000}
                height={1000}
                src="/assets/img/logo.svg"
                alt="logo"
                style={{ height: "auto", width: "auto" }}
              />
            </Link>
          </div>
          <div className="toggle-btn magnetic hover-target">
            <div className="burger-menu">
              <span className="one"></span>
              <span className="two"></span>
              <span className="tre"></span>
            </div>
          </div>
          <div className="scr socials">
            <div className="list-social">
              <ul>
                <li className="hover-target">
                  <a href="#">Db.</a>
                </li>
                <li className="hover-target">
                  <a href="#">Tw.</a>
                </li>
                <li className="hover-target">
                  <a href="#">Ig.</a>
                </li>
                <li className="hover-target">
                  <a href="#">Bg.</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="scr copyright-top">
            <p>STRASSER &copy; 2023</p>
          </div>

          <div className="bg-nav"></div>

          <div className="manu-container">
            <div className="menu">
              <div className="data">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="links text-center text-lg-left">
                        <ul>
                          <li>
                            <p>01</p>
                            <Link
                              className="menu-link hover-target load-spiral"
                              href="/"
                            >
                              Home
                            </Link>
                          </li>
                          <li>
                            <p>02</p>
                            <Link
                              className="menu-link hover-target load-spiral"
                              href="trabajos"
                            >
                              Trabajos
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-4 offset-md-2 centered text-right">
                      <div className="address-menu">
                        <h3>STRASSER DESIGN STUDIO</h3>
                        {/* <h4>
                          Flower 03/11 Street Klaten, Central Java, Indonesia
                        </h4> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div id="spiral">
        <div className="scrolls">
          <Image
            width={1000}
            height={1000}
            draggable="false"
            src="/assets/img/sroll.svg"
            alt="scroll"
            style={{ height: "auto", width: "auto" }}
          />
        </div>
        <div className="main-head">
          <div id="headmove" style={{ opacity: "0" }}>
            <div data-depth="0.2">
              <div className="bg-right"></div>
            </div>
          </div>
          <div id="headmovea">
            <div
              data-depth="0.2"
              style={{
                transform: `translate(${position.x * 0.15}px, 0px)`,
              }}
            >
              <div className="bg-right"></div>
            </div>
          </div>
          <div className="heading-text">
            <div className="heading-text-front">
              <h1>ELIHU STRASSER</h1>
            </div>
            <div className="heading-text-back">
              <h1>ELIHU STRASSER</h1>
            </div>
          </div>
        </div>

        <section className="about">
          <div className="container">
            <div className="row centered">
              <div className="col-lg-7">
                <div
                  className="img-about luxy-el"
                  data-horizontal="1"
                  data-speed-x="1"
                >
                  <Image
                    width={1000}
                    height={1000}
                    className="img-fluid"
                    src="/imagenes/4.jpeg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="abt-text">
                  <p>
                    ¡Bienvenido/a a mi mundo visual! Soy Elihu Strasser,
                    capturando momentos y emociones congeladas en el tiempo. Con
                    enfoque creativo y atención al detalle, ofrezco servicios
                    personalizados para retratos, paisajes y eventos especiales.
                    Descubre mi portfolio y reserva una sesión para crear
                    recuerdos duraderos.
                  </p>
                  <Link className="hover-target load-spiral" href="/trabajos">
                    Explore mas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="folio-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-title text-center">
                  <h2>
                    PROYECTOS DESDE EL <span>ESTUDIO</span>
                  </h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="folio-item hover-target">
                  <div className="img-folio">
                    <a
                      className=""
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Image
                        width={1000}
                        height={1000}
                        className="img-fluid"
                        src="/imagenes/32.jpeg"
                        draggable="false"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="text-folio text-center">
                    <h2 className="text-1">ESTUDIO</h2>
                    <h2 className="text-2">ESTUDIO</h2>
                  </div>
                </div>
                <div className="folio-item hover-target">
                  <div className="img-folio">
                    <a
                      className=""
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Image
                        width={1000}
                        height={1000}
                        className="img-fluid"
                        src="/imagenes/34.jpeg"
                        draggable="false"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="text-folio text-center">
                    <h2 className="text-1">ESTUDIO</h2>
                    <h2 className="text-2">ESTUDIO</h2>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="folio-item hover-target">
                  <div className="img-folio">
                    <a
                      className=""
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Image
                        width={1000}
                        height={1000}
                        className="img-fluid"
                        src="/imagenes/25.jpeg"
                        draggable="false"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="text-folio text-center">
                    <h2 className="text-1">ESTUDIO</h2>
                    <h2 className="text-2">ESTUDIO</h2>
                  </div>
                </div>

                <div className="folio-item hover-target">
                  <div className="img-folio">
                    <a
                      className=""
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Image
                        width={1000}
                        height={1000}
                        className="img-fluid"
                        src="/imagenes/39.jpeg"
                        draggable="false"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="text-folio text-center">
                    <h2 className="text-1">ESTUDIO</h2>
                    <h2 className="text-2">ESTUDIO</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <Link
                  href="/trabajos"
                  className="next-project centered text-center load-spiral"
                >
                  <div className="col-md-12">
                    <p>Ver</p>
                    <h3>TODOS LOS PROYECTOS</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-center text-md-left mt-30">
                <div className="mail hover-target">
                  <a href="#">elihu@gmail.com</a>
                </div>
              </div>
              <div className="col-md-4 text-center mt-30">
                <div className="logo-foot">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/img/logo.svg"
                    alt=""
                    style={{ height: "auto", width: "auto" }}
                  />
                </div>
              </div>
              <div className="col-md-4 text-center text-md-right mt-30">
                <div className="sosmed">
                  <ul>
                    <li className="hover-target">
                      <a href="#">Dribbble.</a>
                    </li>
                    <li className="hover-target">
                      <a href="#">Twitter.</a>
                    </li>
                    <li className="hover-target">
                      <a
                        href="https://www.instagram.com/histrasser/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram.
                      </a>
                    </li>
                    <li className="hover-target">
                      <a href="#">Behance.</a>
                    </li>
                  </ul>
                </div>
                <div className="copyright">
                  <p>STRASSER &copy;2023. All Rights Reserved</p>
                  {/* <p>Made with ♥ by Esensifiksi.</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
