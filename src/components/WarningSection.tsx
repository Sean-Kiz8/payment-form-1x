import { Card } from "@/components/ui/card";
import InfoIcon from "@/components/icons/InfoIcon";

export function WarningSection() {
  return (
    <Card className="flex-1 rounded-[9px] border-2 border-(--color-primary-blue) bg-(--color-accent-light-blue) p-5 sm:p-[35px] flex flex-col gap-[22px]">
      <div className="flex items-center gap-[9px]">
        <InfoIcon width={16} height={16} color="#14a0ff" />
        <h3 className="text-warning-title">ВАЖНО!</h3>
      </div>

      <div className="text-body flex flex-col gap-[16px]">
        <p>Переводы средств без создания заявки (счёта) на сайте НЕ ПОДДЕРЖИВАЮТСЯ!</p>
        <p>Переводите только через СБЕР Россия.</p>
        <p>При оплате с другого банка<br />Вы потеряете ваши средства!</p>
      </div>
    </Card>
  );
}