/* eslint-disable react/prop-types */
import { useForm } from "../contexts/FormProvider";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled, { keyframes } from "styled-components";

const shake = keyframes`
  0% { transform: rotateX(0); }
  25% { transform: rotate(-15deg); }
  50% { transform: rotate(15deg); }
  75% { transform: rotate(-15deg); }
  100% { transform: rotate(0); }
`;

const Container = styled.div`
  color: #fff;
  width: 80%;
  margin-inline: auto;
  margin-top: 1rem;

  @media (min-width: 1000px) {
    margin-top: 2rem;
  }


`;

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: rgba(75, 72, 106, 0.7);
  border: 1px dashed var(--neutral-500);

  padding: 1rem;
  border-radius: 0.5rem;
  color: var(--neutral-300);
  cursor: pointer;
  margin-top: 0.5rem;
  transition: all 0.3s;
  outline-offset: 2px;

  & img {
    background-color: rgb(51, 47, 81);
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid rgb(75, 70, 108);
    box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.3);
  }

  &:hover {
    background-color: var(--neutral-700);
  }

 
`;

const PreviewContainer = styled(UploadContainer)`
  cursor: default;
`;

const ImageWhenDropping = styled.img`
  animation: ${shake} 1s ease-in-out;
`;

const PreviewImage = styled.img`
  width: 10rem;
`;

const PreviewContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PreviewContainerButton = styled.button`
  background-color: var(--neutral-700);
  border: none;
  color: var(--neutral-100);
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const AvatarUploadDescription = styled.div`
  display: flex;
  align-items: center;
  color: var(--neutral-300);
  margin-top: 0.5rem;
  font-size: 0.7rem;
  gap: 0.5rem;
`;

const InputErrorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  filter: invert(40%) sepia(96%) saturate(1491%) hue-rotate(335deg)
    brightness(101%) contrast(76%);
  color: var(--orange-700);
`;

const ContainerToUploadFocus = styled.div`
border-radius: 0.5rem;
  &:focus-visible {
    outline-offset: 3px;
    outline: 2px solid var(--neutral-500);
  }
`;

function AvatarUpload({ noImageError }) {
  const { image, setImage } = useForm();

  const onDrop = useCallback(
    (acceptedFiles) => {
      setImage(URL.createObjectURL(acceptedFiles[0]));
    },
    [setImage]
  );
  const { getRootProps, getInputProps, open, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxSize: 500000,
      maxFiles: 1,
    });


  return (
    <Container>
      <label htmlFor="file-upload">Upload Avatar</label>
      <input
        {...getInputProps()}
        type="file"
        id="file-upload"
        accept=".jpg, .jpeg, .png"
        style={{ display: "none" }}
      />
      {image ? (
        <PreviewContainer>
          <PreviewImage src={image} alt="Avatar" />
          <PreviewContainerButtons>
            <PreviewContainerButton type="button" onClick={() => setImage("")}>
              Remove image
            </PreviewContainerButton>
            <PreviewContainerButton type="button" onClick={open}>
              Change image
            </PreviewContainerButton>
          </PreviewContainerButtons>
        </PreviewContainer>
      ) : (
        <ContainerToUploadFocus {...getRootProps()}>
          {isDragActive ? (
            <UploadContainer>
              <ImageWhenDropping src="./images/icon-upload.svg" alt="" />
              <p>Drop the files here...</p>
            </UploadContainer>
          ) : (
            <UploadContainer>
              <img src="./images/icon-upload.svg" alt="" />
              <p>Drag and drop or click to upload</p>
            </UploadContainer>
          )}
        </ContainerToUploadFocus>
      )}
      <AvatarUploadDescription>
        {fileRejections.length > 0 ? (
          <InputErrorContainer>
            <img src="./images/icon-info.svg" alt="" />
            <span>File too large. Please upload a photo under 500KB</span>
          </InputErrorContainer>
        ) : noImageError ? (
          <InputErrorContainer>
            <img src="./images/icon-info.svg" alt="" />
            <span>Image is required</span>
          </InputErrorContainer>
        ) : (
          <>
            <img src="./images/icon-info.svg" alt="" />
            <p>Upload your photo (JPG OR PNG, max size: 500KB).</p>
          </>
        )}
      </AvatarUploadDescription>
    </Container>
  );
}

export default AvatarUpload;
