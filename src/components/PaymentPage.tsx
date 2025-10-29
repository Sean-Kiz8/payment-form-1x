import { Header } from "@/components/Header";
import { PaymentTitle } from "@/components/PaymentTitle";
import { QRPaymentSection } from "@/components/QRPaymentSection";
import { TransferDetails } from "@/components/TransferDetails";
import { WarningSection } from "@/components/WarningSection";
import { CollapsibleInstructions } from "@/components/CollapsibleInstructions";
import { ActionButtons } from "@/components/ActionButtons";

export function PaymentPage() {
  return (
    <div className="min-h-screen bg-(--color-primary-blue) px-4 py-6 sm:px-6 sm:py-8 lg:px-[41px] lg:py-[41px] flex justify-center">
      <div className="w-full max-w-[984px] flex flex-col gap-[21px]">
        <Header />

        <div className="w-full bg-white rounded-[13px] px-5 py-6 sm:px-7 sm:py-8 lg:px-[28px] lg:py-[28px] flex flex-col gap-[21px]">
          <PaymentTitle />

          <QRPaymentSection />

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