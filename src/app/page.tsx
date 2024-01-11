import Image from "next/image"

export default function Home() {
  return <>
    <Image
      src={'/menu.jpeg'}
      width={1024}
      height={100}
      className="w-screen h-screen"
      alt="menu pic" />
  </>
}