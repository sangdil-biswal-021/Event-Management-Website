"use client";

import React from "react"
import Steps from "@/components/Steps";
import General from "./General";
import LocationAndDate from "./LocationAndDate";
import Media from "./Media";
import Tickets from "./Tickets";

function EventForm()
{
    const [activeStep = 0, setActiveStep] = React.useState<number>(0);
    const [event, setEvent] = React.useState<any>(null);
    const onSubmit=(e:any)=>{
        e.preventDefault();
    }

    const commonProps = {
        event,
        setEvent,
        activeStep,
        setActiveStep,
        // newlySelectedImages,
        // setNewlySelectedImages,
    
        // alreadyUploadedImages,
        // setAlreadyUploadedImages,
    
        // loading,
      };

    return(
        <div>
            <form onSubmit={onSubmit}>
            <Steps stepNames={['General', 'Location and Date', 'Media', 'Tickets']}
            stepsContent={[
                <General {...commonProps}/>,
                <LocationAndDate {...commonProps}/>,
                <Media {...commonProps}/>,
                <Tickets {...commonProps}/>,
              ]}
              activeStep={activeStep}
              />
              </form>
        </div>
    )
}

export default EventForm;