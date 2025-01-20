import styled from "styled-components";
import AvatarUpload from "./AvatarUpload";
import { useForm } from "react-hook-form";
import { useForm as useFormContext } from "../contexts/FormProvider";
import { useState } from "react";

const ButtonSubmit = styled.button`
  background-color: var(--orange-700);
  border: none;
  padding: 0.75rem;
  width: 80%;
  margin-inline: auto;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: all 0.3s;

  @media (min-width: 600px) {
    margin-top: 0.5rem;
  }

  &:hover {
    box-shadow: 0rem 0.2rem 0rem var(--orange-500);
  }

  &:focus-visible {
    outline-offset: 3px;
    outline: 1px solid #fff;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
  max-width: 35rem;
  margin-inline: auto;
`;

const InputContainer = styled.div`
  display: grid;
  width: 80%;

  margin-inline: auto;
  color: #fff;

  & label {
    margin-bottom: 0.5rem;
  }

  & input {
    border: 1px solid var(--neutral-500);
    padding: 0.5rem 0.5rem 0.5rem 0.8rem;
    background-color: rgba(75, 72, 106, 0.7);
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
    transition: all 0.3s;

    &:focus {
      outline-offset: 3px;
      outline: 2px solid var(--neutral-500);
    }

    &::placeholder {
      color: var(--neutral-300);
    }
  }

  &:hover input {
    background-color: var(--neutral-700);
  }
`;

const InputErrorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.3rem;
  filter: invert(40%) sepia(96%) saturate(1491%) hue-rotate(335deg)
    brightness(101%) contrast(76%);
  color: var(--orange-700);
`;

function Form() {
  const [imageError, setImageError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    setEmailAddress,
    setFullName,
    setGitHubUsername,
    setShowTicket,
    image,
  } = useFormContext();

  const onSubmit = (data) => {
    if (!image) {
      setImageError(true);
      return;
    }
    setFullName(data.name);
    setEmailAddress(data.email);
    setGitHubUsername(data.gitHubUsername);
    setShowTicket(true);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <AvatarUpload
        register={register}
        errors={errors}
        noImageError={imageError}
      />

      <InputContainer>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          {...register("name", {
            required: "Full Name is required",
          })}
        />
        {errors.name && (
          <InputErrorContainer>
            <img src="./images/icon-info.svg" alt="error icon" />
            <p>
              <span>{errors.name.message}</span>
            </p>
          </InputErrorContainer>
        )}
      </InputContainer>

      <InputContainer>
        <label htmlFor="emailAddress">Email Address</label>
        <input
          type="text"
          placeholder="example@email.com"
          id="emailAddress"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Email is invalid",
            },
          })}
        />
        {errors.email && (
          <InputErrorContainer>
            <img src="./images/icon-info.svg" alt="error icon" />
            <p>
              <span>{errors.email.message}</span>
            </p>
          </InputErrorContainer>
        )}
      </InputContainer>

      <InputContainer>
        <label htmlFor="gitHubUsername">GitHub Username</label>
        <input
          type="text"
          placeholder="@yourusername"
          id="gitHubUsername"
          {...register("gitHubUsername", {
            required: "GitHub Username is required",
          })}
        />
        {errors.gitHubUsername && (
          <InputErrorContainer>
            <img src="./images/icon-info.svg" alt="error icon" />
            <p>
              <span>{errors.gitHubUsername.message}</span>
            </p>
          </InputErrorContainer>
        )}
      </InputContainer>

      <ButtonSubmit>Generate My Ticket</ButtonSubmit>
    </FormContainer>
  );
}

export default Form;
