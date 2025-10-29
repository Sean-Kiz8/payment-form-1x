import LogoIcon from "@/components/icons/LogoIcon";
import ClockIcon from "@/components/icons/ClockIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { LanguageSelector } from "@/components/LanguageSelector";

export function Header() {
  return (
    <header className="relative w-full overflow-hidden rounded-[13px] bg-(--color-header-bg)">
      <div className="hidden h-[83px] items-center justify-between px-[32px] sm:flex">
        <LanguageSelector />

        <div className="absolute left-1/2 -translate-x-1/2">
          <LogoIcon width={100} height={22} />
        </div>

        <div className="flex h-[41px] min-w-[98px] items-center justify-center gap-[8px] rounded-[9px] bg-white px-[14px]">
          <ClockIcon width={21.638} height={21.638} color="#14a0ff" aria-hidden />
          <span className="text-header-time leading-none">10:00</span>
        </div>
      </div>

      <div className="flex flex-col gap-6 px-5 py-6 sm:hidden">
        <div className="flex items-center justify-between">
          <LanguageSelector variant="mobile" />

          <LogoIcon width={82} height={18} />

          <button
            type="button"
            aria-label="Закрыть"
            className="flex items-center justify-center"
          >
            <CloseIcon width={24} height={24} color="#ffffff" />
          </button>
        </div>

        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-[9.87px] font-light text-white/60">Сумма к оплате</span>
            <span className="text-[27px] font-normal text-white">1000.00 RUB</span>
          </div>
          <div className="flex items-center gap-[8px] rounded-[7.5px] bg-white px-[13px] py-[6px]">
            <ClockIcon width={21.638} height={21.638} color="#14a0ff" aria-hidden />
            <span className="text-[14.28px] font-light leading-none text-[#010000]">10:00</span>
          </div>
        </div>
      </div>
    </header>
  );
}
