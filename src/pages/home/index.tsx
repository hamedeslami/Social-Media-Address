import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import getIcon from "../../utils/getIcon";
import { PageStyled } from "./styledComponents";
import SelectBoxComponent from "../../components/home/selectBox";
import SOCIAL_MEDIA_TYPES from "../../constants";
import BreadcrumbsComponent from "../../components/home/breadcrumbs";
import SocialItem from "../../components/home/socialItem";
import { useDispatch, useSelector } from "react-redux";
import {
  addToSocial,
  deleteSocial,
  getSocial,
  updateSocial,
} from "../../store/social/action";
import { AppDispatch } from "../../store/store";
import AlertComponent from "../../components/home/alert";
import { changeTheme } from "../../store/theme/themeSlice";
import { rootReducerType } from "../../store/rootReducer";
import { socialItemType } from "../../store/social/socialSlice";

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const social = useSelector((state: rootReducerType) => state.social);
  const theme = useSelector((state: rootReducerType) => state.theme);

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      socialLink: "",
      socialId: "",
      socialType: "",
      id: null,
    },
  });

  const [collapseOpen, setCollapseOpen] = useState<boolean>(false);
  const [openAlertBox, setOpenAlertBox] = useState<boolean>(false);
  const [isRefresh, setIsRefresh] = useState<boolean>(false);
  const [currentSocialMedia, setCurrentSocialMedia] =
    useState<socialItemType | null>(null);

  const [currentItemForDelete, setCurrentItemForDelete] =
    useState<socialItemType | null>(null);

  const toggleOpenForm = (): void => {
    setCollapseOpen(true);
  };

  const findItemHandler = (data: socialItemType) => {
    const foundItem = social.list.some(
      (item: socialItemType) =>
        item.socialId === data.socialId ||
        item.socialLink === data.socialLink ||
        item.socialType === data.socialType
    );
    return foundItem;
  };

  const onSubmit: SubmitHandler<socialItemType> = (data): void => {
    const found = findItemHandler(data);
    if (currentSocialMedia) {
      dispatch(updateSocial({id: currentSocialMedia.id, item: data}));
      setCurrentSocialMedia(null);
    } else {
      !found && dispatch(addToSocial(data));
    }
    setIsRefresh(!isRefresh);
    reset();
  };

  const socialMediaListName = () => {
    const socialMediaNameArray = [];
    for (const key in SOCIAL_MEDIA_TYPES) {
      socialMediaNameArray.push({ value: key, label: SOCIAL_MEDIA_TYPES[key] });
    }
    return socialMediaNameArray;
  };

  const isCurrentSocialMedia = () => {
    return currentSocialMedia
      ? `ویرایش مسیر ارتباطی ${
          SOCIAL_MEDIA_TYPES[currentSocialMedia.socialType]
        }`
      : "افزودن مسیر ارتباطی";
  };

  const closeAlertBox = (): void => {
    setOpenAlertBox(false);
  };

  const editSocialItemHandler = (item: socialItemType) => {
    setCurrentSocialMedia(item);
    setValue("socialId", item.socialId);
    setValue("socialLink", item.socialLink);
    setValue("socialType", item.socialType);
    setCollapseOpen(true);
  };

  const onDelete = (item: socialItemType): void => {
    setCurrentItemForDelete(item);
    setOpenAlertBox(true);
  };

  const deleteSocialItemHandler = (): void => {
    dispatch(deleteSocial(currentItemForDelete?.id));
    setIsRefresh(!isRefresh);
    closeAlertBox();
  };

  const cancelHandler = (): void => {
    setCollapseOpen(false);
    setCurrentSocialMedia(null);
    reset();
  };

  const themeModeHandler = (): void => {
    dispatch(changeTheme(theme.mode === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    dispatch(getSocial());
  }, [dispatch, isRefresh, currentItemForDelete]);

  return (
    <PageStyled>
      <AlertComponent
        confirm={deleteSocialItemHandler}
        dismiss={closeAlertBox}
        open={openAlertBox}
        title="آیا از تصمیم خود مطمئن هستید؟"
      >
        {`لطفا تایید را بنویسید ${currentItemForDelete?.socialId} برای حذف مسیر ارتباطی`}
      </AlertComponent>

      <Container maxWidth="md">
        <Box className="top-header">
          <Box>
            <Typography variant="h4" component="h1">
              حساب کاربری
            </Typography>
            <BreadcrumbsComponent />
          </Box>
          <Box>
            <Button
              startIcon={getIcon(theme.mode === "dark" ? "light" : "dark")}
              color="primary"
              onClick={themeModeHandler}
            >
              {theme.mode === "dark" ? "روشن" : "تاریک"}
            </Button>
          </Box>
        </Box>

        <Box className="main-card">
          <Typography>مسیر های ارتباطی</Typography>
          <Button
            className="main-button"
            startIcon={getIcon(!currentSocialMedia ? "add" : "edit")}
            variant="text"
            onClick={toggleOpenForm}
            color="primary"
          >
            {isCurrentSocialMedia()}
          </Button>
          <Collapse in={collapseOpen}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Card className="card">
                <CardHeader
                  className="card-title"
                  title={isCurrentSocialMedia()}
                />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Controller
                        name="socialType"
                        control={control}
                        rules={{
                          required: "نوع شبکه اجتماعی را انتخاب نمایید.",
                        }}
                        render={({ field: { onChange, value } }) => (
                          <SelectBoxComponent
                            selectError={errors["socialType"]}
                            value={value}
                            name={"socialType"}
                            label={"نوع*"}
                            onChange={onChange}
                            items={socialMediaListName()}
                            className="card-form-select"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Controller
                        name="socialLink"
                        control={control}
                        rules={{
                          required: "لینک را وارد نمایید.",
                        }}
                        render={({ field: { onChange, value } }) => (
                          <TextField
                            id="outlined-basic"
                            label="لینک"
                            variant="outlined"
                            fullWidth
                            color="primary"
                            onChange={onChange}
                            value={value}
                            error={!!errors["socialLink"]}
                            helperText={
                              !!errors["socialLink"] &&
                              errors["socialLink"].message
                            }
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Controller
                        name="socialId"
                        control={control}
                        rules={{
                          required: "آی دی (ID) را وارد نمایید.",
                        }}
                        render={({ field: { onChange, value } }) => (
                          <TextField
                            id="outlined-basic"
                            label="آی دی (ID)"
                            variant="outlined"
                            fullWidth
                            color="primary"
                            onChange={onChange}
                            value={value}
                            error={!!errors["socialId"]}
                            helperText={
                              !!errors["socialId"] && errors["socialId"].message
                            }
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions className="card-actions">
                  <Button variant="outlined" onClick={cancelHandler}>
                    انصراف
                  </Button>
                  <Button type="submit" variant="contained">
                    <Typography>{isCurrentSocialMedia()}</Typography>
                  </Button>
                </CardActions>
              </Card>
            </form>
          </Collapse>

          {social.list.length &&
            social.list.map((item: socialItemType) => (
              <SocialItem
                data={item}
                key={item.id}
                onEdit={editSocialItemHandler}
                onDelete={onDelete}
              />
            ))}
        </Box>
      </Container>
    </PageStyled>
  );
}
