import {
  Printer,
  SendHorizonal,
} from "lucide-react";

type InvoiceItem = {
  id: number;
  description: string;
  quantity: number;
  baseCost: number;
  totalCost: number;
};

const invoiceItems: InvoiceItem[] = [
  {
    id: 1,
    description: "Children Toy",
    quantity: 2,
    baseCost: 20,
    totalCost: 80,
  },

  {
    id: 2,
    description: "Makeup",
    quantity: 2,
    baseCost: 50,
    totalCost: 100,
  },

  {
    id: 3,
    description: "Asus Laptop",
    quantity: 5,
    baseCost: 100,
    totalCost: 500,
  },

  {
    id: 4,
    description: "Iphone X",
    quantity: 4,
    baseCost: 1000,
    totalCost: 4000,
  },
];

export default function InvoiceScreen() {
  const totalAmount =
    invoiceItems.reduce(
      (acc, item) =>
        acc + item.totalCost,
      0,
    );

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      {/* TITLE */}

      <div className="mb-5">
        <h1 className="relative inline-block text-[26px] font-bold text-[#202224] md:text-[32px]">
          Invoice

          {/* UNDERLINE */}

          <span className="absolute bottom-0 left-0 h-[3px] w-[70px] rounded-full bg-[#4F7CF7]" />
        </h1>
      </div>

      {/* INVOICE CARD */}

      <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 md:p-8">
        {/* TOP SECTION */}

        <div className="grid gap-6 md:grid-cols-3">
          {/* FROM */}

          <div>
            <h3 className="mb-3 text-[15px] font-medium text-[#202224]">
              Invoice From :
            </h3>

            <h2 className="text-[18px] font-bold text-[#202224]">
              Virginia Walker
            </h2>

            <p className="mt-1 text-[14px] text-[#71717A]">
              9694 Krajcik Locks
              Suite 635
            </p>
          </div>

          {/* TO */}

          <div>
            <h3 className="mb-3 text-[15px] font-medium text-[#202224]">
              Invoice To :
            </h3>

            <h2 className="text-[18px] font-bold text-[#202224]">
              Austin Miller
            </h2>

            <p className="mt-1 text-[14px] text-[#71717A]">
              Brookview
            </p>
          </div>

          {/* DATES */}

          <div className="space-y-3 md:pl-10">
            <div className="flex items-center gap-2">
              <span className="text-[15px] font-medium text-[#202224]">
                Invoice Date :
              </span>

              <span className="text-[15px] text-[#202224]">
                12 Nov 2019
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[15px] font-medium text-[#202224]">
                Due Date :
              </span>

              <span className="text-[15px] text-[#202224]">
                25 Dec 2019
              </span>
            </div>
          </div>
        </div>

        {/* TABLE */}

        <div className="mt-8 overflow-x-auto">
          {/* TABLE HEADER */}

          <div className="grid min-w-[720px] grid-cols-5 rounded-xl bg-[#F5F7FA] px-5 py-4 text-[13px] font-medium text-[#202224]">
            <div>Serial No.</div>

            <div>Description</div>

            <div className="text-center">
              Quantity
            </div>

            <div className="text-center">
              Base Cost
            </div>

            <div className="text-center">
              Total Cost
            </div>
          </div>

          {/* TABLE ROWS */}

          {invoiceItems.map((item) => (
            <div
              key={item.id}
              className="grid min-w-[720px] grid-cols-5 items-center border-b border-[#F1F1F1] px-5 py-6 text-[14px] text-[#202224]"
            >
              <div className="pl-5">
                {item.id}
              </div>

              <div>
                {
                  item.description
                }
              </div>

              <div className="text-center">
                {item.quantity}
              </div>

              <div className="text-center">
                $
                {item.baseCost}
              </div>

              <div className="text-center">
                $
                {item.totalCost}
              </div>
            </div>
          ))}
        </div>

        {/* TOTAL */}

        <div className="mt-6 flex justify-end">
          <div className="flex items-center gap-5">
            <span className="text-[18px] font-bold text-[#202224]">
              Total
            </span>

            <span className="text-[18px] font-bold text-[#202224]">
              =
            </span>

            <span className="text-[24px] font-bold text-[#202224]">
              $
              {totalAmount}
            </span>
          </div>
        </div>

        {/* ACTION BUTTONS */}

        <div className="mt-10 flex items-center justify-end gap-4">
          {/* PRINT */}

          <button className="flex h-[52px] w-[52px] items-center justify-center rounded-xl border border-[#E5E7EB] bg-[#F8F8F8] transition hover:bg-[#EFEFEF]">
            <Printer
              size={20}
              color="#202224"
            />
          </button>

          {/* SEND */}

          <button className="flex h-[52px] items-center gap-4 rounded-xl bg-[#4F7CF7] px-8 text-white transition hover:bg-[#3E6EF0]">
            <span className="text-[15px] font-semibold">
              Send
            </span>

            <div className="flex h-[36px] w-[36px] items-center justify-center rounded-lg bg-white/10">
              <SendHorizonal
                size={17}
                color="#FFFFFF"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}