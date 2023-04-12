# PICTURES GALLERY MAIN PAGE

Найден баг с ответом Failed to load resource: net::ERR_CONTENT_LENGTH_MISMATCH , при этом баге не грузятся некоторые картинки. Перезагрузите страницу для корректного отображения верстки и картинок. 

Главная страница галереи картин.
Live demo: https://valvalov22.github.io/paintingsGallery/

## Используемый стэк

+ React
+ Typescript
+ sass
+ axios
+ test-framework-team API
+ MobX
+ react-loader-spinner
+ Vite

### ГЛАВНАЯ СТРАНИЦА

![homepage](https://github.com/valvalov22/paintingsGallery/blob/main/readmeImg/home.png "homepage")

Главная страница включает в себя сетку картин, смену темы сайта, фильтры и пагинацию.

### ТЕМНАЯ ТЕМА

![darkTheme](https://github.com/valvalov22/paintingsGallery/blob/main/readmeImg/homeDark.png "darkTheme")

Темная тема сайта.

### ФИЛЬТРАЦИЯ

Фильтрация на странице осуществляется по нескольким параметрам: по имени картины, по автору, по локации и по дате.

Примеры фильтрации:

По авторам:

![authorFilter](https://github.com/valvalov22/paintingsGallery/blob/main/readmeImg/author.png "authorFilter")

По авторам и локации:

![authorLocationFilter](https://github.com/valvalov22/paintingsGallery/blob/main/readmeImg/authorLocation.png "authorLocationFilter")

По локации и дате:

![locationDate](https://github.com/valvalov22/paintingsGallery/blob/main/readmeImg/locationCreate.png "locationDate")

По имени картины:

![name](https://github.com/valvalov22/paintingsGallery/blob/main/readmeImg/search.png "name")

По полному имени картины:

![name](https://github.com/valvalov22/paintingsGallery/blob/main/readmeImg/fullSearch.png "name")

Если по запросу ничего не найдено:

![notFound](https://github.com/valvalov22/paintingsGallery/blob/main/readmeImg/notFound.png "notFound")

Также на странице присутствует спиннер, который отображается при загрузке картин.

### ПАГИНАЦИЯ

Пагинация показывается на странице только в случае, если по вашему запросу было найдено более 12 картин. Работает со всеми фильтрами.

![pagination](https://github.com/valvalov22/paintingsGallery/blob/main/readmeImg/pagination.png "pagination")

### КАРТОЧКИ КАРТИН

При наведении на картину будет показана полная информация о ней:

![hover](https://github.com/valvalov22/paintingsGallery/blob/main/readmeImg/hover.png "hover")


### АДАПТИВНАЯ ВЕРСТКА

На сайте реализована адаптивная резиновая верстка.
Пример страницы для разрешения 320px:

![mobile](https://github.com/valvalov22/paintingsGallery/blob/main/readmeImg/mobile.png "mobile")
