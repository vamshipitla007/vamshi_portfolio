/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  UploadCloud,
  Trash2,
  X,
  ChevronDown,
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
} from "lucide-react";

interface AddProductSlideProps {
  open: boolean;
  onClose: () => void;
}

interface ProductForm {
  name: string;
  description: string;
  category: string;
  price: string;
  discount: string;
  tags: string[];
}

const categories = ["Phone", "Notebook", "Watch", "Accessories"];

const AddProductSlide: React.FC<AddProductSlideProps> = ({ open, onClose }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  const [tagInput, setTagInput] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [images, setImages] = useState<any>([]);

  const [uploadProgress, setUploadProgress] = useState(0);

  const [form, setForm] = useState<ProductForm>({
    name: "",
    description: "",
    category: "Phone",
    price: "",
    discount: "",
    tags: ["Apple", "iPhone", "64GB"],
  });

  useEffect(() => {
    if (!open) return;

  }, [open]);

  const updateField = (key: keyof ProductForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const validate = () => {
    const err: Record<string, string> = {};

    if (!form.name.trim()) err.name = "Product name is required";

    if (!form.description.trim()) err.description = "Description is required";

    if (!form.price) err.price = "Price is required";

    if (!form.discount) err.discount = "Discount is required";

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;

    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setLoading(false);

    console.log(form);

    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  if (!open) return null;

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
      />

      {/* Drawer */}

      <div className="fixed right-0 top-0 z-50 flex h-screen w-full justify-end">
        <div className="h-full w-full max-w-[560px] overflow-y-auto bg-white shadow-[0_10px_60px_rgba(0,0,0,0.12)]">
          {/* Header */}

          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#ECECEC] bg-white px-8 py-6">
            <h2 className="text-[20px] font-semibold text-[#374151]">
              Add Product
            </h2>

            <button
              onClick={onClose}
              className="rounded-xl p-2 transition hover:bg-gray-100"
            >
              <X color="#6B7280" size={20} />
            </button>
          </div>

          {/* Body */}

          <div className="space-y-6 p-8">
            {/* Product Name */}

            <div>
              <label className="mb-2 block text-[13px] font-medium text-[#6B7280]">
                Product Name
              </label>

              <input
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Apple iPhone 11 Pro Max 64GB Midnight Green"
                className={`h-11 w-full rounded-2xl border px-4 text-[13px] text-[#4B5563] outline-none transition

                ${
                  errors.name
                    ? "border-red-400"
                    : "border-[#E5E7EB] focus:border-[#2BA84A]"
                }`}
              />

              {errors.name && (
                <p className="mt-2 text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Description */}

            <div>
              <label className="mb-2 block text-[13px] font-medium text-[#6B7280]">
                Description
              </label>

              {/* Toolbar */}

              <div className="rounded-t-2xl border border-b-0 border-[#E5E7EB] bg-[#FAFAFB]">
                <div className="flex h-11 items-center gap-2 px-4">
                  <button>
                    <Type size={18} />
                  </button>

                  <button>
                    <Bold size={18} />
                  </button>

                  <button>
                    <Italic size={18} />
                  </button>

                  <button>
                    <Underline size={18} />
                  </button>

                  <span className="mx-1 h-5 w-px bg-gray-300" />

                  <button>
                    <AlignLeft size={18} />
                  </button>

                  <button>
                    <AlignCenter size={18} />
                  </button>

                  <button>
                    <AlignRight size={18} />
                  </button>

                  <button>
                    <AlignJustify size={18} />
                  </button>
                </div>
              </div>

              <textarea
                rows={6}
                value={form.description}
                onChange={(e) => updateField("description", e.target.value)}
                placeholder="Type something"
                className={`w-full resize-none rounded-b-2xl border border-[#E5E7EB] p-4 text-[13px] text-[#4B5563] outline-none

                ${
                  errors.description
                    ? "border-red-400"
                    : "focus:border-[#2BA84A]"
                }`}
              />

              {errors.description && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.description}
                </p>
              )}
            </div>

            {/* Category */}

            <div>
              <label className="mb-2 block text-[13px] font-medium text-[#6B7280]">
                Category
              </label>

              <div className="relative">
                <select
                  value={form.category}
                  onChange={(e) => updateField("category", e.target.value)}
                  className="h-11 w-full appearance-none rounded-2xl border border-[#E5E7EB] px-4 text-[13px] text-[#4B5563] outline-none focus:border-[#2BA84A]"
                >
                  {categories.map((cat) => (
                    <option className="text-[#4B5563]" key={cat}>
                      {cat}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={18}
                  color="#6B7280"
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
                />
              </div>
            </div>

            {/* Price + Discount */}

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="mb-2 block text-[13px] font-medium text-[#6B7280]">
                  Price
                </label>

                <input
                  value={form.price}
                  onChange={(e) => updateField("price", e.target.value)}
                  placeholder="$2500"
                  className="h-11 w-full rounded-2xl border border-[#E5E7EB] px-4 text-[13px] text-[#4B5563] outline-none focus:border-[#2BA84A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-medium text-[#6B7280]">
                  Discount
                </label>

                <input
                  value={form.discount}
                  onChange={(e) => updateField("discount", e.target.value)}
                  placeholder="15%"
                  className="h-11 w-full rounded-2xl border border-[#E5E7EB] px-4 text-[13px] text-[#4B5563] outline-none focus:border-[#2BA84A]"
                />
              </div>
            </div>

            {/* PART 2 CONTINUES HERE */}
            {/* ============================================================ */}
            {/* Product Images */}
            {/* ============================================================ */}

            <div>
              <label className="mb-2 block text-[13px] font-medium text-[#6B7280]">
                Product Images
              </label>

              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e: any) => {
                  e.preventDefault();
                }}
                onDrop={(e: any) => {
                  e.preventDefault();

                  const files = Array.from(e.dataTransfer.files);

                  if (!files.length) return;

                  setImages((prev:any) => [...prev, ...files]);

                  let progress = 0;

                  const timer = setInterval(() => {
                    progress += 10;

                    setUploadProgress(progress);

                    if (progress >= 100) {
                      clearInterval(timer);
                    }
                  }, 80);
                }}
                className="flex h-[120px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#D9DEE7] bg-[#FBFCFD] transition hover:border-[#2BA84A]"
              >
                <UploadCloud size={30} className="text-[#9CA3AF]" />

                <p className="mt-3 text-[13px] text-[#6B7280]">
                  Drag and Drop or{" "}
                  <span className="font-medium text-[#2BA84A]">Browse</span> to
                  upload
                </p>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                multiple
                hidden
                accept="image/*"
                onChange={(e: any) => {
                  if (!e.target.files) return;

                  const files = Array.from(e.target.files);

                  setImages((prev:any) => [...prev, ...files]);

                  let progress = 0;

                  const timer = setInterval(() => {
                    progress += 10;

                    setUploadProgress(progress);

                    if (progress >= 100) {
                      clearInterval(timer);
                    }
                  }, 80);
                }}
              />
            </div>

            {/* ============================================================ */}
            {/* Image Preview */}
            {/* ============================================================ */}

            <div className="grid grid-cols-5 gap-4">
              {images.slice(0, 4).map((file: any, index : number) => (
                <div
                  key={index}
                  className="relative flex h-20 items-center justify-center overflow-hidden rounded-2xl border border-[#ECECEC] bg-[#FAFAFB]"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt=""
                    className="h-full w-full object-cover"
                  />

                  <button
                    onClick={() =>
                      setImages((prev:any) => prev.filter((_ : any, i : number) => i !== index))
                    }
                    className="absolute right-2 top-2 rounded-full bg-white p-1 shadow"
                  >
                    <Trash2 size={14} className="text-red-500" />
                  </button>
                </div>
              ))}

              {/* Upload Progress */}

              <div className="flex h-20 items-center justify-center rounded-2xl border border-[#ECECEC]">
                <div className="relative h-12 w-12">
                  <svg className="-rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2
                      a 16 16 0 0 1 0 32
                      a 16 16 0 0 1 0 -32"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="3"
                    />

                    <path
                      d="M18 2
                      a 16 16 0 0 1 0 32
                      a 16 16 0 0 1 0 -32"
                      fill="none"
                      stroke="#2BA84A"
                      strokeWidth="3"
                      strokeDasharray={`${uploadProgress},100`}
                    />
                  </svg>

                  <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold">
                    {uploadProgress}%
                  </span>
                </div>
              </div>
            </div>

            {/* ============================================================ */}
            {/* Tags */}
            {/* ============================================================ */}

            <div>
              <label className="mb-2 block text-[13px] font-medium text-[#6B7280]">
                Tags
              </label>

              <div className="rounded-2xl border border-[#E5E7EB] p-3">
                <div className="mb-2 flex flex-wrap gap-2">
                  {form.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#F8F9FB] px-3 py-1 text-[12px]"
                    >
                      {tag}

                      <button
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            tags: prev.tags.filter((x) => x !== tag),
                          }))
                        }
                      >
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                </div>

                <input
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && tagInput.trim()) {
                      e.preventDefault();

                      setForm((prev) => ({
                        ...prev,
                        tags: [...prev.tags, tagInput.trim()],
                      }));

                      setTagInput("");
                    }
                  }}
                  placeholder="Press Enter to add tag"
                  className="w-full text-[13px] outline-none text-[#4B5563]"
                />
              </div>
            </div>

            {/* ============================================================ */}
            {/* Footer */}
            {/* ============================================================ */}

            <div className="flex items-center gap-4 pt-2">
              <button
                disabled={loading}
                onClick={handleSave}
                className="flex h-11 min-w-[120px] items-center justify-center rounded-xl bg-[#2BA84A] px-6 text-[14px] font-medium text-white transition hover:bg-[#23913D] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Saving..." : "Save"}
              </button>

              <button
                onClick={handleCancel}
                className="flex h-11 min-w-[120px] items-center justify-center rounded-xl border border-[#E5E7EB] bg-white px-6 text-[14px] font-medium text-[#4B5563] transition hover:bg-[#F9FAFB]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProductSlide;
