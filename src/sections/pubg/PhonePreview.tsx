import phone from "@/assets/pubg/Image3.png";

export default function PhonePreview() {
  return (
    <div className="flex justify-center">
      <img
        src={phone}
        alt="mobile"
        className="
          w-[320px]
          lg:w-[380px]
          drop-shadow-2xl
        "
      />
    </div>
  );
}