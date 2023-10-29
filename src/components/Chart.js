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
import CircularProgress from "@mui/material/CircularProgress"; 

export default function Chart() {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    // Make an API request to fetch data
    axios
      .get("https://reidnax-n0nl.onrender.com/users")
      .then((response) => {
        setData(response.data.users);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
        setLoading(false); // Set loading to false on error
      });
  }, []);

  return (
    <React.Fragment>
      {loading ? ( // Render the loading indicator when loading is true
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
          <CircularProgress />
        </div>
      ) : (
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
            <Bar dataKey="height" name="Height(CM)" fill={theme.palette.info.main} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </React.Fragment>
  );
}
