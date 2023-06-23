import { useState } from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Collapse,
  Container,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import getIcon from "../../utils/getIcon";

import Select, { SelectChangeEvent } from '@mui/material/Select';

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: any;
}

export default function Home() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      iceCreamType: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const [collapseOpen, setCollapseOpen] = useState(false);

  const toggleOpenForm = (): void => {
    setCollapseOpen((prevOpenForm) => !prevOpenForm);
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      خانه
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/">
      کاربر
    </Link>,
    <Link underline="hover" key="3" color="text.primary" href="/">
      تنظیمات کاربری
    </Link>,
  ];


  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box className="socialMediaBox">
      <Container maxWidth="md">
        <Typography variant="h4" component="h1">
          حساب کاربری
        </Typography>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>

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
                      name="iceCreamType"
                      control={control}
                      render={({ field }) => (
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Age
                          </InputLabel>
                          <Select
                            {...field}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="iceCreamType"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                          >
                            <MenuItem value={"10"}>Ten</MenuItem>
                            <MenuItem value={"20"}>Twenty</MenuItem>
                            <MenuItem value={"30"}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
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
    </Box>
  );
}
