import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const Other = () => {
  return (
    <Box align="center" alignContent="center" height="85vh">
      <Card
        sx={{
          width: "60%",
          height: "75%",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            component="div"
            sx={{ color: "red", fontFamily: "serif" }}
          >
            THE IMPLEMENTATION FOR THE "OTHERS" TAB HAS NOT BEEN COMPLETED YET.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Other;