import CopyIconSmall from "@/components/icons/CopyIconSmall";

export function PaymentTitle() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex flex-col gap-[9px]">
        <h1 className="text-title text-[28px] sm:text-[35.47px]">
          Оплата счёта
        </h1>
        <div className="flex items-center gap-[5px]">
          <span className="text-small">
            ID счета: 123456789
          </span>
          <CopyIconSmall width={9} height={10} color="#000000" />
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