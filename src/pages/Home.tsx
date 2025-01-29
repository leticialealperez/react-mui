import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Fab,
  Dialog,
  DialogTitle,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  Box,
  Grid2,
} from "@mui/material";
import { listProducts } from "../mocks/list-products.mock";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Product } from "../types/product.type";
import { v4 as randomUUID } from "uuid";

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>(listProducts);
  const [newProduct, setNewProduct] = useState<Product>({
    id: "",
    name: "",
    description: "",
    imgUrl: "",
    price: 0,
  });

  function handleSave() {
    setProducts([
      ...products,
      {
        ...newProduct,
        id: randomUUID(),
      },
    ]);

    setNewProduct({
      id: "",
      name: "",
      description: "",
      imgUrl: "",
      price: 0,
    });

    setIsModalOpen(false);
  }

  return (
    <>
      <h1>E-commerce</h1>

      <Grid2 container spacing={2} alignItems="center" justifyContent="center">
        {products.map((product) => (
          <Grid2 key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card sx={{ maxWidth: 320 }}>
              <CardMedia
                sx={{ height: 280 }}
                image={product.imgUrl}
                title={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {product.name}
                </Typography>

                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                >
                  {product.description.slice(0, 200).concat("... Ver mais")}
                </Typography>

                <Typography gutterBottom variant="h5">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="update" color="primary">
                  <EditIcon />
                </IconButton>

                <IconButton aria-label="delete" color="error">
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      <Fab
        sx={{
          position: "fixed",
          right: 25,
          bottom: 25,
        }}
        color="primary"
        aria-label="add"
        onClick={() => setIsModalOpen(true)}
      >
        <AddIcon />
      </Fab>

      <Dialog
        open={isModalOpen}
        aria-describedby="alert-dialog-slide-description"
      >
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
          <Button onClick={() => setIsModalOpen(false)}>Cancelar</Button>
          <Button type="button" onClick={handleSave}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
