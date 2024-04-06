'use client';
import {Login} from "./../../components/login"
import { supabase } from "../../../utils/supabaseClient";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function LoginPage() {
  const router = useRouter();
  useEffect(()=>{
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        router.push('/');
      }
    }
    getUser();
  }, [router]);
    

  return (
      <Login/>
  );
}
