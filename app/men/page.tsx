import Container from "../components/ui/Container";
import PageBanner from "../components/layout/PageBanner";
import FilterSidebar from "../components/products/FilterSidebar";
import ProductGrid from "../components/ProductGrid";
import SortDropdown from "../components/products/SortDropdown";

export default function MenPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <PageBanner
        badge="PD_VESTURE"
        title="Men's Collection"
        description="Luxury shirts, timeless tailoring, and premium craftsmanship for the modern gentleman."
        page="Men"
      />

      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <FilterSidebar />

          <div className="lg:col-span-3">
            <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-6">
              <div>
                <h2 className="text-3xl font-light text-white">
                  Featured Products
                </h2>

                <p className="mt-2 text-gray-500">
                  Premium Men's Collection
                </p>
              </div>

              <SortDropdown />
            </div>

            <ProductGrid category="Men" />
          </div>
        </div>
      </Container>
    </main>
  );
}