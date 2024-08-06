"use client";
import RegisterForm from "./components/RegisterForm";

export default function Register() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center p-6 shadow-lg">
        <h1 className="text-2xl font-bold">Cadastre-se</h1>
        <RegisterForm />
      </div>
    </div>
  );
}
