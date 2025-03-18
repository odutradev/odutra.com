import { useState, useEffect } from "react";
import { Avatar, Box, Card, Container, CssBaseline, Link, Stack, ThemeProvider, Typography } from "@mui/material";
import { Email, LinkedIn, WhatsApp, GitHub, Instagram, Twitter, YouTube, Language, Code } from "@mui/icons-material";
import icon from "./icon.jpg"; // Importa o avatar do arquivo local

// Mapeamento dos nomes dos ícones para os componentes do Material UI
const iconMap = {
  email: <Email />,
  linkedin: <LinkedIn />,
  whatsapp: <WhatsApp />,
  github: <GitHub />,
  instagram: <Instagram />,
  twitter: <Twitter />,
  youtube: <YouTube />,
  website: <Language />,
  code: <Code />,
};

function LinksPage() {
  const [profileData, setProfileData] = useState({
    name: "odutradev",
    tagline: "Carregando...",
    avatar: null,
    links: [],
  });

  useEffect(() => {
    // Dados do perfil, agora utilizando o avatar importado de ./icon.png
    const data = {
      name: "odutradev",
      tagline: "Transformando ideias em soluções digitais com código e criatividade",
      avatar: icon, // Avatar importado
      links: [
        {
          title: "Email",
          url: "mailto:joao.vitornl@gmail.com?subject=Ol%C3%A1,%20tudo%20bem?%20Tenho%20interesse%20em%20contratar%20seus%20servi%C3%A7os%20para%20desenvolver%20um%20projeto%20digital",
          icon: "email",
          color: "#D14836",
        },
        {
          title: "LinkedIn",
          url: "https://linkedin.com/in/joãovitordutra/",
          icon: "linkedin",
          color: "#0077B5",
        },
        {
          title: "WhatsApp",
          url: "https://api.whatsapp.com/send?phone=+5531997100959&text=Ol%C3%A1,%20tudo%20bem?%20Tenho%20interesse%20em%20contratar%20seus%20servi%C3%A7os%20para%20desenvolver%20um%20projeto%20digital",
          icon: "whatsapp",
          color: "#25D366",
        },
        {
          title: "GitHub",
          url: "https://github.com/odutradev",
          icon: "github",
          color: "#333333",
        },
        {
          title: "Instagram",
          url: "https://instagram.com/odutradev",
          icon: "instagram",
          color: "#E1306C",
        },
      ],
      
    };

    setProfileData(data);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
        py: 4,
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 4,
          }}
        >
          {profileData.avatar && (
            <Avatar
              src={profileData.avatar}
              alt={profileData.name}
              sx={{
                width: 120,
                height: 120,
                mb: 2,
                border: "4px solid white",
                boxShadow: 2,
              }}
            />
          )}

          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {profileData.name}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 4,
              textAlign: "center",
            }}
          >
            {profileData.tagline}
          </Typography>
        </Box>

        <Stack spacing={2}>
          {profileData.links.map((link, index) => (
            <LinkCard key={index} link={link} />
          ))}
        </Stack>

        <Box
          component="footer"
          sx={{
            mt: 6,
            textAlign: "center",
            color: "text.secondary",
            fontSize: "0.875rem",
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} {profileData.name}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

function LinkCard({ link }) {
  const iconComponent = link.icon && iconMap[link.icon.toLowerCase()] ? iconMap[link.icon.toLowerCase()] : <Language />;

  return (
    <Link href={link.url} target="_blank" rel="noopener noreferrer" underline="none">
      <Card
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          bgcolor: link.color || "primary.main",
          color: "white",
          borderRadius: 2,
          transition: "transform 0.2s, box-shadow 0.2s",
          boxShadow: 2,
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: 4,
          },
        }}
      >
        <Box sx={{ mr: 2, display: "flex" }}>{iconComponent}</Box>
        <Typography variant="body1" fontWeight="medium">
          {link.title}
        </Typography>
      </Card>
    </Link>
  );
}

export default LinksPage;
