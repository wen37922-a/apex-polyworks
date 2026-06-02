import type { Metadata } from "next";
import { AdminImageUploader } from "@/components/AdminImageUploader";

export const metadata: Metadata = {
  title: "Admin Image Manager",
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminPage() {
  return (
    <main className="bg-slate-50">
      <AdminImageUploader />
    </main>
  );
}
