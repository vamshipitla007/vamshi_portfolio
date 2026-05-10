import { useMemo, useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  Pencil,
  Search,
  Trash2,
} from "lucide-react";

type ProductType = {
  id: number;
  image: string;
  name: string;
  category: string;
  price: number;
  piece: number;
  colors: string[];
};

const productsData: ProductType[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=300",
    name: "Apple Watch Series 4",
    category: "Digital Product",
    price: 690,
    piece: 63,
    colors: ["#000000", "#A3A3A3", "#E88989"],
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300",
    name: "Microsoft Headsquare",
    category: "Digital Product",
    price: 190,
    piece: 13,
    colors: [
      "#000000",
      "#F27D7D",
      "#4D7BEA",
      "#E3B94E",
    ],
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=300",
    name: "Women's Dress",
    category: "Fashion",
    price: 640,
    piece: 635,
    colors: [
      "#9A2962",
      "#71A8E8",
      "#16194F",
      "#4C4BE9",
    ],
  },

  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=300",
    name: "Samsung A50",
    category: "Mobile",
    price: 400,
    piece: 67,
    colors: ["#2E409A", "#000000", "#B02154"],
  },

  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=300",
    name: "Camera",
    category: "Electronic",
    price: 420,
    piece: 52,
    colors: ["#2E409A", "#000000", "#B02154"],
  },

  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300",
    name: "Microsoft Headsquare",
    category: "Digital Product",
    price: 190,
    piece: 13,
    colors: [
      "#000000",
      "#F27D7D",
      "#4D7BEA",
      "#E3B94E",
    ],
  },

  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=300",
    name: "Women's Dress",
    category: "Fashion",
    price: 640,
    piece: 635,
    colors: [
      "#9A2962",
      "#71A8E8",
      "#16194F",
      "#4C4BE9",
    ],
  },

  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=300",
    name: "Apple Watch Ultra",
    category: "Digital Product",
    price: 899,
    piece: 22,
    colors: ["#000000", "#7B7B7B"],
  },

  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=300",
    name: "Smart Watch",
    category: "Digital Product",
    price: 299,
    piece: 78,
    colors: ["#000000", "#4D7BEA", "#E88989"],
  },

  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=300",
    name: "Sony Camera",
    category: "Electronic",
    price: 720,
    piece: 12,
    colors: ["#000000", "#B02154"],
  },
];

const ITEMS_PER_PAGE = 7;

