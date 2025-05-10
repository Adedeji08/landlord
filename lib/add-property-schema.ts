// schema.ts
import { z } from "zod";

// Full schema
export const addPropertySchema = z.object({
  propertyAddress: z
    .string()
    .min(5, { message: "Property address must be at least 5 characters" })
    .max(100, { message: "Property address must be at most 100 characters" }),
  propertyType: z.enum(
    ["Flat", "Duplex", "Bungalow", "Semi-Detached Duplex", "Detached Duplex", "Terrace", "Mansion", "Penthouse", "Studio", "Loft", "Villa"],
    {
      message:
        "Property type must be one of the allowed types",
    }
  ),
  propertyUnits: z.string()
    .min(1, { message: "Property units must be at least 1" })
    .max(100, { message: "Property units must be at most 100" }),
  propertyRent: z.string()
    .min(0, { message: "Property rent must be a positive number" })
    .max(100000000, { message: "Property rent must be at most 100,000,000" }),
  propertyAgencyFee: z.string()
    .min(0, { message: "Agency fee must be a positive number" })
    .max(1000000),
  propertyLegalFee: z.string()
    .min(0, { message: "Legal fee must be a positive number" })
    .max(1000000),
  propertyCautionFee: z.string()
    .min(0, { message: "Caution fee must be a positive number" })
    .max(1000000),
  propertyDescription: z.string()
    .min(10, { message: "Description must be at least 10 characters" })
    .max(500),
  propertyImages: z.array(z.any())
    .refine((files) => files.length > 0 && files.length <= 5, {
      message: "You must upload between 1 and 5 images",
    }),
  propertyCity: z.string()
    .min(2)
    .max(50),
  propertyState: z.string()
    .min(2)
    .max(50),
  propertyRoomCount: z.string()
    .min(1)
    .max(5),
  propertyBathroomCount: z.string()
    .min(1)
    .max(3),
  propertyKitchenCount: z.string()
    .min(1)
    .max(2),
  propertyAmenities: z.array(
    z.enum([
      "Air Conditioning",
      "Lundry",
      "Balcony",
      "Garden",
      "Swimming Pool",
      "Gym",
      "Parking",
    ])
  )
  .refine((items) => items.length >= 1 && items.length <= 4, {
    message: "Select 1 or 5 amenities",
  }),
  propertyAvailability: z.enum(["Available", "Not Available"]),
  propertyLeaseDuration: z.enum(["Short Term", "Long Term"]),
  propertyUtilitiesIncluded: z.enum(["Yes", "No"]),
  propertyFurnished: z.enum(["Yes", "No"]),
  propertyCondition: z.enum(["New Building", "Renovated"]),
});

// Partial schema for Step 1: Basic Info
export const basicInfoSchema = addPropertySchema.pick({
  propertyAddress: true,
  propertyType: true,
  propertyUnits: true,
  propertyRent: true,
});
