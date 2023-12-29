'use client'
import Link from 'next/link'
import Image from 'next/image'
import {
  Brain,
  CheckCircle,
  Leaf,
  PawPrint,
  Scissors,
  Smiley,
  Tooth,
  Waves,
} from '@phosphor-icons/react'

import '@/app/styles/global.css'

import LogoSvg from '@/app/assets/logo.svg'
import BannerCalendarSvg from '@/app/assets/banner-calendar.svg'
import BusinessCasePng from '@/app/assets/business-case.svg'
import { GadgetBusiness } from './components/GadgetBusiness'
import { Plans } from './components/Plans'
import { ButtonLanguages } from './components/ButtonLanguages'

export default function Home() {
  return (
    <div className="w-full">
      <div className="m-auto flex items-center justify-between gap-5 p-4 max-sm:flex max-sm:flex-col lg:w-[1280px]">
        <Image src={LogoSvg} alt="Logo - WANHUN Solutions" />

        <ul className="flex gap-5 text-base font-normal max-md:mt-5 max-sm:mt-5">
          <Link
            href="#functionality"
            className="transition-all duration-300 ease-linear hover:text-secondary"
          >
            Funcionalidades
          </Link>
          <Link
            href="#solutions"
            className="transition-all duration-300 ease-linear hover:text-secondary"
          >
            Soluções
          </Link>
          <Link
            href="#price"
            className="transition-all duration-300 ease-linear hover:text-secondary"
          >
            Preço
          </Link>
        </ul>

        <ButtonLanguages />
      </div>

      <div className="m-auto grid grid-cols-2 justify-between p-8 max-md:grid-cols-1 max-md:items-center max-sm:grid-cols-1 max-sm:items-center lg:w-[1280px]">
        <div className="flex flex-col justify-center max-md:items-center max-sm:items-center lg:w-[429px]">
          <h1 className="text-5xl font-black text-primary max-md:text-center max-sm:text-center">
            Software de gestão para agendamentos
          </h1>
          <p className="mt-5 text-2xl text-gray-300 max-md:text-center max-sm:text-center">
            Cuide dos seus clientes enquanto organizamos a agenda da sua
            empresa.
          </p>

          <div className="mt-4 flex gap-2 text-sm text-gray-300">
            <p className="flex items-center gap-1">
              <CheckCircle className="text-secondary" />
              Agenda online
            </p>
            <p className="flex items-center gap-1">
              <CheckCircle className="text-secondary" />
              Histórico de clientes
            </p>
            <p className="flex items-center gap-1">
              <CheckCircle className="text-secondary" />
              Flexibilidade
            </p>
          </div>

          <button className="mt-5 h-[28px] w-[193px] rounded-full bg-secondary text-base font-semibold text-white">
            Cadastre-se
          </button>
        </div>

        <div className="flex justify-end">
          <Image src={BannerCalendarSvg} className="w-full" alt="Gráfico" />
        </div>
      </div>

      <div className="m-auto mt-32 grid grid-cols-2 items-center justify-between p-8 max-sm:grid-cols-1  lg:mt-56 lg:w-[1280px] xl:grid-cols-2">
        <div className="order-1 max-md:m-auto max-sm:order-2 max-sm:m-auto">
          <Image src={BusinessCasePng} alt="Business Case" />
        </div>

        <div
          id="functionality"
          className="order-1 m-auto max-md:text-center max-sm:text-center lg:order-2"
        >
          <span className="block text-2xl">Funcionalidades</span>
          <h2 className="mt-2 text-3xl font-black text-primary lg:text-5xl">
            Os clientes fazem o agendamento de forma fácil
          </h2>
          <p className="mb-5 mt-5 text-xl text-gray-300 xl:text-2xl">
            Faça a gestão dos seus agendamentos online, através do seu website
            ou de onde os seus clientes estiverem.
          </p>
          <div className="mt-4 flex gap-2 text-sm text-gray-300">
            <p className="flex items-center gap-1">
              <CheckCircle className="text-secondary" />
              Calendário de agendamentos
            </p>
            <p className="flex items-center gap-1">
              <CheckCircle className="text-secondary" />
              Confirmação por e-mail
            </p>
          </div>
        </div>
      </div>

      <div
        id="solutions"
        className="m-auto mt-32 items-center justify-center text-center max-md:mt-32 max-sm:mt-32 lg:mt-56 lg:w-[1280px]"
      >
        <div className="m-auto sm:w-[420px] xl:w-[620px]">
          <span className="block text-2xl">Ajustado para o seu negócio</span>
          <h3 className="mt-2 text-3xl font-black text-primary xl:text-5xl">
            Uma solução para todos os empreendimentos
          </h3>
        </div>
      </div>

      <div className="m-auto mt-8 grid grid-cols-3 gap-2 p-8 max-md:m-auto max-sm:m-auto max-sm:grid-cols-3 lg:m-auto lg:flex lg:w-[60%]">
        <GadgetBusiness title="Barbearia" icon={Scissors} />
        <GadgetBusiness title="Salão de Beleza" icon={Waves} />
        <GadgetBusiness title="Estética" icon={Smiley} />
        <GadgetBusiness title="Odonto" icon={Tooth} />
        <GadgetBusiness title="Psicologia" icon={Brain} />
        <GadgetBusiness title="Pets" icon={PawPrint} />
        <GadgetBusiness title="Spas" icon={Leaf} />
      </div>

      <div
        id="price"
        className="m-auto mt-32 items-center justify-center p-8 text-center lg:mt-56 xl:w-[1280px]"
      >
        <div className="m-auto sm:w-[420px] xl:w-[620px]">
          <h3 className="text-3xl font-black text-primary xl:text-5xl">
            O melhor sistema de forma{' '}
            <span className="text-secondary">gratuita</span> para o seu projeto
          </h3>
        </div>

        <Plans
          title="Básico"
          description="Os seus agendamentos sem gastar muito, ou melhor, nada!"
          price="0"
          plan="basic"
        />
      </div>

      <div className="m-auto mt-32 items-center justify-center p-8 text-center xl:w-[1280px]">
        <div className="m-auto sm:w-[420px] xl:w-[620px]">
          <h3 className="text-3xl font-black text-primary xl:text-5xl">
            Sua empresa merece aquele potêncial de qualidade
          </h3>
        </div>

        <Plans
          title="Plus"
          description="Aumente as funcionalidades 
          da sua empresa"
          price="25"
          plan="premium"
        />
      </div>
    </div>
  )
}
