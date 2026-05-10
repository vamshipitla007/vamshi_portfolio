import {
  ChevronDown,
  SlidersHorizontal,
} from "lucide-react";

export default function UIElementsScreen() {
  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      {/* HEADER */}

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* TITLE */}

        <div className="relative inline-block">
          <h1 className="text-[28px] font-bold text-[#202224] md:text-[34px]">
            UI Elements
          </h1>

          <div className="absolute bottom-1 left-0 h-[3px] w-full rounded-full bg-[#4F7CF7]" />
        </div>

        {/* FILTER */}

        <div className="flex overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white">
          <button className="flex h-[60px] w-[62px] items-center justify-center border-r border-[#E5E7EB]">
            <SlidersHorizontal
              size={18}
              color="#202224"
            />
          </button>

          <div className="flex h-[60px] items-center border-r border-[#E5E7EB] px-8 text-[14px] font-semibold text-[#202224]">
            Filter By
          </div>

          <button className="flex h-[60px] min-w-[145px] items-center justify-between px-6">
            <span className="text-[14px] font-medium text-[#202224]">
              Charts
            </span>

            <ChevronDown
              size={18}
            />
          </button>
        </div>
      </div>

      {/* BAR CHART */}

      <div className="mb-5 rounded-[24px] border border-[#E5E7EB] bg-white p-5 md:p-6">
        <h2 className="mb-8 text-[20px] font-bold text-[#202224]">
          Bar Chart
        </h2>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {/* BAR 1 */}

          <div className="flex h-[180px] items-end justify-center gap-5">
            {[110, 55, 40, 90, 70, 48, 60].map(
              (
                height,
                index,
              ) => (
                <div
                  key={index}
                  style={{
                    height,
                  }}
                  className="w-[8px] rounded-full bg-[#4F7CF7]"
                />
              ),
            )}
          </div>

          {/* BAR 2 */}

          <div className="flex h-[180px] items-end justify-center gap-5">
            {[108, 58, 80, 62, 74, 95, 108].map(
              (
                height,
                index,
              ) => (
                <div
                  key={index}
                  className="relative flex w-[8px] items-end overflow-hidden rounded-full bg-[#E9EDF4]"
                  style={{
                    height,
                  }}
                >
                  <div
                    className="w-full bg-[#2AC6B7]"
                    style={{
                      height:
                        height *
                        0.35,
                    }}
                  />
                </div>
              ),
            )}
          </div>

          {/* BAR 3 */}

          <div className="flex h-[180px] items-end justify-center gap-3">
            {[
              [40, 60],
              [58, 92],
              [78, 65],
              [65, 76],
              [105, 126],
              [48, 62],
              [68, 82],
            ].map(
              (
                pair,
                index,
              ) => (
                <div
                  key={index}
                  className="flex items-end gap-2"
                >
                  <div
                    className="w-[8px] rounded-full bg-[#4B4DED]"
                    style={{
                      height:
                        pair[0],
                    }}
                  />

                  <div
                    className="w-[8px] rounded-full bg-[#FF9800]"
                    style={{
                      height:
                        pair[1],
                    }}
                  />
                </div>
              ),
            )}
          </div>

          {/* BAR 4 */}

          <div className="flex h-[180px] items-end justify-center gap-5">
            {[110, 62, 82, 88, 74, 96, 110].map(
              (
                height,
                index,
              ) => (
                <div
                  key={index}
                  className="relative flex w-[8px] items-end overflow-hidden rounded-full bg-[#FCE4EC]"
                  style={{
                    height,
                  }}
                >
                  <div
                    className="w-full bg-[#FF5CA8]"
                    style={{
                      height:
                        height *
                        0.36,
                    }}
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* PIE CHART */}

      <div className="mb-5 rounded-[24px] border border-[#E5E7EB] bg-white p-5 md:p-6">
        <h2 className="mb-8 text-[20px] font-bold text-[#202224]">
          Pie Chart
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {/* PIE 1 */}

          <div className="flex justify-center">
            <div className="h-[140px] w-[140px] rounded-full bg-[conic-gradient(#4547F6_0deg_90deg,#DCE2EF_90deg_360deg)]" />
          </div>

          {/* PIE 2 */}

          <div className="flex justify-center">
            <div className="h-[140px] w-[140px] rounded-full bg-[conic-gradient(#B05AF1_0deg_90deg,#DCE2EF_90deg_360deg)]" />
          </div>

          {/* PIE 3 */}

          <div className="flex justify-center">
            <div className="h-[140px] w-[140px] rounded-full bg-[conic-gradient(#FF8A45_0deg_135deg,#DCE2EF_135deg_360deg)]" />
          </div>

          {/* PIE 4 */}

          <div className="flex justify-center">
            <div className="h-[140px] w-[140px] rounded-full bg-[conic-gradient(#4A89E8_0deg_135deg,#DCE2EF_135deg_360deg)]" />
          </div>
        </div>
      </div>

      {/* DONUT CHART */}

      <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 md:p-6">
        <h2 className="mb-8 text-[20px] font-bold text-[#202224]">
          Donut Chart
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {/* DONUT 1 */}

          <div className="flex justify-center">
            <div className="relative h-[140px] w-[140px] rounded-full bg-[conic-gradient(#27C7B8_0deg_180deg,#E5EAF3_180deg_360deg)]">
              <div className="absolute left-1/2 top-1/2 h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
            </div>
          </div>

          {/* DONUT 2 */}

          <div className="flex justify-center">
            <div className="relative h-[140px] w-[140px] rounded-full bg-[conic-gradient(#4F86F7_0deg_90deg,#FF8A45_90deg_105deg,#E5EAF3_105deg_360deg)]">
              <div className="absolute left-1/2 top-1/2 h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
            </div>
          </div>

          {/* DONUT 3 */}

          <div className="flex justify-center">
            <div className="relative h-[140px] w-[140px] rounded-full bg-[conic-gradient(#27C7B8_0deg_180deg,#F5C451_180deg_270deg,#4F86F7_270deg_290deg,#E5EAF3_290deg_360deg)]">
              <div className="absolute left-1/2 top-1/2 h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
            </div>
          </div>

          {/* DONUT 4 */}

          <div className="flex justify-center">
            <div className="relative h-[140px] w-[140px] rounded-full bg-[conic-gradient(#27C7B8_0deg_180deg,#F5C451_180deg_225deg,#FF8A45_225deg_270deg,#4F86F7_270deg_285deg,#E5EAF3_285deg_360deg)]">
              <div className="absolute left-1/2 top-1/2 h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}