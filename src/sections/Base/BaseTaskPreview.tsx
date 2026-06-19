import { useMemo, useState } from "react";

import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Trash2,
  Edit,
  X,
} from "lucide-react";

type TaskStatus = "Pending" | "Running" | "Done";

type TaskPriority = "Low" | "Medium" | "High";

type Task = {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: TaskStatus;
  priority: TaskPriority;
  members: string[];
  image?: string;
  column: "todo" | "progress" | "review" | "done";
};

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Dashboard Design",
    description: "Discussion for management dashboard ui design",
    startDate: "03/12/2021",
    endDate: "05/12/2021",
    status: "Running",
    priority: "High",
    column: "progress",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
    members: [
      "https://randomuser.me/api/portraits/women/1.jpg",
      "https://randomuser.me/api/portraits/men/2.jpg",
      "https://randomuser.me/api/portraits/men/3.jpg",
    ],
  },

  {
    id: 2,
    title: "Landing Page Design",
    description: "Discussion for management dashboard ui design",
    startDate: "03/12/2021",
    endDate: "05/12/2021",
    status: "Pending",
    priority: "Medium",
    column: "todo",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800",
    members: [
      "https://randomuser.me/api/portraits/women/4.jpg",
      "https://randomuser.me/api/portraits/men/5.jpg",
    ],
  },

  {
    id: 3,
    title: "Logo Design",
    description: "Discussion for management dashboard ui design",
    startDate: "01/12/2021",
    endDate: "03/12/2021",
    status: "Done",
    priority: "Low",
    column: "done",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    members: [
      "https://randomuser.me/api/portraits/women/6.jpg",
      "https://randomuser.me/api/portraits/men/7.jpg",
    ],
  },

  {
    id: 4,
    title: "E-Shop Mobile App",
    description: "Discussion for management dashboard ui design",
    startDate: "02/12/2021",
    endDate: "06/12/2021",
    status: "Running",
    priority: "High",
    column: "review",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800",
    members: [
      "https://randomuser.me/api/portraits/women/10.jpg",
      "https://randomuser.me/api/portraits/men/11.jpg",
      "https://randomuser.me/api/portraits/men/12.jpg",
    ],
  },
];

