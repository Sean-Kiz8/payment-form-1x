import { Card } from "@/components/ui/card";
import SberPayLogo from "@/components/icons/SberPayLogo";
import CurvedArrowIcon from "@/components/icons/CurvedArrowIcon";

export function QRPaymentSection() {
  return (
    <Card className="flex flex-col gap-10 rounded-[9px] border border-(--color-border-gray) bg-white px-5 py-6 shadow-none sm:px-[40px] sm:py-[40px] md:flex-row md:items-start md:justify-between">
      <div className="flex flex-col gap-[18px] md:max-w-[516px]">
        <SberPayLogo width={94} height={45} aria-hidden />
        <p className="text-subtitle max-w-[514px]">
          Для оплаты отсканируйте QR-код камерой телефона и проведите оплату в приложении Сбербанк
        </p>
        <div className="hidden md:flex md:w-full md:justify-center md:pt-[6px]">
          <CurvedArrowIcon width={206} height={27} fillColor="rgba(0, 0, 0, 0.15)" />
        </div>
      </div>
      <div className="flex justify-center md:justify-end md:pl-[40px]">
        <div className="mt-2 rounded-[8px] bg-white p-[10px] shadow-[0px_12px_32px_rgba(17,24,39,0.08)] md:mt-0">
          <img
            src="/images/qr-code.png"
            alt="QR код для оплаты"
            width={221}
            height={221}
            className="h-[221px] w-[221px] object-cover"
          />
        </div>
      </div>
    </Card>
  );
}