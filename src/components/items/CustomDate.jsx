import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CustomDate({ datepicker = {} }) {
  const [date, setDate] = useState(new Date());
  return (
    <DatePicker
      wrapperClassName="customInput customInput--date"
      dateFormat="MM/yyyy"
      showMonthYearPicker
      {...datepicker}
    />
  );
}
