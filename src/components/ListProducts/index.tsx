import { Grid2 } from "@mui/material";
import { CardProduct } from "../CardProduct";
import { Product } from "../../types/product.type";

interface ListProductsProps {
  products: Product[];
  handleDeleteProduct: (productId: string) => void;
  prepareUpdated: (product: Product) => void;
}

export function ListProducts({
  products,
  handleDeleteProduct,
  prepareUpdated,
}: ListProductsProps) {
  return (
    <Grid2 container spacing={2} alignItems="center">
      {products.map((product) => (
        <CardProduct
          handleDeleteProduct={handleDeleteProduct}
          key={product.id}
          product={product}
          prepareUpdated={prepareUpdated}
        />
      ))}
    </Grid2>
  );
}

// UPDATE - Home -> ListProducts -> CardProduct -> prop drilling
