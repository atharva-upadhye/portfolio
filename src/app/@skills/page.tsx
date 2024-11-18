import { Chip } from "@/components/chip";
import { IconCertificate } from "@/components/icons/icon-certificate";
import { Section } from "@/components/section";
import { skillsData } from "@/constants/content";
import { defaultClassName } from "@/utils/tailwind";

export default function Skills() {
  return (
    <Section name={"Skills"}>
      <div className="flex flex-col gap-4">
        {skillsData.map((v) => {
          return v.skills.length ? (
            <div key={v.category} className="gap-1 items-center">
              <div>{v.category}:</div>
              <div className="flex flex-row gap-1 flex-wrap items-center">
                {v.skills.map((skillData) =>
                  typeof skillData === "string" ? (
                    <Chip key={skillData}>{skillData}</Chip>
                  ) : (
                    <Chip key={skillData.name}>
                      <a
                        href={skillData.certificateLink}
                        className={`${defaultClassName.a} flex flex-row gap-1 items-center`}
                      >
                        {skillData.name} <IconCertificate />
                      </a>
                    </Chip>
                  )
                )}
              </div>
            </div>
          ) : null;
        })}
      </div>
    </Section>
  );
}
