import Image from 'next/image'

interface ContentCardProps {
  title: string
  subtitle: string
  image: string
  badge?: string
}

export default function ContentCard({ title, subtitle, image, badge }: ContentCardProps) {
  return (
    <div className="content-card group cursor-pointer">
      <div className="relative aspect-[3/4] bg-secondary-200 rounded-lg overflow-hidden mb-3">
        {/* Placeholder for image */}
        <div className="w-full h-full bg-gradient-to-br from-secondary-200 to-secondary-300 flex items-center justify-center">
          <div className="text-secondary-500 text-xs text-center p-2">
            {title}
          </div>
        </div>
        
        {/* Badge */}
        {badge && (
          <div className="absolute top-2 left-2 bg-accent-red text-white text-xs px-2 py-1 rounded">
            {badge}
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <div className="text-white text-sm font-medium">Дивитися</div>
        </div>
      </div>
      
      <div className="p-3">
        <h3 className="text-sm font-medium text-text-primary mb-1 line-clamp-2">
          {title}
        </h3>
        <p className="text-xs text-text-secondary">
          {subtitle}
        </p>
      </div>
    </div>
  )
}