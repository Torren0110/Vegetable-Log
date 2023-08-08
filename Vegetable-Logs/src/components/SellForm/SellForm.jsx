import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
  name: z.string().min(5).nonempty(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});

const SellForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className="form-control"
        />
        { errors.name && <p className="text-danger">{ errors.name.message }</p> }
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          {...register("price", { valueAsNumber: true }) }
          type="number"
          id="price"
          className="form-control"
        />
        { errors.price && <p className="text-danger">{ errors.price.message }</p> }
      </div>
      <div className="mb-3">
        <label htmlFor="quantity" className="form-label">
          Quantity
        </label>
        <input
          {...register("quantity", { valueAsNumber: true })}
          type="number"
          id="quantity"
          className="form-control"
        />
        { errors.quantity && <p className="text-danger">{ errors.quantity.message }</p> }
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default SellForm;
