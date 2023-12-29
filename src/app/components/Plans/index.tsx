import { Package, SketchLogo } from '@phosphor-icons/react'
import { DetailsPlan } from './DetailsPlan'

type PlansProps = {
  title: string
  description: string
  price: string
  plan: 'basic' | 'premium'
}

export function Plans({ title, description, price, plan }: PlansProps) {
  return (
    <div className="m-auto mt-9 rounded-[10px] bg-white p-8 sm:w-[420px] xl:w-[420px]">
      <div className="flex gap-3">
        <div className={`flex h-[90px] w-[90px] items-center justify-center rounded-[10px] bg-secondary ${plan === 'basic' && 'bg-gray-100'}`}>
          {plan === 'basic' && <Package size={54} className="text-gray-300" />}
          {plan === 'premium' && <SketchLogo size={54} className="text-white" />}
        </div>

        <div className="flex-1">
          <div>
            <h3 className="text-start text-3xl font-black text-primary">
              {title}
            </h3>
            <p className="text-start text-sm text-gray-300 xl:text-base">
              {description}
            </p>
          </div>
        </div>
      </div>

      <h4 className="mt-5 text-start text-3xl font-black text-primary">
        R$ {price}
        <span className="text-base font-semibold">/mês</span>
      </h4>

      <div className="mt-5 border border-gray-100"></div>

      {plan === 'basic' && (
        <>
          <DetailsPlan description="Marcações online" />
          <DetailsPlan description="Marcações ilimitadas" />
          <DetailsPlan description="Lista de clientes" />
          <DetailsPlan description="Sem limites de profissionais" />
          <DetailsPlan description="Lembretes por e-amil" />
        </>
      )}

      {plan === 'premium' && (
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
