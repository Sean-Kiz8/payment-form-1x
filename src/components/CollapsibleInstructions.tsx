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
            className="flex min-h-[82px] w-full items-center justify-between rounded-t-[11px] bg-(--color-accent-light-blue) px-5 py-5 transition-opacity hover:opacity-80 sm:px-[35px] sm:py-[35px]"
          >
            <span className="text-[16px] font-normal leading-[1.4] text-black">
              Перед переводом ознакомьтесь с инструкцией по оплате
            </span>
            <ChevronUpIcon
              width={18}
              height={10}
              color="#000000"
              className={`transition-transform duration-200 ${isOpen ? "" : "rotate-180"}`}
            />
          </CollapsibleTrigger>

          <CollapsibleContent>
            <div className="flex flex-col gap-[28px] px-5 pb-6 pt-6 sm:gap-[35px] sm:px-[35px] sm:pb-[35px] sm:pt-[35px]">
              <p className="text-[16px] font-normal leading-[1.4] text-black" style={{ maxWidth: "509.5px" }}>
                Переводы доступны только со Сбербанк Россия:
              </p>

              <div
                className="whitespace-pre-line text-[16px] font-normal leading-[1.4] text-text-secondary"
                style={{ maxWidth: "509.5px", lineHeight: "140%" }}
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