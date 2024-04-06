'use client';
import Image from "next/image";
import { supabase } from "../../../utils/supabaseClient";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { login, signup } from "./actions";


export default function LoginPage() {

  return (
    <div className="flex flex-col h-screen">
    <div className="flex-1 flex items-center justify-center p-4">
      <div className="mx-auto max-w-sm space-y-4 text-left">
        <div className="flex justify-center">
          <Image src='/sun.svg'  className="dark:invert" alt={""} width={100} height={100} />
        </div>
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">SunCoder</h1>
          <p className="text-gray-500 dark:text-gray-400">Digite seu e-mail abaixo para acessar sua conta.</p>
        </div>
        <div className="space-y-4">
        <form>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" name="email" placeholder="Seu e-mail" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" name="password" placeholder="Sua senha" required type="password" />
          </div>
          <div className="space-y-2 ">
            <Button formAction={login} className="mt-8 w-full">Login</Button>
            <Button className="mt-4 w-full">Entrar com Google</Button>
            <button formAction={signup}>Cadastre-se</button>
          </div>
          </form>
        </div>
      </div>
    </div>
    <div className="flex p-4 text-left gap-2 text-sm border-t dark:border-gray-800">
      <span className="text-gray-500">© 2024 SunCoder Inc</span>
      <Link className="text-blue-600 underline" href="#">
        Terms
      </Link>
      <Link className="text-blue-600 underline" href="#">
        Privacy
      </Link>
    </div>
  </div>
  );
}
