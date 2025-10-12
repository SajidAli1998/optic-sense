"use client";

import * as React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { client } from "@/sanity/sanity-client"; // Import your Sanity client
import WorkOutlineIcon from "@mui/icons-material/AssignmentOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

export default function StatsSection() {
  const [stats, setStats] = React.useState([]);

  React.useEffect(() => {
    client
      .fetch(`*[_type == "statsSection"]{stats[]{value, label}}`)
      .then((data) => {
        setStats(data[0]?.stats || []); // Set the stats state
      });
  }, []);

  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >
          {stats.map((item, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              display="flex"
              justifyContent="space-between"
            >
              <StatCard>
                <IconWrapper>
                  {index === 0 && <WorkOutlineIcon fontSize="large" />}
                  {index === 1 && <Groups2OutlinedIcon fontSize="large" />}
                  {index === 2 && <EmojiEventsOutlinedIcon fontSize="large" />}
                </IconWrapper>
                <Box>
                  <Typography variant="h5" className="stat-value">
                    + {item.value}
                  </Typography>
                  <Typography variant="body1" className="stat-label">
                    {item.label}
                  </Typography>
                </Box>
              </StatCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}

const SectionWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  background: "linear-gradient(180deg, #F9F9F9 0%, #FFFFFF 100%)",
  padding: "60px 0",
  [theme.breakpoints.down("sm")]: {
    padding: "40px 0",
  },
}));

const StatCard = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  textAlign: "left",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    justifyContent: "flex-start",
    textAlign: "left",
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: "#550D16", // deep maroon
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  [theme.breakpoints.down("sm")]: {
    width: "50px",
    height: "50px",
  },
}));
