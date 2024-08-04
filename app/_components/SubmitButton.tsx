"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({
  btnLabel,
  className = "btnPrimary",
}: {
  btnLabel: string;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <>
      <button type="submit" className={className} disabled={pending}>
        {pending ? "Submitting..." : btnLabel}
      </button>
      {/* {pending ? <p>Form is submitting</p> } */}
    </>
  );
}
