"use client";

import { useState } from "react";
import { addPropertySchema } from "@/lib/add-property-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import BasicInfo from "./steps-forms/BasicInfo";
import PropertyDetails from "./steps-forms/PropertyDetails";
import PropertyImages from "./steps-forms/PropertyImages";
import ReviewAndSubmit from "./steps-forms/ReviewAndSubmit";

type AddPropertyFormValues = z.infer<typeof addPropertySchema>;

const steps = [
  "Basic Information",
  "Property Details",
  "Property Images",
  "Review & Publish",
];

const AddPropertyForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<AddPropertyFormValues>({
    resolver: zodResolver(addPropertySchema),
    defaultValues: {
      propertyAddress: "",
      propertyType: "Flat",
      propertyUnits: "",
      propertyRent: "",
      propertyAgencyFee: "",
      propertyLegalFee: "",
      propertyCautionFee: "",
      propertyDescription: "",
      propertyImages: [],
      propertyCity: "",
      propertyState: "",
      propertyRoomCount: "",
      propertyBathroomCount: "",
      propertyKitchenCount: "",
      propertyAmenities: [],
      propertyAvailability: "Available",
      propertyLeaseDuration: "Short Term",
      propertyUtilitiesIncluded: "Yes",
      propertyFurnished: "No",
      propertyCondition: "New Building",
    },
  });

  const onNext = async () => {
    let fieldsToValidate: (keyof AddPropertyFormValues)[] = [];

    if (currentStep === 0) {
      fieldsToValidate = [
        "propertyAddress",
        "propertyType",
        "propertyUnits",
      ];
    } else if (currentStep === 1) {
      fieldsToValidate = [
        "propertyRent",
        "propertyAgencyFee",
        "propertyLegalFee",
        "propertyCautionFee",
        "propertyDescription",
        "propertyCity",
        "propertyState",
        "propertyRoomCount",
        "propertyBathroomCount",
        "propertyKitchenCount",
        "propertyAmenities",
        "propertyAvailability",
        "propertyLeaseDuration",
        "propertyUtilitiesIncluded",
        "propertyFurnished",
        "propertyCondition",
      ];
    } else if (currentStep === 2) {
      fieldsToValidate = ["propertyImages"];
    }

    const valid = await form.trigger(fieldsToValidate);
    if (!valid) return;

    setCurrentStep((prev) => prev + 1);
  };

  const onBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = (values: AddPropertyFormValues) => {
    console.log("Form submitted:", values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Step Indicator */}
        <div className="flex justify-between items-center gap-6 w-4xl px-10 mt-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex-1 text-center py-2 px-3 rounded-md transition-all 
                ${
                  currentStep === index
                    ? "bg-blue-950 text-white font-semibold"
                    : "bg-gray-200 text-gray-700"
                }
              `}
            >
              {step}
            </div>
          ))}
        </div>

        {/* Form Steps */}
        <div className="py-3 px-10">
          {currentStep === 0 && <BasicInfo form={form} />}
          {currentStep === 1 && <PropertyDetails form={form} />}
          {currentStep === 2 && <PropertyImages form={form} />}
          {currentStep === 3 && <ReviewAndSubmit form={form} setCurrentStep={setCurrentStep} />}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between p-10">
          {currentStep > 0 && (
            <Button type="button" onClick={onBack} variant="outline" className="w-1/3 py-5">
              Back
            </Button>
          )}
          {currentStep < steps.length - 1 ? (
            <Button type="button" onClick={onNext} className="bg-blue-950 text-white w-1/3 py-5">
              Next
            </Button>
          ) : (
            <Button type="submit" className="bg-blue-950 text-white w-1/3 py-5">
              Publish
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};

export default AddPropertyForm;
