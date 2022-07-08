# JoDeC
<strong>Jo</strong>b <strong>De</strong>scription <strong>C</strong>onstructor
<h2>Motivation</h2>
Приложение предоставляет клиентам инструменты для создания, актуализации и оценки <strong>должностных инструкций</strong>. Использование встроенной базы должностных инструкций и их отдельных элементов значительно упрощает и ускоряет процессы разработки путем поиска, наследования или реиспользования уже готовых объектов.
<h2>Environment architecture</h2>
В соответствии со <a href='https://app.diagrams.net/#G1GqktkhseJzEsaOJfDI6dWOMrSiI1kXfm' target='_blank'>схемой</a>
<h2>Application development</h2>(--save-dev = модули только для разработки)
<ul>
  <li>Ставим среду разработки, например, <em><a href='https://code.visualstudio.com/' target='_blank'>VS Code</a></em><br/>
    Для <em>VSCode</em> рекомендуется доставить расширение для подсветки кода из реестра расширений, опять же, например, <em>Babel JavaScript</em>
  <li>Ставим <em><a href='https://nodejs.org/' target='_blank'>NodeJS</a></em> и инициализирем проект:<br/>
    <ul>
      <li>Качаем дистрибутив и устанавливаем софт</li>
      <li>Запускаем командную строку <em>nodeJS</em>, ищем и создаем папку для проекта, заходим туда инициализируемся:<br><code>npm init</code></li>
    </ul>
  </li>
  <li>Ставим локальную тестовую базу <em><a href='https://www.postgresql.org/' target='_blank'>PostgreSQL</a></em> и прочие сопутствующие действия:<br/>
    <ul>
      <li>Качаем дистрибутив и устанавливаем софт</li>
      <li>Ставим инструмент управления SQL-базой данных - <em><a href='https://www.pgadmin.org/' target='_blank'>pgAdmin 4</a></em></li>
      <li>Создаем админов, базу с именем <em>jodec</em>, выдаем прав</li>
      <li>Ставим пакет <em>pg</em> для взаимодействия с <em>PostgreSQL</em> со стороны сервера:<br/><code>npm install pg --save</code></li>
      <li>Досоздаем/импортируем <a href=''>таблички</a> (пока еще нет) согласно <a href='https://docs.google.com/spreadsheets/d/1KnEeRZKb3LuneFByxGef5KsWHXx5MmgdAbrALlYJo5k'>схеме БД</a></li>
      <li>Импортируем тестовые объекты <a href=''>объекты</a> (пока еще нет)</li>
    </ul>
  </li>
  <li>Ставим <em><a href='https://expressjs.com/' target='_blank'>Express</a></em>:<br/><code>npm install express --save</code></li>
  <li>Ставим <em><a href='https://reactjs.org/' target='_blank'>React</a></em> с <a href='https://reactrouter.com/' target='_blank'>React-router<a/>'ом:<br/><code>npm install react react-dom react-router-dom --save</code></li>
  <li>Ставим <em><a href='https://www.typescriptlang.org/'>TypeScript</a></em> и его типизацию для <em>React</em>'a и <em>React-router</em>'а и <em>Express</em>'а:<br/><code>npm install typescript @types/react @types/react-dom @types/react-router-dom @types/express --save-dev</code></li>
  <li>
    Ставим модули <em><a href='https://webpack.js.org/' target='_blank'>Webpack</a></em> для сборки итоговых файлов - bandle'ов:<br/>
    <code>npm install webpack html-webpack-plugin webpack-cli webpack-dev-server webpack-notifier ts-loader mini-css-extract-plugin webpack-node-externals terser-webpack-plugin --save-dev</code>
    <ul>
      <li><em>webpack</em> - непосрдственно сам сборщик</li>
      <li><em>html-webpack-plugin</em> - нужен для генерации html по заданному шаблону, в котором будут ссылки на собранные bandle'ы</li>
      <li><em>webpack-cli</em> - позволяет работать с <em>Webpack</em>'ом из консоли</li>
      <li><em>webpack-dev-server</em> - небольшой сервер для разработки и отладки клиентской части, кстати, внутрях он тоже <em>Express</em></li>
      <li><em>webpack-notifier</em> - будет показывать нам уведомления, если вдруг что-то где-то сломаем</li>
      <li><em>ts-loader</em> - инжектор <em>TypeScript</em>'а в <em>Webpack</em>, т.е. конвертирует TS исходники в JS код при сборке</li>
      <li><em>mini-css-extract-plugin</em> - плагин, который выгрузит стили не в JS-файлы, а в отдельный CSS-файл для каждого JS</li>
      <li><em>webpack-node-externals</em> - плагин, позволяющий исключать из сборки <em>node_modules</em> по умолчанию</li>
      <li><em>terser-webpack-plugin</em> - плагин, минимизирующий итоговые JS-файлы</li>
     </ul>
  </li>
  <li>Устанавливаем CSS-препроцессор <em><a href='https://stylus-lang.com/' target='_blank'>Stylus</a></em> и модули для сборки стилей в <em>Webpack</em>:<br/><code>npm install stylus stylus-loader css-loader style-loader autoprefixer postcss-csso postcss-loader --save-dev</code>
    <ul>
        <li><em>stylus</em> - непосрдственно сам CSS-препроцессор</li>
        <li><em>stylus-loader</em> - инжектор <em>Stylus</em>'а в <em>Webpack</em>, т.е. преобразует файлы STYL в CSS</li>
        <li><em>css-loader</em> - позволит нам работать в стилях с @import как import/require в JS</li>
        <li><em>style-loader</em> - встраивает наши стили в DOM</li>
        <li><em>autoprefixer</em> - в релизной сборке будет добавлять префиксы к некоторым стилям (например, -webkit-transition)</li>
        <li><em>postcss-csso</em> - плагин, который минифицирует CSS</li>
        <li><em>postcss-loader</em> - инжектор PostCSS'а в <em>Webpack</em></li>
      </ul>
      Для <em>VSCode</em> рекомендуется доставить расширение <em>Stylus</em> для маркировки кода соответствующих файлов
  </li>
   
  <li>Ставим <em><a href='https://eslint.org/' target='_blank'>ESLint</a></em>'ер и плагин для встраивания в сборку <em>Webpack</em><br/>
    <code>npm install eslint eslint-webpack-plugin --save-dev</code><br/>
    Для <em>VSCode</em> рекомендуется доставить расширение <em>ESLint</em> для проверки кода во время его написания, не дожидаясь сборки
  </li>
  <li>Структура папок и файлы-конфигураторы - берем версию приложения отсюда, с github.<br/>
    Конфигураторы:
    <ul>
      <li><em>package.json</em> - основной конфиг приложения, содержит список модулей-зависимостей, а также скрипты запускаемые из консоли, в том числе запуски сборок</li>
      <li><em>tsconfig.json</em> - параметры по конвертации TS</li>
      <li><em>webpack.config.js</em> - общая часть конфигураторов по сборке <em>Webpack</em>'ом для клиента и сервера</li>
      <li><em>webpack.client.js</em> - конфигурация по сборке клиента <em>Webpack</em>'ом</li>
      <li><em>webpack.server.js</em> - конфигурация по сборке сервера <em>Webpack</em>'ом</li>
      <li><em>postcss.config.js</em> - конфиг по сборке PostCSS</li>
      <li><em>.eslintrc</em> - конфигуратор со списком правил для линтинга(проверки/верификации кода)</li>
    </ul>
  </li>
</ul>
