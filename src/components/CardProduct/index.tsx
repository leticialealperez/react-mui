import {
  Grid2,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { Product } from "../../types/product.type";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  incrementByAmount,
  selectCount,
} from "../../store/modules/counter/counterSlice";

interface CardProductProps {
  product: Product;
  handleDeleteProduct: (productId: string) => void;
  prepareUpdated: (product: Product) => void;
}

export function CardProduct({
  product,
  handleDeleteProduct,
  prepareUpdated,
}: CardProductProps) {
  // lendo o valor do estado global
  const count = useAppSelector(selectCount);

  // para modificar o estado global precisa de um disparador
  const dispatch = useAppDispatch();

  const handleConfirmDelete = () => {
    const confirmed = confirm("Tem certeza que deseja deletar o produto?");

    if (confirmed) {
      handleDeleteProduct(product.id);
    }
  };

  return (
    <Grid2 key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <p>{count}</p>

      <Card sx={{ maxWidth: 320 }}>
        <CardMedia
          sx={{ height: 280 }}
          image={product.imgUrl}
          title={product.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            onClick={() => {
              dispatch(incrementByAmount(10));
            }}
          >
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
          <IconButton
            onClick={() => prepareUpdated(product)}
            aria-label="update"
            color="primary"
          >
            <Edit />
          </IconButton>

          <IconButton
            onClick={handleConfirmDelete}
            aria-label="delete"
            color="error"
          >
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
    </Grid2>
  );
}
