import { Button } from "@/components/ui/button";

export function ActionButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-[21px]">
      <Button 
        className="relative w-full sm:flex-1 h-[67px] rounded-[8px] bg-[#14A0FF] px-0 py-0 hover:bg-[#14A0FF]/90 items-start justify-start gap-0"
      >
        <span
          className="absolute left-1/2 top-[15.062px] -translate-x-1/2 text-center text-[18px] font-normal leading-[normal] text-[#000000]"
          style={{ fontFamily: 'Onest' }}
          data-node-id="192:269"
        >
          Я оплатил
        </span>
        <span
          className="absolute left-1/2 top-[39.935px] -translate-x-1/2 text-center text-[11px] font-normal leading-[normal] text-[rgba(0,0,0,0.5)]"
          style={{ fontFamily: 'Onest' }}
          data-node-id="192:270"
        >
          Время на оплату – 10:00
        </span>
      </Button>
      
      <Button 
        variant="outline"
        className="w-full sm:flex-1 bg-white rounded-[8px] h-[67px] border border-[rgba(0,0,0,0.5)] hover:bg-white"
      >
        <span className="text-button text-[rgba(0,0,0,0.5)]">Вернуться на сайт</span>
      </Button>
    </div>
  );
}