export default function ProductStockScreen() {
  const [products, setProducts] =
    useState(productsData);

  const [search, setSearch] =
    useState("");

  const [currentPage, setCurrentPage] =
    useState(1);

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase(),
          ) ||
        product.category
          .toLowerCase()
          .includes(
            search.toLowerCase(),
          ),
    );
  }, [products, search]);

  const totalPages = Math.ceil(
    filteredProducts.length /
      ITEMS_PER_PAGE,
  );

  const paginatedProducts =
    filteredProducts.slice(
      (currentPage - 1) *
        ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE,
    );

  const handleDelete = (
    id: number,
  ) => {
    setProducts((prev) =>
      prev.filter(
        (product) =>
          product.id !== id,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      {/* HEADER */}

      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-[24px] font-bold text-[#202224] md:text-[30px]">
          Product Stock
        </h1>

        {/* SEARCH */}

        <div className="relative w-full md:w-[270px]">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E8E93]"
          />

          <input
            type="text"
            placeholder="Search product name"
            value={search}
            onChange={(e) => {
              setSearch(
                e.target.value,
              );

              setCurrentPage(1);
            }}
            className="h-[44px] text-[#000000] w-full rounded-full border border-[#E5E7EB] bg-white pl-11 pr-4 text-[13px] outline-none transition focus:border-[#4F7CF7]"
          />
        </div>
      </div>

      {/* TABLE */}

      <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white">
        {/* TABLE HEADER */}

        <div className="hidden grid-cols-7 border-b border-[#E5E7EB] bg-[#FAFAFA] px-5 py-4 text-[12px] font-bold text-[#202224] md:grid">
          <div>Image</div>
          <div>Product Name</div>
          <div>Category</div>
          <div>Price</div>
          <div>Piece</div>
          <div>Available Color</div>
          <div className="text-center">
            Action
          </div>
        </div>

        {/* TABLE BODY */}

        {paginatedProducts.map(
          (product) => (
            <div
              key={product.id}
              className="border-b border-[#F1F1F1] px-4 py-4 md:grid md:grid-cols-7 md:items-center md:px-5"
            >
              {/* MOBILE CARD */}

              <div className="space-y-3 md:hidden">
                <div className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={
                      product.name
                    }
                    className="h-[58px] w-[58px] rounded-xl object-cover"
                  />

                  <div>
                    <h3 className="text-[14px] font-semibold text-[#202224]">
                      {product.name}
                    </h3>

                    <p className="text-[12px] text-[#71717A]">
                      {
                        product.category
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-[#71717A]">
                    Price:
                  </span>

                  <span className="text-[13px] font-medium">
                    $
                    {product.price.toFixed(
                      2,
                    )}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-[#71717A]">
                    Piece:
                  </span>

                  <span className="text-[13px] font-medium">
                    {
                      product.piece
                    }
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-[#71717A]">
                    Colors:
                  </span>

                  <div className="flex items-center gap-2">
                    {product.colors.map(
                      (
                        color,
                        index,
                      ) => (
                        <div
                          key={
                            index
                          }
                          style={{
                            backgroundColor:
                              color,
                          }}
                          className="h-[16px] w-[16px] rounded-full"
                        />
                      ),
                    )}
                  </div>
                </div>

                {/* ACTIONS */}

                <div className="flex justify-end">
                  <div className="flex overflow-hidden rounded-lg border border-[#E5E7EB]">
                    <button className="flex h-[36px] w-[42px] items-center justify-center border-r border-[#E5E7EB] transition hover:bg-[#F7F7F7]">
                      <Pencil
                        size={15}
                        color="#71717A"
                      />
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(
                          product.id,
                        )
                      }
                      className="flex h-[36px] w-[42px] items-center justify-center transition hover:bg-[#FFF1F4]"
                    >
                      <Trash2
                        size={15}
                        color="#FF3B30"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* DESKTOP VIEW */}

              <div className="hidden md:block">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[64px] w-[64px] rounded-xl object-cover"
                />
              </div>

              <div className="hidden text-[14px] text-[#202224] md:block">
                {product.name}
              </div>

              <div className="hidden text-[14px] text-[#202224] md:block">
                {product.category}
              </div>

              <div className="hidden text-[14px] text-[#202224] md:block">
                $
                {product.price.toFixed(
                  2,
                )}
              </div>

              <div className="hidden text-[14px] text-[#202224] md:block">
                {product.piece}
              </div>

              {/* COLORS */}

              <div className="hidden md:flex md:items-center md:gap-3">
                {product.colors.map(
                  (
                    color,
                    index,
                  ) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor:
                          color,
                      }}
                      className="h-[20px] w-[20px] rounded-full"
                    />
                  ),
                )}
              </div>

              {/* ACTIONS */}

              <div className="hidden justify-center md:flex">
                <div className="flex overflow-hidden rounded-lg border border-[#E5E7EB]">
                  <button className="flex h-[36px] w-[50px] items-center justify-center border-r border-[#E5E7EB] transition hover:bg-[#F7F7F7]">
                    <Pencil
                      size={16}
                      color="#71717A"
                    />
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(
                        product.id,
                      )
                    }
                    className="flex h-[36px] w-[50px] items-center justify-center transition hover:bg-[#FFF1F4]"
                  >
                    <Trash2
                      size={16}
                      color="#FF3B30"
                    />
                  </button>
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      {/* FOOTER */}

      <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-[13px] text-[#71717A]">
          Showing{" "}
          {(currentPage - 1) *
            ITEMS_PER_PAGE +
            1}
          -
          {Math.min(
            currentPage *
              ITEMS_PER_PAGE,
            filteredProducts.length,
          )}{" "}
          of{" "}
          {
            filteredProducts.length
          }
        </p>

        {/* PAGINATION */}

        <div className="flex overflow-hidden rounded-lg border border-[#E5E7EB] bg-white">
          <button
            disabled={
              currentPage === 1
            }
            onClick={() =>
              setCurrentPage(
                (prev) =>
                  prev - 1,
              )
            }
            className="flex h-[38px] w-[38px] items-center justify-center border-r border-[#E5E7EB] transition hover:bg-[#F7F7F7] disabled:opacity-40"
          >
            <ChevronLeft
              size={16}
              color="#8E8E93"
            />
          </button>

          <button
            disabled={
              currentPage ===
              totalPages
            }
            onClick={() =>
              setCurrentPage(
                (prev) =>
                  prev + 1,
              )
            }
            className="flex h-[38px] w-[38px] items-center justify-center transition hover:bg-[#F7F7F7] disabled:opacity-40"
          >
            <ChevronRight
              size={16}
              color="#8E8E93"
            />
          </button>
        </div>
      </div>
    </div>
  );
}