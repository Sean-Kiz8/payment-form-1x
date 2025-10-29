import { Card } from "@/components/ui/card";
import SberPayLogo from "@/components/icons/SberPayLogo";
import CurvedArrowIcon from "@/components/icons/CurvedArrowIcon";

export function QRPaymentSection() {
  return (
    <Card className="rounded-[9px] border border-(--color-border-gray) p-6 sm:p-8 lg:p-[40px] flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col gap-[17px] md:max-w-[516px]">
        <SberPayLogo width={94} height={45} />
        <p
          className="text-[22px] leading-[36px] font-normal sm:text-[27px] sm:leading-[53px]"
          style={{ fontFamily: 'Onest', color: 'rgba(0, 0, 0, 0.50)' }}
        >
          Для оплаты отсканируйте QR-код камерой телефона и проведите оплату в приложении Сбербанк
        </p>
        <div className="hidden md:block w-[206px] h-[27px]">
          <CurvedArrowIcon
            width={206}
            height={27}
            style={{ strokeWidth: '2px', stroke: 'rgba(0, 0, 0, 0.15)' }}
          />
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <div className="mt-4 md:mt-0 md:ml-[70px] bg-white p-[10px] rounded-[4px]">
          <img
            src="/images/qr-code.png"
            alt="QR код для оплаты"
            width={221}
            height={221}
            className="object-cover"
          />
        </div>
      </div>
    </Card>
  );
}