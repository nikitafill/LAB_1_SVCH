const link = document.getElementById('translater');
let language = localStorage.getItem('currentLanguage') || 'en';

link.addEventListener('click', function (event) {
    event.preventDefault();
    language = language === 'en' ? 'ru' : 'en';

    getTranslate();
});

function getTranslate() {
    localStorage.setItem('currentLanguage', language);

    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach((element) => {
        const translationKey = element.dataset.i18n;

        if (i18n.hasOwnProperty(language) && i18n[language].hasOwnProperty(translationKey)) {
            element.textContent = i18n[language][translationKey];
        }
    });
}
const i18n = {
  'en': {
      'intro-btn':'Consulation',
      'subcase-btn':'Read more about the client',
      'translate-btn':'EN/RU',
      'swith-theme-btn':'Switch theme',
      'intro_title': 'Scale Fintech\nSafe And Secure',
      'intro__text': 'Ship your fintech products to your customers with fast and reliable processes. Secure and highly customizable Rise Finance is the best partner for you if you want to scale your finance products worldwide.',
      'intro__btn': 'Home',
      'consulation_title': 'Consulting For Startups In Fintech',
      'consulation_text': 'Our Team consists of proven experts from finance, tech and science. This mix makes it possible for our team to deliver the best results to all our clients.',
      'deliver_title': 'Delivering Value In Every Step Of Production',
      'deliver_subtitle': 'The Process',
      'deliver_text': 'Strategic phrases we run through with every client make it possible to implement highly efficient processes, even in high-paced startups that like to scale as fast as possible.',
      'step_1':'Analysis',
      'step_2':'Growth Phase',
      'step_3':'Profit',
      'case_title': 'Case Study',
      'case_text': 'Some results from our clients',
      'subcase_title': 'Coruma Finance',
      'subcase_text': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      'finance_title': 'Corume Finance',
      'finance_text': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      'comment__1':'Accquired 8 long time customers',
      'comment__2':'300% Growth in first year',
      'comment__3':'Hired 24 talented developers',
      'column_1': 'Service',
      'footer__text_1': 'Web Hosting\nDomains\nPremium Hosting\nPrivate Server\nE-mail Hosting',
      'column_2': 'Support',
      'footer__text_2': 'Pricing Plan\nDocumentation\n Guide<\n Tutorial',
      'column_3': 'Company',
      'footer__text_3': 'About\n Blog\nJoin Us\n Press\nPartners',
      'column_4': 'Legal',
      'footer__text_4': 'Claim\nPrivacy\n Terms',
      'column_5': 'Subcribe to our newsletter',
      'footer__text_5': 'Funding freemium long tail hypotheses first mover advantage assets ownership',
    },
    
  'ru': {
      'intro-btn':'Консолидация',
      'subcase-btn':'Подробнее о клиенте',
      'translate-btn':'RU/EN',
      'swith-theme-btn':'Изменить тему',
      'intro_title': 'Масштабирование Финтеха Безопасно и Надежно',
      'intro__text': 'Отправляйте свои финтех-продукты вашим клиентам с быстрыми и надежными процессами. Rise Finance, который обеспечивает безопасность и высокую настраиваемость, является вашим лучшим партнером, если вы хотите масштабировать свои финансовые продукты по всему миру.',
      'intro__btn': 'Главная',
      'consulation_title': 'Консалтинг для стартапов в финтехе',
      'consulation_text': 'Наша команда состоит из опытных экспертов в области финансов, технологий и науки. Это сочетание позволяет нашей команде достигать лучших результатов для всех наших клиентов.',
      'deliver_title': 'Доставка ценности на каждом этапе производства',
      'deliver_subtitle': 'Процесс',
      'deliver_text': 'Стратегические фразы, которые мы прокладываем с каждым клиентом, позволяют реализовать высокоэффективные процессы, даже в стартапах с высоким темпом роста, которые стремятся масштабироваться как можно быстрее.',
      'step_1':'Аналитика',
      'step_2':'Фаза Роста',
      'step_3':'Прибыль',
      'case_title': 'Исследование случая',
      'case_text': 'Некоторые результаты наших клиентов',
      'subcase_title': 'Корума Финанс',
      'subcase_text': 'Все начинается с того, как здесь, в этом месте, возникает нечто великолепное, что заставляет нас удивляться и восхищаться. И, хотя это может показаться странным, но именно здесь, в этом уголке мира, мы находим истинное счастье и настоящую гармонию.',
      'finance_title': 'Корума Финанс',
      'finance_text': 'Все начинается с того, как здесь, в этом месте, возникает нечто великолепное, что заставляет нас удивляться и восхищаться. И, хотя это может показаться странным, но именно здесь, в этом уголке мира, мы находим истинное счастье и настоящую гармонию.',
      'comment__1':'Привлечено 8 постоянных клиентов',
      'comment__2':'300% роста в первый год',
      'comment__3':'Нанято 24 талантливых разработчика',
      'column_1': 'Услуги',
      'footer__text_1': 'Веб-хостинг\nДомены\nПремиум-хостинг\nЧастный сервер\nПочтовый хостинг',
      'column_2': 'Поддержка',
      'footer__text_2': 'Планы и цены\nДокументация\nРуководство\nУчебники',
      'column_3': 'О компании',
      'footer__text_3': 'О нас\nБлог\nПрисоединяйтесь к нам\nПресса\nПартнеры',
      'column_4': 'Правовая информация',
      'footer__text_4': 'Обращение\nКонфиденциальность\nУсловия использования',
      'column_5': 'Подпишитесь на нашу рассылку',
      'footer__text_5': 'Финансирование freemium длинный хвост гипотезы преимущество первопроходца активы владения',
  },
};

getTranslate();
