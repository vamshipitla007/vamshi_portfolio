/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

import Pancake from "@/assets/restaurant/pancake.jpg";
import Google from "@/assets/restaurant/google.png";
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "@/utils/validators";

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: isLogin ? "" : validateName(form.name),
      email: validateEmail(form.email),
      password: validatePassword(form.password),
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((err) => err);
    if (hasError) return;

    console.log("Form Submitted", form);
  };

  const toggleMode = () => {
    setIsLogin((prev) => !prev);
    setForm({ name: "", email: "", password: "" });
    setErrors({});
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT */}
      <div className="w-1/2 flex flex-col justify-center px-16 bg-white">
        <div className="absolute left-5 top-5 w-[33px] h-[33px] rounded-full bg-[#FF8A00] flex items-center justify-center">
          <span className="text-white text-sm font-bold">A</span>
        </div>
        <h2 className="text-[40px] font-bold text-[#311F09] font-raleway">
          {isLogin ? "Login" : "Sign up"}
        </h2>

        <p className="text-sm text-gray-500 mb-6 mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span className="text-blue-500 cursor-pointer" onClick={toggleMode}>
            {isLogin ? "Sign up" : "Log in"}
          </span>
        </p>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <InputField
              label="Full name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              error={errors.name}
            />
          )}

          <InputField
            label="Email address"
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            error={errors.email}
          />

          <InputField
            label="Password"
            type="password"
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
            error={errors.password}
          />

          <div className="flex justify-between items-center text-sm mb-4">
            <label className="flex items-center space-x-2">
              <input
                style={{ borderRadius: "8px" }}
                type="checkbox"
                className="
                w-[25px] h-[25px]
                rounded-[8px]
                border border-[#DCD4CB]
                cursor-pointer
            "
              />
              <span className="text-[#311F09]">Remember me</span>
            </label>

            <span className="text-gray-500 cursor-pointer">
              Forget Password?
            </span>
          </div>

          <Button text={isLogin ? "Login" : "Sign up"} type="submit" />

          <div className="mt-4">
            <Button
              text={isLogin ? "Login with Google" : "Sign up with Google"}
              variant="secondary"
              icon={Google}
            />
          </div>
        </form>

        <p className="text-xs text-gray-400 mt-10">
          Copyright © 2022 Delizioso
        </p>
      </div>

      {/* RIGHT */}
      <div className="w-1/2 h-screen">
        <img src={Pancake} alt="food" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default SignUp;
