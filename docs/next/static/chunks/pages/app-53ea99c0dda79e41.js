(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    3837: function (e, a, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n(6951);
        },
      ]);
    },
    6951: function (e, a, n) {
      'use strict';
      n.r(a),
        n.d(a, {
          default: function () {
            return b;
          },
        });
      var t = n(5893),
        s = n(7294);
      let r = {
        phone: '+7 (903) 111-11-11',
        address: 'Новосибирск, улица Николаева 11, офис 32',
        map: 'https://yandex.ru/maps/-/CCUcjIHhsA',
        email: 'contact@green-gard.ru',
        youtube: 'GreenGard54',
        vk: 'public40719946',
        telegram: 'green_gard_54',
        instagram: 'green_gard_54',
      };
      function l(e) {
        return e.replace(/[ \-\(\)]/g, '');
      }
      var i = n(8802),
        c = n.n(i);
      function o() {
        return (0, t.jsx)('span', {
          className: c().logo,
          children: (0, t.jsxs)('svg', {
            stroke: 'currentColor',
            fill: 'none',
            strokeWidth: '2',
            viewBox: '0 0 24 24',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            height: '1em',
            width: '1em',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, t.jsx)('path', {
                stroke: 'none',
                d: 'M0 0h24v24H0z',
                fill: 'none',
              }),
              (0, t.jsx)('path', {
                d: 'M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3',
              }),
              (0, t.jsx)('path', {
                d: 'M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3',
              }),
              (0, t.jsx)('path', { d: 'M12 20l0 -10' }),
            ],
          }),
        });
      }
      var m = n(4023),
        d = n.n(m),
        h = n(9008),
        x = n.n(h);
      function p() {
        return (0, t.jsxs)(x(), {
          children: [
            (0, t.jsx)('meta', {
              content: 'width=device-width, initial-scale=1.0',
              name: 'viewport',
            }),
            (0, t.jsx)('link', {
              href: 'share/favicon.ico',
              rel: 'shortcut icon',
            }),
            (0, t.jsx)('link', {
              rel: 'apple-touch-icon',
              sizes: '180x180',
              href: 'share/apple-touch-icon.png',
            }),
            (0, t.jsx)('link', {
              rel: 'icon',
              type: 'image/png',
              sizes: '32x32',
              href: 'share/favicon-32x32.png',
            }),
            (0, t.jsx)('link', {
              rel: 'icon',
              type: 'image/png',
              sizes: '16x16',
              href: 'share/favicon-16x16.png',
            }),
            (0, t.jsx)('link', {
              rel: 'mask-icon',
              href: 'share/safari-pinned-tab.svg',
              color: '#0f4229',
            }),
            (0, t.jsx)('link', {
              rel: 'manifest',
              href: 'share/manifest.json',
            }),
            (0, t.jsx)('meta', {
              property: 'og:locale',
              content: 'ru-RU',
            }),
            (0, t.jsx)('meta', {
              property: 'og:type',
              content: 'website',
            }),
            (0, t.jsx)('meta', {
              property: 'og:url',
              content: 'https://smtexx.github.io/green-gard',
            }),
            (0, t.jsx)('meta', {
              property: 'og:title',
              content: 'GreenGard - Превратим Ваш участок в оазис!',
            }),
            (0, t.jsx)('meta', {
              property: 'og:description',
              content:
                'GreenGard - ландшафтный дизайн и озеленение территории. Профессиональные услуги по созданию уникального дизайна сада вашей мечты. Установка систем полива, устройство водоемов и многое другое. Качественные материалы и индивидуальный подход к каждому проекту.',
            }),
            (0, t.jsx)('meta', {
              property: 'og:image',
              content:
                'https://smtexx.github.io/green-gard/share/ogg-image-wide.jpg',
            }),
            (0, t.jsx)('meta', {
              property: 'og:image:width',
              content: '1200',
            }),
            (0, t.jsx)('meta', {
              property: 'og:image:height',
              content: '630',
            }),
            (0, t.jsx)('meta', {
              name: 'twitter:card',
              content: 'summary_large_image',
            }),
            (0, t.jsx)('meta', {
              name: 'description',
              content:
                'GreenGard - ландшафтный дизайн и озеленение территории. Профессиональные услуги по созданию уникального дизайна сада вашей мечты. Установка систем полива, устройство водоемов и многое другое. Качественные материалы и индивидуальный подход к каждому проекту.',
            }),
          ],
        });
      }
      function g(e) {
        let { children: a } = e;
        return (
          (0, s.useEffect)(() => {
            function e() {
              document
                .getElementById('spinner')
                .classList.remove('show');
            }
            let a = document.readyState;
            'complete' === a
              ? e()
              : window.addEventListener('load', e, { once: !0 });
          }, [a]),
          (0, s.useEffect)(() => {
            let e = document.getElementById('navbarCollapse'),
              a = document.getElementById('showMenuButton');
            function n(e) {
              e.target.matches('a:not([href="#"])') &&
                window.matchMedia('(max-width: '.concat(991, 'px)'))
                  .matches &&
                a.click();
            }
            if (e && a)
              return (
                e.addEventListener('click', n),
                () => e.removeEventListener('click', n)
              );
          }, []),
          (0, s.useEffect)(() => {
            document.getElementById('current-year').textContent =
              new Date().getFullYear();
          }, [a]),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(p, {}),
              (0, t.jsx)('div', {
                id: 'spinner',
                className:
                  'show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center',
                children: (0, t.jsx)('div', {
                  className: 'spinner-border text-primary',
                  role: 'status',
                  style: { width: '3rem', height: '3rem' },
                }),
              }),
              (0, t.jsx)('div', {
                className:
                  'container-fluid bg-dark text-light px-0 py-2',
                children: (0, t.jsxs)('div', {
                  className: 'row gx-0 d-none d-lg-flex',
                  children: [
                    (0, t.jsxs)('div', {
                      className: 'col-lg-7 px-5 text-start',
                      children: [
                        (0, t.jsx)('div', {
                          className:
                            'h-100 d-inline-flex align-items-center me-4',
                          children: (0, t.jsxs)('a', {
                            className: d().contactLink,
                            href: 'tel:'.concat(l(r.phone)),
                            children: [
                              (0, t.jsx)('span', {
                                className: 'fa fa-phone-alt me-2',
                              }),
                              r.phone,
                            ],
                          }),
                        }),
                        (0, t.jsx)('div', {
                          className:
                            'h-100 d-inline-flex align-items-center',
                          children: (0, t.jsxs)('a', {
                            className: d().contactLink,
                            href: 'mailto:'.concat(r.email),
                            children: [
                              (0, t.jsx)('span', {
                                className: 'far fa-envelope me-2',
                              }),
                              (0, t.jsx)('span', {
                                children: r.email,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsx)('div', {
                      className: 'col-lg-5 px-5 text-end',
                      children: (0, t.jsxs)('div', {
                        className:
                          'h-100 d-inline-flex align-items-center mx-n2',
                        children: [
                          (0, t.jsx)('span', {
                            style: { marginRight: '1rem' },
                            children: 'Мы в соцсетях:',
                          }),
                          (0, t.jsx)('a', {
                            className: 'btn btn-link text-light',
                            href: 'https://www.youtube.com/c/'.concat(
                              r.youtube
                            ),
                            'aria-label': 'youtube',
                            rel: 'noopener noreferrer',
                            target: '_blank',
                            children: (0, t.jsx)('i', {
                              className: 'fab fa-youtube',
                            }),
                          }),
                          (0, t.jsx)('a', {
                            className: 'btn btn-link text-light',
                            href: 'https://vk.com/'.concat(r.vk),
                            'aria-label': 'в контакте',
                            rel: 'noopener noreferrer',
                            target: '_blank',
                            children: (0, t.jsx)('i', {
                              className: 'fab fa-vk',
                            }),
                          }),
                          (0, t.jsx)('a', {
                            className: 'btn btn-link text-light',
                            href: 'https://t.me/'.concat(r.telegram),
                            'aria-label': 'telegram',
                            rel: 'noopener noreferrer',
                            target: '_blank',
                            children: (0, t.jsx)('i', {
                              className: 'fab fa-telegram',
                            }),
                          }),
                          (0, t.jsx)('a', {
                            className: 'btn btn-link text-light',
                            href: 'https://www.instagram.com/'.concat(
                              r.instagram
                            ),
                            'aria-label': 'instagram',
                            rel: 'noopener noreferrer',
                            target: '_blank',
                            children: (0, t.jsx)('i', {
                              className: 'fab fa-instagram',
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, t.jsxs)('nav', {
                className:
                  'navbar navbar-expand-lg bg-white navbar-light sticky-top p-0',
                children: [
                  (0, t.jsx)('a', {
                    href: 'index.html',
                    className:
                      'navbar-brand d-flex align-items-center px-4 px-lg-5',
                    children: (0, t.jsxs)('h1', {
                      className: 'm-0',
                      children: [
                        (0, t.jsx)(o, {}),
                        (0, t.jsx)('span', { children: 'GreenGard' }),
                      ],
                    }),
                  }),
                  (0, t.jsx)('button', {
                    type: 'button',
                    className: 'navbar-toggler me-4',
                    id: 'showMenuButton',
                    'data-bs-toggle': 'collapse',
                    'data-bs-target': '#navbarCollapse',
                    children: (0, t.jsx)('span', {
                      className: 'navbar-toggler-icon',
                    }),
                  }),
                  (0, t.jsxs)('div', {
                    className: 'collapse navbar-collapse',
                    id: 'navbarCollapse',
                    children: [
                      (0, t.jsxs)('div', {
                        className: 'navbar-nav ms-auto p-4 p-lg-0',
                        children: [
                          (0, t.jsx)('a', {
                            href: 'index.html',
                            className: 'nav-item nav-link active',
                            children: 'Главная',
                          }),
                          (0, t.jsx)('a', {
                            href: 'index.html#services',
                            className: 'nav-item nav-link',
                            children: 'Услуги',
                          }),
                          (0, t.jsxs)('div', {
                            className: 'nav-item dropdown',
                            children: [
                              (0, t.jsx)('a', {
                                href: '#',
                                className: 'nav-link dropdown-toggle',
                                'data-bs-toggle': 'dropdown',
                                children: 'О нас',
                              }),
                              (0, t.jsxs)('div', {
                                className:
                                  'dropdown-menu bg-light m-0',
                                children: [
                                  (0, t.jsx)('a', {
                                    href: 'index.html#about',
                                    className: 'dropdown-item',
                                    children: 'Кто мы?',
                                  }),
                                  (0, t.jsx)('a', {
                                    href: 'index.html#progress',
                                    className: 'dropdown-item',
                                    children: 'Достижения',
                                  }),
                                  (0, t.jsx)('a', {
                                    href: 'index.html#advantages',
                                    className: 'dropdown-item',
                                    children: 'Преимущества',
                                  }),
                                  (0, t.jsx)('a', {
                                    href: 'index.html#projects',
                                    className: 'dropdown-item',
                                    children: 'Проекты',
                                  }),
                                  (0, t.jsx)('a', {
                                    href: 'index.html#team',
                                    className: 'dropdown-item',
                                    children: 'Команда',
                                  }),
                                  (0, t.jsx)('a', {
                                    href: 'index.html#testimonials',
                                    className: 'dropdown-item',
                                    children: 'Отзывы',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsx)('a', {
                            href: 'contacts.html',
                            className: 'nav-item nav-link',
                            children: 'Контакты',
                          }),
                        ],
                      }),
                      (0, t.jsxs)('a', {
                        href: 'index.html#quote',
                        className:
                          'btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block',
                        children: [
                          'Заявка',
                          (0, t.jsx)('i', {
                            className: 'fa fa-arrow-right ms-3',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)('main', { children: a }),
              (0, t.jsx)('div', {
                className:
                  'container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn',
                'data-wow-delay': '0.1s',
                children: (0, t.jsx)('div', {
                  className: 'container py-5',
                  children: (0, t.jsxs)('div', {
                    className: 'row g-5',
                    children: [
                      (0, t.jsxs)('div', {
                        className: 'col-lg-3 col-md-6',
                        children: [
                          (0, t.jsx)('h4', {
                            className: 'text-white mb-4',
                            children: 'Наш офис',
                          }),
                          (0, t.jsx)('p', {
                            className: 'mb-2',
                            children: (0, t.jsxs)('a', {
                              className: d().contactLink,
                              href: r.map,
                              target: '_blank',
                              rel: 'noopener noreferrer',
                              children: [
                                (0, t.jsx)('i', {
                                  className:
                                    'fa fa-map-marker-alt me-3',
                                }),
                                r.address,
                              ],
                            }),
                          }),
                          (0, t.jsx)('p', {
                            className: 'mb-2',
                            children: (0, t.jsxs)('a', {
                              className: d().contactLink,
                              href: 'tel:'.concat(l(r.phone)),
                              target: '_blank',
                              rel: 'noopener noreferrer',
                              children: [
                                (0, t.jsx)('i', {
                                  className: 'fa fa-phone-alt me-3',
                                }),
                                r.phone,
                              ],
                            }),
                          }),
                          (0, t.jsx)('p', {
                            className: 'mb-2',
                            children: (0, t.jsxs)('a', {
                              className: d().contactLink,
                              href: 'mailto:'.concat(l(r.email)),
                              target: '_blank',
                              rel: 'noopener noreferrer',
                              children: [
                                (0, t.jsx)('i', {
                                  className: 'fa fa-envelope me-3',
                                }),
                                r.email,
                              ],
                            }),
                          }),
                          (0, t.jsxs)('div', {
                            className: 'd-flex pt-2',
                            children: [
                              (0, t.jsx)('a', {
                                className:
                                  'btn btn-square btn-outline-light rounded-circle me-2',
                                href: 'https://www.youtube.com/c/'.concat(
                                  r.youtube
                                ),
                                'aria-label': 'youtube',
                                rel: 'noopener noreferrer',
                                target: '_blank',
                                children: (0, t.jsx)('i', {
                                  className: 'fab fa-youtube',
                                }),
                              }),
                              (0, t.jsx)('a', {
                                className:
                                  'btn btn-square btn-outline-light rounded-circle me-2',
                                href: 'https://vk.com/'.concat(r.vk),
                                'aria-label': 'в контакте',
                                rel: 'noopener noreferrer',
                                target: '_blank',
                                children: (0, t.jsx)('i', {
                                  className: 'fab fa-vk',
                                }),
                              }),
                              (0, t.jsx)('a', {
                                className:
                                  'btn btn-square btn-outline-light rounded-circle me-2',
                                href: 'https://t.me/'.concat(
                                  r.telegram
                                ),
                                'aria-label': 'telegram',
                                rel: 'noopener noreferrer',
                                target: '_blank',
                                children: (0, t.jsx)('i', {
                                  className: 'fab fa-telegram',
                                }),
                              }),
                              (0, t.jsx)('a', {
                                className:
                                  'btn btn-square btn-outline-light rounded-circle me-2',
                                href: 'https://www.instagram.com/'.concat(
                                  r.instagram
                                ),
                                'aria-label': 'instagram',
                                rel: 'noopener noreferrer',
                                target: '_blank',
                                children: (0, t.jsx)('i', {
                                  className: 'fab fa-instagram',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)('div', {
                        className: 'col-lg-3 col-md-6',
                        children: [
                          (0, t.jsx)('h4', {
                            className: 'text-white mb-4',
                            children: 'Услуги',
                          }),
                          (0, t.jsx)('a', {
                            className: 'btn btn-link',
                            href: '',
                            children: 'Ландшафт',
                          }),
                          (0, t.jsx)('a', {
                            className: 'btn btn-link',
                            href: '',
                            children: 'Дизайн',
                          }),
                          (0, t.jsx)('a', {
                            className: 'btn btn-link',
                            href: '',
                            children: 'Озеленение',
                          }),
                          (0, t.jsx)('a', {
                            className: 'btn btn-link',
                            href: '',
                            children: 'Инженерные системы',
                          }),
                          (0, t.jsx)('a', {
                            className: 'btn btn-link',
                            href: '',
                            children: 'Обслуживание',
                          }),
                        ],
                      }),
                      (0, t.jsxs)('div', {
                        className: 'col-lg-3 col-md-6',
                        children: [
                          (0, t.jsx)('h4', {
                            className: 'text-white mb-4',
                            children: 'Ссылки',
                          }),
                          (0, t.jsx)('a', {
                            className: 'btn btn-link',
                            href: 'index.html#about',
                            children: 'О нас',
                          }),
                          (0, t.jsx)('a', {
                            className: 'btn btn-link',
                            href: 'index.html#projects',
                            children: 'Проекты',
                          }),
                          (0, t.jsx)('a', {
                            className: 'btn btn-link',
                            href: 'index.html#advantages',
                            children: 'Преимущества',
                          }),
                          (0, t.jsx)('a', {
                            className: 'btn btn-link',
                            href: 'index.html#',
                            children: 'Договор',
                          }),
                          (0, t.jsx)('a', {
                            className: 'btn btn-link',
                            href: 'index.html#',
                            children: 'Поддержка',
                          }),
                        ],
                      }),
                      (0, t.jsxs)('div', {
                        className: 'col-lg-3 col-md-6',
                        children: [
                          (0, t.jsx)('h4', {
                            className: 'text-white mb-4',
                            children: 'Рассылка',
                          }),
                          (0, t.jsx)('p', {
                            children:
                              'Подпишись, чтобы получать наши акции и предложения!',
                          }),
                          (0, t.jsxs)('div', {
                            className: 'position-relative w-100',
                            children: [
                              (0, t.jsx)('input', {
                                className:
                                  'form-control bg-light border-light w-100 py-3 ps-4 pe-5',
                                type: 'text',
                                placeholder: 'Ваш email',
                              }),
                              (0, t.jsx)('button', {
                                type: 'button',
                                className:
                                  'btn btn-primary py-2  mt-3 me-2',
                                children: 'Подписаться',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, t.jsx)('div', {
                className: 'container-fluid copyright py-4',
                children: (0, t.jsx)('div', {
                  className: 'container',
                  children: (0, t.jsxs)('div', {
                    className: 'row',
                    children: [
                      (0, t.jsxs)('div', {
                        className:
                          'col-md-6 text-center text-md-start mb-3 mb-md-0',
                        children: [
                          '\xa9 ',
                          (0, t.jsx)('span', { id: 'current-year' }),
                          ' ',
                          (0, t.jsx)('a', {
                            className: 'border-bottom',
                            href: '#',
                            children: 'GreenGard',
                          }),
                          ', Все права защищены.',
                        ],
                      }),
                      (0, t.jsxs)('div', {
                        className: 'col-md-6 text-center text-md-end',
                        children: [
                          'Made By',
                          ' ',
                          (0, t.jsx)('a', {
                            className: 'border-bottom',
                            href: 'mailto:'.concat(r.email),
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            children: 'SMTEXX',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, t.jsx)('a', {
                href: '#',
                className:
                  'btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top',
                'aria-label': 'наверх',
                children: (0, t.jsx)('i', {
                  className: 'bi bi-arrow-up',
                }),
              }),
            ],
          })
        );
      }
      n(3814);
      var b = function (e) {
        let { Component: a, pageProps: n } = e;
        return (0, t.jsx)(g, { children: (0, t.jsx)(a, { ...n }) });
      };
    },
    3814: function () {},
    4023: function (e) {
      e.exports = { contactLink: 'Layout_contactLink__zwLZZ' };
    },
    8802: function (e) {
      e.exports = { logo: 'Logo_logo__0605V' };
    },
    9008: function (e, a, n) {
      e.exports = n(2636);
    },
  },
  function (e) {
    var a = function (a) {
      return e((e.s = a));
    };
    e.O(0, [774, 179], function () {
      return a(3837), a(6885);
    }),
      (_N_E = e.O());
  },
]);
