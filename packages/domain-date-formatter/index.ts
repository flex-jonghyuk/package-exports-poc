import { isoFormatDash, isoFormatDot } from "@max-poc/date-formatter";

export const todayIsoFormat = (type: "dash" | "dot") => {
  const now = new Date();
  return type === "dash" ? isoFormatDash(now) : isoFormatDot(now);
};
