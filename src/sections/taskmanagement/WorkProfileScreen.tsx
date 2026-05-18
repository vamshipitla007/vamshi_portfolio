/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import {
  ChevronLeft,
  User,
  CalendarDays,
  BriefcaseBusiness,
  Upload,
  ImagePlus,
  MapPin,
  ChevronDown,
} from "lucide-react";
import ProfileBottomSheet from "@/components/ui/ProfileBottomSheet";
import { useNavigate } from "react-router-dom";

const WorkProfileScreen = () => {
    const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    position: "",
    address: "",
    image: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const positions = [
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Project Manager",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev: any) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be less than 5MB");
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setFormData((prev) => ({
      ...prev,
      image: imageUrl,
    }));
  };

  const validate = () => {
    const newErrors: any = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name required";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of birth required";
    }

    if (!formData.position) {
      newErrors.position = "Select position";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log(formData);
      setOpenConfirm(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#181818] flex justify-center">
      <div className="w-full max-w-md bg-[#F8F8FB] min-h-screen relative pb-28">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white border-b border-[#ECECEC]">
          <div className="h-16 px-4 flex items-center justify-between">
            <button onClick={() => navigate(-1)} className="w-8 h-8 rounded-full border border-[#E5E7EB] flex items-center justify-center">
              <ChevronLeft size={18} className="text-[#7C3AED]" />
            </button>

            <h1 className="text-lg font-semibold text-[#111827]">
              My Work Profile
            </h1>

            <div className="w-8" />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Personal Info */}
          <div className="bg-white rounded-[22px] p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-[#111827]">
              Personal Data Information
            </h2>

            <p className="text-sm text-[#8A94A6] mt-1">
              Your personal data information
            </p>

            {/* Upload */}
            <div className="flex flex-col items-center mt-6">
              <div className="relative">
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="w-28 h-28 border-2 border-dashed border-[#C4B5FD] rounded-2xl bg-[#FAF8FF] flex items-center justify-center cursor-pointer overflow-hidden"
                >
                  {formData.image ? (
                    <img
                      src={formData.image}
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ImagePlus size={34} className="text-[#8B5CF6]" />
                  )}
                </div>

                {/* Overlay Upload Button */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-[#7C3AED] shadow-lg flex items-center justify-center"
                >
                  <Upload size={16} className="text-white" />
                </button>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              <p className="mt-4 text-sm font-medium text-[#4B5563]">
                Upload Photo
              </p>

              <p className="text-[11px] text-center text-[#9CA3AF] leading-5 mt-1">
                Format should be in .jpeg .png atleast 800×800px and less than
                5MB
              </p>
            </div>

            {/* Form */}
            <div className="mt-6 space-y-4">
              {/* First Name */}
              <div>
                <label className="text-sm text-[#4B5563] font-medium">
                  First Name
                </label>

                <div className="mt-2 h-14 rounded-2xl border border-[#D1D5DB] bg-white px-4 flex items-center gap-3">
                  <User size={18} className="text-[#8B5CF6]" />

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Tonald"
                    className="flex-1 bg-transparent outline-none text-sm text-[#111827] placeholder:text-[#B0B7C3]"
                  />
                </div>

                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="text-sm text-[#4B5563] font-medium">
                  Last Name
                </label>

                <div className="mt-2 h-14 rounded-2xl border border-[#D1D5DB] bg-white px-4 flex items-center gap-3">
                  <User size={18} className="text-[#8B5CF6]" />

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Drump"
                    className="flex-1 bg-transparent outline-none text-sm text-[#111827] placeholder:text-[#B0B7C3]"
                  />
                </div>

                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>

              {/* DOB */}
              <div>
                <label className="text-sm text-[#4B5563] font-medium">
                  Date of Birth
                </label>

                <div className="mt-2 h-14 rounded-2xl border border-[#D1D5DB] bg-white px-4 flex items-center gap-3">
                  <CalendarDays size={18} className="text-[#8B5CF6]" />

                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="flex-1 bg-transparent outline-none text-sm text-[#111827]"
                  />

                  <ChevronDown size={18} className="text-[#8B5CF6]" />
                </div>

                {errors.dob && (
                  <p className="text-red-500 text-xs mt-1">{errors.dob}</p>
                )}
              </div>

              {/* Position */}
              <div>
                <label className="text-sm text-[#4B5563] font-medium">
                  Position
                </label>

                <div className="mt-2 h-14 rounded-2xl border border-[#D1D5DB] bg-white px-4 flex items-center gap-3">
                  <BriefcaseBusiness size={18} className="text-[#8B5CF6]" />

                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="flex-1 bg-transparent outline-none text-sm text-[#111827]"
                  >
                    <option value="">Select Position</option>

                    {positions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                  <ChevronDown size={18} className="text-[#8B5CF6]" />
                </div>

                {errors.position && (
                  <p className="text-red-500 text-xs mt-1">{errors.position}</p>
                )}
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white rounded-[22px] p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-[#111827]">Address</h2>

            <p className="text-sm text-[#8A94A6] mt-1">Your current domicile</p>

            <div className="mt-5">
              <label className="text-sm text-[#4B5563] font-medium">
                Address
              </label>

              <div className="mt-2 min-h-[120px] rounded-2xl border border-[#D1D5DB] bg-white p-4 flex gap-3">
                <MapPin size={18} className="text-[#8B5CF6] mt-1" />

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={(e: any) => handleChange(e)}
                  placeholder="Enter your address"
                  className="flex-1 bg-transparent outline-none text-sm resize-none text-[#111827] placeholder:text-[#B0B7C3]"
                />
              </div>

              {errors.address && (
                <p className="text-red-500 text-xs mt-1">{errors.address}</p>
              )}
            </div>
          </div>
        </div>

        {/* Fixed Bottom Button */}
        <div className="fixed bottom-0 left-0 right-0 flex justify-center bg-white/90 backdrop-blur-md border-t border-[#ECECEC]">
          <div className="w-full max-w-md p-4">
            <button
              onClick={handleSubmit}
              className="w-full h-14 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#5B21B6] text-white text-base font-semibold shadow-[0_10px_30px_rgba(124,58,237,0.35)] active:scale-[0.98] transition-all"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
      <ProfileBottomSheet
        isOpen={openConfirm}
        type="confirm"
        onClose={() => setOpenConfirm(false)}
        onConfirm={() => {
          setOpenConfirm(false);

          setTimeout(() => {
            setOpenSuccess(true);
          }, 300);
        }}
      />
      <ProfileBottomSheet
        isOpen={openSuccess}
        type="success"
        onClose={() => setOpenSuccess(false)}
        onVisitProfile={() => {
          navigate("/taskmanagement/profile");
        }}
      />
    </div>
  );
};

export default WorkProfileScreen;
