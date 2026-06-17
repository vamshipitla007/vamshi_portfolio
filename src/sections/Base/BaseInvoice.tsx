import { useMemo, useState } from "react";
import {
  Search,
  Plus,
  Mail,
  Calendar,
  Star,
  MoreHorizontal,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

type Status = "Complete" | "Pending" | "Cancel";

type Invoice = {
  id: string;
  name: string;
  email: string;
  date: string;
  status: Status;
  image: string;
  selected: boolean;
  favorite: boolean;
};

export default function BaseInvoice() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: "#876364",
      name: "Arrora Gaur",
      email: "arroragaur@gmail.com",
      date: "12 Dec, 2020",
      status: "Complete",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
      selected: false,
      favorite: true,
    },
    {
      id: "#876123",
      name: "James Mullican",
      email: "jamesmullican@gmail.com",
      date: "10 Dec, 2020",
      status: "Pending",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
      selected: false,
      favorite: true,
    },
    {
      id: "#876213",
      name: "Robert Bacins",
      email: "robertbacins@gmail.com",
      date: "09 Dec, 2020",
      status: "Complete",
      image:
        "https://randomuser.me/api/portraits/men/20.jpg",
      selected: true,
      favorite: false,
    },
    {
      id: "#876987",
      name: "Bethany Jackson",
      email: "bethany@gmail.com",
      date: "09 Dec, 2020",
      status: "Cancel",
      image:
        "https://randomuser.me/api/portraits/men/55.jpg",
      selected: true,
      favorite: false,
    },
    {
      id: "#871345",
      name: "Anne Jacob",
      email: "annejacob@gmail.com",
      date: "10 Dec, 2020",
      status: "Complete",
      image:
        "https://randomuser.me/api/portraits/women/65.jpg",
      selected: false,
      favorite: false,
    },
    {
      id: "#872345",
      name: "Bethany Jackson",
      email: "bethanyjackson@gmail.com",
      date: "10 Dec, 2020",
      status: "Pending",
      image:
        "https://randomuser.me/api/portraits/men/71.jpg",
      selected: true,
      favorite: true,
    },
    {
      id: "#878769",
      name: "James Mullican",
      email: "jamesmullican@gmail.com",
      date: "01 Dec, 2020",
      status: "Pending",
      image:
        "https://randomuser.me/api/portraits/men/80.jpg",
      selected: true,
      favorite: false,
    },
  ]);


  const filteredInvoices = useMemo(() => {
    return invoices.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, invoices]);


  const toggleSelect = (id: string) => {
    setInvoices((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, selected: !item.selected }
          : item
      )
    );
  };


  const toggleFavorite = (id: string) => {
    setInvoices((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, favorite: !item.favorite }
          : item
      )
    );
  };


  const statusStyle = (status: Status) => {
    switch (status) {
      case "Complete":
        return "bg-[#EDF6EF] text-[#39A85B]";
      case "Pending":
        return "bg-[#FFF5E8] text-[#F9A63A]";
      default:
        return "bg-[#FDEDEE] text-[#E53935]";
    }
  };


  return (
    <div className="min-h-screen bg-[#F5F5F7] p-2 md:p-2">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">

        <h1 className="text-[20px] md:text-[32px] font-medium text-[#11142D]">
          Invoice List
        </h1>


        <div className="flex gap-3">

          {/* Search */}
          <div className="relative">
            <Search
              className="
                absolute left-4 top-1/2 
                -translate-y-1/2 
                w-5 h-5 text-[#8A8AA0]
              "
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="
                h-[48px] w-full md:w-[230px]
                bg-white rounded-xl
                pl-12 pr-4
                text-[14px]
                outline-none
              "
            />

          </div>


          <button
            className="
              h-[48px] px-6
              bg-[#5B5CF0]
              rounded-xl
              text-white
              text-[15px]
              font-medium
              flex items-center gap-2
            "
            onClick={() => navigate("/Base/create-invoice")}
          >
            <Plus size={18} />
            Add New
          </button>

        </div>

      </div>


      {/* Desktop Header */}
      <div className="hidden lg:grid grid-cols-[50px_120px_1.5fr_2fr_160px_170px_60px_50px] 
        text-[14px] text-[#8A8AA0] px-6 mb-3">

        <div>
          <input type="checkbox" />
        </div>

        <p>Invoice Id</p>
        <p>Name</p>
        <p>Email</p>
        <p>Date</p>
        <p>Status</p>
        <p></p>
        <p></p>

      </div>


      {/* Rows */}
      <div className="space-y-3">

        {filteredInvoices.map((item) => (
          <div
            key={item.id}
            className="
              bg-white rounded-2xl
              p-5
              lg:grid 
              lg:grid-cols-[50px_120px_1.5fr_2fr_160px_170px_60px_50px]
              items-center
              gap-3
            "
          >

            <input
              type="checkbox"
              checked={item.selected}
              onChange={() => toggleSelect(item.id)}
              className="w-5 h-5 accent-[#5B5CF0]"
            />


            <p className="text-[15px] font-medium text-[#11142D]">
              {item.id}
            </p>


            <div className="flex items-center gap-3 mt-3 lg:mt-0">
              <img
                src={item.image}
                className="w-10 h-10 rounded-full object-cover"
              />

              <p className="text-[15px] text-[#11142D]">
                {item.name}
              </p>
            </div>


            <div className="flex items-center gap-2 text-[14px] text-[#11142D] mt-3 lg:mt-0">
              <Mail size={16} color="#39A85B"/>
              {item.email}
            </div>


            <div className="flex items-center gap-2 mt-3 lg:mt-0">
              <Calendar size={16} color="#3B82F6"/>
              <span className="text-[14px]">
                {item.date}
              </span>
            </div>


            <div
              className={`
                w-[160px] h-[44px]
                rounded-full
                flex items-center justify-center
                font-medium text-[15px]
                mt-3 lg:mt-0
                ${statusStyle(item.status)}
              `}
            >
              {item.status}
            </div>


            <button
              onClick={() => toggleFavorite(item.id)}
            >
              <Star
                size={20}
                fill={item.favorite ? "#F6C445" : "none"}
                color={item.favorite ? "#F6C445" : "#D7D7E3"}
              />
            </button>


            <button>
              <MoreHorizontal
                color="#A0A0B5"
              />
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}