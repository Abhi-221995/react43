import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("form submitted", data);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>First Name :</label>
            <input
              className={errors.firstName ? "error-input" : ""}
              {...register("firstName", {
                required: true,
                minLength: {
                  value: 3,
                  message: "please add atleast 3 character",
                },
                maxLength: {
                  value: 7,
                  message: "please add below 7 character",
                },
              })}
            />
            {errors.firstName && (
              <p className="error-msg">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label>Middle Name :</label>
            <input
              className={errors.middleName ? "error-input" : ""}
              {...register("middleName", {
                required: true,
                minLength: 3,
                maxLength: 7,
              })}
            />
            {errors.middleName && (
              <p className="error-msg">Min Length should atleast be 3</p>
            )}
          </div>
          <div>
            <label>Last Name :</label>
            <input
              className={errors.lastName ? "error-input" : ""}
              {...register("lastName", {
                required: true,
                minLength: { value: 3, message: "please add 3 character" },
                maxLength: { value: 7, message: "please add 7 character" },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "invalid entry",
                },
              })}
            />
            {errors.lastName && (
              <p className="error-msg">{errors.lastName.message}</p>
            )}
          </div>

          <input
            type="submit"
            disabled={isSubmitting}
            value={isSubmitting ? "Submitting" : "Submit"}
          />
        </form>

        {}
      </div>
    </>
  );
}

export default App;
