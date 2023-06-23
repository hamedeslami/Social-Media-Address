import {Box, styled} from "@mui/material";

export const PageStyled = styled(Box)(({theme}) => ({
    '& .cardBox': {
        width: "454px !important",
        height: "454px !important",
        // background: theme.palette.base.white,
        boxShadow: "0px 0px 15px rgba(16, 99, 245, 0.2)",
        borderRadius: "8px",
        padding: "20px",
    }
}));