import Image from "next/image";

export default function ClientLogo() {
  return (
    <div className="app-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-10 py-20">
      <Image
        src={"/icons/clientLogo2.svg"}
        alt="Client Logo 2"
        width={103}
        height={100}
      />
      <Image
        src={"/icons/clientLogo1.svg"}
        alt="Client Logo 1"
        width={137}
        height={47}
      />
      <Image
        src={"/icons/clientLogo3.svg"}
        alt="Client Logo 3"
        width={170}
        height={44}
      />
      <Image
        src={"/icons/clientLogo4.svg"}
        alt="Client Logo 4"
        width={150}
        height={45}
      />
      <Image
        src={"/icons/clientLogo5.svg"}
        alt="Client Logo 5"
        width={120}
        height={70}
      />
    </div>
  );
}
