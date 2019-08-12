import React, { Component } from "react";
import { Card, CardContent, Typography, CardHeader, IconButton } from "@material-ui/core";

const priceStyle = {
  fontSize: "20px"
};

export default class OrderDetails extends Component {
  
  render() {
    const order = this.props.order;
    return (
      <div>
        <Card>
        <CardHeader
            action={
              <IconButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 16"
                >
                  <path
                    d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                    fill="#2874F0"
                    stroke="#FFF"
                    fillRule="evenodd"
                    opacity=".9"
                  />
                </svg>
              </IconButton>
            }
            title={order.ORDER_DATE}
            //   subheader={this.props.card.product_price}
          />
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            {order.DELIVERY_ADDRESS}
            </Typography>
            <Typography color="textSecondary" gutterBottom style={priceStyle}>
              ₹ {order.ORDER_AMOUNT}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}
