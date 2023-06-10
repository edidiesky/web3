import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";

import { useSelector, useDispatch } from "react-redux";
import LoaderIndex from "../../../components/loaders/index";

export default function Visuals() {
  const dispatch = useDispatch();
  const { productStat, isLoading } = useSelector((store) => store.product);

  const ProductStatdate = productStat?.map((stats) => {
    const { date, count } = stats;
    return date;
  });

  const ProductQuantity = productStat?.map((stats) => {
    const { date, count } = stats;
    return count;
  });

  const [data, setData] = useState({
    options: {
      chart: {
        type: "bar",
        height: 450,
        fontFamily: "Montserrat",
        foreColor: "#081b36",
        fontSize: "20px",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ProductStatdate,
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "$" + val;
          },
        },
      },
    },
    series: [
      {
        name: "Product Count",
        data: ProductQuantity,
      },
    ],
  });

  return (
    <>
      <VisualsWrapper>
        {isLoading && <LoaderIndex />}
        <h3>Order Trends by Month</h3>
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          width={"100%"}
          height={450}
        />
      </VisualsWrapper>
    </>
  );
}

const VisualsWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  background: var(--white);
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  h3 {
    font-size: 2rem;
    color: var(--text-color);
    font-weight: 600;
    text-transform: capitalize;
    font-family: "Barlow", sans-serif;
  }
`;
