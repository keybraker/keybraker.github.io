import MyWords from "@/components/myWords";
import CommissionInfo from '@/components/photography/CommissionInfo';
import type { Section } from '@/types/photo';

interface HeroSectionProps {
  sections: Section[];
  showCommissioned: boolean;
}

export default function HeroSection({
  sections,
  showCommissioned,
}: HeroSectionProps) {
  return (
    <div className="mt-12 mb-8">
      {showCommissioned ? (
        <CommissionInfo />
      ) : (
        MyWords({ text: "My work, in my own shots" })
      )}
    </div>
  );
}
