import { ArrowRight, Check, Layers, LayoutDashboard, Workflow, FormInput, Link2, Sparkles } from 'lucide-react';

const buildItems = [
  ['Лендинги', 'Страницы под запуск и продажи.', Layers, 'statement'],
  ['Веб-приложения', 'Кабинеты и рабочие интерфейсы.', Sparkles, 'compact'],
  ['Автоматизация', 'Сценарии без ручной рутины.', Workflow, 'minimal'],
  ['Дашборды', 'Ключевые метрики в одном экране.', LayoutDashboard, 'statement'],
  ['Квизы и формы', 'Заявки без лишних шагов.', FormInput, 'compact'],
  ['Интеграции', 'CRM, таблицы и боты в одной логике.', Link2, 'minimal'],
];

const steps = [
  ['Аудит', 'Фиксируем узкие места и приоритеты.'],
  ['Дизайн-система', 'Собираем язык интерфейса под бренд.'],
  ['Продакшн', 'Запускаем сайт, продукт или поток автоматизации.'],
  ['Поддержка', 'Дорабатываем по данным и росту команды.'],
];

function ImageBlock({ src, alt, className = '' }) {
  return (
    <div className={`visual ${className}`.trim()}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

export default function App() {
  return (
    <main>
      <header className="header">
        <div className="logo">Поток</div>
        <nav>
          <a href="#solutions">Решения</a>
          <a href="#build">Возможности</a>
          <a href="#process">Процесс</a>
          <a href="#contact">Контакт</a>
        </nav>
        <a className="smallButton" href="#contact">Обсудить проект</a>
      </header>

      <section className="hero section">
        <div className="copy">
          <span className="eyebrow">Premium digital studio</span>
          <h1>Цифровые системы, которые ускоряют бизнес</h1>
          <p>Лендинги, интерфейсы и автоматизация — в едином стиле, без визуального шума и лишней сложности.</p>
          <p className="muted">Быстро запускаем и аккуратно масштабируем под ваши процессы.</p>
          <div className="actions">
            <a className="button primary" href="#contact">Обсудить проект <ArrowRight size={18} /></a>
            <a className="button secondary" href="#build">Посмотреть возможности</a>
          </div>
          <div className="features">
            {['Современный визуал', 'Быстрый запуск', 'Удобные интерфейсы', 'Решения под задачу'].map((item) => (
              <span key={item}><Check size={16} />{item}</span>
            ))}
          </div>
        </div>
        <ImageBlock src="/images/hero.png" alt="Современный рабочий интерфейс на ноутбуке" />
      </section>

      <section id="solutions" className="section splitStage">
        <div className="copy narrow">
          <p className="kicker">Там, где теряется скорость</p>
          <h2>Мы убираем хаос и собираем управляемый digital-контур.</h2>
          <div className="problemList">
            <p>Заявки расходятся по чатам.</p>
            <p>Данные живут в разных сервисах.</p>
            <p>Команда тратит время на повторяющиеся действия.</p>
          </div>
        </div>
        <ImageBlock className="tallVisual" src="/images/problems.png" alt="Переход от хаоса в процессах к понятной цифровой системе" />
      </section>

      <section className="statement section">
        <p>Less noise. More velocity.</p>
      </section>

      <section id="build" className="section buildSection">
        <div className="buildHead">
          <h2>Что мы собираем</h2>
          <p>От первого экрана до внутренних систем.</p>
        </div>
        <div className="grid mosaic">
          {buildItems.map(([title, text, Icon, type]) => (
            <article className={`card ${type}`} key={title}>
              <Icon size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="section process cinematic">
        <ImageBlock src="/images/process.png" alt="Визуал рабочего процесса от задачи до запуска" />
        <div className="steps uneven">
          {steps.map(([title, text], index) => (
            <article className="step" key={title}>
              <span>{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section final">
        <div className="copy">
          <h2>Готовы собрать систему, которая работает на рост.</h2>
          <p className="muted">Короткий созвон — и понятный план запуска.</p>
          <a className="button primary" href="#contact">Обсудить проект <ArrowRight size={18} /></a>
        </div>
        <ImageBlock src="/images/final.png" alt="Премиальный рабочий интерфейс для финального блока сайта" />
      </section>
    </main>
  );
}
