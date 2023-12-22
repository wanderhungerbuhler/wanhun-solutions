'use client'
import Image from 'next/image'
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
      <div className="relative m-auto mt-16 flex h-[380px] grid-cols-3 gap-2 overflow-hidden lg:w-[1024px]">
        <div className="relative flex h-full w-full cursor-pointer overflow-hidden md:rounded-lg">
          <Image
            src="https://github.com/wanderhungerbuhler.png"
            alt=""
            fill
            quality={100}
            objectFit="cover"
          />
        </div>
        <div className="relative hidden h-full w-[425px] overflow-hidden md:inline-block md:rounded-[10px]">
          <Image
            src="https://github.com/wanderhungerbuhler.png"
            alt=""
            fill
            quality={100}
            objectFit="cover"
          />
        </div>
        <div className="relative hidden h-full w-[425px] overflow-hidden md:inline-block md:rounded-[10px]">
          <Image
            src="https://github.com/wanderhungerbuhler.png"
            alt=""
            fill
            quality={100}
            objectFit="cover"
          />
        </div>
        <div className="relative hidden h-full w-[425px] overflow-hidden md:inline-block md:rounded-[10px]">
          <Image
            src="https://github.com/wanderhungerbuhler.png"
            alt=""
            fill
            quality={100}
            objectFit="cover"
          />
        </div>
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
