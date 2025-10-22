import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-hero-gradient min-h-[600px] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/champions-league-pattern.svg')] bg-repeat opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              ЕКСКЛЮЗИВНО
            </div>
            
            <div className="space-y-2">
              <div className="text-lg opacity-90">
                22:00, 22 жовтня | Студія 21:00
              </div>
            </div>
            
            {/* Team Logos and Match */}
            <div className="flex items-center space-x-8 my-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-2 bg-white/10 rounded-full flex items-center justify-center">
                  <Image
                    src="/images/real-madrid-logo.png"
                    alt="Real Madrid"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="text-sm font-medium">Реал Мадрид</div>
              </div>
              
              <div className="text-4xl font-bold opacity-50">VS</div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-2 bg-white/10 rounded-full flex items-center justify-center">
                  <Image
                    src="/images/juventus-logo.png"
                    alt="Juventus"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="text-sm font-medium">Ювентус</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                Дивитися
              </button>
              <button className="btn-secondary bg-white/20 text-white hover:bg-white/30">
                Детальніше
              </button>
            </div>
          </div>
          
          {/* Right Content - Players */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/players-hero.png"
                alt="Football Players"
                width={600}
                height={400}
                className="object-contain"
                priority
              />
            </div>
            
            {/* Champions League Logo */}
            <div className="absolute top-4 right-4 z-20">
              <Image
                src="/images/champions-league-logo.png"
                alt="UEFA Champions League"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-primary to-transparent"></div>
    </section>
  )
}