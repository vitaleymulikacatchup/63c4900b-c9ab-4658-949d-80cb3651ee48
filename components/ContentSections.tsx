import ContentGrid from './ContentGrid'

const contentSections = [
  {
    title: 'Зірки та персонажі',
    items: [
      { title: 'Актор 1', subtitle: 'Драма', image: '/images/content-1.jpg', badge: 'ТОП' },
      { title: 'Актор 2', subtitle: 'Комедія', image: '/images/content-2.jpg' },
      { title: 'Актор 3', subtitle: 'Бойовик', image: '/images/content-3.jpg' },
      { title: 'Актор 4', subtitle: 'Трилер', image: '/images/content-4.jpg' },
      { title: 'Актор 5', subtitle: 'Фантастика', image: '/images/content-5.jpg' },
      { title: 'Актор 6', subtitle: 'Драма', image: '/images/content-6.jpg' }
    ]
  },
  {
    title: 'Прем\'єри в стрічці в кінотеатрі',
    items: [
      { title: 'Фільм 1', subtitle: 'Прем\'єра', image: '/images/movie-1.jpg', badge: 'НОВИНКА' },
      { title: 'Фільм 2', subtitle: 'Драма', image: '/images/movie-2.jpg' },
      { title: 'Фільм 3', subtitle: 'Комедія', image: '/images/movie-3.jpg' },
      { title: 'Фільм 4', subtitle: 'Бойовик', image: '/images/movie-4.jpg' },
      { title: 'Фільм 5', subtitle: 'Трилер', image: '/images/movie-5.jpg' },
      { title: 'Фільм 6', subtitle: 'Фантастика', image: '/images/movie-6.jpg' }
    ]
  },
  {
    title: 'Прем\'єри',
    items: [
      { title: 'Серіал 1', subtitle: 'Драма', image: '/images/series-1.jpg' },
      { title: 'Серіал 2', subtitle: 'Комедія', image: '/images/series-2.jpg' },
      { title: 'Серіал 3', subtitle: 'Детектив', image: '/images/series-3.jpg' },
      { title: 'Серіал 4', subtitle: 'Фантастика', image: '/images/series-4.jpg' },
      { title: 'Серіал 5', subtitle: 'Трилер', image: '/images/series-5.jpg' },
      { title: 'Серіал 6', subtitle: 'Драма', image: '/images/series-6.jpg' }
    ]
  },
  {
    title: 'У кінотеатрі досі грають',
    items: [
      { title: 'Кіно 1', subtitle: 'У кінотеатрах', image: '/images/cinema-1.jpg' },
      { title: 'Кіно 2', subtitle: 'Бойовик', image: '/images/cinema-2.jpg' },
      { title: 'Кіно 3', subtitle: 'Комедія', image: '/images/cinema-3.jpg' },
      { title: 'Кіно 4', subtitle: 'Драма', image: '/images/cinema-4.jpg' },
      { title: 'Кіно 5', subtitle: 'Фантастика', image: '/images/cinema-5.jpg' },
      { title: 'Кіно 6', subtitle: 'Трилер', image: '/images/cinema-6.jpg' }
    ]
  },
  {
    title: 'Топ серіалів MEGOGO',
    items: [
      { title: 'Топ серіал 1', subtitle: 'Драма', image: '/images/top-series-1.jpg', badge: 'ТОП' },
      { title: 'Топ серіал 2', subtitle: 'Комедія', image: '/images/top-series-2.jpg' },
      { title: 'Топ серіал 3', subtitle: 'Детектив', image: '/images/top-series-3.jpg' },
      { title: 'Топ серіал 4', subtitle: 'Фантастика', image: '/images/top-series-4.jpg' },
      { title: 'Топ серіал 5', subtitle: 'Трилер', image: '/images/top-series-5.jpg' },
      { title: 'Топ серіал 6', subtitle: 'Драма', image: '/images/top-series-6.jpg' }
    ]
  },
  {
    title: 'Топи серіалів Netflix',
    items: [
      { title: 'Netflix 1', subtitle: 'Оригінал Netflix', image: '/images/netflix-1.jpg' },
      { title: 'Netflix 2', subtitle: 'Драма', image: '/images/netflix-2.jpg' },
      { title: 'Netflix 3', subtitle: 'Комедія', image: '/images/netflix-3.jpg' },
      { title: 'Netflix 4', subtitle: 'Фантастика', image: '/images/netflix-4.jpg' },
      { title: 'Netflix 5', subtitle: 'Трилер', image: '/images/netflix-5.jpg' },
      { title: 'Netflix 6', subtitle: 'Детектив', image: '/images/netflix-6.jpg' }
    ]
  },
  {
    title: 'Топи серіалів в жанрах',
    items: [
      { title: 'Жанр 1', subtitle: 'Драма', image: '/images/genre-1.jpg' },
      { title: 'Жанр 2', subtitle: 'Комедія', image: '/images/genre-2.jpg' },
      { title: 'Жанр 3', subtitle: 'Бойовик', image: '/images/genre-3.jpg' },
      { title: 'Жанр 4', subtitle: 'Фантастика', image: '/images/genre-4.jpg' },
      { title: 'Жанр 5', subtitle: 'Трилер', image: '/images/genre-5.jpg' },
      { title: 'Жанр 6', subtitle: 'Детектив', image: '/images/genre-6.jpg' }
    ]
  },
  {
    title: 'Що дивиться аудиторія',
    items: [
      { title: 'Популярне 1', subtitle: 'Трендинг', image: '/images/trending-1.jpg' },
      { title: 'Популярне 2', subtitle: 'Драма', image: '/images/trending-2.jpg' },
      { title: 'Популярне 3', subtitle: 'Комедія', image: '/images/trending-3.jpg' },
      { title: 'Популярне 4', subtitle: 'Бойовик', image: '/images/trending-4.jpg' },
      { title: 'Популярне 5', subtitle: 'Фантастика', image: '/images/trending-5.jpg' },
      { title: 'Популярне 6', subtitle: 'Трилер', image: '/images/trending-6.jpg' }
    ]
  },
  {
    title: 'Серіали HBO',
    items: [
      { title: 'HBO 1', subtitle: 'Оригінал HBO', image: '/images/hbo-1.jpg' },
      { title: 'HBO 2', subtitle: 'Драма', image: '/images/hbo-2.jpg' },
      { title: 'HBO 3', subtitle: 'Комедія', image: '/images/hbo-3.jpg' },
      { title: 'HBO 4', subtitle: 'Фантастика', image: '/images/hbo-4.jpg' },
      { title: 'HBO 5', subtitle: 'Трилер', image: '/images/hbo-5.jpg' },
      { title: 'HBO 6', subtitle: 'Детектив', image: '/images/hbo-6.jpg' }
    ]
  },
  {
    title: 'Популярні фільми українською мовою',
    items: [
      { title: 'Український фільм 1', subtitle: 'Українською', image: '/images/ua-movie-1.jpg' },
      { title: 'Український фільм 2', subtitle: 'Драма', image: '/images/ua-movie-2.jpg' },
      { title: 'Український фільм 3', subtitle: 'Комедія', image: '/images/ua-movie-3.jpg' },
      { title: 'Український фільм 4', subtitle: 'Бойовик', image: '/images/ua-movie-4.jpg' },
      { title: 'Український фільм 5', subtitle: 'Фантастика', image: '/images/ua-movie-5.jpg' },
      { title: 'Український фільм 6', subtitle: 'Трилер', image: '/images/ua-movie-6.jpg' }
    ]
  }
]

