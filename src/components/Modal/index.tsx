import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Box,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../../types/product.type";
import { v4 as randomUUID } from "uuid";

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  addNewProduct: (product: Product) => void;
  productUpdated: Product | null;
  updateProduct: (productUpdated: Product) => void;
}

export function Modal({
  isOpen,
  toggleModal,
  addNewProduct,
  productUpdated,
  updateProduct,
}: ModalProps) {
  const [newProduct, setNewProduct] = useState<Product>({
    id: "",
    name: "",
    description: "",
    imgUrl: "",
    price: 0,
  });

  useEffect(() => {
    if (productUpdated) {
      setNewProduct({ ...productUpdated });
    } else {
      clearFields();
    }
  }, [productUpdated]);

  const handleSave = () => {
    if (productUpdated) {
      // modo update
      updateProduct(newProduct);
    } else {
      // modo create
      addNewProduct({
        ...newProduct,
        id: randomUUID(),
      });
    }

    clearFields();
    toggleModal();
  };

  const clearFields = () => {
    setNewProduct({
      id: "",
      name: "",
      description: "",
      imgUrl: "",
      price: 0,
    });
  };

  return (
    <Dialog open={isOpen} aria-describedby="alert-dialog-slide-description">
      <DialogTitle sx={{ fontSize: "24px" }}>Cadastrar produto</DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Informe os dados necessários para cadastrar um novo produto no
          e-commerce.
        </DialogContentText>

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "12px",
          }}
        >
          <TextField
            id="name"
            label="Nome"
            variant="outlined"
            fullWidth
            value={newProduct.name}
            onChange={(ev) =>
              setNewProduct({ ...newProduct, name: ev.target.value })
            }
          />
          <TextField
            id="description"
            label="Descrição"
            variant="outlined"
            fullWidth
            value={newProduct.description}
            onChange={(ev) =>
              setNewProduct({ ...newProduct, description: ev.target.value })
            }
          />
          <TextField
            id="imgUrl"
            label="Link para imagem"
            variant="outlined"
            fullWidth
            value={newProduct.imgUrl}
            onChange={(ev) =>
              setNewProduct({ ...newProduct, imgUrl: ev.target.value })
            }
          />
          <TextField
            type="number"
            id="price"
            label="Preço (R$)"
            variant="outlined"
            fullWidth
            value={newProduct.price || ""}
            onChange={(ev) =>
              setNewProduct({ ...newProduct, price: Number(ev.target.value) })
            }
          />
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={toggleModal}>Cancelar</Button>
        <Button type="button" onClick={handleSave}>
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
