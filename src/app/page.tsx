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

export default function Home() {
  return (
    <div className="w-full">
      <div className="max-sm:flex max-sm:flex-col gap-5 lg:w-[1280px] m-auto flex justify-between items-center p-4">
        <Image src={LogoSvg} alt="Logo - WANHUN Solutions" />

        <ul className="text-base flex gap-5 max-sm:mt-5 max-md:mt-5 font-normal">
          <Link
            href="#functionality"
            className="hover:text-secondary transition-all duration-300 ease-linear"
          >
            Funcionalidades
          </Link>
          <Link
            href="#solutions"
            className="hover:text-secondary transition-all duration-300 ease-linear"
          >
            Soluções
          </Link>
          <Link
            href="#price"
            className="hover:text-secondary transition-all duration-300 ease-linear"
          >
            Preço
          </Link>
        </ul>
      </div>

      <div className="grid max-sm:grid-cols-1 max-md:grid-cols-1 grid-cols-2 lg:w-[1280px] justify-between max-sm:items-center max-md:items-center m-auto p-8">
        <div className="flex flex-col justify-center max-sm:items-center max-md:items-center lg:w-[429px]">
          <h1 className="text-5xl font-black text-primary max-sm:text-center max-md:text-center">
            Software de gestão para agendamentos
          </h1>
          <p className="text-2xl text-gray-300 mt-5 max-sm:text-center max-md:text-center">
            Cuide dos seus clientes enquanto organizamos a agenda da sua
            empresa.
          </p>

          <div className="flex gap-2 mt-4 text-sm text-gray-300">
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

          <button className="w-[193px] h-[28px] mt-5 text-base text-white bg-secondary rounded-full font-semibold">
            Cadastre-se
          </button>
        </div>

        <div className="flex justify-end">
          <Image src={BannerCalendarSvg} className="w-full" alt="Gráfico" />
        </div>
      </div>

      <div className="grid grid-cols-2 max-sm:grid-cols-1 p-8 mt-32 xl:grid-cols-2 lg:w-[1280px] lg:mt-56  justify-between items-center m-auto">
        <div className="order-1 max-sm:order-2 max-sm:m-auto max-md:m-auto">
          <Image src={BusinessCasePng} alt="Business Case" />
        </div>

        <div
          id="functionality"
          className="m-auto order-1 lg:order-2 max-sm:text-center max-md:text-center"
        >
          <span className="text-2xl block">Funcionalidades</span>
          <h2 className="text-3xl lg:text-5xl mt-2 font-black text-primary">
            Os clientes fazem o agendamento de forma fácil
          </h2>
          <p className="text-xl xl:text-2xl text-gray-300 mt-5 mb-5">
            Faça a gestão dos seus agendamentos online, através do seu website
            ou de onde aos seus clientes estiverem.
          </p>
        </div>
      </div>

      <div
        id="solutions"
        className="lg:w-[1280px] max-sm:mt-32 max-md:mt-32 mt-32 lg:mt-56 justify-center text-center items-center m-auto"
      >
        <div className="sm:w-[420px] xl:w-[620px] m-auto">
          <span className="text-2xl block">Ajustado para o seu negócio</span>
          <h3 className="text-3xl xl:text-5xl mt-2 font-black text-primary">
            Uma solução para todos os empreendimentos
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-3 max-sm:grid-cols-3 max-sm:m-auto max-md:m-auto lg:w-[60%] m-auto lg:flex lg:m-auto mt-8 gap-2 p-8">
        <GadgetBusiness title="Barbearia" icon={Scissors} />
        <GadgetBusiness title="Salão de Beleza" icon={Waves} />
        <GadgetBusiness title="Estécica" icon={Smiley} />
        <GadgetBusiness title="Odonto" icon={Tooth} />
        <GadgetBusiness title="Psicologia" icon={Brain} />
        <GadgetBusiness title="Pets" icon={PawPrint} />
        <GadgetBusiness title="Spas" icon={Leaf} />
      </div>

      <div
        id="price"
        className="xl:w-[1280px] justify-center text-center items-center m-auto mt-32 lg:mt-56 p-8"
      >
        <div className="sm:w-[420px] xl:w-[620px] m-auto">
          <h3 className="text-3xl xl:text-5xl font-black text-primary">
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

      <div className="xl:w-[1280px] mt-32 justify-center text-center items-center m-auto p-8">
        <div className="sm:w-[420px] xl:w-[620px] m-auto">
          <h3 className="text-3xl xl:text-5xl font-black text-primary">
            Sua empresa merece aquele potêncial de qualidade
          </h3>
        </div>

        <Plans
          title="Plus"
          description="Aumente as funcionalidades 
          da sua empresa"
          price="25"
          plan="plus"
        />
      </div>
    </div>
  )
}
