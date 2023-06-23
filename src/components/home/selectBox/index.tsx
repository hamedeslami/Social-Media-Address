import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

interface ISelectBoxComponent {
  field: object;
  name: string;
  label: string;
  items: any[];
  className: string;
}

const SelectBoxComponent = ({
  field,
  name,
  label,
  items,
  className,
}: ISelectBoxComponent) => {
  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent): void => {
    setValue(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        {...field}
        labelId="demo-simple-select-label"
        className={className}
        id="demo-simple-select"
        name={name}
        value={value}
        label={label}
        onChange={handleChange}
      >
        {items?.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectBoxComponent;
