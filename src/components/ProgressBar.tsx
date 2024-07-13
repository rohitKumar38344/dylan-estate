import { ReactElement } from "react";

type ProgressBarProps = {
  page: number;
  tabs: ReactElement[];
};

export default function ProgressBar({ page, tabs }: ProgressBarProps) {
  const interval = 100 / tabs.length;

  const progress = ((page + 1) * interval).toFixed(2);

  return (
    <section className="progress-container h-2 mb-5">
      <progress className="progress" max="100" value={progress}></progress>
    </section>
  );
}
