import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import axios from "axios";

export default function Chart() {
  const theme = useTheme();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make an API request to fetch data
    axios
      .get("http://localhost:8080/users")
      .then((response) => {
        setData(response.data.users);
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
  }, []);
  console.log(data);
  return (
    <React.Fragment>
      <ResponsiveContainer width="100%">
        <BarChart data={data}>
          <XAxis
            dataKey="firstName"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Data
            </Label>
          </YAxis>
          <Tooltip />
          <Legend />

          <Bar dataKey="age" name="Age" fill={theme.palette.primary.main} />
          <Bar
            dataKey="weight"
            name="Weight"
            fill={theme.palette.secondary.main}
          />
          <Bar dataKey="height" name="Height" fill={theme.palette.info.main} />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
