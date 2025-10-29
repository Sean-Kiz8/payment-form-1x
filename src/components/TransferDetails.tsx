import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CardIcon from "@/components/icons/CardIcon";
import UserIcon from "@/components/icons/UserIcon";
import { CopyButton } from "@/components/CopyButton";

export function TransferDetails() {
  return (
    <Card className="flex-1 rounded-[9px] border-2 border-(--color-primary-blue) p-5 sm:p-[35px] flex flex-col gap-[25px]">
      <h3 className="text-body">Или совершите перевод по реквизитам</h3>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-[20px]">
        <CardIcon width={46} height={46} color="#14a0ff" />
        <div className="flex-1 flex flex-col gap-[3px]">
          <span className="text-tiny">Номер карты</span>
          <span className="text-body">4585 2063 3570 0959</span>
        </div>
        <div className="flex sm:justify-end">
          <CopyButton text="4585206335700959" />
        </div>
      </div>

      <Separator className="bg-(--color-border-gray)" />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-[20px]">
        <UserIcon width={46} height={46} color="#14a0ff" />
        <div className="flex-1 flex flex-col gap-[3px]">
          <span className="text-tiny">Имя получателя</span>
          <span className="text-body">KOSTIN VASILIY</span>
        </div>
        <div className="flex sm:justify-end">
          <CopyButton text="KOSTIN VASILIY" />
        </div>
      </div>
    </Card>
  );
}