import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
