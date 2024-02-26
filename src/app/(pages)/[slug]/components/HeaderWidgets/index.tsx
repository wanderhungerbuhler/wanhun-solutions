import Image from 'next/image'
import Link from 'next/link'

import LogoBlackSvg from '@/assets/logo-black.svg'
import { ButtonLanguages } from '@/components/ButtonLanguages'

export function HeaderWidgets() {
  return (
    <div className="flex border border-b-2 border-b-gray-200 bg-white p-4">
      <div className="m-auto flex w-[1024px] items-center justify-between">
        <Image src={LogoBlackSvg} width={110} alt="Logo - WANHUN Solutions" />

        <div className="flex gap-8 text-base text-gray-300">
          <Link href="/">Para sua empresa</Link>
          <ButtonLanguages />
        </div>
      </div>
    </div>
  )
}
