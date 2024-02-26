import {
  CalendarCheck,
  Envelope,
  PhoneCall,
  ShareFat,
  ThumbsUp,
  XCircle,
} from '@phosphor-icons/react'
import { CallToActions } from '../CallToActions'

import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

const Calendar = () => {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])
  return (
    <div className="fixed inset-0 m-auto flex h-[50%] w-[50%] flex-col items-center justify-center rounded-lg bg-white shadow-lg">
      <label className="relative cursor-pointer">
        <input
          type="checkbox"
          data-cal-namespace=""
          data-cal-link="wanderhungerbuhler/cabelo"
          data-cal-config='{"layout":"month_view"}'
          className="peer sr-only"
        />
        <div className="peer flex items-center justify-center gap-2 font-semibold text-primary">
          <div className="h-[40px] w-[40px] rounded-lg bg-gray-300" />
          Corte de Cabelo
        </div>
      </label>
      <label className="relative cursor-pointer">
        <input
          type="checkbox"
          data-cal-namespace=""
          data-cal-link="wanderhungerbuhler/barba"
          data-cal-config='{"layout":"month_view"}'
          className="peer sr-only"
        />
        <div className="peer flex items-center justify-center gap-2 font-semibold text-primary">
          <div className="h-[40px] w-[40px] rounded-lg bg-gray-300" />
          Barba
        </div>
      </label>
    </div>
  )
}

export function BtnActionsWidgets() {
  return (
    <>
      <Calendar />

      <header className="grid grid-cols-4 gap-3">
        <CallToActions title="Chamada" icon={PhoneCall} />
        <CallToActions title="Mensagem" icon={Envelope} />
        <CallToActions title="Recomendar" icon={ThumbsUp} />
        <CallToActions title="Compartilhar" icon={ShareFat} />
      </header>
      <footer className="mt-3 grid grid-cols-2 gap-3">
        <CallToActions
          title="Agendar horário"
          icon={CalendarCheck}
          isSchedule
        />
        <CallToActions title="Cancelar horário" icon={XCircle} isCancel />
      </footer>
    </>
  )
}
