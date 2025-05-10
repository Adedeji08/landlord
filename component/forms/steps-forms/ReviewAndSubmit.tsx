/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ReviewAndSubmit({
  form,
  setCurrentStep,
}: {
  form: any;
  setCurrentStep: (currentStep: number) => void;
}) {
  const values = form.getValues();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Basic Info */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Basic Info</CardTitle>
          <Button variant="outline" size="sm" onClick={() => setCurrentStep(0)}>
            Edit
          </Button>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <strong>Type:</strong> {values.propertyType}
          </div>
          <div>
            <strong>Units:</strong> {values.propertyUnits}
          </div>
          <div>
            <strong>Address:</strong> {values.propertyAddress}
          </div>
          <div>
            <strong>City:</strong> {values.propertyCity}
          </div>
          <div>
            <strong>State:</strong> {values.propertyState}
          </div>
          <div>
            <strong>Description:</strong> {values.propertyDescription}
          </div>
          <div>
            <strong>Property Condition:</strong> {values.propertyCondition}
          </div>
          <div>
            <strong>Lease Duration:</strong> {values.propertyLeaseDuration}
          </div>
          <div>
            <strong>Utilities Included:</strong> {values.propertyUtilitiesIncluded}
          </div>
          <div>
            <strong>Furnished:</strong> {values.propertyFurnished}
          </div>
          <div>
            <strong>Availability:</strong> {values.propertyAvailability}
          </div>
        </CardContent>
      </Card>

      {/* Property Details */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Property Details</CardTitle>
          <Button variant="outline" size="sm" onClick={() => setCurrentStep(1)}>
            Edit
          </Button>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <strong>Rent:</strong> ₦{values.propertyRent?.toLocaleString()}
          </div>
          <div>
            <strong>Agency Fee:</strong> ₦{values.propertyAgencyFee?.toLocaleString()}
          </div>
          <div>
            <strong>Legal Fee:</strong> ₦{values.propertyLegalFee?.toLocaleString()}
          </div>
          <div>
            <strong>Caution Fee:</strong> ₦{values.propertyCautionFee?.toLocaleString()}
          </div>
          <div>
            <strong>Rooms:</strong> {values.propertyRoomCount}
          </div>
          <div>
            <strong>Bathrooms:</strong> {values.propertyBathroomCount}
          </div>
          <div>
            <strong>Kitchens:</strong> {values.propertyKitchenCount}
          </div>
          <div>
            <strong>Amenities:</strong> {values.propertyAmenities?.join(", ")}
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Images */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Uploaded Images</CardTitle>
          <Button variant="outline" size="sm" onClick={() => setCurrentStep(2)}>
            Edit
          </Button>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {values.propertyImages?.length > 0 ? (
            values.propertyImages.map((file: any, index: number) => (
              <Image
                key={index}
                src={typeof file === "string" ? file : URL.createObjectURL(file)}
                alt="Property"
                className="rounded-md object-cover w-full h-32"
                width={300}
                height={300}
              />
            ))
          ) : (
            <div>No images uploaded</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
