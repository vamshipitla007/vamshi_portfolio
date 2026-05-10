import { Pencil, Trash2 } from "lucide-react";

const orderData = [
  {
    id: "00001",
    name: "Christine Brooks",
    address: "089 Kutch Green Apt. 448",
    date: "14 Feb 2019",
    type: "Electric",
    status: "Completed",
  },

  {
    id: "00002",
    name: "Rosie Pearson",
    address: "979 Immanuel Ferry Suite 526",
    date: "14 Feb 2019",
    type: "Book",
    status: "Processing",
  },

  {
    id: "00003",
    name: "Darrell Caldwell",
    address: "8587 Frida Ports",
    date: "14 Feb 2019",
    type: "Medicine",
    status: "Rejected",
  },

  {
    id: "00004",
    name: "Gilbert Johnston",
    address: "768 Destiny Lake Suite 600",
    date: "14 Feb 2019",
    type: "Mobile",
    status: "Completed",
  },

  {
    id: "00005",
    name: "Alan Cain",
    address: "042 Mylene Throughway",
    date: "14 Feb 2019",
    type: "Watch",
    status: "Processing",
  },

  {
    id: "00006",
    name: "Alfred Murray",
    address: "543 Weimann Mountain",
    date: "14 Feb 2019",
    type: "Medicine",
    status: "Completed",
  },
];

const productData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=400",
    name: "Apple Watch Series 4",
    category: "Digital Product",
    price: "$690.00",
    piece: 63,
    colors: ["#000000", "#A3A3A3", "#E78B8B"],
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400",
    name: "Microsoft Headsquare",
    category: "Digital Product",
    price: "$190.00",
    piece: 13,
    colors: ["#000000", "#F27B7B", "#4F86F7", "#E3BC4E"],
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=400",
    name: "Women's Dress",
    category: "Fashion",
    price: "$640.00",
    piece: 635,
    colors: ["#9A2B63", "#6FA8EA", "#17194E", "#4A4DED"],
  },
];

export default function TableUIScreen() {
  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      {/* TITLE */}

      <div className="mb-4 border-b border-[#E5E7EB] pb-4">
        <div className="relative inline-block">
          <h1 className="text-[22px] font-bold text-[#202224] md:text-[28px]">
            Table
          </h1>

          <div className="absolute bottom-0 left-0 h-[2px] w-[46px] rounded-full bg-[#4F7CF7]" />
        </div>
      </div>

      {/* ORDER TABLE */}

      <div className="mb-5 overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white">
        {/* HEADER */}

        <div className="grid min-w-[720px] grid-cols-6 border-b border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-[11px] font-bold uppercase tracking-wide text-[#202224]">
          <div>ID</div>

          <div>Name</div>

          <div>Address</div>

          <div>Date</div>

          <div>Type</div>

          <div>Status</div>
        </div>

        {/* ROWS */}

        {orderData.map((item) => (
          <div
            key={item.id}
            className="grid min-w-[720px] grid-cols-6 items-center border-b border-[#F3F3F3] px-4 py-4 text-[12px] text-[#202224]"
          >
            <div>{item.id}</div>

            <div>{item.name}</div>

            <div>{item.address}</div>

            <div>{item.date}</div>

            <div>{item.type}</div>

            {/* STATUS */}

            <div>
              <span
                className={`inline-flex min-w-[68px] items-center justify-center rounded-md px-2 py-[5px] text-[10px] font-semibold ${
                  item.status === "Completed"
                    ? "bg-[#D8F4F0] text-[#14B8A6]"
                    : item.status === "Processing"
                      ? "bg-[#E9DDFC] text-[#8B5CF6]"
                      : "bg-[#FCE2DF] text-[#FF4D4F]"
                }`}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* DIVIDER */}

      <div className="mb-5 border-b border-[#E5E7EB]" />

      {/* PRODUCT TABLE */}

      <div className="overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white">
        {/* HEADER */}

        <div className="grid min-w-[920px] grid-cols-7 border-b border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-[11px] font-bold text-[#202224]">
          <div>Image</div>

          <div>Product Name</div>

          <div>Category</div>

          <div>Price</div>

          <div>Piece</div>

          <div>Available Color</div>

          <div className="text-center">Action</div>
        </div>

        {/* ROWS */}

        {productData.map((product) => (
          <div
            key={product.id}
            className="grid min-w-[920px] grid-cols-7 items-center border-b border-[#F3F3F3] px-4 py-4 text-[12px] text-[#202224]"
          >
            {/* IMAGE */}

            <div>
              <img
                src={product.image}
                alt={product.name}
                className="h-[42px] w-[42px] rounded-lg object-cover"
              />
            </div>

            {/* NAME */}

            <div>{product.name}</div>

            {/* CATEGORY */}

            <div>{product.category}</div>

            {/* PRICE */}

            <div>{product.price}</div>

            {/* PIECE */}

            <div>{product.piece}</div>

            {/* COLORS */}

            <div className="flex items-center gap-2">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: color,
                  }}
                  className="h-[14px] w-[14px] rounded-full"
                />
              ))}
            </div>

            {/* ACTION */}

            <div className="flex justify-center">
              <div className="flex overflow-hidden rounded-md border border-[#E5E7EB]">
                {/* EDIT */}

                <button className="flex h-[30px] w-[36px] items-center justify-center border-r border-[#E5E7EB] transition hover:bg-[#F7F7F7]">
                  <Pencil size={13} color="#71717A" />
                </button>

                {/* DELETE */}

                <button className="flex h-[30px] w-[36px] items-center justify-center transition hover:bg-[#FFF1F1]">
                  <Trash2 size={13} color="#FF5A5F" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
