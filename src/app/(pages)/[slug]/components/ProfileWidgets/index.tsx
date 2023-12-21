import {
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
  TwitterLogo,
  YoutubeLogo,
} from '@phosphor-icons/react'
import Link from 'next/link'

import { AvatarWidgets } from '../AvatarWidgets'
import { DescriptionWidgets } from '../DescriptionWidgets'
import { Professionals } from '../Professionals'

export function ProfileWidgets() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <AvatarWidgets image="https://github.com/wanderhungerbuhler.png" />
        <div className="flex flex-col text-gray-300">
          <h2 className="flex flex-col text-2xl font-black text-primary">
            <span
              className="w-[55%] rounded-full bg-auxiliary-success text-center
            text-xs text-white"
            >
              Aberto até 19:00
            </span>
            Aveiros Barbershop
          </h2>
          <div className="flex gap-5">
            <Link href="#">
              <InstagramLogo size={20} weight="fill" />
            </Link>
            <Link href="#">
              <FacebookLogo size={20} weight="fill" />
            </Link>
            <Link href="#">
              <TwitterLogo size={20} weight="fill" />
            </Link>
            <Link href="#">
              <TiktokLogo size={20} weight="fill" />
            </Link>
            <Link href="#">
              <YoutubeLogo size={20} weight="fill" />
            </Link>
          </div>
        </div>
      </div>

      <DescriptionWidgets />
      <Professionals />
    </div>
  )
}
