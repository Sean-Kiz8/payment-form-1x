import CopyIconSmall from "@/components/icons/CopyIconSmall";

export function PaymentTitle() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex flex-col gap-[9px]">
        <h1
          className="text-[28px] sm:text-[35.47px] font-normal"
          style={{
            color: '#000',
            fontFamily: 'Onest',
            lineHeight: 'normal'
          }}
        >
          Оплата счёта
        </h1>
        <div className="flex items-center gap-[5px]">
          <span
            className="text-[12.092px] font-light"
            style={{
              color: '#808080',
              fontFamily: 'Onest',
              lineHeight: 'normal'
            }}
          >
            ID счета: 123456789
          </span>
          <CopyIconSmall width={9} height={10} color="#000000" />
        </div>
      </div>
      <div
        className="text-[28px] sm:text-[35.47px] font-medium text-left sm:text-right"
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