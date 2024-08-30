export default function Tabs({ children, buttons, ButtonsContainer }) {
  // const ButtonsContainer = buttonsContainer;
  // Either use camel case for prop name of the custom button container, buttonsContainer, and then create a const here
  // or while passing set the prop name in pascal case only, ButtonsContainer
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
