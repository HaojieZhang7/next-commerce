"use client";

import useCartService from "@/lib/hooks/useCartStore";
import Link from "next/link";
import { useEffect, useState } from "react";

const Menu = () => {
  const { items } = useCartService();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <ul className="flex items-stretch">
        <li>
          <Link className="btn btn-ghost rounded-btn" href="/cart">
            Cart 🛒
            {mounted && items.length != 0 && (
              <div className="badge badge-secondary text-slate-200">
                {items.reduce((a, c) => a + c.qty, 0)}{" "}
              </div>
            )}
          </Link>
        </li>
        <li>
          <button className="btn btn-ghost rounded-btn" type="button">
            Login
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
