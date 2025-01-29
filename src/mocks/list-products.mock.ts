import { Product } from "../types/product.type";
import { v4 as randomUUID } from "uuid";

export const listProducts: Product[] = [
  {
    id: randomUUID(),
    name: "Iphone 16 Max Pro",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imgUrl:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQSxnsduLGByx-dvTq05heIrDsJNhme91Pk32T6_MevnMUJspU",
    price: 10,
  },
];
