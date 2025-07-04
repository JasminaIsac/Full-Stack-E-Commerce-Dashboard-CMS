import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboards from "@/actions/get-billboard";

export const revalidate = 0;

const HomePage = async () => {
    const billboards = await getBillboards();
    const products = await getProducts({ isFeatured: true });
    return (
        <Container>
            <div className="pb-10 space-y-10">
                <Billboard data={billboards[billboards.length - 1]} />
                <div className="flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    )
}

export default HomePage;