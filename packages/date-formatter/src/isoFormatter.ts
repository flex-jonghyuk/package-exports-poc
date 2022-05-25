import format from "date-fns/format";
import getHours from "date-fns/getHours";
import { multiply } from "@max-poc/calculator";

export const isoFormatDash = (date: Date) => format(date, "yyyy-MM-dd");
export const isoFormatDot = (date: Date) => format(date, "yyyy.MM.dd");
export const timeMultiply = () => multiply(getHours(new Date()), 10);
