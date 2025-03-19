import { useState, useEffect } from "react";
import { Avatar, Box, Card, Container, Link, Stack, Typography, ToggleButton, ToggleButtonGroup, IconButton } from "@mui/material";
import { Email, LinkedIn, WhatsApp, GitHub, Instagram, ContentCopy } from "@mui/icons-material";
import icon from "./icon.jpg";

const iconMap = {
  email: <Email />, linkedin: <LinkedIn />, whatsapp: <WhatsApp />, github: <GitHub />,
  instagram: <Instagram />
};

function LinksPage() {
  const [mode, setMode] = useState("social");
  const [copied, setCopied] = useState(false);
  const [profileData, setProfileData] = useState({ name: "odutradev", tagline: "Carregando...", avatar: null, links: [] });

  useEffect(() => {
    const commonLinks = [
      { title: "PIX", icon: "pix", color: "#757575" }
    ];

    const corporateLinks = [
      { title: "Email", url: "mailto:joao.vitornl@gmail.com", icon: "email", color: "#D14836" },
      { title: "LinkedIn", url: "https://linkedin.com/in/joãovitordutra/", icon: "linkedin", color: "#0077B5" },
      { title: "WhatsApp", url: "https://api.whatsapp.com/send?phone=+5531997100959", icon: "whatsapp", color: "#25D366" },
      { title: "GitHub", url: "https://github.com/odutradev", icon: "github", color: "#333333" },
      { title: "Instagram", url: "https://instagram.com/odutradev", icon: "instagram", color: "#E1306C" },
    ];

    const socialLinks = [
      { title: "WhatsApp", url: "https://api.whatsapp.com/send?phone=+5531997100959", icon: "whatsapp", color: "#25D366" },
      { title: "Instagram", url: "https://instagram.com/joaovitor.dt", icon: "instagram", color: "#E1306C" },
    ];

    setProfileData({
      name: "odutradev",
      tagline: "Transformando ideias em soluções digitais com código e criatividade",
      avatar: icon,
      links: [...(mode === "corporativo" ? corporateLinks : socialLinks), ...commonLinks],
    });
  }, [mode]);

  const copyPix = () => {
    navigator.clipboard.writeText("pix@odutra.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", bgcolor: "background.default", py: 4, px: 2 }}>
      <Container maxWidth="sm">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
          {profileData.avatar && (
            <Avatar src={profileData.avatar} alt={profileData.name} sx={{ width: 120, height: 120, mb: 2, border: "4px solid white", boxShadow: 2 }} />
          )}
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
            {profileData.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: "center" }}>
            {profileData.tagline}
          </Typography>
          <ToggleButtonGroup
            value={mode}
            exclusive
            onChange={(event, newMode) => { if (newMode) setMode(newMode); }}
            sx={{ display: "flex", justifyContent: "center", mb: 2, width: "100%" }}
          >
            <ToggleButton value="social" sx={{ flex: 1 }}>Social</ToggleButton>
            <ToggleButton value="corporativo" sx={{ flex: 1 }}>Corporativo</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Stack spacing={2}>
          {profileData.links.map((link, index) => (
            link.icon === "pix" ? (
              <Card key={index} sx={{ p: 2, display: "flex", alignItems: "center", justifyContent: "space-between", bgcolor: link.color, color: "white", borderRadius: 2 }}>
                <Typography variant="body1" fontWeight="medium">PIX: pix@odutra.com</Typography>
                {copied && <Typography variant="caption" sx={{ ml: 1 }}>Copiado!</Typography>}
                <IconButton onClick={copyPix} sx={{ color: "white" }}>
                  <ContentCopy />
                </IconButton>
              </Card>
            ) : (
              <LinkCard key={index} link={link} />
            )
          ))}
        </Stack>
        <Box component="footer" sx={{ mt: 6, textAlign: "center", color: "text.secondary", fontSize: "0.875rem" }}>
          <Typography variant="body2">© {new Date().getFullYear()} {profileData.name}</Typography>
        </Box>
      </Container>
    </Box>
  );
}

function LinkCard({ link }) {
  const iconComponent = link.icon && iconMap[link.icon.toLowerCase()] ? iconMap[link.icon.toLowerCase()] : null;
  return (
    <Link href={link.url} target="_blank" rel="noopener noreferrer" underline="none">
      <Card sx={{ p: 2, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: link.color, color: "white", borderRadius: 2, transition: "transform 0.2s, box-shadow 0.2s", boxShadow: 2, "&:hover": { transform: "translateY(-3px)", boxShadow: 4 } }}>
        <Box sx={{ mr: 2, display: "flex" }}>{iconComponent}</Box>
        <Typography variant="body1" fontWeight="medium">{link.title}</Typography>
      </Card>
    </Link>
  );
}

export default LinksPage;
