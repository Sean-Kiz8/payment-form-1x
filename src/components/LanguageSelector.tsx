import DropdownArrowIcon from "@/components/icons/DropdownArrowIcon";
import { cn } from "@/lib/utils";

type LanguageSelectorVariant = "desktop" | "mobile";

type LanguageSelectorProps = {
  currentLocale?: string;
  variant?: LanguageSelectorVariant;
};

const VARIANT_CONFIG: Record<LanguageSelectorVariant, {
  containerClasses: string;
  labelClasses: string;
  arrowWidth: number;
  arrowHeight: number;
  arrowClasses: string;
}> = {
  desktop: {
    containerClasses: "gap-[6px] px-[4px] py-[2px]",
    labelClasses: "text-header leading-none",
    arrowWidth: 10.183,
    arrowHeight: 6.682,
    arrowClasses: "text-white/70",
  },
  mobile: {
    containerClasses: "gap-[5px] px-[2px]",
    labelClasses: "text-[14.4px] font-bold leading-none text-white",
    arrowWidth: 8,
    arrowHeight: 5,
    arrowClasses: "text-white/70",
  },
};

export function LanguageSelector({ currentLocale = "RUS", variant = "desktop" }: LanguageSelectorProps) {
  const config = VARIANT_CONFIG[variant];

  return (
    <button
      type="button"
      aria-haspopup="listbox"
      aria-expanded="false"
      className={cn(
        "inline-flex items-center rounded-[6px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60",
        config.containerClasses,
      )}
      aria-label="Сменить язык интерфейса"
    >
      <span className={config.labelClasses}>{currentLocale}</span>
      <DropdownArrowIcon
        width={config.arrowWidth}
        height={config.arrowHeight}
        className={config.arrowClasses}
        aria-hidden
      />
    </button>
  );
}

