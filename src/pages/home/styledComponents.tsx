import { Box, styled } from "@mui/material";

export const PageStyled = styled(Box)(({ theme }) => ({
  margin: "50px 0px",
  "& .main-card": {
    backgroundColor: theme.palette.primary.light,
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: "15px",
    padding: "20px",
    marginTop: "15px",
    boxShadow: "0px 20px 18px 0px rgba(0,0,0,0.1)",
    "& .main-button": {
      margin: "15px 0px",
    },
    "& .card": {
      backgroundColor: theme.palette.primary.dark,
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "unset",
      "& .card-title span": {
        fontSize: "16px !important",
        fontWeight: "bold",
      },
      "& .card-form-select": {
        borderRadius: "10px",
      },
      "& .MuiOutlinedInput-root": {
        borderRadius: "10px",
      },
      "& .card-actions": {
        justifyContent: "flex-end",
        "& button": {
          borderRadius: "10px",
          "& p": {
            fontSize: "14px",
          },
        },
      },
    },
  },
}));
