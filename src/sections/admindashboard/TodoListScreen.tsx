import React, { useState } from "react";

import {
  Check,
  Plus,
  Star,
  Trash2,
  X,
} from "lucide-react";

type TaskType = {
  id: number;
  title: string;
  completed: boolean;
  starred: boolean;
};

const initialTasks: TaskType[] = [
  {
    id: 1,
    title: "Meeting with CEO",
    completed: false,
    starred: false,
  },

  {
    id: 2,
    title: "Pick up kids from school",
    completed: false,
    starred: true,
  },

  {
    id: 3,
    title: "Shopping with Brother",
    completed: false,
    starred: false,
  },

  {
    id: 4,
    title: "Review with HR",
    completed: false,
    starred: false,
  },

  {
    id: 5,
    title: "Going to Dia’s School",
    completed: false,
    starred: false,
  },

  {
    id: 6,
    title: "Check design files",
    completed: false,
    starred: true,
  },

  {
    id: 7,
    title: "Update File",
    completed: false,
    starred: false,
  },
];

export default function TodoListScreen() {
  const [tasks, setTasks] =
    useState(initialTasks);

  const [showModal, setShowModal] =
    useState(false);

  const [taskInput, setTaskInput] =
    useState("");

  // TOGGLE COMPLETE

  const toggleComplete = (
    id: number,
  ) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed:
                !task.completed,
            }
          : task,
      ),
    );
  };

  // TOGGLE STAR

  const toggleStar = (
    id: number,
  ) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              starred:
                !task.starred,
            }
          : task,
      ),
    );
  };

  // DELETE TASK

  const deleteTask = (
    id: number,
  ) => {
    setTasks((prev) =>
      prev.filter(
        (task) => task.id !== id,
      ),
    );
  };

  // ADD TASK

  const addTask = () => {
    if (!taskInput.trim()) return;

    const newTask: TaskType = {
      id: Date.now(),
      title: taskInput,
      completed: false,
      starred: false,
    };

    setTasks((prev) => [
      newTask,
      ...prev,
    ]);

    setTaskInput("");
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      {/* HEADER */}

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-[24px] font-bold text-[#202224] md:text-[32px]">
          To-Do List
        </h1>

        {/* ADD BUTTON */}

        <button
          onClick={() =>
            setShowModal(true)
          }
          className="flex h-[44px] items-center justify-center gap-2 rounded-lg bg-[#4F7CF7] px-5 text-[13px] font-semibold text-white transition hover:bg-[#3E6EF0]"
        >
          <Plus size={16} />

          <span>Add New Task</span>
        </button>
      </div>

      {/* TASK LIST */}

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex min-h-[82px] items-center justify-between rounded-2xl border px-5 transition ${
              task.completed
                ? "border-[#4F7CF7] bg-[#4F7CF7]"
                : "border-[#E5E7EB] bg-white hover:border-[#D7D7D7]"
            }`}
          >
            {/* LEFT */}

            <div className="flex items-center gap-4">
              {/* CHECKBOX */}

              <button
                onClick={() =>
                  toggleComplete(
                    task.id,
                  )
                }
                className={`flex h-[28px] w-[28px] items-center justify-center rounded-lg border transition ${
                  task.completed
                    ? "border-white bg-[#5D88FA]"
                    : "border-[#D7D7D7] bg-white"
                }`}
              >
                {task.completed && (
                  <Check
                    size={16}
                    color="#FFFFFF"
                  />
                )}
              </button>

              {/* TASK TITLE */}

              <h3
                className={`text-[14px] font-medium md:text-[16px] ${
                  task.completed
                    ? "text-white"
                    : "text-[#202224]"
                }`}
              >
                {task.title}
              </h3>
            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-3">
              {/* STAR */}

              {!task.completed && (
                <button
                  onClick={() =>
                    toggleStar(
                      task.id,
                    )
                  }
                  className="transition hover:scale-110"
                >
                  <Star
                    size={24}
                    className={`transition ${
                      task.starred
                        ? "fill-[#F5C451] text-[#F5C451]"
                        : "text-[#C5C5C5]"
                    }`}
                  />
                </button>
              )}

              {/* DELETE */}

              <button
                onClick={() =>
                  deleteTask(task.id)
                }
                className={`flex h-[34px] w-[34px] items-center justify-center rounded-full border transition ${
                  task.completed
                    ? "border-white/20 bg-white/10 hover:bg-white/20"
                    : "border-[#D7D7D7] hover:bg-[#F8F8F8]"
                }`}
              >
                {task.completed ? (
                  <Trash2
                    size={15}
                    color="#FFFFFF"
                  />
                ) : (
                  <X
                    size={15}
                    color="#8E8E93"
                  />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ADD TASK MODAL */}

      {showModal && (
        <div
          onClick={() =>
            setShowModal(false)
          }
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4"
        >
          <div
            onClick={(e) =>
              e.stopPropagation()
            }
            className="w-full max-w-[420px] rounded-[24px] bg-white p-6 shadow-xl"
          >
            {/* TITLE */}

            <h2 className="mb-5 text-[22px] font-bold text-[#202224]">
              Add New Task
            </h2>

            {/* INPUT */}

            <input
              type="text"
              placeholder="Enter task name"
              value={taskInput}
              onChange={(e) =>
                setTaskInput(
                  e.target.value,
                )
              }
              onKeyDown={(e) => {
                if (
                  e.key === "Enter"
                ) {
                  addTask();
                }
              }}
              className="h-[48px] w-full rounded-xl border border-[#E5E7EB] px-4 text-[14px] outline-none transition focus:border-[#4F7CF7]"
            />

            {/* BUTTONS */}

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={() =>
                  setShowModal(
                    false,
                  )
                }
                className="h-[42px] rounded-lg border border-[#E5E7EB] px-5 text-[13px] font-medium text-[#202224] transition hover:bg-[#F7F7F7]"
              >
                Cancel
              </button>

              <button
                onClick={addTask}
                className="h-[42px] rounded-lg bg-[#4F7CF7] px-5 text-[13px] font-medium text-white transition hover:bg-[#3E6EF0]"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}