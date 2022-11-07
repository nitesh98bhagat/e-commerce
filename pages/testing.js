import { Dialog } from "@headlessui/react";
import { useState } from "react";

const data = [
  {
    name: "nitesh",
    DOB: "25-04-98",
    city: "Kolkata",
  },
];

export default function Testing() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {data.map((e) => (
        <p key={e.name}>{e.name}</p>
      ))}
    </div>
  );
}
