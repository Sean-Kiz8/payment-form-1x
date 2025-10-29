import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CardIcon from "@/components/icons/CardIcon";
import UserIcon from "@/components/icons/UserIcon";
import { CopyButton } from "@/components/CopyButton";

export function TransferDetails() {
  return (
    <Card className="flex-1 gap-[20px] rounded-none border-none bg-transparent p-0 shadow-none md:gap-[25px] md:rounded-[9px] md:border-2 md:border-(--color-primary-blue) md:bg-white md:px-5 md:py-5 lg:px-[35px] lg:py-[35px]">
      <h3 className="text-[16px] font-normal leading-[normal] text-text-secondary md:text-body">
        Или совершите перевод по реквизитам
      </h3>

      <div className="flex flex-col gap-[20px]">
        <div className="flex items-start gap-[14px] md:flex-row md:items-center md:gap-[20px]">
          <CardIcon width={46} height={46} color="#14a0ff" />
          <div className="flex flex-1 flex-col gap-[6px]">
            <span className="text-[11px] font-normal leading-[normal] text-text-muted">
              Номер карты
            </span>
            <span className="text-[17px] font-normal leading-[normal] text-black">
              4585 2063 3570 0959
            </span>
          </div>
          <div className="ml-auto flex h-full items-center">
            <CopyButton text="4585206335700959" />
          </div>
        </div>

        <Separator className="bg-(--color-border-gray)" />

        <div className="flex items-start gap-[14px] md:flex-row md:items-center md:gap-[20px]">
          <UserIcon width={46} height={46} color="#14a0ff" />
          <div className="flex flex-1 flex-col gap-[6px]">
            <span className="text-[11px] font-normal leading-[normal] text-text-muted">
              Имя получателя
            </span>
            <span className="text-[17px] font-normal leading-[normal] text-black">
              KOSTIN VASILIY
            </span>
          </div>
          <div className="ml-auto flex h-full items-center">
            <CopyButton text="KOSTIN VASILIY" />
          </div>
        </div>
      </div>
    </Card>
  );
}