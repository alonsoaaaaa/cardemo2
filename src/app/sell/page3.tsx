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
    "frente",
    "atrás",
    "perfil izquierdo",
    "perfil derecho",
    "interior",
  ];
  const [savedImages, setSavedImages] = useState<File[]>([]); //This is the array of images that are being displayed in the form ready to be uploaded with the "Subir" button or deleted with the "Eliminar" button
  const [imagesNames, setImagesNames] = useState([] as any[]);
  const [selectedImages, setSelectedImages] = useState([] as any[]); //This is the array of all the position that have been uploaded with the legend "Imagen subida" at the right of the image name
  // const [currentImage, setCurrentImage] = useState<File>(); //This is the image that is being uploaded at the moment
  const [imageURLS, setImageURLS] = useState([] as string[]);
  const [submittingImg, setSubmittingImg] = useState(false);
  const [imageError, setImageError] = useState(null as string | null);
  const insuranceRef = useRef(null);
  insuranceRef.current = watch("insurance");

  const handleImageSubmit = async (image: any) => {
    try {
      console.log("Imagen recibida en el handleImageSubmit: ", image);
      // let imageArray = [];
      //   let url = await createImageUrl(image);
      // imageArray.push(url);
      // console.log("URLS XXX: ", imageURLS); //mockear diferentes urls: url1, url2, url3
      // setImageUrl(url);
      setImagesNames([...imagesNames, { name: image.name }]); //if its in this array, doesn't need to be uploaded again, so I will hide the upload button. This is for client side only
      setSubmittingImg(false);
      console.log("imagesNames: ", imagesNames);
      //   setImageURLS([...imageURLS, url]);
      setImageError(null);
    } catch (error) {
      setImageError("Error al subir la imagen");
    }
  };
  const onSubmit = async (data: any) => {
    try {
      if (imagesNames.length !== 5) {
        setImageError("Necesitas subir al menos una imágen");
        return;
      }
      data.image = imageURLS; //Here we send them as an array of urls
      console.log("Datos mandados al BACK:", data);
      // const res = await fetch(`${process.env.BASE_URL}/api/cars`, { NOTA: only for development
      const res = await fetch(`/api/cars`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }), //Stringify the data to send it to the backend
      });

      const response = await res.json(); //This is the response from the backend
      // console.log("RESPUESTAAAAA:", response);
      const { email, contact_number } = response;
      router.push(
        `sell/success/?email=${email}&contact_number=${contact_number}`
      );
      reset();
    } catch (error) {
      console.error("Error al mandar los datos al BACK", error);

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
          <CardTitle className="text-xl">Información del vehículo</CardTitle>
          <CardDescription>
            No es necesario llenar todos los campos, pero entre más detalles
            tengas, más fácil será vender tu vehículo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label>Modelo</Label>
              <Input
                placeholder=""
                {...register("model", {
                  required: {
                    value: true,
                    message: "Coloque el modelo",
                  },
                  minLength: {
                    value: 3,
                    message: "El modelo debe tener al menos 3 caracteres",
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
              <Label>Marca</Label>
              <Input
                placeholder=""
                {...register("make", {
                  required: {
                    value: true,
                    message: "Coloque la marca",
                  },
                  minLength: {
                    value: 3,
                    message: "La marca debe tener al menos 3 caracteres",
                  },
                  pattern: {
                    value: /^[a-zA-Z\s]*$/i,
                    message: "La marca no es válida",
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
              <Label>Año</Label>
              <Input
                placeholder=""
                {...register("year", {
                  required: {
                    value: true,
                    message: "Coloque el año",
                  },
                  minLength: {
                    value: 4,
                    message: "Coloque un año válido",
                  },
                  min: {
                    value: 1980,
                    message: "El año no puede ser menor a 1980",
                  },
                  pattern: {
                    value: /^[0-9]*$/i,
                    message: "El año solo puede contener números",
                  },
                  validate: (value) =>
                    insuranceRef.current === "yes"
                      ? parseInt(value) > 2010
                        ? "El año no puede ser mayor a 2010 si tiene aseguradora"
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
              <Label>Aseguradora</Label>
              <select
                defaultValue="no"
                {...register("insurance", {
                  required: {
                    value: true,
                    message: "Coloque si tiene aseguradora o no",
                  },
                })}
              >
                <option value="no">Sin aseguradora</option>
                <option value="yes">Con aseguradora</option>
              </select>
              {errors.insurance && (
                <span className="text-red-500">
                  {errors.insurance.message as string}
                </span>
              )}
            </div>
            <div className="grid gap-2">
              <Label>Tipo de factura</Label>
              <select
                {...register("FactureType", {
                  required: {
                    value: true,
                    message: "Coloque el tipo de factura",
                  },
                })}
                defaultValue={"original"}
              >
                <option value="original">Original</option>
                <option value="agencia">Agencia</option>
                <option value="empresa">Empresa</option>
              </select>
              {errors.FactureType && (
                <span className="text-red-500">
                  {errors.FactureType.message as string}
                </span>
              )}
            </div>

            <div className="grid gap-2">
              <Label>
                Kilometraje <span className="font-light">(opcional)</span>
              </Label>
              <Input
                placeholder=""
                {...register("mileage", {
                  maxLength: {
                    value: 7,
                    message: "El kilometraje no puede ser mayor a 1000000",
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
                Número de placas <span className="font-light">(opcional)</span>
              </Label>
              <Input
                placeholder="Ejemplo: PRA4642"
                {...register("platenum", {
                  pattern: {
                    value: /^[A-Z0-9]{6}$/i,
                    message: "La placa no es válida",
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
                Número de Identificacion Vehicular/VIN{" "}
                <span className="font-light">(opcional)</span>
              </Label>
              <Input
                placeholder="Ejemplo: 4Y1SL65848Z411439"
                {...register("vin", {
                  minLength: {
                    value: 17,
                    message: "El VIN debe tener 17 caracteres",
                  },
                  pattern: {
                    value: /^[A-HJ-NPR-Z0-9]{17}$/i,
                    message: "El VIN no es válido",
                  },
                })}
              />
              {errors.vin && (
                <span className="text-red-500">
                  {errors.vin.message as string}
                </span>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="fotos">
                Fotos <span className="font-light">(5 fotos)</span>
              </Label>
              <input type="file" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input
                type="text"
                placeholder=""
                {...register("email", {
                  required: {
                    value: true,
                    message: "Coloque un correo electrónico",
                  },

                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    message: "El correo electrónico no es válido",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500">
                  {errors.email.message as string}
                </span>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="contacto">Número de contacto </Label>
              <Input
                type="text"
                // placeholder="55 1234 5678"
                {...register("contact_number", {
                  pattern: {
                    value: /^[0-9]{10}$/i,
                    message: "El número de contacto debe contener 10 números",
                  },
                })}
              />
              {errors.contact_number && (
                <span className="text-red-500">
                  {errors.contact_number.message as string}
                </span>
              )}
            </div>
            <Card>
              <Link href="/privacy">
                <CardHeader>
                  <span className="underline underline-offset-1">
                    Aviso de privacidad
                  </span>
                </CardHeader>
                <CardDescription className="px-3">
                  Revisa qué hacemos con tus datos personales y cómo los
                  manejamos
                </CardDescription>
              </Link>
            </Card>
            <Button
              type="submit"
              className="w-full disabled:bg-gray-500"
              disabled={isSubmitting}
            >
              Enviar
            </Button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
}

export default AddPage;
