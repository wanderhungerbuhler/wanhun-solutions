'use client'

import { useRouter } from 'next/navigation'
import { MapsWidgets } from './components/MapsWidgets'
import { BtnActionsWidgets } from './components/BtnActionsWidgets'
import { ProfileWidgets } from './components/ProfileWidgets'
import { HeaderWidgets } from './components/HeaderWidgets'

type PagesProps = {
  params: {
    slug: string
  }
}

export default function Pages({ params }: PagesProps) {
  const router = useRouter()

  const db = 'aveirosbarbershop'

  return params.slug === db ? (
    <div className="w-full">
      <HeaderWidgets />

      <div className="m-auto mt-16 h-[380px] bg-red-400 lg:w-[1024px]">
        <p>Post: {params.slug}</p>
      </div>

      <div className="m-auto mt-7 p-8 lg:w-[1024px] lg:p-0">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-[200px]">
          <ProfileWidgets />

          <div className="flex flex-col gap-3">
            <BtnActionsWidgets />
            <MapsWidgets />
          </div>
        </div>
      </div>
    </div>
  ) : (
    router.push('/')
  )
}
