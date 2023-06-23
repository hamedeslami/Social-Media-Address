import { Breadcrumbs, Link } from '@mui/material';
import { FC } from 'react';

const BreadcrumbsComponent: FC = () => {

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

    return (
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
    );
}

export default BreadcrumbsComponent;