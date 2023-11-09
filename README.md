# BusinessWolf
Образовательная платформа для бизнес-школы "Бизнес-Волченок"

## Иерархия папок в ветке.
Папка backend отвечает за серверную часть, написанную на Python Django. 

В папке frontend - клиентская часть на TS + React

## Как запустить проект?
Запускаем сначала сервер.

Вам потребуется установить Django.
`pip install Django`

Перемещаемся в папку с сервером
`cd backend`
Поднимаем сервер `python manage.py runserver`

Для запуска клиент-части сервиса вам понадобится открыть новый терминал, обычно в IDE это кнопка "New Terminal".

Перемещаемся в папку с фронтендом,
`cd frontend`
устанавливаем недостающие пакеты,
`npm install`
запускаем приложение.
`npm start`
