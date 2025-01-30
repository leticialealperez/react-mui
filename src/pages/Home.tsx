import { listProducts } from "../mocks/list-products.mock";
import { useCallback, useState } from "react";
import { Product } from "../types/product.type";
import { ListProducts } from "../components/ListProducts";
import { AddButton } from "../components/AddButton";
import { Modal } from "../components/Modal";

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>(listProducts);
  const [productUpdated, setProductUpdate] = useState<Product | null>(null);

  const addNewProduct = (newProduct: Product) => {
    setProducts([newProduct, ...products]);
  };

  const prepareUpdate = (product: Product) => {
    // 2 - informa qual o produto a ser atualizado para que o modal tenha acesso
    setProductUpdate(product);

    // 1 - abrir o modal
    toggleModal();
  };

  const updateProduct = (productUpdated: Product) => {
    setProducts((listaAtual) => {
      const index = listaAtual.findIndex(
        (product) => product.id === productUpdated.id
      );

      if (index === -1) return listaAtual;

      listaAtual[index] = { ...productUpdated };

      return listaAtual;
    });

    setProductUpdate(null);
  };

  const deleteProduct = (productId: string) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  return (
    <>
      <h1>E-commerce</h1>

      <ListProducts
        products={products}
        handleDeleteProduct={deleteProduct}
        prepareUpdated={prepareUpdate}
      />

      <AddButton handleToggleModal={toggleModal} />

      <Modal
        isOpen={isModalOpen}
        addNewProduct={addNewProduct}
        toggleModal={toggleModal}
        productUpdated={productUpdated}
        updateProduct={updateProduct}
      />
    </>
  );
}
