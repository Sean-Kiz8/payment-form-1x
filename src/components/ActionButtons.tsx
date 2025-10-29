import { Button } from "@/components/ui/button";

export function ActionButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-[21px]">
      <Button
        className="flex h-[67px] w-full flex-col items-center justify-center gap-[4px] rounded-[8px] bg-[#14A0FF] px-0 py-0 hover:bg-[#14A0FF]/90 sm:flex-1"
      >
        <span className="text-[18px] font-normal leading-[normal] text-text-primary">
          Я оплатил
        </span>
        <span className="text-[11px] font-normal leading-[normal] text-text-secondary">
          Время на оплату – 10:00
        </span>
      </Button>

      <Button
        variant="outline"
        className="flex h-[53.756px] w-full items-center justify-center rounded-[8px] border border-text-secondary bg-white hover:bg-white sm:flex-1"
      >
        <span className="text-[18px] font-normal leading-[normal] text-text-secondary">
          Вернуться на сайт
        </span>
      </Button>
    </div>
  );
}