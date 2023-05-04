import PageTitle from '../components/PageTitle/PageTitle';

export default function Contacts() {
  return (
    <>
      <PageTitle title="GreenGard | Контакты" />
      {/* Header */}
      <section
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-start py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown">
            Контакты
          </h1>
          <p className="text-white" style={{ maxWidth: '450px' }}>
            Вы можете связаться с нами удобным для вас способом, или
            отправить сообщение используя форму обратной связи ниже.
            Будем рады ответить на любые вопросы.
          </p>
        </div>
      </section>

      {/* Contacts */}
      <section className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <p className="fs-5 fw-bold text-primary">
                Написать нам
              </p>
              <h1 className="display-5 mb-5">
                Сад вашей мечты начинается здесь
              </h1>
              <p className="mb-4">
                Заполните поля формы и мы обязательно свяжемся с вами.
                Пожалуйста, укажите в сообщении email для обратной
                связи и тему сообщения, так нам будет проще обработать
                вашу заявку.
              </p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Ваше имя"
                      />
                      <label for="name">Ваше имя</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Ваш Email"
                      />
                      <label for="email">Ваш Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Тема сообщения"
                      />
                      <label for="subject">Тема сообщения</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Текст сообщения"
                        id="message"
                        style={{ height: '100px' }}
                      ></textarea>
                      <label for="message">Текст сообщения</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary py-3 px-4"
                      type="submit"
                    >
                      Отправить
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ minHeight: '450px' }}
            >
              <div className="position-relative rounded overflow-hidden h-100">
                <iframe
                  className="position-relative w-100 h-100"
                  style={{ minHeight: '450px', border: '0' }}
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3Adedf0b0e0e070f8bd01206402ec41b490c74311c64e35acb9115cc2652c989c6&amp;source=constructor"
                  frameBorder="0"
                  allowFullscreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
