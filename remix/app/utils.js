import { useMatches } from "@remix-run/react";

export function validateEmail(email) {
  return typeof email === "string" && email.length > 3 && email.includes("@");
}

export function safeRedirect(to, defaultRedirect = "/dashboard") {
  if (!to || typeof to !== "string") return defaultRedirect;
  if (!to.startsWith("/") || to.startsWith("//")) return defaultRedirect;
  return to;
}

export function useOptionalUser() {
  const matches = useMatches();
  const rootMatch = matches.find((m) => m.id === "root");
  return rootMatch?.data?.user ?? null;
}

export function useUser() {
  const user = useOptionalUser();
  if (!user) throw new Error("No user found in root loader");
  return user;
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getMonthName(month) {
  return new Date(2000, month, 1).toLocaleDateString("en-US", { month: "long" });
}

export function getDaySuffix(day) {
  if (day >= 11 && day <= 13) return "th";
  switch (day % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}
