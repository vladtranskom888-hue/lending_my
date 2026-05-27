import { useState } from 'react';
import { ArrowRight, Check, Layers, LayoutDashboard, Workflow, FormInput, Link2, Sparkles } from 'lucide-react';

const buildItems = [
  ['Лендинги', 'Современные страницы для услуг, продуктов и рекламы.', Layers],
  ['Веб-приложения', 'Интерфейсы для клиентов, заявок и внутренних задач.', Sparkles],
  ['Автоматизация', 'Сценарии, которые убирают повторяющиеся действия.', Workflow],
  ['Дашборды', 'Панели с аналитикой, статусами и ключевыми показателями.', LayoutDashboard],
  ['Квизы и формы', 'Удобные сценарии для заявок и взаимодействия с клиентами.', FormInput],
  ['Интеграции', 'Связка сервисов и процессов в единую систему.', Link2],
];

const steps = [
  ['Разбираем задачу', 'Смотрим, как сейчас устроены процессы и что можно упростить.'],
  ['Проектируем', 'Продумываем структуру, сценарии и интерфейсы.'],
  ['Собираем', 'Создаём сайт, приложение или систему под задачи проекта.'],
  ['Запускаем', 'Тестируем, подключаем и подготавливаем всё к работе.'],
];

function ImageBlock({ src, alt }) {
  return (
    <div className="visual">
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}


export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = ({ target }) => {
    setFormData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          contact: formData.contact,
          message: formData.message,
          page: window.location.href,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData?.error || 'Unknown API error';
        console.error('Lead submit API error:', errorMessage);
        throw new Error(errorMessage);
      }

      setFormData({ name: '', contact: '', message: '' });
      setStatus({ type: 'success', message: 'Заявка отправлена. Скоро свяжемся.' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Не удалось отправить заявку. Попробуйте позже.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section className="hero section">
        <div className="copy">
          <h1>Цифровые системы для роста бизнеса</h1>
          <p>Лендинги, интерфейсы и автоматизация — в единой системе, без лишней сложности.</p>
          <p className="muted">Запускаем быстро, масштабируем под ваши процессы.</p>
          <div className="actions">
            <a className="button primary" href="#contact">Отправить заявку <ArrowRight size={18} /></a>
          </div>
          <div className="features">
            {['Современный визуал', 'Быстрый запуск', 'Удобные интерфейсы', 'Решения под задачу'].map((item) => (
              <span key={item}><Check size={16} />{item}</span>
            ))}
          </div>
        </div>
        <ImageBlock src="/images/hero.png" alt="Современный рабочий интерфейс на ноутбуке" />
      </section>

      <section id="solutions" className="section twoCols">
        <ImageBlock src="/images/problems.png" alt="Переход от хаоса в процессах к понятной цифровой системе" />
        <div className="copy">
          <div className="problemList">
            <p>Заявки остаются в чатах и личных сообщениях.</p>
            <p>Информация хранится в разных сервисах,<br />и на поиск нужных данных уходит слишком много времени.</p>
            <p>Повторяющиеся действия постепенно занимают большую часть дня.</p>
            <p>А интерфейсы перестают справляться с тем,<br />как команда работает сейчас.</p>
          </div>
          <p className="taxonomy">Лендинги · Формы и квизы · Мини-приложения · Панели управления · Автоматизация процессов</p>
          <p className="muted">Всё собирается в одну систему —<br />понятную, аккуратную и удобную в ежедневной работе.</p>
        </div>
      </section>

      <section id="build" className="section">
        <div className="grid">
          {buildItems.map(([title, text, Icon]) => (
            <article className="card" key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <ImageBlock src="/images/build.png" alt="Набор цифровых решений и интерфейсов для бизнеса" />
      </section>

      <section id="product" className="section twoCols productSection">
        <div className="copy productCopy">
          <h2>Система для быстрых решений.</h2>
          <p>
            Чёткая структура, короткие сценарии и понятные статусы.
          </p>
          <p>
            Рабочие процессы остаются собранными, даже когда задач становится больше.
          </p>
          <p className="muted">
            По мере роста задач, процессы остаются понятными и удобными в ежедневной работе.
          </p>
        </div>
        <div className="productVisualWrap">
          <ImageBlock src="/images/product.png" alt="Современные интерфейсы, дашборды и мобильные экраны" />
        </div>
      </section>

      <section id="process" className="section process">
        <ImageBlock src="/images/process.png" alt="Визуал рабочего процесса от задачи до запуска" />
        <div className="steps">
          {steps.map(([title, text], index) => (
            <article className="step" key={title}>
              <span>{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section final contactSection">
        <div className="copy contactCopy">
          <h2>Бизнесу нужен не ещё один сайт. Нужна система.</h2>
          <p>Соберём лендинг, приложение или автоматизацию под вашу задачу — с понятной логикой, чистым интерфейсом и рабочей формой заявки.</p>
          <p className="muted">Коротко опишите задачу, и мы предложим первый понятный шаг.</p>
        </div>
        <form className="contactForm" onSubmit={handleSubmit}>
          <label>
            Имя
            <input name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Контакт для связи
            <input name="contact" value={formData.contact} onChange={handleChange} required />
          </label>
          <label>
            Краткое описание задачи
            <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} />
          </label>
          <button className="button primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
          </button>
          {status.message && <p className={`submitMessage ${status.type}`}>{status.message}</p>}
          <p className="directContacts" aria-label="Прямые контакты">
            <a href="https://t.me/Vladkolikov" target="_blank" rel="noreferrer">Telegram</a>
            <span aria-hidden="true">·</span>
            <a href="https://wa.me/79147301976" target="_blank" rel="noreferrer">WhatsApp</a>
            <span aria-hidden="true">·</span>
            <a href="tel:+79147301976">MAX</a>
            <span aria-hidden="true">·</span>
            <a href="mailto:vlsdtranskom888@gmail.com">Email</a>
          </p>
        </form>
      </section>
    </main>
  );
}
