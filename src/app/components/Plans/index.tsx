import { Package, SketchLogo } from '@phosphor-icons/react'
import { DetailsPlan } from './DetailsPlan'

type PlansProps = {
  title: string
  description: string
  price: string
  plan: 'basic' | 'plus'
}

export function Plans({ title, description, price, plan }: PlansProps) {
  return (
    <div className="bg-white rounded-[10px] sm:w-[420px] xl:w-[420px] m-auto mt-9 p-8">
      <div className="flex gap-3">
        <div className="bg-secondary w-[90px] h-[90px] flex justify-center items-center rounded-[10px]">
          {plan === 'basic' && <Package size={54} className="text-white" />}
          {plan === 'plus' && <SketchLogo size={54} className="text-white" />}
        </div>

        <div className="flex-1">
          <div>
            <h3 className="text-primary text-start text-3xl font-black">
              {title}
            </h3>
            <p className="text-gray-300 text-sm xl:text-base text-start">
              {description}
            </p>
          </div>
        </div>
      </div>

      <h4 className="text-primary mt-5 text-start font-black text-3xl">
        R$ {price}
        <span className="text-base font-semibold">/mês</span>
      </h4>

      <div className="border mt-5 border-gray-100"></div>

      {plan === 'basic' && (
        <>
          <DetailsPlan description="Marcações online" />
          <DetailsPlan description="Marcações ilimitada" />
          <DetailsPlan description="Lista de clientes" />
          <DetailsPlan description="Sem limites de profissionais" />
          <DetailsPlan description="Lembretes por e-amil" />
        </>
      )}

      {plan === 'plus' && (
        <>
          <DetailsPlan description="Website da sua empresa" />
          <DetailsPlan description="Visibilidade no Google" />
          <DetailsPlan description="Histórico ilimitado de clientes" />
          <DetailsPlan description="Ranking de recomendações" />
          <DetailsPlan description="Dados analíticos" />
        </>
      )}
    </div>
  )
}
