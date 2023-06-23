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

interface SocialMediaListType {
  id: string;
  link: string;
  type: string;
}

export default function Home() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      link: "",
      id: "",
      type: "",
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
    console.log(data);
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

  useEffect(()=>{
        setCurrentSocialMedia(null);
  },[])

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
            startIcon={getIcon(!currentSocialMedia ? 'add' : 'edit')}
            variant="text"
            onClick={toggleOpenForm}
            color="primary"
          >
            {isCurrentSocialMedia()}
          </Button>
          <Collapse in={collapseOpen}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Card className="card">
                <CardHeader className="card-title" title={isCurrentSocialMedia()} />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Controller
                        name="type"
                        control={control}
                        render={({ field }) => (
                          <SelectBoxComponent
                            field={field}
                            name={"type"}
                            label={"نوع*"}
                            items={socialMediaListName()}
                            className="card-form-select"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Controller
                        name="link"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            id="outlined-basic"
                            label="لینک"
                            variant="outlined"
                            fullWidth
                            color="primary"
                            {...field}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Controller
                        name="id"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            id="outlined-basic"
                            label="آی دی (ID)"
                            variant="outlined"
                            fullWidth
                            color="primary"
                            {...field}
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
