"use client";
import { set, useForm } from "react-hook-form"; //react hook form is used in client components to handle forms
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { use, useRef, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
// import createImageUrl from "@/libs/create-imageurl";
import Link from "next/link";
import { ArrowLeftIcon, Upload } from "lucide-react";
// import SubmitImageSection from "@/components/submit-image-section";

function AddPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  debugger;
  const router = useRouter();
  const position = [
    "front",
    "back",
    "left profile",
    "right profile",
    "interior",
  ];
  const [savedImages, setSavedImages] = useState<File[]>([]); //This is the array of images that are being displayed in the form ready to be uploaded with the "Upload" button or deleted with the "Delete" button
  const [imagesNames, setImagesNames] = useState([] as any[]);
  const [selectedImages, setSelectedImages] = useState([] as any[]); //This is the array of all the positions that have been uploaded with the legend "Image uploaded" at the right of the image name
  // const [currentImage, setCurrentImage] = useState<File>(); //This is the image that is being uploaded at the moment
  const [imageURLS, setImageURLS] = useState([] as string[]);
  const [submittingImg, setSubmittingImg] = useState(false);
  const [imageError, setImageError] = useState(null as string | null);
  const insuranceRef = useRef(null);
  insuranceRef.current = watch("insurance");

  const handleImageSubmit = async (image: any) => {
    try {
      console.log("Image received in handleImageSubmit: ", image);
      // let imageArray = [];
      //   let url = await createImageUrl(image);
      // imageArray.push(url);
      // console.log("URLS XXX: ", imageURLS); //mock different urls: url1, url2, url3
      // setImageUrl(url);
      setImagesNames([...imagesNames, { name: image.name }]); //if it's in this array, it doesn't need to be uploaded again, so I will hide the upload button. This is for client side only
      setSubmittingImg(false);
      console.log("imagesNames: ", imagesNames);
      //   setImageURLS([...imageURLS, url]);
      setImageError(null);
    } catch (error) {
      setImageError("Error uploading the image");
    }
  };

  const onSubmit = async (data: any) => {
    try {
      if (imagesNames.length !== 5) {
        setImageError("You need to upload at least one image");
        return;
      }
      data.image = imageURLS; //Here we send them as an array of urls
      console.log("Data sent to the BACK:", data);
      // const res = await fetch(`${process.env.BASE_URL}/api/cars`, { NOTE: only for development
      const res = await fetch(`/api/cars`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }), //Stringify the data to send it to the backend
      });

      const response = await res.json(); //This is the response from the backend
      // console.log("RESPONSE:", response);
      const { email, contact_number } = response;
      router.push(
        `sell/success/?email=${email}&contact_number=${contact_number}`
      );
      reset();
    } catch (error) {
      console.error("Error sending data to the BACK", error);

      router.push("sell/error");
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <Link href={"/"}>
        <ArrowLeftIcon size={40} color="blue" className="ml-1 mt-2" />
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle className="text-xl">Vehicle Information</CardTitle>
          <CardDescription>
            It is not necessary to fill in all the fields, but the more details
            you have, the easier it will be to sell your vehicle
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label>Model</Label>
              <Input
                placeholder=""
                {...register("model", {
                  required: {
                    value: true,
                    message: "Enter the model",
                  },
                  minLength: {
                    value: 3,
                    message: "The model must be at least 3 characters",
                  },
                })}
              />
              {errors.model && (
                <span className="text-red-500">
                  {errors.model.message as string}
                </span>
              )}
            </div>
            <div className="grid gap-2">
              <Label>Make</Label>
              <Input
                placeholder=""
                {...register("make", {
                  required: {
                    value: true,
                    message: "Enter the make",
                  },
                  minLength: {
                    value: 3,
                    message: "The make must be at least 3 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Z\s]*$/i,
                    message: "The make is not valid",
                  },
                })}
              />
              {errors.make && (
                <span className="text-red-500">
                  {errors.make.message as string}
                </span>
              )}
            </div>
            <div className="grid gap-2">
              <Label>Year</Label>
              <Input
                placeholder=""
                {...register("year", {
                  required: {
                    value: true,
                    message: "Enter the year",
                  },
                  minLength: {
                    value: 4,
                    message: "Enter a valid year",
                  },
                  min: {
                    value: 1980,
                    message: "The year cannot be less than 1980",
                  },
                  pattern: {
                    value: /^[0-9]*$/i,
                    message: "The year can only contain numbers",
                  },
                  validate: (value) =>
                    insuranceRef.current === "yes"
                      ? parseInt(value) > 2010
                        ? "The year cannot be greater than 2010 if it has insurance"
                        : true
                      : true,
                })}
              />
              {errors.year && (
                <span className="text-red-500">
                  {errors.year.message as string}
                </span>
              )}
            </div>
            <div className="grid gap-2">
              <Label>Insurance</Label>
              <select
                defaultValue="no"
                {...register("insurance", {
                  required: {
                    value: true,
                    message: "Indicate if it has insurance or not",
                  },
                })}
              >
                <option value="no">Without insurance</option>
                <option value="yes">With insurance</option>
              </select>
              {errors.insurance && (
                <span className="text-red-500">
                  {errors.insurance.message as string}
                </span>
              )}
            </div>
            <div className="grid gap-2">
              <Label>Invoice Type</Label>
              <select
                {...register("FactureType", {
                  required: {
                    value: true,
                    message: "Enter the invoice type",
                  },
                })}
                defaultValue={"original"}
              >
                <option value="original">Original</option>
                <option value="agency">Agency</option>
                <option value="company">Company</option>
              </select>
              {errors.FactureType && (
                <span className="text-red-500">
                  {errors.FactureType.message as string}
                </span>
              )}
            </div>

            <div className="grid gap-2">
              <Label>
                Mileage <span className="font-light">(optional)</span>
              </Label>
              <Input
                placeholder=""
                {...register("mileage", {
                  maxLength: {
                    value: 7,
                    message: "The mileage cannot be greater than 1000000",
                  },
                })}
              />
              {errors.mileage && (
                <span className="text-red-500">
                  {errors.mileage.message as string}
                </span>
              )}
            </div>
            <div className="grid gap-2">
              <Label>
                License Plate Number{" "}
                <span className="font-light">(optional)</span>
              </Label>
              <Input
                placeholder="Example: PRA4642"
                {...register("platenum", {
                  pattern: {
                    value: /^[A-Z0-9]{6}$/i,
                    message: "The license plate is not valid",
                  },
                })}
              />
              {errors.platenum && (
                <span className="text-red-500">
                  {errors.platenum.message as string}
                </span>
              )}
            </div>
            <div className="grid gap-2">
              <Label>
                Price <span className="font-light">(optional)</span>
              </Label>
              <Input
                placeholder=""
                {...register("price", {
                  pattern: {
                    value: /^[0-9]*$/i,
                    message: "The price can only contain numbers",
                  },
                })}
              />
              {errors.price && (
                <span className="text-red-500">
                  {errors.price.message as string}
                </span>
              )}
            </div>
            <div className="grid gap-2">
              <Label>
                Comments <span className="font-light">(optional)</span>
              </Label>
              <textarea
                className="border rounded-md p-2"
                {...register("comments")}
              />
            </div>
            <div className="grid gap-2">
              <Label>Upload Images</Label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => {
                  const files = Array.from(e.target.files || []);
                  setSavedImages(files);
                }}
              />
              {savedImages.length > 0 && (
                <div className="grid gap-2">
                  {savedImages.map((image, index) => (
                    <div key={index} className="flex items-center">
                      <span className="mr-2">{image.name}</span>
                      <Button
                        type="button"
                        onClick={() => handleImageSubmit(image)}
                        disabled={submittingImg}
                      >
                        {imagesNames.some((img) => img.name === image.name)
                          ? "Image uploaded"
                          : "Upload"}
                      </Button>
                      <Button
                        type="button"
                        onClick={() => {
                          setSavedImages(
                            savedImages.filter((_, i) => i !== index)
                          );
                          setImagesNames(
                            imagesNames.filter((img) => img.name !== image.name)
                          );
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  ))}
                </div>
              )}
              {imageError && <span className="text-red-500">{imageError}</span>}
            </div>
          </div>
        </CardContent>
        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </form>
    </Card>
  );
}

export default AddPage;
