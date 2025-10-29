import CopyIconSmall from "@/components/icons/CopyIconSmall";

export function PaymentTitle() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex flex-col gap-[9px]">
        <h1 className="font-normal text-[20px] text-black sm:text-title sm:text-[35.47px]">
          Оплата счёта
        </h1>
        <div className="flex items-center gap-[5px]">
          <span className="text-[9.868px] font-light leading-[normal] text-black/50">
            ID счета: 123456789
          </span>
          <CopyIconSmall width={9} height={10} color="rgba(0,0,0,0.5)" />
        </div>
      </div>
      <div
        className="hidden sm:block text-amount font-medium"
        style={{
          color: '#000',
          fontFamily: 'Onest',
          lineHeight: 'normal'
        }}
      >
        1000.00 RUB
      </div>
    </div>
  );
}