export default function ContentSections() {
  return (
    <div className="bg-background-secondary py-12">
      <div className="container mx-auto px-4 space-y-12">
        {/* TV Channels Section */}
        <section>
          <h2 className="section-title">Дивіться на ТВ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
              <div className="text-lg font-bold">1+1</div>
              <div className="text-sm opacity-80">Телеканал</div>
            </div>
            <div className="bg-green-600 text-white p-6 rounded-lg text-center">
              <div className="text-lg font-bold">ICTV</div>
              <div className="text-sm opacity-80">Новини</div>
            </div>
            <div className="bg-orange-600 text-white p-6 rounded-lg text-center">
              <div className="text-lg font-bold">СТБ</div>
              <div className="text-sm opacity-80">Розваги</div>
            </div>
            <div className="bg-red-600 text-white p-6 rounded-lg text-center">
              <div className="text-lg font-bold">Новий канал</div>
              <div className="text-sm opacity-80">Розваги</div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        {contentSections.map((section, index) => (
          <ContentGrid
            key={index}
            title={section.title}
            items={section.items}
          />
        ))}

        {/* Special Offers Section */}
        <section>
          <h2 className="section-title">Вигідні пропозиції на акціонт - дивіться за півціни</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="content-card p-4">
                <div className="aspect-video bg-secondary-200 rounded-lg mb-3"></div>
                <div className="text-sm font-medium mb-1">Спеціальна пропозиція {item}</div>
                <div className="text-xs text-text-secondary">Знижка до 50%</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}