import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default function AboutMissionVision() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "aboutMissionVision"][0]{
        title,
        commitment,
        mission,
        vision,
        image
      }`;
      try {
        const result = await client.fetch(query);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (!data) {
    return <Typography>No data found.</Typography>;
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: { xs: 2, md: 6 },
        background: "#F6F3F3ED",
        zIndex: 1,
        position: "relative",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 4, md: 6 }}
        alignItems="center"
      >
        <Stack flex={1} spacing={4} alignItems="center">
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="h2"
              sx={{ fontWeight: 700, color: "text.secondary" }}
            >
              {data.title}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: "#6d1b1b",
                mt: 1,
                lineHeight: 1.2,
                maxWidth: { xs: "100%", md: "90%" },
              }}
            >
              {data.commitment}
            </Typography>
          </Box>
          <Box>
            <img
              src={
                data.image
                  ? urlFor(data.image).url()
                  : "/images/about/mission-vision.png"
              }
              alt="Mission Vision"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "inherit",
              }}
            />
          </Box>
        </Stack>

        <Stack flex={1} spacing={6} justifyContent="center">
          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 4,
              boxShadow: "0 6px 12px rgba(109,27,27,0.08), 0 8px 0 #6d1b1b",
              p: { xs: 3, md: 4 },
              mb: 2,
              transition: "transform 0.3s",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#6d1b1b",
                mb: 1,
                textTransform: "capitalize",
              }}
            >
              our Mission
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {data.mission}
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 4,
              boxShadow: "0 6px 12px rgba(109,27,27,0.08), 0 8px 0 #6d1b1b",
              p: { xs: 3, md: 4 },
              transform: { xs: "none", md: "rotate(-3deg)" },
              transition: "transform 0.3s",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#6d1b1b",
                mb: 1,
                textTransform: "capitalize",
              }}
            >
              our Vision
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {data.vision}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}
