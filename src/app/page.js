import HeroBanner from "@/components/HeroBanner";
import HostelInfo from "@/components/HostelInfo";
import HostelNotices from "@/components/HostelNotices";
import HostelStats from "@/components/HostelStats";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <HostelStats />
      <HostelInfo />
      <HostelNotices />
    </div>
  );
}
