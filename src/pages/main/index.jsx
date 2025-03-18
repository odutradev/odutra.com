import { Box, Button, Container, CssBaseline, Divider, Stack, ThemeProvider, Typography } from "@mui/material"
import { Email, LinkedIn, WhatsApp } from "@mui/icons-material"

function Portfolio() {
  // Social media links data
  const socialLinks = [
    {
      name: "Gmail",
      icon: <Email />,
      url: "mailto:joao.vitornl@gmail.com?subject=Ola tudo bem ? Tenho interesse em seus serviços!",
      color: "#D14836",
    },
    {
      name: "LinkedIn",
      icon: <LinkedIn />,
      url: "https://linkedin.com/in/joãovitordutra/",
      color: "#0077B5",
    },
    {
      name: "WhatsApp",
      icon: <WhatsApp />,
      url: "https://api.whatsapp.com/send?phone=+5531997100959&text=ola%20tudo%20bem%20?%20tenho%20interesse%20em%20seus%20serviços!",
      color: "#25D366",
    },
  ]

  return (
     <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "background.default",
          p: 3,
        }}
      >
        <Container maxWidth="md">
          <Box textAlign="center" sx={{ mb: 6 }}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
              }}
            >
              odutradev
            </Typography>

            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                mb: 4,
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
              }}
            >
              Transformando ideias em soluções digitais com código e criatividade
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" sx={{ mt: 4 }}>
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="contained"
                  startIcon={link.icon}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: link.color,
                    "&:hover": {
                      bgcolor: link.color,
                      opacity: 0.9,
                    },
                    px: 3,
                    py: 1.5,
                  }}
                >
                  {link.name}
                </Button>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>
  )
}

export default Portfolio

