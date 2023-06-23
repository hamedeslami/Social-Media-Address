import { Box, styled } from "@mui/material";

export const PageStyled = styled(Box)(({ theme }) => ({
  marginTop: "50px",
  "& .main-card": {
    backgroundColor: "#fff",
    border: "1px solid #f3f4f6",
    borderRadius: "15px",
    padding: "20px",
    marginTop: "15px",
    boxShadow: "0px 20px 18px 0px rgba(0,0,0,0.1)",
    "& .main-button": {
      margin: "15px 0px",
    },
    "& .card": {
      backgroundColor: "#f6f7f9",
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
          border: "unset",
          borderRadius: "10px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          "& p": {
            fontSize: "14px",
          },
        },
      },
    },
    "& .social-list": {
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
      '& .social-list-actions button': {
        padding: "unset",
        marginLeft: "15px"
      },
    },
  },

  // '& .pageTitle': {
  //     margin: "20px 0px 10px 0px",
  // },
  // '& .breadcrumbs': {
  //     marginBottom: "30px",
  //     '& a':{
  //         textDecoration: "none",
  //     }
  // },
  // '& .pageCard': {
  //     backgroundColor: "#fff",
  //     border: "1px solid #f3f4f6",
  //     borderRadius: "15px",
  //     boxShadow: "0px 20px 18px 0px rgba(0,0,0,0.1)",
  //     '& .cardTitle': {
  //         fontSize: "14px",
  //         fontWeight: "bold",
  //     }
  // },
  // '& .pageButton': {
  //     margin: "20px 0px",

  // },
  // '& .pageForm': {
  //     marginTop: "15px",
  // },
  // '& .pageFormSelect': {
  //     borderRadius: "10px"
  // },
  // '& .MuiOutlinedInput-root': {
  //     borderRadius: "10px",
  // },
  // '& .pageCollapse': {
  //     backgroundColor: "#f6f7f9",
  //     padding: "20px",
  //     borderRadius: "15px",
  //     '& .collapseTitle': {
  //         padding: "10px 0px",
  //         fontSize: "16px",
  //         fontWeight: "bold",
  //     }
  // },
}));
