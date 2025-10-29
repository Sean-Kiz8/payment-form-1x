import { Header } from "@/components/Header";
import { PaymentTitle } from "@/components/PaymentTitle";
import { QRPaymentSection } from "@/components/QRPaymentSection";
import { TransferDetails } from "@/components/TransferDetails";
import { WarningSection } from "@/components/WarningSection";
import { CollapsibleInstructions } from "@/components/CollapsibleInstructions";
import { ActionButtons } from "@/components/ActionButtons";
import { MobilePaymentCTA } from "@/components/MobilePaymentCTA";

export function PaymentPage() {
  return (
    <div className="flex min-h-screen justify-center bg-(--color-border-gray) px-0 py-6 sm:px-6 sm:py-8 lg:px-[41px] lg:py-[41px]">
      <div className="flex w-full max-w-[984px] flex-col gap-[21px] px-4 sm:px-0">
        <Header />

        <div className="flex w-full flex-col gap-[25px] rounded-[15px] bg-white px-5 py-6 sm:gap-[21px] sm:rounded-[15px] sm:px-7 sm:py-8 lg:px-[28px] lg:py-[28px]">
          <PaymentTitle />

          <MobilePaymentCTA />

          <div className="hidden md:block">
            <QRPaymentSection />
          </div>

          <div className="flex flex-col gap-[21px] xl:flex-row">
            <TransferDetails />
            <WarningSection />
          </div>

          <CollapsibleInstructions />

          <ActionButtons />
        </div>
      </div>
    </div>
  );
}