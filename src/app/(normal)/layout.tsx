import Navbar from "@/components/layout/Navbar";
// import type { Metadata } from "next";

export default function NormalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
