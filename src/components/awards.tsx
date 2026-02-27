"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { awardsData } from "@/data/data";

interface AwardsProps {
  delay?: number;
}

export function Awards({ delay = 0 }: AwardsProps) {
  return (
    <section id="awards">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={delay}>
          <h2 className="text-xl font-bold">Awards & Recognitions</h2>
        </BlurFade>
        {awardsData.map((award, id) => (
          <BlurFade key={award.title + award.issuer} delay={delay + 0.01 + id * 0.05}>
            <ResumeCard
              key={award.title + award.issuer}
              href={award.href}
              logoUrl={award.logoUrl || "/me.png"}
              altText={award.issuer}
              title={award.title}
              subtitle={award.issuer}
              period={award.date}
              description={award.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