export default function BaseTaskPreview() {
  const [activeTab, setActiveTab] = useState<"list" | "board" | "timeline">(
    "list",
  );

  const [search, setSearch] = useState("");

  const [tasks, setTasks] = useState(initialTasks);

  const [openModal, setOpenModal] = useState(false);

  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "Pending" as TaskStatus,
    priority: "Medium" as TaskPriority,
    column: "todo" as "todo" | "progress" | "review" | "done",
  });

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [tasks, search]);

  const handleAddTask = () => {
    setEditingTask(null);

    setFormData({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      status: "Pending",
      priority: "Medium",
      column: "todo",
    });

    setOpenModal(true);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);

    setFormData({
      title: task.title,
      description: task.description,
      startDate: task.startDate,
      endDate: task.endDate,
      status: task.status,
      priority: task.priority,
      column: task.column,
    });

    setOpenModal(true);
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleSaveTask = () => {
    if (!formData.title) return;

    if (editingTask) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === editingTask.id
            ? {
                ...task,
                ...formData,
              }
            : task,
        ),
      );
    } else {
      setTasks((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...formData,
          members: ["https://randomuser.me/api/portraits/men/20.jpg"],
          image:
            "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
        },
      ]);
    }

    setOpenModal(false);
  };

  const getPriorityColor = (priority: TaskPriority) => {
    switch (priority) {
      case "High":
        return "bg-[#35B8D8] text-white";

      case "Medium":
        return "bg-[#FF8A5B] text-white";

      case "Low":
        return "bg-[#FF6677] text-white";

      default:
        return "";
    }
  };

  const getStatusColor = (status: TaskStatus) => {
    switch (status) {
      case "Pending":
        return "bg-[#FF8A5B] text-white";

      case "Running":
        return "bg-[#5B5CF0] text-white";

      case "Done":
        return "bg-[#34C759] text-white";

      default:
        return "";
    }
  };

  return (
    <div
      className="
    min-h-screen

    bg-[#F5F5F7]
    dark:bg-slate-950

    transition-colors
    duration-300
  "
    >
      {/* Header */}
      <div
        className="
    flex
    flex-col
    lg:flex-row

    justify-between
    lg:items-center

    gap-4

    mb-8
  "
      >
        <h1
          className="
      text-[24px]
      md:text-[34px]

      font-semibold

      text-[#11142D]
      dark:text-white

      transition-colors
    "
        >
          Task Preview
        </h1>

        <button
          onClick={handleAddTask}
          className="
      h-[48px]

      px-6

      bg-[#5B5CF0]
      hover:bg-[#4E4FE8]

      dark:bg-[#7C7AFF]
      dark:hover:bg-[#6B63FF]

      rounded-xl

      text-white

      text-[15px]
      font-medium

      flex
      items-center
      justify-center

      gap-2

      shadow-sm
      hover:shadow-md

      transition-all
      duration-300

      w-full
      sm:w-auto
    "
        >
          <Plus size={18} />
          Add Task
        </button>
      </div>

      {/* TABS + SEARCH */}

      <div
        className="
          flex
          flex-col
          xl:flex-row

          justify-between
          xl:items-center

          gap-4

          mb-8
        "
      >
        {/* Tabs */}
        <div
          className="
            flex

            bg-white
            dark:bg-gray-900

            border
            border-[#ECECF5]
            dark:border-gray-800

            rounded-xl

            p-1

            w-fit

            transition-all
            duration-300
          "
        >
          {["list", "board", "timeline"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "list" | "board" | "timeline")}
              className={`
                h-[42px]

                px-4
                md:px-6

                rounded-lg

                text-[14px]
                md:text-[15px]

                capitalize

                transition-all

                ${
                  activeTab === tab
                    ? `
                      bg-[#5B5CF0]
                      text-white
                      shadow-sm
                    `
                    : `
                      text-[#666688]
                      dark:text-gray-400

                      hover:bg-[#F8F8FA]
                      dark:hover:bg-gray-800
                    `
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search & Filter */}
        <div
          className="
            flex
            flex-col
            sm:flex-row

            gap-3
          "
        >
          {/* Search */}
          <div className="relative">
            <Search
              size={18}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2

                text-[#8A8AA0]
                dark:text-gray-400
              "
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="
                w-full
                sm:w-[260px]

                h-[48px]

                rounded-xl

                bg-white
                dark:bg-gray-900

                border
                border-[#ECECF5]
                dark:border-gray-800

                pl-10
                pr-4

                text-[14px]

                text-[#11142D]
                dark:text-white

                placeholder:text-[#8A8AA0]
                dark:placeholder:text-gray-500

                outline-none

                focus:border-[#5B5CF0]

                transition-all
              "
            />
          </div>

          {/* Filter */}
          <button
            className="
              w-[48px]
              h-[48px]

              rounded-xl

              bg-[#5B5CF0]
              hover:bg-[#4E4FE8]

              dark:bg-[#7C7AFF]
              dark:hover:bg-[#6B63FF]

              flex
              items-center
              justify-center

              text-white

              shadow-sm
              hover:shadow-md

              transition-all
              duration-300
            "
          >
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* MODAL */}

      {/* LIST VIEW / BOARD VIEW / TIMELINE VIEW */}
      {/* continues in Part 2 */}

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            onClick={() => setOpenModal(false)}
            className="
        absolute
        inset-0
        bg-black/50
        backdrop-blur-sm
      "
          />

          {/* Modal */}
          <div
            className="
        relative

        w-full
        max-w-[720px]

        max-h-[90vh]
        overflow-y-auto

        rounded-3xl

        bg-white
        dark:bg-gray-900

        border
        border-[#ECECF5]
        dark:border-gray-800

        p-6
        md:p-8

        shadow-2xl

        transition-all
      "
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <h2
                  className="
              text-[24px]
              md:text-[28px]
              font-semibold

              text-[#11142D]
              dark:text-white
            "
                >
                  {editingTask ? "Edit Task" : "Create New Task"}
                </h2>

                <p
                  className="
              text-[14px]
              mt-1

              text-[#8A8AA0]
              dark:text-gray-400
            "
                >
                  Fill task information below
                </p>
              </div>

              <button
                onClick={() => setOpenModal(false)}
                className="
            w-10
            h-10

            rounded-full

            bg-[#F5F5F7]
            dark:bg-gray-800

            text-[#666688]
            dark:text-gray-300

            flex
            items-center
            justify-center

            hover:bg-[#ECECF5]
            dark:hover:bg-gray-700

            transition-all
          "
              >
                <X size={18} />
              </button>
            </div>

            {/* Form */}
            <div className="grid md:grid-cols-2 gap-5">
              {/* Task Name */}
              <div className="md:col-span-2">
                <label
                  className="
              block
              mb-2

              text-[14px]
              font-medium

              text-[#11142D]
              dark:text-white
            "
                >
                  Task Name
                </label>

                <input
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      title: e.target.value,
                    })
                  }
                  placeholder="Enter task name"
                  className="
              w-full
              h-[52px]

              px-4

              rounded-xl

              bg-[#F5F5F7]
              dark:bg-gray-800

              border
              border-transparent
              dark:border-gray-700

              text-[#11142D]
              dark:text-white

              placeholder:text-[#8A8AA0]
              dark:placeholder:text-gray-500

              outline-none

              focus:border-[#5B5CF0]
            "
                />
              </div>

              {/* Status */}
              <div>
                <label
                  className="
              block
              mb-2

              text-[14px]
              font-medium

              text-[#11142D]
              dark:text-white
            "
                >
                  Status
                </label>

                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value as TaskStatus,
                    })
                  }
                  className="
              w-full
              h-[52px]

              px-4

              rounded-xl

              bg-[#F5F5F7]
              dark:bg-gray-800

              text-[#11142D]
              dark:text-white

              border
              border-transparent
              dark:border-gray-700

              outline-none
            "
                >
                  <option>Pending</option>
                  <option>Running</option>
                  <option>Done</option>
                </select>
              </div>

              {/* Priority */}
              <div>
                <label
                  className="
              block
              mb-2

              text-[14px]
              font-medium

              text-[#11142D]
              dark:text-white
            "
                >
                  Priority
                </label>

                <select
                  value={formData.priority}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      priority: e.target.value as TaskPriority,
                    })
                  }
                  className="
              w-full
              h-[52px]

              px-4

              rounded-xl

              bg-[#F5F5F7]
              dark:bg-gray-800

              text-[#11142D]
              dark:text-white

              border
              border-transparent
              dark:border-gray-700

              outline-none
            "
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>

              {/* Start Date */}
              <div>
                <label
                  className="
              block
              mb-2

              text-[14px]
              font-medium

              text-[#11142D]
              dark:text-white
            "
                >
                  Start Date
                </label>

                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      startDate: e.target.value,
                    })
                  }
                  className="
              w-full
              h-[52px]

              px-4

              rounded-xl

              bg-[#F5F5F7]
              dark:bg-gray-800

              text-[#11142D]
              dark:text-white

              border
              border-transparent
              dark:border-gray-700

              outline-none
            "
                />
              </div>

              {/* End Date */}
              <div>
                <label
                  className="
              block
              mb-2

              text-[14px]
              font-medium

              text-[#11142D]
              dark:text-white
            "
                >
                  End Date
                </label>

                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      endDate: e.target.value,
                    })
                  }
                  className="
              w-full
              h-[52px]

              px-4

              rounded-xl

              bg-[#F5F5F7]
              dark:bg-gray-800

              text-[#11142D]
              dark:text-white

              border
              border-transparent
              dark:border-gray-700

              outline-none
            "
                />
              </div>

              {/* Column */}
              <div>
                <label
                  className="
              block
              mb-2

              text-[14px]
              font-medium

              text-[#11142D]
              dark:text-white
            "
                >
                  Board Column
                </label>

                <select
                  value={formData.column}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      column: e.target.value as
                        | "todo"
                        | "progress"
                        | "review"
                        | "done",
                    })
                  }
                  className="
              w-full
              h-[52px]

              px-4

              rounded-xl

              bg-[#F5F5F7]
              dark:bg-gray-800

              text-[#11142D]
              dark:text-white

              border
              border-transparent
              dark:border-gray-700

              outline-none
            "
                >
                  <option value="todo">To Do</option>
                  <option value="progress">In Progress</option>
                  <option value="review">In Review</option>
                  <option value="done">Done</option>
                </select>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label
                  className="
              block
              mb-2

              text-[14px]
              font-medium

              text-[#11142D]
              dark:text-white
            "
                >
                  Description
                </label>

                <textarea
                  rows={5}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    })
                  }
                  placeholder="Task description..."
                  className="
              w-full

              rounded-xl

              bg-[#F5F5F7]
              dark:bg-gray-800

              text-[#11142D]
              dark:text-white

              placeholder:text-[#8A8AA0]
              dark:placeholder:text-gray-500

              border
              border-transparent
              dark:border-gray-700

              p-4

              resize-none
              outline-none
            "
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={() => setOpenModal(false)}
                className="
            flex-1
            h-[52px]

            rounded-xl

            border
            border-[#E5E7EB]
            dark:border-gray-700

            bg-white
            dark:bg-gray-800

            text-[#666688]
            dark:text-gray-300

            font-medium

            transition-all
          "
              >
                Cancel
              </button>

              <button
                onClick={handleSaveTask}
                className="
            flex-1
            h-[52px]

            rounded-xl

            bg-[#5B5CF0]
            hover:bg-[#4E4FE8]

            dark:bg-[#7C7AFF]
            dark:hover:bg-[#6B63FF]

            text-white

            font-medium

            transition-all
          "
              >
                {editingTask ? "Update Task" : "Create Task"}
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "list" && (
        <div className="space-y-6">
          {[
            {
              title: "To Do",
              status: "Pending",
            },
            {
              title: "Doing",
              status: "Running",
            },
            {
              title: "Done",
              status: "Done",
            },
          ].map((section) => (
            <div
              key={section.title}
              className="
                bg-white
                dark:bg-gray-900

                border
                border-transparent
                dark:border-gray-800

                rounded-2xl
                p-4
                md:p-6

                overflow-x-auto

                transition-all
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2
                  className="
                    text-[20px]
                    md:text-[24px]
                    font-medium

                    text-[#11142D]
                    dark:text-white
                  "
                >
                  {section.title}
                </h2>

                <button
                  className="
                    text-[14px]
                    md:text-[15px]

                    text-[#5B5CF0]
                    dark:text-[#8B8CFF]

                    hover:underline
                  "
                >
                  See More
                </button>
              </div>

              {/* Table */}
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr
                    className="
                      border-b
                      border-[#ECECF5]
                      dark:border-gray-800
                    "
                  >
                    <th className="py-4 text-left text-[#8A8AA0] dark:text-gray-400 font-medium">
                      Task Name
                    </th>

                    <th className="text-left text-[#8A8AA0] dark:text-gray-400 font-medium">
                      Start Date
                    </th>

                    <th className="text-left text-[#8A8AA0] dark:text-gray-400 font-medium">
                      End Date
                    </th>

                    <th className="text-left text-[#8A8AA0] dark:text-gray-400 font-medium">
                      Member
                    </th>

                    <th className="text-left text-[#8A8AA0] dark:text-gray-400 font-medium">
                      Status
                    </th>

                    <th className="text-right text-[#8A8AA0] dark:text-gray-400 font-medium">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredTasks
                    .filter((task) => task.status === section.status)
                    .map((task) => (
                      <tr
                        key={task.id}
                        className="
                          border-b
                          border-[#F3F3F8]
                          dark:border-gray-800

                          hover:bg-[#FAFAFC]
                          dark:hover:bg-gray-800/50

                          transition-all
                        "
                      >
                        {/* Task */}
                        <td className="py-5">
                          <div className="flex items-center gap-3">
                            <img
                              src={task.image}
                              alt={task.title}
                              className="
                                w-10
                                h-10
                                rounded-full
                                object-cover
                              "
                            />

                            <div>
                              <p
                                className="
                                  text-[15px]
                                  font-medium

                                  text-[#11142D]
                                  dark:text-white
                                "
                              >
                                {task.title}
                              </p>

                              <p
                                className="
                                  text-[12px]

                                  text-[#8A8AA0]
                                  dark:text-gray-400
                                "
                              >
                                {task.priority}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Start Date */}
                        <td
                          className="
                            text-[#555577]
                            dark:text-gray-300
                          "
                        >
                          {task.startDate}
                        </td>

                        {/* End Date */}
                        <td
                          className="
                            text-[#FF5A5A]
                            dark:text-red-400
                          "
                        >
                          {task.endDate}
                        </td>

                        {/* Members */}
                        <td
                          className="
                            text-[#555577]
                            dark:text-gray-300
                          "
                        >
                          {task.members.length} Members
                        </td>

                        {/* Status */}
                        <td>
                          <span
                            className={`
                              px-4
                              py-2

                              rounded-lg

                              text-[13px]
                              font-medium

                              ${getStatusColor(task.status)}
                            `}
                          >
                            {task.status}
                          </span>
                        </td>

                        {/* Actions */}
                        <td>
                          <div className="flex justify-end gap-3">
                            <button
                              onClick={() => handleEditTask(task)}
                              className="
                                w-9
                                h-9

                                rounded-full

                                bg-[#F5F3FF]
                                dark:bg-indigo-900/30

                                text-[#5B5CF0]
                                dark:text-indigo-400

                                flex
                                items-center
                                justify-center

                                hover:scale-105

                                transition-all
                              "
                            >
                              <Edit size={16} />
                            </button>

                            <button
                              onClick={() => handleDeleteTask(task.id)}
                              className="
                                w-9
                                h-9

                                rounded-full

                                bg-[#FFF1F1]
                                dark:bg-red-900/20

                                text-[#FF5A5A]
                                dark:text-red-400

                                flex
                                items-center
                                justify-center

                                hover:scale-105

                                transition-all
                              "
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}

      {/* ====================================== */}
      {/* BOARD VIEW */}
      {/* ====================================== */}

      {activeTab === "board" && (
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-6
          "
        >
          {[
            {
              title: "To Do",
              key: "todo",
            },
            {
              title: "In Progress",
              key: "progress",
            },
            {
              title: "In Review",
              key: "review",
            },
            {
              title: "Done",
              key: "done",
            },
          ].map((column) => (
            <div key={column.key}>
              {/* Column Title */}
              <h2
                className="
                  text-[24px]
                  lg:text-[28px]
                  font-medium

                  text-[#4B4B72]
                  dark:text-white

                  mb-6
                "
              >
                {column.title}
              </h2>

              <div className="space-y-5">
                {filteredTasks
                  .filter((task) => task.column === column.key)
                  .map((task) => (
                    <div
                      key={task.id}
                      className="
                        bg-white
                        dark:bg-gray-900

                        border
                        border-transparent
                        dark:border-gray-800

                        rounded-2xl

                        p-5

                        shadow-sm
                        dark:shadow-none

                        transition-all
                      "
                    >
                      {/* Top */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div
                            className={`
                              w-5
                              h-5
                              rounded-full
                              border-2

                              ${
                                task.status === "Done"
                                  ? "bg-[#5B5CF0] border-[#5B5CF0]"
                                  : "border-[#A6A6BA] dark:border-gray-600"
                              }
                            `}
                          />

                          <h3
                            className="
                              text-[18px]
                              font-medium

                              text-[#11142D]
                              dark:text-white
                            "
                          >
                            {task.title}
                          </h3>
                        </div>

                        <MoreHorizontal
                          size={18}
                          className="
                            text-[#A5A5BC]
                            dark:text-gray-500
                          "
                        />
                      </div>

                      {/* Tags */}
                      <div className="flex gap-3 mt-5 flex-wrap">
                        <span
                          className={`
                            px-5
                            py-2

                            rounded-full

                            text-[13px]
                            font-medium

                            ${getPriorityColor(task.priority)}
                          `}
                        >
                          {task.priority}
                        </span>

                        <span
                          className="
                            px-5
                            py-2

                            rounded-full

                            bg-[#F4C953]
                            dark:bg-yellow-500/20

                            text-[#11142D]
                            dark:text-yellow-400

                            text-[13px]
                            font-medium
                          "
                        >
                          On Track
                        </span>
                      </div>

                      {/* Description */}
                      <p
                        className="
                          mt-5

                          text-[14px]
                          leading-7

                          text-[#6F6F86]
                          dark:text-gray-400
                        "
                      >
                        {task.description}
                      </p>

                      {/* Preview Image */}
                      {task.image && (
                        <div className="mt-5">
                          <img
                            src={task.image}
                            alt={task.title}
                            className="
                              w-full
                              h-[150px]

                              object-cover

                              rounded-xl
                            "
                          />
                        </div>
                      )}

                      {/* Footer */}
                      <div className="mt-5 flex justify-between items-center">
                        {/* Members */}
                        <div className="flex items-center">
                          <div className="flex -space-x-3">
                            {task.members.map((member, index) => (
                              <img
                                key={index}
                                src={member}
                                alt=""
                                className="
                                  w-9
                                  h-9

                                  rounded-full

                                  border-2
                                  border-white
                                  dark:border-gray-900

                                  object-cover
                                "
                              />
                            ))}
                          </div>

                          <div
                            className="
                              ml-1

                              w-9
                              h-9

                              rounded-full

                              bg-[#35B8D8]

                              text-white

                              flex
                              items-center
                              justify-center

                              text-[18px]
                            "
                          >
                            +
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-4">
                          <div
                            className="
                              flex items-center gap-1

                              text-[#A5A5BC]
                              dark:text-gray-500

                              text-[13px]
                            "
                          >
                            💬 112
                          </div>

                          <div
                            className="
                              flex items-center gap-1

                              text-[#A5A5BC]
                              dark:text-gray-500

                              text-[13px]
                            "
                          >
                            🤍 1.2k
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 mt-5">
                        <button
                          onClick={() => handleEditTask(task)}
                          className="
                            flex-1
                            h-[42px]

                            rounded-xl

                            bg-[#F5F3FF]
                            dark:bg-indigo-900/30

                            text-[#5B5CF0]
                            dark:text-indigo-400

                            font-medium

                            hover:opacity-90

                            transition-all
                          "
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDeleteTask(task.id)}
                          className="
                            w-[42px]
                            h-[42px]

                            rounded-xl

                            bg-[#FFF1F1]
                            dark:bg-red-900/20

                            text-[#FF5A5A]
                            dark:text-red-400

                            flex
                            items-center
                            justify-center

                            hover:opacity-90

                            transition-all
                          "
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ====================================== */}
      {/* TIMELINE VIEW */}
      {/* ====================================== */}
      {activeTab === "timeline" && (
        <div
          className="
            bg-white
            dark:bg-gray-900

            border
            border-transparent
            dark:border-gray-800

            rounded-3xl

            p-4
            md:p-6

            overflow-x-auto

            transition-all
          "
        >
          {/* Header */}
          <div
            className="
              flex
              flex-col
              lg:flex-row

              lg:items-center
              justify-between

              gap-4

              mb-8
            "
          >
            <h2
              className="
                text-[24px]
                md:text-[30px]

                font-medium

                text-[#11142D]
                dark:text-white
              "
            >
              Project Timeline
            </h2>

            <div className="flex flex-wrap items-center gap-3">
              <button
                className="
                  px-5
                  h-[42px]

                  rounded-xl

                  bg-[#F5F5F7]
                  dark:bg-gray-800

                  text-[#666688]
                  dark:text-gray-300

                  transition-all
                "
              >
                Previous
              </button>

              <button
                className="
                  px-5
                  h-[42px]

                  rounded-xl

                  bg-[#5B5CF0]
                  dark:bg-[#7C7AFF]

                  text-white

                  transition-all
                "
              >
                Today
              </button>

              <button
                className="
                  px-5
                  h-[42px]

                  rounded-xl

                  bg-[#F5F5F7]
                  dark:bg-gray-800

                  text-[#666688]
                  dark:text-gray-300

                  transition-all
                "
              >
                Next
              </button>
            </div>
          </div>

          {/* Timeline Layout */}
          <div
            className="
              min-w-[1200px]
              grid
              grid-cols-[220px_1fr]
            "
          >
            {/* LEFT STATUS COLUMN */}
            <div
              className="
                border-r
                border-[#ECECF5]
                dark:border-gray-800
              "
            >
              <div className="h-[80px]" />

              {["To Do", "In Progress", "In Review", "Done"].map((status) => (
                <div
                  key={status}
                  className="
                      h-[120px]

                      flex
                      items-center

                      px-5

                      text-[18px]
                      font-medium

                      text-[#11142D]
                      dark:text-white

                      border-b
                      border-[#ECECF5]
                      dark:border-gray-800
                    "
                >
                  {status}
                </div>
              ))}
            </div>

            {/* RIGHT TIMELINE */}
            <div className="relative">
              {/* Time Header */}
              <div
                className="
                  grid
                  grid-cols-9

                  h-[80px]

                  border-b
                  border-[#ECECF5]
                  dark:border-gray-800
                "
              >
                {[
                  "09:00",
                  "10:00",
                  "11:00",
                  "12:00",
                  "01:00",
                  "02:00",
                  "03:00",
                  "04:00",
                  "05:00",
                ].map((time) => (
                  <div
                    key={time}
                    className="
                      flex
                      items-center
                      justify-center

                      text-[14px]

                      text-[#8A8AA0]
                      dark:text-gray-400

                      border-r
                      border-[#ECECF5]
                      dark:border-gray-800
                    "
                  >
                    {time}
                  </div>
                ))}
              </div>

              {/* Grid */}
              {[1, 2, 3, 4].map((row) => (
                <div
                  key={row}
                  className="
                    h-[120px]

                    border-b
                    border-[#ECECF5]
                    dark:border-gray-800

                    grid
                    grid-cols-9
                  "
                >
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="
                        border-r
                        border-[#ECECF5]
                        dark:border-gray-800
                      "
                    />
                  ))}
                </div>
              ))}

              {/* Task Card 1 */}
              <div
                className="
                  absolute
                  top-[105px]
                  left-[140px]

                  w-[320px]

                  bg-white
                  dark:bg-gray-800

                  border
                  border-[#ECECF5]
                  dark:border-gray-700

                  rounded-2xl

                  p-4

                  shadow-sm
                "
              >
                <div className="flex justify-between">
                  <h3
                    className="
                      text-[16px]
                      font-medium

                      text-[#11142D]
                      dark:text-white
                    "
                  >
                    Dashboard Design
                  </h3>

                  <span
                    className="
                      px-3
                      py-1

                      rounded-full

                      bg-[#35B8D8]

                      text-white
                      text-[12px]
                    "
                  >
                    High
                  </span>
                </div>

                <p
                  className="
                    mt-3

                    text-[13px]

                    text-[#6F6F86]
                    dark:text-gray-400
                  "
                >
                  Discussion for management dashboard UI.
                </p>

                <div className="flex mt-4 -space-x-3">
                  {tasks[0]?.members.map((member, index) => (
                    <img
                      key={index}
                      src={member}
                      alt=""
                      className="
                        w-8
                        h-8

                        rounded-full

                        border-2
                        border-white
                        dark:border-gray-800
                      "
                    />
                  ))}
                </div>
              </div>

              {/* Task Card 2 */}
              <div
                className="
                  absolute
                  top-[225px]
                  left-[360px]

                  w-[340px]

                  bg-white
                  dark:bg-gray-800

                  border
                  border-[#ECECF5]
                  dark:border-gray-700

                  rounded-2xl

                  p-4

                  shadow-sm
                "
              >
                <div className="flex justify-between">
                  <h3
                    className="
                      text-[16px]
                      font-medium

                      text-[#11142D]
                      dark:text-white
                    "
                  >
                    Landing Page Design
                  </h3>

                  <span
                    className="
                      px-3
                      py-1

                      rounded-full

                      bg-[#FF8A5B]

                      text-white
                      text-[12px]
                    "
                  >
                    Medium
                  </span>
                </div>

                <p
                  className="
                    mt-3

                    text-[13px]

                    text-[#6F6F86]
                    dark:text-gray-400
                  "
                >
                  Homepage wireframe and hero section.
                </p>

                <div className="flex mt-4 -space-x-3">
                  {tasks[1]?.members.map((member, index) => (
                    <img
                      key={index}
                      src={member}
                      alt=""
                      className="
                        w-8
                        h-8

                        rounded-full

                        border-2
                        border-white
                        dark:border-gray-800
                      "
                    />
                  ))}
                </div>
              </div>

              {/* Task Card 3 */}
              <div
                className="
                  absolute
                  top-[345px]
                  left-[580px]

                  w-[320px]

                  bg-white
                  dark:bg-gray-800

                  border
                  border-[#ECECF5]
                  dark:border-gray-700

                  rounded-2xl

                  p-4

                  shadow-sm
                "
              >
                <div className="flex justify-between">
                  <h3
                    className="
                      text-[16px]
                      font-medium

                      text-[#11142D]
                      dark:text-white
                    "
                  >
                    E-Shop Mobile App
                  </h3>

                  <span
                    className="
                      px-3
                      py-1

                      rounded-full

                      bg-[#5B5CF0]

                      text-white
                      text-[12px]
                    "
                  >
                    Running
                  </span>
                </div>

                <p
                  className="
                    mt-3

                    text-[13px]

                    text-[#6F6F86]
                    dark:text-gray-400
                  "
                >
                  Product details and checkout screens.
                </p>

                <div className="flex mt-4 -space-x-3">
                  {tasks[3]?.members.map((member, index) => (
                    <img
                      key={index}
                      src={member}
                      alt=""
                      className="
                        w-8
                        h-8

                        rounded-full

                        border-2
                        border-white
                        dark:border-gray-800
                      "
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
