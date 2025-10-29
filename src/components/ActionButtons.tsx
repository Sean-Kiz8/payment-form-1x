import { Button } from "@/components/ui/button";

export function ActionButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-[21px]">
      <Button 
        className="w-full sm:flex-1 bg-[#14A0FF] hover:bg-[#14A0FF]/90 rounded-[8px] h-auto flex flex-col items-center gap-[1.873px]"
        style={{ padding: '15.062px 0 19.065px 0' }}
      >
        <span className="text-[18px] font-normal text-black text-center" style={{ fontFamily: 'Onest' }}>
          Я оплатил
        </span>
        <span className="text-[11px] font-normal text-black/50 text-center" style={{ fontFamily: 'Onest' }}>
          Время на оплату – 10:00
        </span>
      </Button>
      
      <Button 
        variant="outline"
        className="w-full sm:flex-1 bg-white border-2 border-(--color-border-gray) hover:bg-gray-50 rounded-[8px] h-auto py-[17px]"
      >
        <span className="text-button text-(--color-text-secondary)">Вернуться на сайт</span>
      </Button>
    </div>
  );
}