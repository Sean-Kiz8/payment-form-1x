import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import ChevronUpIcon from "@/components/icons/ChevronUpIcon";

export function CollapsibleInstructions() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="relative rounded-[11px] border-2 border-(--color-primary-blue) bg-white">
          <CollapsibleTrigger 
            className="w-full min-h-[82px] px-5 py-5 sm:px-[35px] sm:py-[35px] flex items-center justify-between rounded-t-[11px] bg-[rgba(20,160,255,0.20)] hover:opacity-80 transition-opacity"
          >
            <span className="text-body">Перед переводом ознакомьтесь с инструкцией по оплате</span>
            <ChevronUpIcon 
              width={18} 
              height={10} 
              color="#000000"
              className={`transition-transform duration-200 ${isOpen ? '' : 'rotate-180'}`}
            />
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <div className="px-5 pt-6 pb-6 sm:px-[35px] sm:pt-[35px] sm:pb-[35px] flex flex-col gap-[28px] sm:gap-[35px]">
              <p className="text-body" style={{ maxWidth: '509.5px' }}>
                Переводы доступны только со Сбербанк Россия:
              </p>

              <div
                className="whitespace-pre-line text-body-secondary"
                style={{ maxWidth: '509.5px', lineHeight: '140%' }}
              >
                {`1. Скопируйте номер карты
2. Откройте приложение СБЕРБАНК
3. "Оплатить или перевести" → "На Сбер или в другой банк"
4. Вставьте номер карты и нажмите "Продолжить"
5. Введите точную сумму, вставьте Получателя и нажмите "Продолжить"
6. Подтвердите перевод`}
              </div>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </div>
  );
}