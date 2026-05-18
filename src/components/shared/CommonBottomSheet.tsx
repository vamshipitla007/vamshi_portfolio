/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState, type ReactNode } from "react";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
}

const CommonBottomSheet = ({
  isOpen,
  onClose,
  children,
  footer,
}: BottomSheetProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setVisible(true);
      }, 10);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Bottom Sheet */}
      <div
        className={`relative w-full max-w-md bg-white rounded-t-[32px] transition-transform duration-300 ease-out ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          height: "90vh",
        }}
      >
        <div className="w-16 h-1.5 bg-gray-300 rounded-full mx-auto mb-2 mt-2" />

        {/* Scrollable Content */}
        <div className="overflow-y-auto h-[calc(90vh-220px)] px-6 py-5">
          {children}
        </div>

        {/* Fixed Footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-white px-6 pb-8 pt-4 border-t border-gray-100">
          {footer}
        </div>
      </div>
    </div>
  );
};

export default CommonBottomSheet;
