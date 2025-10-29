import AlertIcon from "@/components/icons/AlertIcon";

export function WarningSection() {
  return (
    <div className="flex flex-1 flex-col gap-[22px] rounded-[9px] border-2 border-(--color-primary-blue) bg-(--color-accent-light-blue) px-5 py-6 shadow-none sm:px-[35px] sm:py-[35px]">
      <div className="flex items-center gap-[12px]">
        <AlertIcon width={16} height={16} />
        <h3 className="text-[17px] font-semibold leading-[normal] text-black">ВАЖНО!</h3>
      </div>

      <div className="flex flex-col gap-[14px] text-[16px] font-normal leading-[1.4] text-black">
        <p>
          Переводы средств без создания заявки (счёта) на сайте{' '}
          <span className="font-semibold">НЕ ПОДДЕРЖИВАЮТСЯ!</span>
        </p>
        <p>
          Переводите только через{' '}
          <span className="font-semibold">СБЕР Россия.</span>
        </p>
        <div className="flex flex-col gap-[4px]">
          <p>При оплате с другого банка</p>
          <p className="font-semibold">Вы потеряете ваши средства!</p>
        </div>
      </div>
    </div>
  );
}