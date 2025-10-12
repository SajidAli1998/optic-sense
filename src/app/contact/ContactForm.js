"use client";

import React, { useState, useRef } from "react";
import {
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  Modal,
  Fade,
  Backdrop,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const recaptchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();
    if (!token) {
      setModalMessage("Please verify that you are not a robot.");
      setOpenModal(true);
      setLoading(false);
      return;
    }

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
      recaptchaToken: token,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setModalMessage("✅ Message sent successfully!");
        e.target.reset();
      } else {
        setModalMessage("⚠️ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setModalMessage("❌ Error sending message.");
    } finally {
      setOpenModal(true);
      setLoading(false);
    }
  };

  return (
    <FormBox>
      <Box sx={{ mb: 2 }}>
        <SectionTitle variant="h4">
          Get in <PrimaryColorSpan component="span">Touch</PrimaryColorSpan>
        </SectionTitle>
      </Box>
      <FormSubtitle variant="body1">
        Have a question or idea? We'd love to hear from you — just send us a
        message!
      </FormSubtitle>

      <StyledForm onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            required
            size="small"
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            required
            type="email"
            size="small"
          />
          <TextField
            label="Phone number"
            name="phone"
            variant="outlined"
            fullWidth
            required
            size="small"
          />
          <TextField
            label="Drop your message here"
            name="message"
            variant="outlined"
            fullWidth
            multiline
            rows={5}
            size="small"
          />

          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          />

          <StyledButton
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "SEND"}
          </StyledButton>
        </Stack>
      </StyledForm>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 300,
          },
        }}
      >
        <Fade in={openModal}>
          <ModalBox>
            <Typography variant="h6" gutterBottom>
              {modalMessage}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpenModal(false)}
            >
              OK
            </Button>
          </ModalBox>
        </Fade>
      </Modal>
    </FormBox>
  );
}

const FormBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background: "#fff",
  borderRadius: theme.shape.borderRadius * 3,
  padding: theme.spacing(4),
}));

const StyledForm = styled("form")({
  flex: 1,
});

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: "2rem",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const FormSubtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontSize: "1rem",
}));

const PrimaryColorSpan = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: "inline",
}));

const ModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#fff",
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(4),
  textAlign: "center",
  width: "90%",
  maxWidth: 400,
}));
