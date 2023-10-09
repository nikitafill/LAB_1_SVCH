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
      'intro_title': 'Scale Fintech\nSafe And Secure',
      'intro__text': 'Ship your fintech products to your customers with fast and reliable processes. Secure and highly customizable Rise Finance is the best partner for you if you want to scale your finance products worldwide.',
      'intro__btn': 'Home',
      'consulation_title': 'Consulting For Startups In Fintech',
      'consulation_text': 'Our Team consists of proven experts from finance, tech and science. This mix makes it possible for our team to deliver the best results to all our clients.',
      'deliver_title': 'Delivering Value In Every Step Of Production',
      'deliver_subtitle': 'The Process',
      'deliver_text': 'Strategic phrases we run through with every client make it possible to implement highly efficient processes, even in high-paced startups that like to scale as fast as possible.',
      'case_title': 'Case Study',
      'case_text': 'Some results from our clients',
      'subcase_title': 'Coruma Finance',
      'subcase_text': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      'finance_title': 'Corume Finance',
      'finance_text': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      'footer_services': 'Services',
      'footer_services_text': 'Web Hosting\nDomains\nPremium Hosting\nPrivate Server\nE-mail Hosting',
      'footer_support': 'Support',
      'footer_support_text': 'Pricing Plan\nDocumentation\nGuide\nTutorial',
      'footer_company': 'Company',
      'footer_company_text': 'About\nBlog\nJoin Us\nPress\nPartners',
      'footer_legal': 'Legal',
      'footer_legal_text': 'Claim\nPrivacy\nTerms',
      'footer_newsletter': 'Subscribe to our newsletter',
      'footer_newsletter_text': 'Funding freemium long tail hypotheses first mover advantage assets ownership',
    },
    
  'ru': {
      'intro_title': 'Масштабирование финтеха\nБезопасно и надежно',
      'intro__text': 'Отправляйте свои финтех-продукты вашим клиентам с быстрыми и надежными процессами. Rise Finance, который обеспечивает безопасность и высокую настраиваемость, является вашим лучшим партнером, если вы хотите масштабировать свои финансовые продукты по всему миру.',
      'intro__btn': 'Главная',
      'consulation_title': 'Консалтинг для стартапов в финтехе',
      'consulation_text': 'Наша команда состоит из опытных экспертов в области финансов, технологий и науки. Это сочетание позволяет нашей команде достигать лучших результатов для всех наших клиентов.',
      'deliver_title': 'Доставка ценности на каждом этапе производства',
      'deliver_subtitle': 'Процесс',
      'deliver_text': 'Стратегические фразы, которые мы прокладываем с каждым клиентом, позволяют реализовать высокоэффективные процессы, даже в стартапах с высоким темпом роста, которые стремятся масштабироваться как можно быстрее.',
      'case_title': 'Исследование случая',
      'case_text': 'Некоторые результаты наших клиентов',
      'subcase_title': 'Корума Финанс',
      'subcase_text': 'Все начинается с того, как здесь, в этом месте, возникает нечто великолепное, что заставляет нас удивляться и восхищаться. И, хотя это может показаться странным, но именно здесь, в этом уголке мира, мы находим истинное счастье и настоящую гармонию.',
      'finance_title': 'Корума Финанс',
      'finance_text': 'Все начинается с того, как здесь, в этом месте, возникает нечто великолепное, что заставляет нас удивляться и восхищаться. И, хотя это может показаться странным, но именно здесь, в этом уголке мира, мы находим истинное счастье и настоящую гармонию.',
      'footer_services': 'Услуги',
      'footer_services_text': 'Веб-хостинг\nДомены\nПремиум-хостинг\nЧастный сервер\nПочтовый хостинг',
      'footer_support': 'Поддержка',
      'footer_support_text': 'Планы и цены\nДокументация\nРуководство\nУчебники',
      'footer_company': 'О компании',
      'footer_company_text': 'О нас\nБлог\nПрисоединяйтесь к нам\nПресса\nПартнеры',
      'footer_legal': 'Правовая информация',
      'footer_legal_text': 'Обращение\nКонфиденциальность\nУсловия использования',
      'footer_newsletter': 'Подпишитесь на нашу рассылку',
      'footer_newsletter_text': 'Финансирование freemium длинный хвост гипотезы преимущество первопроходца активы владения',
      'footer_site_logo': 'Логотип сайта',
  },
};

getTranslate();
/*const i18n = {
    'en': {
  'intro_title':'Scale Fintech\ Safe And Secure',
  'intro__text': 'Ship your fintech products to your customers with fast and reliable processes. Secure and highly customizable Rise Finance is the best partner for you if you want to scale your finance products worldwide.',
  'intro__btn': 'Home',//Найти где написано слово
  'consulation_title': 'Consulting For Startups In Fintech',
  'consulation_text': 'Our Team consists of proven experts from finance, tech and science. This mix makes it possible for our team to deliver the best results to all our clients.',
  'deliver_title': 'Delivering Value In Every \ Step Of Production',
  'deliver_subtitle': 'The Process',
  'deliver_text': 'Strategic phrases we run through with every client make it possible to implement highly efficinet processes, even in high pace startups that like to scale as fast as possible.',
    },
    'ru': {
    },
  };

getTranslate();*/
