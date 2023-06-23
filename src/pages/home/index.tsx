import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Collapse,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import getIcon from "../../utils/getIcon";
import {PageStyled} from "./styledComponents";
import SelectBoxComponent from "../../components/home/selectBox";
import SOCIAL_MEDIA_TYPES from "../../constants";
import BreadcrumbsComponent from "../../components/home/breadcrumbs";

interface IFormInput {
  firstName: string;
  lastName: string;
  socialType: any[];
}

export default function Home() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      socialType: [],
    },
  });

  const [collapseOpen, setCollapseOpen] = useState(false);

  const toggleOpenForm = (): void => {
    setCollapseOpen((prevOpenForm) => !prevOpenForm);
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };


  const socialMediaListName = () => {
    const socialMediaNameArray = [];
    for (const key in SOCIAL_MEDIA_TYPES) {
      socialMediaNameArray.push({value: key, label: SOCIAL_MEDIA_TYPES[key]});
    }
    return socialMediaNameArray;
  }



  return (
    <PageStyled>
      <Container maxWidth="md">
        <Typography variant="h4" component="h1">
          حساب کاربری
        </Typography>
        <BreadcrumbsComponent />

        <Card>
          <CardContent>
            <Button
              endIcon={getIcon("edit")}
              variant="text"
              onClick={toggleOpenForm}
            ></Button>
            <Collapse in={collapseOpen}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Controller
                      name="socialType"
                      control={control}
                      render={({ field }) => (
                        <SelectBoxComponent field={field} name={"socialType"} label={"نوع*"} items={socialMediaListName()} />
                      )}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Controller
                      name="firstName"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          id="outlined-basic"
                          label="Outlined"
                          variant="outlined"
                          fullWidth
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Controller
                      name="lastName"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          id="outlined-basic"
                          label="Outlined"
                          variant="outlined"
                          fullWidth
                        />
                      )}
                    />
                  </Grid>
                </Grid>
                <input type="submit" />
              </form>
            </Collapse>
          </CardContent>
        </Card>
      </Container>
    </PageStyled>
  );
}
