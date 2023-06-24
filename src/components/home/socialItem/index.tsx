import { Box, Link, Button } from "@mui/material";
import SOCIAL_MEDIA_TYPES from "../../../constants";
import getIcon from "../../../utils/getIcon";
import { SocialList } from "./styledComponent";
import { socialItemType } from "../../../store/social/socialSlice";

type itemType = {
  data: socialItemType;
  onDelete: (arg1: socialItemType) => void;
  onEdit: (arg1: socialItemType) => void;
};

const SocialItem = ({ data, onDelete, onEdit }: itemType) => {
  return (
    <SocialList key={data?.id}>
      <Box className="social-info">
        <Box>{getIcon(data?.socialType)}</Box>
        <Box>{SOCIAL_MEDIA_TYPES[data?.socialType]}</Box>
        <Box>آی دی (ID): {data?.socialId}</Box>
        <Box>
          لینک: <Link>{data?.socialLink}</Link>
        </Box>
      </Box>
      <Box className="social-list-actions">
        <Button
          startIcon={getIcon("edit")}
          variant="text"
          onClick={() => onEdit(data)}
        >
          ویرایش
        </Button>
        <Button
          color="error"
          startIcon={getIcon("delete")}
          variant="text"
          onClick={() => onDelete(data)}
        >
          حذف
        </Button>
      </Box>
    </SocialList>
  );
};

export default SocialItem;
