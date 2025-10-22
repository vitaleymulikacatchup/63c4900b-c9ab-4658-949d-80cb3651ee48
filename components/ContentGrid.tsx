'use client'

import { ChevronRight } from 'lucide-react'
import ContentCard from './ContentCard'

interface ContentItem {
  title: string
  subtitle: string
  image: string
  badge?: string
}

interface ContentGridProps {
  title: string
  items: ContentItem[]
}

export default function ContentGrid({ title, items }: ContentGridProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-title">{title}</h2>
        <button className="flex items-center text-accent-orange hover:text-orange-600 transition-colors duration-200">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map((item, index) => (
          <ContentCard
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            badge={item.badge}
          />
        ))}
      </div>
    </section>
  )
}