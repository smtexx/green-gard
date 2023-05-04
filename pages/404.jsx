/* eslint-disable @next/next/no-html-link-for-pages */

import PageTitle from '../components/PageTitle/PageTitle';

/* eslint-disable @next/next/no-img-element */
export default function Custom404() {
  return (
    <>
      <PageTitle title="GreenGard | 404 - не найдено" />
      {/* Header */}
      <section
        class="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container text-start py-5">
          <h1 class="display-3 text-white mb-4 animated slideInDown">
            404 <br /> Страница не найдена
          </h1>
          <p
            className="text-white animated slideInUp"
            style={{ maxWidth: '450px' }}
          >
            Вы перешли по адресу, которому не соответствует ни одна
            страница нашего сайта...
          </p>
        </div>
      </section>

      {/* 404 */}
      <section
        class="container-xxl py-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div class="container text-center">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <i class="bi bi-exclamation-triangle display-1 text-primary"></i>
              <h1 class="display-1">404</h1>
              <h1 class="mb-4">Страница не найдена</h1>
              <p class="mb-4">
                Нам жаль, но запрашиваемая страница отсутствует на
                сервере. Перейдите на главную страницу или
                воспользуйтесь формой поиска.
              </p>
              <a class="btn btn-primary py-3 px-4" href="index.html">
                Вернуться на главную страницу
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
