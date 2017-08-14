# AdProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.4.

## Ошибка с require Popper.js

Bootstrap перешел на [beta-версию](https://getbootstrap.com/) и требовал в зависимости библиотеку [Popper.js](https://github.com/FezVrasta/popper.js/). Разработка велась c [alpha-версией Bootstrap](https://v4-alpha.getbootstrap.com/) и она требовала в зависимости [Tether](https://github.com/HubSpot/tether/). Из-за того что в dependencies файла package.json было прописано `"bootstrap": "^4.0.0-alpha.6"`, то при установке приложения устонавливалась beta-версия Bootstrap и вылетала ошибка с `require Popper.js`.
Проблема решается или переходом на beta-версию Bootstrap или изменением файла package.json, а именно строки `"bootstrap": "^4.0.0-alpha.6"` на `"bootstrap": "4.0.0-alpha.6"`, чтобы при установке зависимостей устонавливалась только alpha-версия Bootstrap. Я выбрал `второй` вариант.

## Ошибка с cannot find a differ supporting object ' object object ' of type 'object'

Эта ошибка возникает когда для ngFor возврашается объект не являющийся массивом. Данной ошибки при обновлении проекта не обнаружил, поэтому решение предоставить не могу.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
