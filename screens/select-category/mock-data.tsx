import { Icons } from "../../components/icons";
import { groupIntoRows } from "../../lib/utils";

export const data = [
  { name: "Add", Icon: Icons.Add },
  { name: "Groceries", Icon: Icons.shop },
  { name: "Travel", Icon: Icons.travel },
  { name: "Car", Icon: Icons.car },
  { name: "Home", Icon: Icons.home },
  { name: "Insurances", Icon: Icons.Insurances },
  { name: "education", Icon: Icons.education },
  { name: "Marketing", Icon: Icons.speaker },
  { name: "shopping", Icon: Icons.shopping },
  { name: "Internet", Icon: Icons.Internet },
  { name: "Water", Icon: Icons.Water },
  { name: "Rent", Icon: Icons.Rent },
  { name: "Gym", Icon: Icons.Gym },
  { name: "Subscription", Icon: Icons.Subscription },
  { name: "Vacation", Icon: Icons.Vacation },
  { name: "Other", Icon: Icons.Other },
];

export const CATEGORIES = groupIntoRows(data, 4);
