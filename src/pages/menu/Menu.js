import * as React from "react";
import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import OrderButton from "../order/OrderButton";
import { useSelector, useDispatch } from "react-redux";
import { selectMenuList, selectStatus, fetchMenu } from "./menuSlice";
import {
  setTableId,
  selectTableId,
  selectOrderList,
} from "../order/orderSlice";

import FoodItemCard from "./FoodItemCard";
import { Typography } from "@mui/material";
import Header from "../../Header";

export default function Menu() {
  let { id } = useParams();

  const dispatch = useDispatch();

  const status = useSelector(selectStatus);
  const menuList = useSelector(selectMenuList);

  const tableId = useSelector(selectTableId);
  const orderList = useSelector(selectOrderList);

  useEffect(() => {
    if (status === "idel") dispatch(fetchMenu());
  }, [status, dispatch]);

  useEffect(() => {
    if (id !== tableId) dispatch(setTableId(id));
  }, [id, tableId, dispatch]);

  return (
    <Fragment>
      <Header showButtons={false} />
      {status === "succeeded" ? (
        <Fragment>
          <Box sx={{ pb: 15 }}>
            {menuList.length !== 0 ? (
              menuList.map((category, idx) => (
                <FoodItemCard category={category} key={idx} />
              ))
            ) : (
              <Box sx={{ pt: 10, justifyContent: "center", display: "flex" }}>
                <Typography align="center" variant="h4" component="h1">
                  No Menu To Display
                </Typography>
              </Box>
            )}
          </Box>
          {orderList.length !== 0 ? <OrderButton /> : null}
        </Fragment>
      ) : null}
    </Fragment>
  );
}
