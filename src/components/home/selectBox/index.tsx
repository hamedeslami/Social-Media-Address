import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import getIcon from "../../../utils/getIcon";
import SOCIAL_MEDIA_TYPES from "../../../constants";

type itemType = {
  label: string;
  value: string;
};

type selectError = {
  message?: string
}

interface ISelectBoxComponent {
  value: string;
  onChange: any;
  name: string;
  label: string;
  items: itemType[];
  className: string;
  selectError?: selectError;
}

const SelectBoxComponent = ({
  onChange,
  value,
  name,
  label,
  items,
  className,
  selectError,
}: ISelectBoxComponent) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        error={!!selectError}
        labelId="demo-simple-select-label"
        className={className}
        id="demo-simple-select"
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        renderValue={(value) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            {getIcon(value)}
            {SOCIAL_MEDIA_TYPES[value]}
          </div>
        )}
      >
        {items?.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText error={!!selectError}>
        {selectError?.message}
      </FormHelperText>
    </FormControl>
  );
};

export default SelectBoxComponent;
