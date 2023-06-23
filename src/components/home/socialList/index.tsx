import { Box, Link, Button } from "@mui/material";
import SOCIAL_MEDIA_TYPES from "../../../constants";
import getIcon from "../../../utils/getIcon";
import { SocialList } from "./styledComponent";

const SocialListComponent = () => {
  return (
    <SocialList>
      <Box className="social-info">
        <Box>{getIcon("instagram")}</Box>
        <Box>{SOCIAL_MEDIA_TYPES["instagram"]}</Box>
        <Box>آی دی (ID): @haamedeslami</Box>
        <Box>
          لینک: <Link>yoursite.com/haamedeslami</Link>
        </Box>
      </Box>
      <Box className="social-list-actions">
        <Button
          startIcon={getIcon("edit")}
          variant="text"
          // onClick={() => onEdit(item)}
        >
          ویرایش
        </Button>
        <Button
          color="error"
          startIcon={getIcon("delete")}
          variant="text"
          // onClick={() => onDelete(item)}
        >
          حذف
        </Button>
      </Box>
    </SocialList>
  );
};

export default SocialListComponent;
