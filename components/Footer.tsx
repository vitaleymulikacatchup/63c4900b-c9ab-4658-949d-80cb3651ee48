import { Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold mb-4">Користувачам і партнерам</h3>
            <ul className="space-y-2 text-sm text-secondary-300">
              <li><a href="#" className="hover:text-white transition-colors">Усе про передплати</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Програма лояльності</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Активувати промокод</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Умови користувача</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Політика конфіденційності</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Доступність</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Про нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Розважально MEGOGO разом</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Спосіб оплати</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Вакансії</a></li>
              <li><a href="#" className="hover:text-white transition-colors">MEGOGO BOOKS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Листівки близьким на MEGOGO</a></li>
            </ul>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-4">Партнерам</h3>
            <ul className="space-y-2 text-sm text-secondary-300">
              <li><a href="#" className="hover:text-white transition-colors">Вихідні дані</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Структура власності</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакти</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Гайдлайн</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Преса</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Співпраця</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Додати контент</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Партнерська програма</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Дистрибуція передплат</a></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-4">Допомога</h3>
            <ul className="space-y-2 text-sm text-secondary-300">
              <li><a href="#" className="hover:text-white transition-colors">Технічна підтримка</a></li>
            </ul>
          </div>
          
          {/* Column 4 */}
          <div>
            <h3 className="font-semibold mb-4">Підтримка користувачів</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-secondary-300 mb-1">Усі контакти</div>
                <div className="text-sm text-secondary-300 mb-1">Питання та відповіді</div>
              </div>
              
              <div>
                <div className="text-2xl font-bold mb-2">0 800 60 12 34</div>
                <div className="text-xs text-secondary-400 mb-1">За дзвінки мобільного оператора може стягуватися плата</div>
                <div className="text-sm text-secondary-300 mb-1">+380 93 555 51 25</div>
                <div className="text-sm text-secondary-300 mb-4">+380 67 555 51 25</div>
                <div className="text-sm text-secondary-300">support@megogo.net</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-secondary-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Apps */}
            <div>
              <h4 className="font-semibold mb-4">Наші застосунки</h4>
              <div className="flex space-x-4">
                <div className="bg-secondary-800 p-2 rounded">
                  <div className="text-xs">Smart TV</div>
                </div>
                <div className="bg-secondary-800 p-2 rounded">
                  <div className="text-xs">App Store</div>
                </div>
                <div className="bg-secondary-800 p-2 rounded">
                  <div className="text-xs">Google Play</div>
                </div>
                <div className="bg-secondary-800 p-2 rounded">
                  <div className="text-xs">AppGallery</div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Ми в соцмережах</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-secondary-800 rounded-full hover:bg-secondary-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-secondary-800 rounded-full hover:bg-secondary-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-secondary-800 rounded-full hover:bg-secondary-700 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-secondary-800 rounded-full hover:bg-secondary-700 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-secondary-800 rounded-full hover:bg-secondary-700 transition-colors">
                  <Send className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-secondary-800 rounded-full hover:bg-secondary-700 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-secondary-700">
            <p className="text-sm text-secondary-400">
              © 2025 MEGOGO. Всі права захищені.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}