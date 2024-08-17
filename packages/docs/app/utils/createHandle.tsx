import { ReactNode } from "react";

export type ModuleHandle = {
  title: string;
  subTitle: string;
  description: () => ReactNode;
};

export const createHandle = ({
  title,
  subTitle,
  description,
}: {
  title: string;
  subTitle: string;
  description: ReactNode;
}): ModuleHandle => ({
  title,
  subTitle,
  description: () => description,
});
