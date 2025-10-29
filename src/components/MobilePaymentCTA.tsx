import { Separator } from "@/components/ui/separator";
import sberButton from "@/assets/buttons/sber-button.svg";

export function MobilePaymentCTA() {
  return (
    <div className="flex flex-col gap-[25px] md:hidden">
      <p className="text-[16px] font-normal leading-[normal] text-text-secondary">
        Для оплаты нажмите на кнопку
      </p>

      <button
        type="button"
        aria-label="Оплатить через SberPay"
        className="h-[53.756px] w-full overflow-hidden rounded-[8px]"
      >
        <img
          src={sberButton}
          alt=""
          className="h-full w-full object-cover"
          aria-hidden
        />
      </button>

      <Separator className="bg-(--color-border-gray)" />
    </div>
  );
}


