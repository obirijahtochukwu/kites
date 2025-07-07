import { Icons } from "../../components/icons";

const date = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const dayName = days[date.getDay()];
const day = date.getDate();
const monthName = months[date.getMonth()];

export const formattedDate = `${dayName}, ${day} ${monthName}`;

export const TRANSACTIONS = [
  {
    title: "Spotify Subscriptions",
    date: "15 July 2023",
    amount: "-$4.99",
    Icon: Icons.spotify,
  },
  {
    title: "Copay Balance Top up",
    date: "14 July 2023",
    amount: "-$11.32",
    Icon: Icons.walletBalance,
  },
  {
    title: "UI8 Subscriptions",
    date: "12 July 2023",
    amount: "-$188",
    Icon: Icons.uib,
  },
  {
    title: "Freepik Subscriptions",
    date: "13 July 2023",
    amount: "18 May 2025",
    Icon: Icons.freepik,
  },
];
