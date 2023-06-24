import {
  Instagram, Facebook, Telegram, Twitter, LinkedIn, Web, Add, Edit, Delete, LightMode, DarkMode,
} from '@mui/icons-material';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'instagram':
      return <Instagram />;
    case 'facebook':
      return <Facebook />;
    case 'telegram':
      return <Telegram />;
    case 'twitter':
      return <Twitter />;
    case 'linkedin':
      return <LinkedIn />;
    case 'website':
      return <Web />;
    case 'add':
      return <Add />;
    case 'edit':
      return <Edit />;
    case 'delete':
      return <Delete />;
    case 'light':
      return <LightMode />;
    case 'dark':
      return <DarkMode />;
    default:
      return null;
  }
};

export default getIcon;
