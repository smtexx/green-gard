import { useEffect } from 'react';
import { contacts } from '../../data/contacts';
import { preparePhone } from '../../helpers/helpers';
import Logo from '../Logo/Logo';
import s from './Layout.module.css';
import { useBSNavBar, useSpinner } from '../../helpers/hooks';
import MetaTags from '../MetaTags/MetaTags';

export default function Layout({ children }) {
  useSpinner('spinner', [children]);
  useBSNavBar(
    'navbarCollapse',
    'showMenuButton',
    'a:not([href="#"])',
    991
  );

  useEffect(() => {
    document.getElementById('current-year').textContent =
      new Date().getFullYear();
  }, [children]);

  return (
    <>
      {/* Icons etc. */}
      <MetaTags />
      {/* Spinner */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          role="status"
          style={{ width: '3rem', height: '3rem' }}
        ></div>
      </div>
      {/* Topbar */}
      <div className="container-fluid bg-dark text-light px-0 py-2">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <a
                className={s.contactLink}
                href={`tel:${preparePhone(contacts.phone)}`}
              >
                <span className="fa fa-phone-alt me-2"></span>
                {contacts.phone}
              </a>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <a
                className={s.contactLink}
                href={`mailto:${contacts.email}`}
              >
                <span className="far fa-envelope me-2"></span>
                <span>{contacts.email}</span>
              </a>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center mx-n2">
              <span style={{ marginRight: '1rem' }}>
                Мы в соцсетях:
              </span>
              <a
                className="btn btn-link text-light"
                href={`https://www.youtube.com/c/${contacts.youtube}`}
                aria-label="youtube"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                className="btn btn-link text-light"
                href={`https://vk.com/${contacts.vk}`}
                aria-label="в контакте"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-vk"></i>
              </a>
              <a
                className="btn btn-link text-light"
                href={`https://t.me/${contacts.telegram}`}
                aria-label="telegram"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-telegram"></i>
              </a>
              <a
                className="btn btn-link text-light"
                href={`https://www.instagram.com/${contacts.instagram}`}
                aria-label="instagram"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a
          href="index.html"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h1 className="m-0">
            <Logo />
            <span>GreenGard</span>
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          id="showMenuButton"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="index.html" className="nav-item nav-link active">
              Главная
            </a>
            <a
              href="index.html#services"
              className="nav-item nav-link"
            >
              Услуги
            </a>

            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                О нас
              </a>
              <div className="dropdown-menu bg-light m-0">
                <a href="index.html#about" className="dropdown-item">
                  Кто мы?
                </a>
                <a
                  href="index.html#progress"
                  className="dropdown-item"
                >
                  Достижения
                </a>
                <a
                  href="index.html#advantages"
                  className="dropdown-item"
                >
                  Преимущества
                </a>
                <a
                  href="index.html#projects"
                  className="dropdown-item"
                >
                  Проекты
                </a>
                <a href="index.html#team" className="dropdown-item">
                  Команда
                </a>
                <a
                  href="index.html#testimonials"
                  className="dropdown-item"
                >
                  Отзывы
                </a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">
              Контакты
            </a>
          </div>
          <a
            href="index.html#quote"
            className="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block"
          >
            Заявка
            <i className="fa fa-arrow-right ms-3"></i>
          </a>
        </div>
      </nav>
      <main>{children}</main>
      {/* Footer */}
      <div
        className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Наш офис</h4>
              <p className="mb-2">
                <a
                  className={s.contactLink}
                  href={contacts.map}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-map-marker-alt me-3"></i>
                  {contacts.address}
                </a>
              </p>
              <p className="mb-2">
                <a
                  className={s.contactLink}
                  href={`tel:${preparePhone(contacts.phone)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-phone-alt me-3"></i>
                  {contacts.phone}
                </a>
              </p>
              <p className="mb-2">
                <a
                  className={s.contactLink}
                  href={`mailto:${preparePhone(contacts.email)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-envelope me-3"></i>
                  {contacts.email}
                </a>
              </p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-2"
                  href={`https://www.youtube.com/c/${contacts.youtube}`}
                  aria-label="youtube"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-2"
                  href={`https://vk.com/${contacts.vk}`}
                  aria-label="в контакте"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-vk"></i>
                </a>
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-2"
                  href={`https://t.me/${contacts.telegram}`}
                  aria-label="telegram"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-telegram"></i>
                </a>
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-2"
                  href={`https://www.instagram.com/${contacts.instagram}`}
                  aria-label="instagram"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Услуги</h4>
              <a className="btn btn-link" href="">
                Ландшафт
              </a>
              <a className="btn btn-link" href="">
                Дизайн
              </a>
              <a className="btn btn-link" href="">
                Озеленение
              </a>
              <a className="btn btn-link" href="">
                Инженерные системы
              </a>
              <a className="btn btn-link" href="">
                Обслуживание
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Ссылки</h4>
              <a className="btn btn-link" href="index.html#about">
                О нас
              </a>
              <a className="btn btn-link" href="index.html#projects">
                Проекты
              </a>
              <a
                className="btn btn-link"
                href="index.html#advantages"
              >
                Преимущества
              </a>
              <a className="btn btn-link" href="index.html#">
                Договор
              </a>
              <a className="btn btn-link" href="index.html#">
                Поддержка
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Рассылка</h4>
              <p>
                Подпишись, чтобы получать наши акции и предложения!
              </p>
              <div className="position-relative w-100">
                <input
                  className="form-control bg-light border-light w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Ваш email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2  mt-3 me-2"
                >
                  Подписаться
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <span id="current-year"></span>{' '}
              <a className="border-bottom" href="#">
                GreenGard
              </a>
              , Все права защищены.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By{' '}
              <a
                className="border-bottom"
                href="https://htmlcodex.com"
              >
                HTML Codex
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* To top button */}
      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
        aria-label="наверх"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
}
