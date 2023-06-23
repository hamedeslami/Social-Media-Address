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
import SocialListComponent from "../../components/home/socialList";
import { useDispatch } from "react-redux";
import { addToSocial } from "../../store/social/action";

interface SocialMediaListType {
  socialId: string;
  socialLink: string;
  socialType: string;
}

export default function Home() {
  const dispatch = useDispatch<any>();
  const { control, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      socialLink: "",
      socialId: "",
      socialType: "",
    },
  });

  const [collapseOpen, setCollapseOpen] = useState(false);
  const [openAlertBox, setOpenAlertBox] = useState<boolean>(false);
  const [socialMediaList, setSocialMediaList] = useState<
    SocialMediaListType[] | null
  >(null);
  const [currentSocialMedia, setCurrentSocialMedia] =
    useState<SocialMediaListType | null>(null);

  const toggleOpenForm = (): void => {
    setCollapseOpen((prevOpenForm) => !prevOpenForm);
  };

  const onSubmit: SubmitHandler<SocialMediaListType> = (data) => {
    dispatch(addToSocial(data));
  };

  const socialMediaListName = () => {
    const socialMediaNameArray = [];
    for (const key in SOCIAL_MEDIA_TYPES) {
      socialMediaNameArray.push({ value: key, label: SOCIAL_MEDIA_TYPES[key] });
    }
    return socialMediaNameArray;
  };

  const isCurrentSocialMedia = () => {
    return `${currentSocialMedia ? "ویرایش" : "افزودن"} مسیر ارتباطی`;
  };

  return (
    <PageStyled>
      <Container maxWidth="md">
        <Typography variant="h4" component="h1">
          حساب کاربری
        </Typography>
        <BreadcrumbsComponent />

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
                            selectError={errors['socialType']}
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
                            error={!!errors['socialLink']}
                            helperText={!!errors['socialLink'] && errors['socialLink'].message}
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
                            error={!!errors['socialId']}
                            helperText={!!errors['socialId'] && errors['socialId'].message}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions className="card-actions">
                  <Button variant="outlined">انصراف</Button>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ boxShadow: 3 }}
                  >
                    <Typography>{isCurrentSocialMedia()}</Typography>
                  </Button>
                </CardActions>
              </Card>
            </form>
          </Collapse>

          <SocialListComponent />
        </Box>
      </Container>
    </PageStyled>
  );
}
