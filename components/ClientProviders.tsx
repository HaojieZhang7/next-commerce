"use client";
import { cartStore } from "@/lib/hooks/useCartStore";
//import useLayoutService from '@/lib/hooks/useLayout'
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
//import { SWRConfig } from 'swr'

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
