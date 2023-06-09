import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
} from "@mui/material";
import style from "./Products.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProucts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProucts();
  }, []);

  const filterProduct = (pro) => {
    const filterList = data.filter((x) => x.category == pro);
    setFilter(filterList);
  };

  const ShowProduct = () => {
    return (
      <>
        <div className={style.buttons}>
          <button className={style.btn} onClick={() => setFilter(data)}>
            All Products
          </button>
          <button
            className={style.btn}
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className={style.btn}
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className={style.btn}
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className={style.btn}
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>

        <div className={style.cardContainer}>
          {filter.map((product) => {
            return (
              <>
                <div className={style.card}>
                  <Card sx={{ maxWidth: 450, height: 550 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={product.image}                            
                        alt={product.title}
                        className={style.img}
                        sx={{ size: "0.3rem" }}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className={style.content}
                        >
                          <h5>{product.title.substring(0, 15)}</h5>
                          <p>${product.price}</p>
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <div className={style.link}>
                          <a href="#" className={style.Buybutton}>
                            Buy Now
                          </a>
                        </div>
                      </CardActions>
                    </CardActionArea>
                  </Card>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  };

  const Loading = () => {
    return (
      <>
        <div className={style.subLoadingContainer}>
          <div>
            <Skeleton height={350}/>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={style.container}>
      <div className={style.heading}>
        <h1>Latest Product</h1>
      </div>
      <hr />
      <div className={style.productsContainer}>
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  );
};
