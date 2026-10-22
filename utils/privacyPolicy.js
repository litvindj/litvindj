// Privacy policy text per locale.
// In paragraph text, {brand} renders as the highlighted "DJ Litvin" and {email} as a mailto link.

const COMPANY = 'Blerfis sp. z o.o.';
const IDS = 'NIP: 5242822814 | KRS: 0000664663';
const EMAIL = 'booking@litvindj.com';

export const privacyPolicy = {
  en: {
    back: '← Back',
    label: 'Legal document',
    title: ['Privacy Policy', '& Cookies'],
    published: 'Published: March 2026',
    lastUpdated: 'Last updated: March 2026',
    address: 'ul. Ks. Teofila Boguckiego 4/52, 01-502 Warszawa, Poland',
    emailLabel: 'E-mail:',
    sections: [
      {
        h: '1. Privacy Policy',
        blocks: [
          { p: 'Blerfis sp. z o.o., a company incorporated under Polish law with registered offices at ul. Ks. Teofila Boguckiego 4/52, 01-502 Warszawa, Poland, NIP: 5242822814, KRS: 0000664663 (hereinafter, {brand}) — in compliance with the requirements in Regulation (EU) 2016/679 of the European Parliament and Council of April 27, 2016 (General Data Protection Regulation, hereinafter GDPR) and Polish data protection law — respects and protects the privacy of users of the site referred to as the litvindj.com domain, putting in place every possible and proportionate effort not to harm the rights of its users.' },
          { p: 'The purpose of this privacy policy is to help users understand the procedures that DJ Litvin uses in the area of privacy, including what personal data is collected, why it is collected, how it is used, how it is protected, and which individual rights users possess.' },
          { p: 'This privacy policy does not apply to, and excludes our responsibility, in terms of privacy, information, or other practices of third parties, including third parties who manage websites or services to which the litvindj.com site refers.' },
          { p: 'This privacy policy applies to all personal data that DJ Litvin acquires or processes when users interact with the litvindj.com website — including submitting booking inquiries, responding to marketing communications, and contacting us directly.' },
        ],
      },
      {
        h: '2. General Information on Data Processing',
        blocks: [
          { p: 'In this privacy policy, the term "personal data" signifies information that refers to users. It allows us to identify users, directly or in combination with other information in our possession.' },
          { p: 'DJ Litvin processes user data based on consent. By using or consulting litvindj.com, users explicitly agree to this privacy policy and consent to the processing of their personal data in relation to the purposes and methods described below, including any disclosure to third parties, if necessary, for the provision of service. The provision of data and, consequently, the consent to the gathering and processing of data is optional. The user can deny consent and may revoke consent at any time. However, denying consent may make it impossible to provide certain services.' },
          { p: 'All personal data submitted via the contact form (name, e-mail, message content) is processed exclusively for the purpose of responding to booking inquiries and is subject to the strictest confidentiality in accordance with Article 6 of the GDPR.' },
        ],
      },
      {
        h: '3. Automatically Collected Information',
        blocks: [
          { p: 'As with all websites, this site makes use of log files in which information from user visits is automatically collected and stored. The information collected could include:' },
          { list: [
            'Internet Protocol (IP) Address',
            'Type of browser and device parameters used to connect to the site',
            'Name of the Internet Service Provider (ISP)',
            'Date and time of visit/request',
            'Number of clicks, where applicable',
            "Other parameters related to the operating system and the user's IT environment",
          ] },
          { p: 'This data is used for the sole purpose of obtaining anonymous statistical information on the use of the website and to check its correct functioning. Data used for security purposes is kept for seven days.' },
        ],
      },
      {
        h: '4. Use of Cookies',
        blocks: [
          { sub: 'Definition of Cookies' },
          { p: "A cookie is a small text file sent to the browser by the visited website and then stored on the hard disk of the user's computer. Cookies can be used to recognize a user's device, monitor sessions, and store specific information about users." },
          { sub: 'Types of Cookies' },
          { list: [
            'Technical Cookies – necessary for the website to function properly',
            'Functional Cookies – used to store selected settings and provide customized features',
            'Analytical Cookies – Google Analytics (G-J3CN7R2Z67) – used to collect information on usage habits and visited pages',
            'Marketing Cookies – Google Ads (AW-17986003521), Facebook Pixel (33819537680993763) – used to display personalized advertisements',
          ] },
          { p: 'By using the site, the visitor expressly consents to the use of cookies. Cookies can be disabled at any time directly from the browser. Disabling cookies may prevent the proper use of some features on the site.' },
        ],
      },
      {
        h: '5. Third-Party Cookies and Services',
        blocks: [
          { p: 'This site uses the following third-party services which may set their own cookies:' },
          { list: [
            'Google LLC – Google Analytics, Google Ads, Google Tag Manager',
            'Meta Platforms Ireland Ltd – Facebook Pixel',
            'Resend – contact form processing service',
            'Netlify Inc. – website hosting',
          ] },
          { p: 'This site has no control over third-party cookies — they are entirely managed by third parties in accordance with their own privacy policies.' },
        ],
      },
      {
        h: '6. Data Processing Location',
        blocks: [
          { p: 'The data collected by this site is processed at the headquarters of the Data Controller and at the web hosting data center. The web hosting provider, Netlify Inc., handles data on behalf of the Data Controller in accordance with European standards and GDPR requirements.' },
        ],
      },
      {
        h: '7. Transfer of Data to Non-EU Countries',
        blocks: [
          { p: 'This site may share some of the collected data with services located outside the European Union, in particular with Google LLC and Meta Platforms Ireland Ltd through analytics and advertising tools. The transfer is authorized on the basis of standard contractual clauses approved by the European Commission, ensuring an adequate level of data protection.' },
        ],
      },
      {
        h: '8. Security Measures',
        blocks: [
          { p: 'This site processes the data of users in a lawful and proper manner, adopting appropriate security measures to prevent unauthorized access, disclosure, modification, or destruction of data. However, no data transmission and no storage system can be guaranteed as 100% secure. Users who have reason to believe that their interactions with us are no longer secure are asked to report the issue immediately to {email}.' },
          { p: 'Personal data shall be kept for as long as necessary for the purposes for which it was collected, or as required by applicable law — no longer than 3 years from the last contact.' },
        ],
      },
      {
        h: '9. Rights of the User',
        blocks: [
          { p: 'Pursuant to the GDPR and Polish data protection regulations, users have the following rights:' },
          { list: [
            'Right of access to personal data',
            'Right to rectification (correction) of data',
            'Right to erasure ("right to be forgotten")',
            'Right to restriction of processing',
            'Right to data portability',
            'Right to object to processing',
            'Right to withdraw consent at any time',
            'Right to lodge a complaint with the supervisory authority – Prezes Urzędu Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa',
          ] },
          { p: 'To exercise any of the above rights, please contact us at {email}.' },
        ],
      },
      {
        h: '10. Special Information for Minors',
        blocks: [
          { p: 'The litvindj.com site is not intended for children under the age of 16. We do not knowingly collect personal information from minors. If a parent or guardian becomes aware that a minor has provided us with personal data without consent, please contact us immediately at {email}. We will promptly remove such data from our records.' },
        ],
      },
      {
        h: '11. Data Controller',
        blocks: [
          { p: 'The Data Controller — in accordance with the GDPR and Polish data protection laws — is:' },
          { controller: true },
        ],
      },
      {
        h: '12. Updates',
        blocks: [
          { p: 'This privacy policy may be updated periodically to reflect changes in our practices or applicable law. We encourage users to review this page regularly.' },
        ],
      },
    ],
  },

  ru: {
    back: '← Назад',
    label: 'Юридический документ',
    title: ['Политика конфиденциальности', 'и файлы cookie'],
    published: 'Опубликовано: март 2026',
    lastUpdated: 'Последнее обновление: март 2026',
    address: 'ul. Ks. Teofila Boguckiego 4/52, 01-502 Warszawa, Польша',
    emailLabel: 'Эл. почта:',
    notice: 'В случае расхождений между языковыми версиями обязательной является польская версия.',
    sections: [
      {
        h: '1. Политика конфиденциальности',
        blocks: [
          { p: 'Blerfis sp. z o.o., компания, зарегистрированная в соответствии с законодательством Польши, с юридическим адресом: ul. Ks. Teofila Boguckiego 4/52, 01-502 Warszawa, Польша, NIP: 5242822814, KRS: 0000664663 (далее — {brand}), в соответствии с требованиями Регламента (ЕС) 2016/679 Европейского парламента и Совета от 27 апреля 2016 года (Общий регламент по защите данных, далее — GDPR) и польского законодательства о защите данных уважает и защищает конфиденциальность пользователей сайта, размещённого на домене litvindj.com, и прилагает все возможные и соразмерные усилия, чтобы не нарушать права пользователей.' },
          { p: 'Цель настоящей политики конфиденциальности — помочь пользователям понять, какие процедуры DJ Litvin применяет в сфере конфиденциальности: какие персональные данные собираются, с какой целью, как они используются и защищаются и какими правами обладают пользователи.' },
          { p: 'Настоящая политика конфиденциальности не распространяется на практики третьих лиц в области конфиденциальности, обработки информации и иные их практики, в том числе третьих лиц, управляющих сайтами или сервисами, на которые ссылается сайт litvindj.com, и мы не несём за них ответственности.' },
          { p: 'Настоящая политика конфиденциальности распространяется на все персональные данные, которые DJ Litvin получает или обрабатывает при взаимодействии пользователей с сайтом litvindj.com, в том числе при отправке запросов на бронирование, ответах на маркетинговые сообщения и прямом обращении к нам.' },
        ],
      },
      {
        h: '2. Общие сведения об обработке данных',
        blocks: [
          { p: 'В настоящей политике конфиденциальности термин «персональные данные» означает информацию, относящуюся к пользователям. Она позволяет идентифицировать пользователя напрямую или в сочетании с другой имеющейся у нас информацией.' },
          { p: 'DJ Litvin обрабатывает данные пользователей на основании согласия. Пользуясь сайтом litvindj.com или просматривая его, пользователи явно соглашаются с настоящей политикой конфиденциальности и дают согласие на обработку своих персональных данных в целях и способами, описанными ниже, включая, при необходимости, их передачу третьим лицам для оказания услуг. Предоставление данных и, следовательно, согласие на их сбор и обработку являются добровольными. Пользователь может отказаться дать согласие и может в любой момент отозвать его. Однако отказ от согласия может сделать невозможным оказание некоторых услуг.' },
          { p: 'Все персональные данные, отправленные через контактную форму (имя, адрес электронной почты, текст сообщения), обрабатываются исключительно для ответа на запросы о бронировании и хранятся в строжайшей конфиденциальности в соответствии со статьёй 6 GDPR.' },
        ],
      },
      {
        h: '3. Автоматически собираемая информация',
        blocks: [
          { p: 'Как и любой веб-сайт, этот сайт использует лог-файлы, в которых автоматически собирается и хранится информация о посещениях пользователей. Собираемая информация может включать:' },
          { list: [
            'IP-адрес (Internet Protocol)',
            'Тип браузера и параметры устройства, с которого выполняется подключение к сайту',
            'Название интернет-провайдера (ISP)',
            'Дату и время посещения или запроса',
            'Количество кликов, если применимо',
            'Другие параметры, связанные с операционной системой и ИТ-средой пользователя',
          ] },
          { p: 'Эти данные используются исключительно для получения анонимной статистической информации об использовании сайта и проверки его корректной работы. Данные, используемые в целях безопасности, хранятся семь дней.' },
        ],
      },
      {
        h: '4. Использование файлов cookie',
        blocks: [
          { sub: 'Что такое файлы cookie' },
          { p: 'Файл cookie — это небольшой текстовый файл, который посещаемый сайт отправляет в браузер и который затем сохраняется на жёстком диске компьютера пользователя. Файлы cookie могут использоваться для распознавания устройства пользователя, отслеживания сеансов и хранения определённой информации о пользователях.' },
          { sub: 'Типы файлов cookie' },
          { list: [
            'Технические cookie – необходимы для корректной работы сайта',
            'Функциональные cookie – используются для сохранения выбранных настроек и предоставления персонализированных функций',
            'Аналитические cookie – Google Analytics (G-J3CN7R2Z67) – используются для сбора информации о том, как пользователи работают с сайтом и какие страницы посещают',
            'Маркетинговые cookie – Google Ads (AW-17986003521), Facebook Pixel (33819537680993763) – используются для показа персонализированной рекламы',
          ] },
          { p: 'Пользуясь сайтом, посетитель явно соглашается на использование файлов cookie. Файлы cookie можно в любой момент отключить непосредственно в браузере. Отключение файлов cookie может помешать корректной работе некоторых функций сайта.' },
        ],
      },
      {
        h: '5. Файлы cookie и сервисы третьих лиц',
        blocks: [
          { p: 'Сайт использует следующие сервисы третьих лиц, которые могут устанавливать собственные файлы cookie:' },
          { list: [
            'Google LLC – Google Analytics, Google Ads, Google Tag Manager',
            'Meta Platforms Ireland Ltd – Facebook Pixel',
            'Resend – сервис обработки контактной формы',
            'Netlify Inc. – хостинг сайта',
          ] },
          { p: 'Сайт не контролирует файлы cookie третьих лиц: ими полностью управляют сами третьи лица в соответствии со своими политиками конфиденциальности.' },
        ],
      },
      {
        h: '6. Место обработки данных',
        blocks: [
          { p: 'Данные, собираемые сайтом, обрабатываются по месту нахождения администратора данных и в дата-центре хостинг-провайдера. Хостинг-провайдер Netlify Inc. обрабатывает данные от имени администратора данных в соответствии с европейскими стандартами и требованиями GDPR.' },
        ],
      },
      {
        h: '7. Передача данных в страны за пределами ЕС',
        blocks: [
          { p: 'Сайт может передавать часть собранных данных сервисам, расположенным за пределами Европейского союза, в частности Google LLC и Meta Platforms Ireland Ltd, через инструменты аналитики и рекламы. Такая передача осуществляется на основании стандартных договорных условий, утверждённых Европейской комиссией, которые обеспечивают надлежащий уровень защиты данных.' },
        ],
      },
      {
        h: '8. Меры безопасности',
        blocks: [
          { p: 'Сайт обрабатывает данные пользователей законно и надлежащим образом, принимая соответствующие меры безопасности для предотвращения несанкционированного доступа, раскрытия, изменения или уничтожения данных. Тем не менее ни одна система передачи и хранения данных не может гарантировать стопроцентную безопасность. Пользователей, у которых есть основания полагать, что их взаимодействие с нами перестало быть безопасным, просим немедленно сообщить об этом по адресу {email}.' },
          { p: 'Персональные данные хранятся столько, сколько необходимо для целей, ради которых они были собраны, или столько, сколько требует применимое законодательство, но не дольше 3 лет с момента последнего контакта.' },
        ],
      },
      {
        h: '9. Права пользователя',
        blocks: [
          { p: 'В соответствии с GDPR и польским законодательством о защите данных пользователи имеют следующие права:' },
          { list: [
            'Право на доступ к персональным данным',
            'Право на исправление данных',
            'Право на удаление данных («право на забвение»)',
            'Право на ограничение обработки',
            'Право на переносимость данных',
            'Право на возражение против обработки',
            'Право в любой момент отозвать согласие',
            'Право подать жалобу в надзорный орган – Prezes Urzędu Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa',
          ] },
          { p: 'Чтобы воспользоваться любым из перечисленных прав, свяжитесь с нами по адресу {email}.' },
        ],
      },
      {
        h: '10. Информация для несовершеннолетних',
        blocks: [
          { p: 'Сайт litvindj.com не предназначен для детей младше 16 лет. Мы сознательно не собираем персональные данные несовершеннолетних. Если родитель или опекун узнает, что несовершеннолетний предоставил нам персональные данные без согласия, просим немедленно связаться с нами по адресу {email}. Мы незамедлительно удалим такие данные.' },
        ],
      },
      {
        h: '11. Администратор данных',
        blocks: [
          { p: 'Администратором данных в соответствии с GDPR и польским законодательством о защите данных является:' },
          { controller: true },
        ],
      },
      {
        h: '12. Обновления',
        blocks: [
          { p: 'Настоящая политика конфиденциальности может периодически обновляться с учётом изменений в нашей практике или в применимом законодательстве. Рекомендуем пользователям регулярно просматривать эту страницу.' },
        ],
      },
    ],
  },

  pl: {
    back: '← Powrót',
    label: 'Dokument prawny',
    title: ['Polityka prywatności', 'i plików cookie'],
    published: 'Opublikowano: marzec 2026',
    lastUpdated: 'Ostatnia aktualizacja: marzec 2026',
    address: 'ul. Ks. Teofila Boguckiego 4/52, 01-502 Warszawa, Polska',
    emailLabel: 'E-mail:',
    sections: [
      {
        h: '1. Polityka prywatności',
        blocks: [
          { p: 'Blerfis sp. z o.o., spółka utworzona zgodnie z prawem polskim, z siedzibą przy ul. Ks. Teofila Boguckiego 4/52, 01-502 Warszawa, NIP: 5242822814, KRS: 0000664663 (dalej: {brand}), zgodnie z wymogami Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (ogólne rozporządzenie o ochronie danych, dalej: RODO) oraz polskich przepisów o ochronie danych osobowych szanuje i chroni prywatność użytkowników serwisu dostępnego w domenie litvindj.com, dokładając wszelkich możliwych i proporcjonalnych starań, aby nie naruszać praw użytkowników.' },
          { p: 'Celem niniejszej polityki prywatności jest pomoc użytkownikom w zrozumieniu zasad stosowanych przez DJ Litvin w zakresie prywatności, w tym tego, jakie dane osobowe są zbierane, w jakim celu, w jaki sposób są wykorzystywane i chronione oraz jakie prawa przysługują użytkownikom.' },
          { p: 'Niniejsza polityka prywatności nie dotyczy praktyk osób trzecich w zakresie prywatności, informacji ani innych ich praktyk, w tym osób trzecich zarządzających stronami internetowymi lub usługami, do których odsyła serwis litvindj.com, i wyłącza naszą odpowiedzialność w tym zakresie.' },
          { p: 'Niniejsza polityka prywatności dotyczy wszystkich danych osobowych, które DJ Litvin pozyskuje lub przetwarza w związku z korzystaniem przez użytkowników z serwisu litvindj.com — w tym przy wysyłaniu zapytań o rezerwację, odpowiadaniu na komunikaty marketingowe i bezpośrednim kontakcie z nami.' },
        ],
      },
      {
        h: '2. Informacje ogólne o przetwarzaniu danych',
        blocks: [
          { p: 'W niniejszej polityce prywatności pojęcie „dane osobowe” oznacza informacje dotyczące użytkowników. Pozwalają one zidentyfikować użytkownika bezpośrednio lub w połączeniu z innymi posiadanymi przez nas informacjami.' },
          { p: 'DJ Litvin przetwarza dane użytkowników na podstawie zgody. Korzystając z serwisu litvindj.com lub przeglądając go, użytkownicy wyraźnie akceptują niniejszą politykę prywatności i wyrażają zgodę na przetwarzanie swoich danych osobowych w celach i w sposób opisany poniżej, w tym na ich ewentualne udostępnienie osobom trzecim, jeśli jest to niezbędne do świadczenia usług. Podanie danych, a tym samym wyrażenie zgody na ich zbieranie i przetwarzanie, jest dobrowolne. Użytkownik może odmówić zgody i w każdej chwili ją wycofać. Odmowa zgody może jednak uniemożliwić świadczenie niektórych usług.' },
          { p: 'Wszystkie dane osobowe przesłane za pomocą formularza kontaktowego (imię, adres e-mail, treść wiadomości) są przetwarzane wyłącznie w celu udzielenia odpowiedzi na zapytania o rezerwację i są objęte ścisłą poufnością zgodnie z art. 6 RODO.' },
        ],
      },
      {
        h: '3. Informacje zbierane automatycznie',
        blocks: [
          { p: 'Jak każdy serwis internetowy, ta strona korzysta z plików logów, w których automatycznie zbierane i przechowywane są informacje o wizytach użytkowników. Zbierane informacje mogą obejmować:' },
          { list: [
            'Adres IP (Internet Protocol)',
            'Rodzaj przeglądarki i parametry urządzenia używanego do połączenia ze stroną',
            'Nazwę dostawcy usług internetowych (ISP)',
            'Datę i godzinę wizyty lub zapytania',
            'Liczbę kliknięć, jeśli dotyczy',
            'Inne parametry dotyczące systemu operacyjnego i środowiska informatycznego użytkownika',
          ] },
          { p: 'Dane te są wykorzystywane wyłącznie w celu uzyskania anonimowych informacji statystycznych o korzystaniu ze strony oraz sprawdzenia jej prawidłowego działania. Dane wykorzystywane do celów bezpieczeństwa są przechowywane przez siedem dni.' },
        ],
      },
      {
        h: '4. Wykorzystanie plików cookie',
        blocks: [
          { sub: 'Czym są pliki cookie' },
          { p: 'Plik cookie to niewielki plik tekstowy wysyłany do przeglądarki przez odwiedzaną stronę i zapisywany na dysku komputera użytkownika. Pliki cookie mogą służyć do rozpoznawania urządzenia użytkownika, monitorowania sesji i przechowywania określonych informacji o użytkownikach.' },
          { sub: 'Rodzaje plików cookie' },
          { list: [
            'Techniczne pliki cookie – niezbędne do prawidłowego działania strony',
            'Funkcjonalne pliki cookie – służą do zapamiętywania wybranych ustawień i udostępniania spersonalizowanych funkcji',
            'Analityczne pliki cookie – Google Analytics (G-J3CN7R2Z67) – służą do zbierania informacji o sposobie korzystania ze strony i odwiedzanych podstronach',
            'Marketingowe pliki cookie – Google Ads (AW-17986003521), Facebook Pixel (33819537680993763) – służą do wyświetlania spersonalizowanych reklam',
          ] },
          { p: 'Korzystając ze strony, odwiedzający wyraźnie zgadza się na używanie plików cookie. Pliki cookie można w każdej chwili wyłączyć bezpośrednio w przeglądarce. Wyłączenie plików cookie może uniemożliwić prawidłowe korzystanie z niektórych funkcji strony.' },
        ],
      },
      {
        h: '5. Pliki cookie i usługi podmiotów trzecich',
        blocks: [
          { p: 'Strona korzysta z następujących usług podmiotów trzecich, które mogą zapisywać własne pliki cookie:' },
          { list: [
            'Google LLC – Google Analytics, Google Ads, Google Tag Manager',
            'Meta Platforms Ireland Ltd – Facebook Pixel',
            'Resend – usługa obsługi formularza kontaktowego',
            'Netlify Inc. – hosting strony',
          ] },
          { p: 'Strona nie ma kontroli nad plikami cookie podmiotów trzecich — są one w całości zarządzane przez te podmioty zgodnie z ich własnymi politykami prywatności.' },
        ],
      },
      {
        h: '6. Miejsce przetwarzania danych',
        blocks: [
          { p: 'Dane zbierane przez stronę są przetwarzane w siedzibie administratora danych oraz w centrum danych dostawcy hostingu. Dostawca hostingu, Netlify Inc., przetwarza dane w imieniu administratora danych zgodnie ze standardami europejskimi i wymogami RODO.' },
        ],
      },
      {
        h: '7. Przekazywanie danych do państw spoza UE',
        blocks: [
          { p: 'Strona może udostępniać część zebranych danych usługom znajdującym się poza Unią Europejską, w szczególności Google LLC i Meta Platforms Ireland Ltd, za pośrednictwem narzędzi analitycznych i reklamowych. Przekazywanie odbywa się na podstawie standardowych klauzul umownych zatwierdzonych przez Komisję Europejską, które zapewniają odpowiedni poziom ochrony danych.' },
        ],
      },
      {
        h: '8. Środki bezpieczeństwa',
        blocks: [
          { p: 'Strona przetwarza dane użytkowników zgodnie z prawem i w należyty sposób, stosując odpowiednie środki bezpieczeństwa, aby zapobiec nieuprawnionemu dostępowi, ujawnieniu, modyfikacji lub zniszczeniu danych. Żaden system przesyłania ani przechowywania danych nie może jednak zagwarantować stuprocentowego bezpieczeństwa. Użytkowników, którzy mają powody sądzić, że ich kontakt z nami przestał być bezpieczny, prosimy o niezwłoczne zgłoszenie tego na adres {email}.' },
          { p: 'Dane osobowe są przechowywane tak długo, jak jest to niezbędne do celów, w których zostały zebrane, lub tak długo, jak wymagają tego obowiązujące przepisy — nie dłużej niż 3 lata od ostatniego kontaktu.' },
        ],
      },
      {
        h: '9. Prawa użytkownika',
        blocks: [
          { p: 'Zgodnie z RODO i polskimi przepisami o ochronie danych użytkownikom przysługują następujące prawa:' },
          { list: [
            'Prawo dostępu do danych osobowych',
            'Prawo do sprostowania (poprawienia) danych',
            'Prawo do usunięcia danych („prawo do bycia zapomnianym”)',
            'Prawo do ograniczenia przetwarzania',
            'Prawo do przenoszenia danych',
            'Prawo do wniesienia sprzeciwu wobec przetwarzania',
            'Prawo do wycofania zgody w dowolnym momencie',
            'Prawo do wniesienia skargi do organu nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa',
          ] },
          { p: 'Aby skorzystać z któregokolwiek z powyższych praw, skontaktuj się z nami pod adresem {email}.' },
        ],
      },
      {
        h: '10. Informacje dotyczące osób niepełnoletnich',
        blocks: [
          { p: 'Serwis litvindj.com nie jest przeznaczony dla dzieci poniżej 16. roku życia. Nie zbieramy świadomie danych osobowych osób niepełnoletnich. Jeśli rodzic lub opiekun dowie się, że osoba niepełnoletnia przekazała nam dane osobowe bez zgody, prosimy o niezwłoczny kontakt pod adresem {email}. Niezwłocznie usuniemy takie dane.' },
        ],
      },
      {
        h: '11. Administrator danych',
        blocks: [
          { p: 'Administratorem danych — zgodnie z RODO i polskimi przepisami o ochronie danych — jest:' },
          { controller: true },
        ],
      },
      {
        h: '12. Aktualizacje',
        blocks: [
          { p: 'Niniejsza polityka prywatności może być okresowo aktualizowana w celu odzwierciedlenia zmian w naszych praktykach lub obowiązujących przepisach. Zachęcamy użytkowników do regularnego zapoznawania się z tą stroną.' },
        ],
      },
    ],
  },
};

export const privacyCompany = { name: COMPANY, ids: IDS, email: EMAIL };
