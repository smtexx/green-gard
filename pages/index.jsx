/* eslint-disable @next/next/no-img-element */
import {
  FaThemeco,
  FaUniversalAccess,
  FaShieldAlt,
} from 'react-icons/fa';

export default function Home() {
  return (
    <>
      {/* Carousel */}
      <div
        className="container-fluid p-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <section className="carousel-item active">
              <img
                className="w-100"
                src="img/carousel-2.jpg"
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h1 className="display-1 text-white mb-5 animated slideInDown">
                        Профессиональный подход
                      </h1>
                      <a
                        href=""
                        className="btn btn-primary py-sm-3 px-sm-4"
                      >
                        Подробнее
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="carousel-item">
              <img
                className="w-100"
                src="img/carousel-1.jpg"
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <h1 className="display-1 text-white mb-5 animated slideInDown">
                        Уникальный дизайн
                      </h1>
                      <a
                        href=""
                        className="btn btn-primary py-sm-3 px-sm-4"
                      >
                        Подробнее
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="carousel-item">
              <img
                className="w-100"
                src="img/carousel-3.jpg"
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <h1 className="display-1 text-white mb-5 animated slideInDown">
                        Современные решения
                      </h1>
                      <a
                        href=""
                        className="btn btn-primary py-sm-3 px-sm-4"
                      >
                        Подробнее
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Предыдущее</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Следующее</span>
          </button>
        </div>
      </div>

      {/* Feature */}
      <div className="container-fluid top-feature py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div
              className="col-lg-4 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <div
                className="bg-white shadow d-flex align-items-center h-100 px-5"
                style={{ minHeight: '160px' }}
              >
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-dollar-sign text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Приятные цены</h4>
                    <span>Наши услуги доступны для каждого</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 wow fadeIn"
              data-wow-delay="0.3s"
            >
              <div
                className="bg-white shadow d-flex align-items-center h-100 px-5"
                style={{ minHeight: '160px' }}
              >
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-users text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Большой опыт</h4>
                    <span>Профессионалы с большим опытом работы</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div
                className="bg-white shadow d-flex align-items-center h-100 px-5"
                style={{ minHeight: '160px' }}
              >
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-file-signature text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Наличие договора</h4>
                    <span>Цена и условия обговорены в договоре</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <section className="container-xxl py-5" id="about">
        <div className="container">
          <div className="row g-5 align-items-end">
            <div
              className="col-lg-3 col-md-5 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <img
                className="img-fluid rounded"
                data-wow-delay="0.1s"
                src="img/about.jpg"
                alt=""
              />
            </div>
            <div
              className="col-lg-6 col-md-7 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <h1 className="display-1 text-primary mb-0">15</h1>
              <p className="text-primary mb-4">Лет на рынке</p>
              <h1 className="display-5 mb-4">
                Превратим участок в цветущий сад
              </h1>
              <p className="mb-4">
                Наша компания имеет богатый профессиональный опыт и
                может предложить широкий спектр услуг, которые
                охватывают все этапы работы - от ландшафтного дизайна
                и инженерных систем, до ухода за садом.
              </p>
              <a className="btn btn-primary py-3 px-4" href="">
                Подробнее
              </a>
            </div>
            <div
              className="col-lg-3 col-md-12 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="row g-5">
                <div className="col-12 col-sm-6 col-lg-12">
                  <div className="border-start ps-4">
                    <i className="fa-3x text-primary mb-3">
                      <FaThemeco />
                    </i>
                    <h4 className="mb-3">Только PRO</h4>
                    <span>
                      Наши работники отлично знают свое дело, вы
                      можете доверять нашему профессионализму!
                    </span>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-12">
                  <div className="border-start ps-4">
                    <i className="fa-3x text-primary mb-3">
                      <FaUniversalAccess />
                    </i>
                    <h4 className="mb-3">ЭКО friendly</h4>
                    <span>
                      Мы используем современные безопасные в плане
                      экологии материалы.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facts */}
      <div
        className="container-fluid facts my-5 py-5"
        data-parallax="scroll"
        data-image-src="img/carousel-1.jpg"
        id="progress"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div
              className="col-sm-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.1s"
            >
              <h1
                className="display-4 text-white"
                data-toggle="counter-up"
              >
                235
              </h1>
              <span className="fs-5 fw-semi-bold text-light">
                Счастливых клиентов
              </span>
            </div>
            <div
              className="col-sm-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.3s"
            >
              <h1
                className="display-4 text-white"
                data-toggle="counter-up"
              >
                281
              </h1>
              <span className="fs-5 fw-semi-bold text-light">
                Обустроеный участок
              </span>
            </div>
            <div
              className="col-sm-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.5s"
            >
              <h1
                className="display-4 text-white"
                data-toggle="counter-up"
              >
                6437
              </h1>
              <span className="fs-5 fw-semi-bold text-light">
                Высаженных растений
              </span>
            </div>
            <div
              className="col-sm-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.7s"
            >
              <h1
                className="display-4 text-white"
                data-toggle="counter-up"
              >
                384
              </h1>
              <span className="fs-5 fw-semi-bold text-light">
                Посаженных деревьев
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <p className="fs-5 fw-bold text-primary">
                Почему нам доверяют
              </p>
              <h1 className="display-5 mb-4">
                Несколько причин, почему стоит работать с нами
              </h1>
              <p className="mb-4">
                Наша компания стремится к тому, чтобы каждый клиент
                был полностью доволен нашими услугами. Мы работаем на
                результат и готовы сделать все возможное, чтобы
                обеспечить полное удовлетворение наших клиентов.
              </p>
              <a className="btn btn-primary py-3 px-4" href="">
                Подробнее
              </a>
            </div>
            <div className="col-lg-6">
              <div className="row g-4 align-items-center">
                <div className="col-md-6">
                  <div className="row g-4">
                    <div
                      className="col-12 wow fadeIn"
                      data-wow-delay="0.3s"
                    >
                      <div
                        className="text-center rounded py-5 px-4"
                        style={{
                          boxShadow: '0 0 45px rgba(0,0,0,.08)',
                        }}
                      >
                        <div
                          className="btn-square bg-light rounded-circle mx-auto mb-4"
                          style={{ width: '90px', height: '90px' }}
                        >
                          <i className="fa fa-check fa-3x text-primary"></i>
                        </div>
                        <h4 className="mb-0">Опыт и квалификация</h4>
                      </div>
                    </div>
                    <div
                      className="col-12 wow fadeIn"
                      data-wow-delay="0.5s"
                    >
                      <div
                        className="text-center rounded py-5 px-4"
                        style={{
                          boxShadow: '0 0 45px rgba(0,0,0,.08)',
                        }}
                      >
                        <div
                          className="btn-square bg-light rounded-circle mx-auto mb-4"
                          style={{ width: '90px', height: '90px' }}
                        >
                          <i className="fa fa-3x text-primary">
                            <FaShieldAlt />
                          </i>
                        </div>
                        <h4 className="mb-0">Длительная гарантия</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 wow fadeIn"
                  data-wow-delay="0.7s"
                >
                  <div
                    className="text-center rounded py-5 px-4"
                    style={{ boxShadow: '0 0 45px rgba(0,0,0,.08)' }}
                  >
                    <div
                      className="btn-square bg-light rounded-circle mx-auto mb-4"
                      style={{ width: '90px', height: '90px' }}
                    >
                      <i className="fa fa-tools fa-3x text-primary"></i>
                    </div>
                    <h4 className="mb-0">Современное оборудование</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service */}
      <div className="container-xxl py-5" id="services">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '500px' }}
          >
            <p className="fs-5 fw-bold text-primary">Наши услуги</p>
            <h1 className="display-5 mb-5">
              Доверьтесь профессионалам
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img
                    className="img-fluid"
                    src="img/service-1.jpg"
                    alt=""
                  />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img
                      className="img-fluid"
                      src="img/icon/icon-3.png"
                      alt="Icon"
                    />
                  </div>
                  <h4 className="mb-3">Ландшафт</h4>
                  <p className="mb-4">
                    Спланируем ландшафт вашего участка, с учетом
                    особенностей и потребностей
                  </p>
                  <a className="btn btn-sm" href="">
                    <i className="fa fa-plus text-primary me-2"></i>
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img
                    className="img-fluid"
                    src="img/service-2.jpg"
                    alt=""
                  />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img
                      className="img-fluid"
                      src="img/icon/icon-6.png"
                      alt="Icon"
                    />
                  </div>
                  <h4 className="mb-3">Уход</h4>
                  <p className="mb-4">
                    Выполним обрезку деревьев, стрижку газона,
                    обработку растений от вредителей
                  </p>
                  <a className="btn btn-sm" href="">
                    <i className="fa fa-plus text-primary me-2"></i>
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img
                    className="img-fluid"
                    src="img/service-3.jpg"
                    alt=""
                  />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img
                      className="img-fluid"
                      src="img/icon/icon-5.png"
                      alt="Icon"
                    />
                  </div>
                  <h4 className="mb-3">Полив</h4>
                  <p className="mb-4">
                    Спроектируем и выполним монтаж инженерных систем
                    для полива и ухода
                  </p>
                  <a className="btn btn-sm" href="">
                    <i className="fa fa-plus text-primary me-2"></i>
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img
                    className="img-fluid"
                    src="img/service-4.jpg"
                    alt=""
                  />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img
                      className="img-fluid"
                      src="img/icon/icon-4.png"
                      alt="Icon"
                    />
                  </div>
                  <h4 className="mb-3">Озеленение</h4>
                  <p className="mb-4">
                    Создадим проект озеленения, подберем и высадим
                    подходящие растения
                  </p>
                  <a className="btn btn-sm" href="">
                    <i className="fa fa-plus text-primary me-2"></i>
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img
                    className="img-fluid"
                    src="img/service-5.jpg"
                    alt=""
                  />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img
                      className="img-fluid"
                      src="img/icon/icon-8.png"
                      alt="Icon"
                    />
                  </div>
                  <h4 className="mb-3">Технологии</h4>
                  <p className="mb-4">
                    Установим современные системы управления климатом,
                    поливом и мониторинга
                  </p>
                  <a className="btn btn-sm" href="">
                    <i className="fa fa-plus text-primary me-2"></i>
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img
                    className="img-fluid"
                    src="img/service-6.jpg"
                    alt=""
                  />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img
                      className="img-fluid"
                      src="img/icon/icon-2.png"
                      alt="Icon"
                    />
                  </div>
                  <h4 className="mb-3">Материалы</h4>
                  <p className="mb-4">
                    Применим в вашем проекте экологически чистые и
                    безопасные материалы
                  </p>
                  <a className="btn btn-sm" href="">
                    <i className="fa fa-plus text-primary me-2"></i>
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div
        className="container-fluid quote my-5 py-5"
        data-parallax="scroll"
        data-image-src="img/carousel-2.jpg"
        id="quote"
      >
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div
                className="bg-white rounded p-4 p-sm-5 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <h1 className="display-5 text-center mb-5">
                  Отправить заявку
                </h1>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="gname"
                        placeholder="Ваше имя"
                      />
                      <label htmlFor="gname">Ваше имя</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        id="gmail"
                        placeholder="Ваш Email"
                      />
                      <label htmlFor="gmail">Ваш Email</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="cname"
                        placeholder="Телефон"
                      />
                      <label htmlFor="cname">Телефон</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="cage"
                        placeholder="Интересующая услуга"
                      />
                      <label htmlFor="cage">
                        Интересующая услуга
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control bg-light border-0"
                        placeholder="Текст сообщения"
                        id="message"
                        style={{ height: '100px' }}
                      ></textarea>
                      <label htmlFor="message">Текст сообщения</label>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      className="btn btn-primary py-3 px-4"
                      type="submit"
                    >
                      Отправить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '500px' }}
          >
            <p className="fs-5 fw-bold text-primary">
              Выполненные проекты
            </p>
            <h1 className="display-5 mb-5">
              Некоторые из наших проектов
            </h1>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-12 text-center">
              <ul
                className="list-inline rounded mb-5"
                id="portfolio-flters"
              >
                <li className="mx-2 active" data-filter="*">
                  Все
                </li>
                <li className="mx-2" data-filter=".first">
                  Завершенные
                </li>
                <li className="mx-2" data-filter=".second">
                  Текущие
                </li>
              </ul>
            </div>
          </div>
          <div className="row g-4 portfolio-container">
            <div
              className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="portfolio-inner rounded">
                <img
                  className="img-fluid"
                  src="img/project-1.jpg"
                  alt=""
                />
                <div className="portfolio-text">
                  <p className="text-white text-center fw-bold p-4">
                    Прекрасный цветочный сад для загородного дома
                  </p>
                  <div className="d-flex">
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href="img/project-1-big.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye"></i>
                    </a>
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href=""
                    >
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="portfolio-inner rounded">
                <img
                  className="img-fluid"
                  src="img/project-2.jpg"
                  alt=""
                />
                <div className="portfolio-text">
                  <p className="text-white text-center fw-bold p-4">
                    Парк с мощеными дорожками и редкими деревьями
                  </p>
                  <div className="d-flex">
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href="img/project-2-big.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye"></i>
                    </a>
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href=""
                    >
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="portfolio-inner rounded">
                <img
                  className="img-fluid"
                  src="img/project-3.jpg"
                  alt=""
                />
                <div className="portfolio-text">
                  <p className="text-white text-center fw-bold p-4">
                    Частный парк с дизайнерскими скульптурами
                  </p>
                  <div className="d-flex">
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href="img/project-3-big.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye"></i>
                    </a>
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href=""
                    >
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="portfolio-inner rounded">
                <img
                  className="img-fluid"
                  src="img/project-4.jpg"
                  alt=""
                />
                <div className="portfolio-text">
                  <p className="text-white text-center fw-bold p-4">
                    Великолепный цветочный сад с небольшим прудом
                  </p>
                  <div className="d-flex">
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href="img/project-4-big.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye"></i>
                    </a>
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href=""
                    >
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="portfolio-inner rounded">
                <img
                  className="img-fluid"
                  src="img/project-5.jpg"
                  alt=""
                />
                <div className="portfolio-text">
                  <p className="text-white text-center fw-bold p-4">
                    Уникальное сочетание цветов не оставляет
                    равнодушным
                  </p>
                  <div className="d-flex">
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href="img/project-5-big.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye"></i>
                    </a>
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href=""
                    >
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="portfolio-inner rounded">
                <img
                  className="img-fluid"
                  src="img/project-6.jpg"
                  alt=""
                />
                <div className="portfolio-text">
                  <p className="text-white text-center fw-bold p-4">
                    Продуманная парковая зона с превосходным газоном
                  </p>
                  <div className="d-flex">
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href="img/project-6-big.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye"></i>
                    </a>
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href=""
                    >
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '500px' }}
          >
            <p className="fs-5 fw-bold text-primary">Наша команда</p>
            <h1 className="display-5 mb-5">
              Профессионалы с богатым опытом
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item rounded">
                <img
                  className="img-fluid"
                  src="img/team-1.jpg"
                  alt=""
                />
                <div className="team-text">
                  <h4 className="mb-0">Алена Денисова</h4>
                  <p className="text-primary">Ландшафтный дизайнер</p>
                  <div className="team-social d-flex">
                    <a
                      className="btn btn-square rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item rounded">
                <img
                  className="img-fluid"
                  src="img/team-2.jpg"
                  alt=""
                />
                <div className="team-text">
                  <h4 className="mb-0">Роман Захаров</h4>
                  <p className="text-primary">Генеральный директор</p>
                  <div className="team-social d-flex">
                    <a
                      className="btn btn-square rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item rounded">
                <img
                  className="img-fluid"
                  src="img/team-3.jpg"
                  alt=""
                />
                <div className="team-text">
                  <h4 className="mb-0">Диана Кросс</h4>
                  <p className="text-primary">Дизайнер флорист</p>
                  <div className="team-social d-flex">
                    <a
                      className="btn btn-square rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-5 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <p className="fs-5 fw-bold text-primary">Отзывы</p>
              <h1 className="display-5 mb-5">
                Что говорят наши клиенты
              </h1>
              <p className="mb-4">
                За годы работы мы получили высокие оценки от сотен
                довольных клиентов. Мнение наших клиентов отражает
                уровень нашего профессионализма. Спасибо Вам за то,
                что выбрали нас, мы всегда стараемся оправдать
                оказанное доверие.
              </p>
              <a className="btn btn-primary py-3 px-4" href="">
                Подробнее
              </a>
            </div>
            <div
              className="col-lg-7 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="owl-carousel testimonial-carousel">
                <div className="testimonial-item">
                  <img
                    className="img-fluid rounded mb-3"
                    src="img/testimonial-1.jpg"
                    alt=""
                  />
                  <p className="fs-5">
                    Заказывал у GreenGard дизайн внутренненго двора, и
                    я очень доволен результатом! Дизайнеры студии
                    создали красивое и функциональное пространство,
                    которое соответствует моим потребностям и вкусу. Я
                    смело могу рекомендовать GreenGard!
                  </p>
                  <h4>Максим Демидов</h4>
                  <span>Бизнесмен</span>
                </div>
                <div className="testimonial-item">
                  <img
                    className="img-fluid rounded mb-3"
                    src="img/testimonial-2.jpg"
                    alt=""
                  />
                  <p className="fs-5">
                    Я была впечатлена работой студии GreenGard.
                    Дизайнеры проявили внимательность к моим желаниям
                    и создали прекрасное пространство для отдыха и
                    релаксации. Я рекомендую эту студию всем, кто ищет
                    профессиональные услуги по ландшафтному дизайну.
                  </p>
                  <h4>Анна Волевич</h4>
                  <span>Стюардесса</span>
                </div>
                <div className="testimonial-item">
                  <img
                    className="img-fluid rounded mb-3"
                    src="img/testimonial-3.jpg"
                    alt=""
                  />
                  <p className="fs-5">
                    Сотрудники GreenGard проявили профессионализм и
                    креативность в создании дизайна нашего парка. Мы
                    получили прекрасно оформленную зону отдыха для
                    семьи и гостей, где можно наслаждаться природой и
                    проводить время с удовольствием.
                  </p>
                  <h4>Артур Лебедев</h4>
                  <span>Ортодонт</span>
                </div>
                <div className="testimonial-item">
                  <img
                    className="img-fluid rounded mb-3"
                    src="img/testimonial-4.jpg"
                    alt=""
                  />
                  <p className="fs-5">
                    Мы заказали у GreenGard дизайн нашего сада, и мы
                    очень довольны результатом. Дизайнеры создали
                    пространство, которое превзошло все наши ожидания,
                    и мы наслаждаемся его красотой каждый день.
                  </p>
                  <h4>Татьяна Яковлева</h4>
                  <span>Модель</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
