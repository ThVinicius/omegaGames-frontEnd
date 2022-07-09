import { ThreeDots } from "react-loader-spinner";

const spinnerLoading = loading => {
  if (loading === false) return "Cadastrar";
  return <ThreeDots color="#FFFFFF" height={20} width={99} />;
};

const disableInput = loading => {
  if (loading === false) return "";
  return "disable";
};

const inputColorLoading = loading => {
  if (loading === false) return "#ffffff";
  return "#F2F2F2";
};

const opacityButton = loading => {
  if (loading === false) return "1";
  return "0.7";
};

const showOrHideIcon = (showPassword, setShowPassword) => {
  if (showPassword === false) {
    return (
      <ion-icon
        onClick={() => setShowPassword(true)}
        name="eye-off-outline"
      ></ion-icon>
    );
  }
  return (
    <ion-icon
      onClick={() => setShowPassword(false)}
      name="eye-outline"
    ></ion-icon>
  );
};

const showOrHidePassword = showPassword => {
  if (showPassword === false) return "password";

  return "text";
};

export {
  spinnerLoading,
  disableInput,
  inputColorLoading,
  opacityButton,
  showOrHideIcon,
  showOrHidePassword
};
