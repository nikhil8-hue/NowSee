import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  CssBaseline,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import HandshakeIcon from "@mui/icons-material/Handshake";
import DuoIcon from "@mui/icons-material/Duo";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(to bottom, #f5f9ff 0%,rgb(179, 207, 248) 100%)",
          p: 4,
        }}
      >
        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 4,
          }}
        >
          <input
            type="text"
            placeholder="Find your doctor"
            style={{
              width: "80%",
              padding: "15px 20px",
              borderRadius: "50px",
              border: "none",
              fontSize: "16px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              outline: "none",
              transition: "all 0.3s ease",
              "&:focus": {
                boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
              },
            }}
          />
        </Box>

        {/* Services Grid */}
        <Grid
          container
          spacing={3}
          sx={{
            width: "80vw",
            margin: "0 auto",
            "& .MuiCard-root": {
              borderRadius: "16px",
              transition: "all 0.3s ease",
              backgroundColor: "white",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 20px rgba(121, 209, 236, 0.3)",
                border: "1px solid rgba(121, 209, 236, 0.5)",
              },
            },
          }}
        >
          <Grid size={3} sm={6} md={3}>
            <Card sx={{ height: "100%" }}>
              <CardContent
                sx={{
                  textAlign: "center",
                  p: 3,
                  "&:hover": {
                    "& svg": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <MedicalInformationIcon
                  sx={{
                    fontSize: 50,
                    color: "#3f78cb",
                    mb: 2,
                    transition: "transform 0.3s ease",
                  }}
                />
                <Button
                  onClick={() => navigate("/booktest")}
                  variant="contained"
                  size="small"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    py: 2,
                    px: 6,
                    fontSize: ".8rem",
                    fontWeight: "bold",
                    backgroundColor: "white",
                    color: "#1976d2",
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    },
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                    borderRadius: "50px",
                  }}
                >
                  Book Test
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={3} sm={6} md={3}>
            <Card sx={{ height: "100%" }}>
              <CardContent
                sx={{
                  textAlign: "center",
                  p: 3,
                  "&:hover": {
                    "& svg": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <VaccinesIcon
                  sx={{
                    fontSize: 50,
                    color: "#3EB489",
                    mb: 2,
                    transition: "transform 0.3s ease",
                  }}
                />
                <Button
                  onClick={() => navigate("/medicalstore")}
                  variant="contained"
                  size="small"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    py: 2,
                    px: 4,
                    fontSize: ".8rem",
                    fontWeight: "bold",
                    backgroundColor: "white",
                    color: "#3EB489",
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    },
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                    borderRadius: "50px",
                  }}
                >
                  Near Pharmacy
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={3} sm={6} md={3}>
            <Card sx={{ height: "100%" }}>
              <CardContent
                sx={{
                  textAlign: "center",
                  p: 3,
                  "&:hover": {
                    "& svg": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <HandshakeIcon
                  sx={{
                    fontSize: 50,
                    color: "#FCF55F",
                    mb: 2,
                    transition: "transform 0.3s ease",
                  }}
                />
                <Button
                  onClick={() => navigate("/bookappointment")}
                  variant="contained"
                  size="small"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    py: 2,
                    px: 2,
                    fontSize: ".8rem",
                    fontWeight: "bold",
                    backgroundColor: "white",
                    color: "#dfeb05",
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    },
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                    borderRadius: "50px",
                  }}
                >
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={3} sm={6} md={3}>
            <Card sx={{ height: "100%" }}>
              <CardContent
                sx={{
                  textAlign: "center",
                  p: 3,
                  "&:hover": {
                    "& svg": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <DuoIcon
                  sx={{
                    fontSize: 50,
                    color: "#30c2b3",
                    mb: 2,
                    transition: "transform 0.3s ease",
                  }}
                />
                <Button
                  onClick={() => navigate("/videocall")}
                  variant="contained"
                  size="small"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    py: 2,
                    px: 4,
                    fontSize: ".8rem",
                    fontWeight: "bold",
                    backgroundColor: "white",
                    color: "#30c2b3",
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    },
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                    borderRadius: "50px",
                  }}
                >
                  Virtual Cal
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
