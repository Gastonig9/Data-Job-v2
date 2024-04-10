import "./Loader.css";

interface LoaderProps {
  isForButton: boolean;
  isForPage: boolean;
  // Se podrian agregar mas tipos para otras opciones o apartados del sitio
}

export const Loader: React.FC<LoaderProps> = ({ isForButton, isForPage }) => {
  return (
    <>
      {isForButton ? (
        <span className="loaderButton"></span>
      ) : isForPage ? (
        <div className="loaderPageContain flex flex-col justify-center items-center h-screen">
          <span className="loaderPage">Loading</span>
        </div>
      ) : (
        <div className="flex flex-col items-center h-3/4">
          <span className="loaderForPage">Loading</span>
        </div>
      )}
    </>
  );
};
