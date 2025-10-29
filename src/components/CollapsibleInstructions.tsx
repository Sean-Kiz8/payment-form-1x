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
            className="w-full min-h-[82px] px-5 py-6 sm:px-[35px] sm:py-[35px] flex flex-col items-start gap-[20px] rounded-t-[11px] bg-[rgba(20,160,255,0.20)] hover:opacity-80 transition-opacity"
          >
            <div className="w-full flex items-center justify-between">
              <span className="text-body">Перед переводом ознакомьтесь с инструкцией по оплате</span>
              <ChevronUpIcon 
                width={18} 
                height={10} 
                color="#000000"
                className={`transition-transform duration-200 ${isOpen ? '' : 'rotate-180'}`}
              />
            </div>
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <div className="px-5 pb-5 sm:px-[35px] sm:pb-[35px] flex flex-col gap-[25px] sm:gap-[35px]">
              <p 
                className="text-[17px] font-normal"
                style={{ 
                  color: '#000',
                  fontFamily: 'Onest',
                  lineHeight: '140%'
                }}
              >
                Переводы доступны только со Сбербанк Россия:
              </p>
              
              <div 
                className="self-stretch whitespace-pre-line text-[17px] font-normal"
                style={{ 
                  color: 'rgba(0, 0, 0, 0.50)',
                  fontFamily: 'Onest',
                  lineHeight: '140%'
                }}
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