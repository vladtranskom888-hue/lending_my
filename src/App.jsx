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
  return <div className="visual"><img src={src} alt={alt} /></div>;
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
          <a href="#contact">Контакты</a>
        </nav>
        <a className="smallButton" href="#contact">Обсудить проект</a>
      </header>

      <section className="hero section">
        <div className="copy">
          <div className="badge">Лендинги · приложения · автоматизация</div>
          <h1>Лендинги, приложения и автоматизация для бизнеса, которому важно выглядеть современно</h1>
          <p>Чистые интерфейсы, понятные сценарии и цифровые решения, которые помогают быстрее работать с заявками, клиентами и внутренними процессами.</p>
          <p className="muted">Без перегруженных систем, сложных интерфейсов и ощущения «старого сайта».</p>
          <div className="actions">
            <a className="button primary" href="#contact">Обсудить проект <ArrowRight size={18} /></a>
            <a className="button secondary" href="#build">Посмотреть возможности</a>
          </div>
          <div className="features">
            {['Современный визуал', 'Быстрый запуск', 'Удобные интерфейсы', 'Решения под задачу'].map((item) => <span key={item}><Check size={16} />{item}</span>)}
          </div>
        </div>
        <ImageBlock src="/images/hero.jpg" alt="Современный рабочий интерфейс на ноутбуке" />
      </section>

      <section id="solutions" className="section twoCols">
        <ImageBlock src="/images/problems.jpg" alt="Переход от хаоса в процессах к понятной цифровой системе" />
        <div className="copy">
          <h2>Заявки, таблицы и переписки не должны мешать работе</h2>
          <div className="problemList">
            <p>Заявки теряются между сообщениями.</p>
            <p>Информация хранится в разных сервисах.</p>
            <p>Рутинные действия начинают занимать слишком много времени.</p>
            <p>А интерфейсы выглядят так, будто их давно пора обновить.</p>
          </div>
          <h3>Что делаем</h3>
          <div className="chips">
            {['Лендинги', 'Формы и квизы', 'Мини-приложения', 'Панели управления', 'Автоматизация процессов'].map((item) => <span key={item}>{item}</span>)}
          </div>
          <p className="muted">Чтобы всё работало быстрее, выглядело чище и не усложняло ежедневную работу.</p>
        </div>
      </section>

      <section id="build" className="section">
        <div className="sectionHead"><h2>Что можно собрать</h2><p>Короткий набор решений, которые закрывают основные задачи малого бизнеса, экспертов и современных проектов.</p></div>
        <div className="grid">
          {buildItems.map(([title, text, Icon]) => <article className="card" key={title}><Icon size={24} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <ImageBlock src="/images/build.jpg" alt="Набор цифровых решений и интерфейсов для бизнеса" />
      </section>

      <section className="section twoCols">
        <div className="copy"><h2>Так выглядят современные digital-продукты</h2><p>Минималистичные интерфейсы, чистые панели, мобильные экраны и рабочие системы без визуального шума и перегруженности.</p><p className="muted">Каждый проект собирается под конкретную задачу — с понятной логикой и удобной структурой.</p></div>
        <ImageBlock src="/images/product.jpg" alt="Современные интерфейсы, дашборды и мобильные экраны" />
      </section>

      <section id="process" className="section process">
        <div className="sectionHead"><h2>Как строится работа</h2></div>
        <ImageBlock src="/images/process.jpg" alt="Визуал рабочего процесса от задачи до запуска" />
        <div className="steps">
          {steps.map(([title, text], index) => <article className="step" key={title}><span>{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section id="contact" className="section final">
        <div className="copy"><h2>Цифровые решения, с которыми бизнес выглядит современно и работает быстрее</h2><p>Лендинг, приложение или автоматизация могут заменить хаос из таблиц, переписок и ручных процессов.</p><p className="muted">Понятные интерфейсы, современный визуал и системы, которыми удобно пользоваться каждый день.</p><a className="button primary" href="https://t.me/vladkolikov">Обсудить проект <ArrowRight size={18} /></a></div>
        <ImageBlock src="/images/final.jpg" alt="Премиальный рабочий интерфейс для финального блока сайта" />
      </section>
    </main>
  );
}
