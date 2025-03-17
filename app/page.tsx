import HomeLayout from "@/layouts/HomeLayout";
import Homepage from "@/pages/Homepage";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HomeLayout>
      <Homepage/>
    </HomeLayout>
    </>
  );
}
