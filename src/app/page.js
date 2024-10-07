/** @format */

import CategoryBento from "@/components/category/category";
import ContactForm from "@/components/contact/contactform";
import Hero from "@/components/hero/hero";
import HomeProducts from "@/components/homeproducts/homeProducts";
import ProductSlide from "@/components/productsslide/products";
import About from "@/components/ui/about";
import Presence from "@/components/ui/presence";
import Stats from "@/components/ui/stats";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-8">
      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>
      <section className="w-full text-center gap-6">
        <About />
      </section>
      <section className="w-full text-center gap-6">
        <Presence />
      </section>
      <section className="w-full text-center">
        <CategoryBento />
      </section>
      <section className="w-full text-center">
        <HomeProducts />
      </section>
      <section className="w-full text-center gap-6">
        <Stats />
      </section>
      <section className="w-full text-center gap-6">
        <ProductSlide />
      </section>
      <section id="enquire" className="w-full text-center gap-6">
        <ContactForm />
      </section>
    </main>
  );
}
