import { type ReactNode } from "react";

interface StepProps {
  is: boolean;
  children: ReactNode | JSX.Element;
}

const Step = ({ is, children }: StepProps) => {
  if (is) return <>{children}</>;
  return null;
};

export default Step;
