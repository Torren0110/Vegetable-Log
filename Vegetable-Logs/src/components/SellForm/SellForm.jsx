import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import vegetableService from "../../services/vegetable-service";
import { useState } from "react";
import { Alert } from "@mui/material";
import "./sellform.css";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

const schema = z.object({
  name: z.string().min(5).nonempty(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
  image: z.custom((data) => {
    if (
      data.length === 0 ||
      (data[0] instanceof File && data[0].type.startsWith("image/"))
    ) {
      return true;
    } else {
      return false;
    }
  }),
});

const SellForm = () => {
  const { uid,user } = useContext(ShopContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const [showAlert, setAlert] = useState(false);
  const [showError, setError] = useState(false);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("quantity", data.quantity);
    formData.append("image", data.image[0]);
    formData.append("uid", uid);

    vegetableService
      .create(formData)
      .then((res) => {
        setAlert(true);
      })
      .catch((err) => {
        setError(true);
      });
  };

  if(!user.seller){
    return <h1 className="noseller"> Not a seller account !!</h1>
  }

  return (
    <div className="form">
    <form
      className="sell-form"
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      {showAlert && (
        <Alert
          onClose={() => {
            setAlert(false);
          }}
        >
          Item Successfully Posted!!
        </Alert>
      )}

      {showError && (
        <Alert
          onClose={() => {
            setError(false);
          }}

          severity="error"
        >
          SignIn to sell an Item
        </Alert>
      )}
      <h2 className="item-heading">Sell Item</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className="form-control"
          autoComplete="off"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price:
        </label>
        <input
          {...register("price", { valueAsNumber: true })}
          type="number"
          id="price"
          className="form-control"
          autoComplete="off"
        />
        {errors.price && <p className="text-danger">{errors.price.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="quantity" className="form-label">
          Quantity:
        </label>
        <input
          {...register("quantity", { valueAsNumber: true })}
          type="number"
          id="quantity"
          className="form-control"
          autoComplete="off"
        />
        {errors.quantity && (
          <p className="text-danger">{errors.quantity.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Image:
        </label>
        <input
          {...register("image")}
          type="file"
          id="image"
          className="form-control"
          autoComplete="off"
        />
        {errors.image && <p className="text-danger">{errors.image.message}</p>}
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
    </div>
  );
};

export default SellForm;