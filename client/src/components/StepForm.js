import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import SecondStep from "./SecondStep";
import FirstStep from "./FirstStep";
import Success from "./Success";
import Button from "@mui/material/Button";

// Step titles
const labels = ["Personal Details", "Vehicle Details"];

export default function StepForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleName, setVehicleName] = useState('');
  const [vehicleCategory, setVehicleCategory] = useState('');
  const [date, setDate] = useState('');
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    vehicleType: '',
    vehicleName: '',
    vehicleCategory: '',
    date: '',
  });

  console.log(firstName,vehicleCategory,date)

  const handleNext = () => {
    if (activeStep === 0 && (!firstName || !lastName)) {
      setErrors({
        firstName: !firstName ? 'First name is required' : '',
        lastName: !lastName ? 'Last name is required' : '',
        ...errors
      });
    } else if (activeStep === 1 && (!vehicleType || !vehicleName || !vehicleCategory || !date)) {
      setErrors({
        vehicleType: !vehicleType ? 'Vehicle type is required' : '',
        vehicleName: !vehicleName ? 'Vehicle name is required' : '',
        vehicleCategory: !vehicleCategory ? 'Vehicle category is required' : '',
        date: !date ? 'Date is required' : '',
        ...errors
      });
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleDateChange = (date) => {
    let stringDate = date.$D + '-' + date.$M + '-' + date.$y
    setDate(stringDate);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name,value)
    switch (name) {
      case 'firstName':
        setFirstName(value);
        setErrors({ ...errors, firstName: '' });
        break;
      case 'lastName':
        setLastName(value);
        setErrors({ ...errors, lastName: '' });
        break;
      case 'vehicleType':
        setVehicleType(value);
        setErrors({ ...errors, vehicleType: '' });
        break;
      case 'vehicleName':
        setVehicleName(value);
        setErrors({ ...errors, vehicleName: '' });
        break;
      case 'vehicleCategory':
        setVehicleCategory(value);
        setErrors({ ...errors, vehicleCategory: '' });
        break;
      default:
        break;
    }
  };

  return (
    <>
      {activeStep === labels.length ? (
        <Success />
      ) : (
        <>
          <Box sx={{ my: 5 }}>
            <Typography variant="h4" align="center">
              Multi Step Form
            </Typography>
            <Typography variant="subtitle2" align="center" sx={{ mt: 2 }}>
              React Material UI multi step form with basic form validation
              logic.
            </Typography>
          </Box>
          <Stepper activeStep={activeStep} sx={{ py: 3 }} alternativeLabel>
            {labels.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === 0 && (
            <FirstStep
              firstName={firstName}
              lastName={lastName}
              handleChange={handleChange}
              errors={errors}
            />
          )}
          {activeStep === 1 && (
            <SecondStep
              vehicleType={vehicleType}
              vehicleName={vehicleName}
              vehicleCategory={vehicleCategory}
              date={date}
              handleChange={handleChange}
              handleDateChange={handleDateChange}
              errors={errors}
            />
          )}
          

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
            )}
            <Button variant="contained" onClick={handleNext}>
              {activeStep === labels.length - 1 ? "Book" : "Next"}
            </Button>
          </Box>
        </>
      )}
    </>
  );
}
