// style
import { Container } from "./style";
// type
type AlertProps = {
  type: string;
  content: string;
};

export function ToastNotification({ type, content }: AlertProps) {
  return (
    <>
      <Container>
        <img src={type} alt="alerta" />
        <div>{content}</div>
      </Container>
    </>
  );
}
