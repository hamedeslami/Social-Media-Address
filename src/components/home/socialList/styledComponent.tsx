import { Box, styled } from "@mui/material";

export const SocialList = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#f6f7f9",
  fontSize: "14px",
  padding: "10px 5px 0px 5px",
  margin: "10px 0px",
  borderRadius: "15px",
  "& .social-info": {
    display: "flex",
    justifyContent: "space-between",
    "& div": {
      marginLeft: "15px",
    },
  },
  "& .social-list-actions button": {
    padding: "unset",
    marginLeft: "15px",
  },
}));
