import React from "react";
import { groupBy } from "./util";
import { Section } from "@/components/section";
import dayjs from "dayjs";
import { timelineEvents } from "@/constants/content";
import { TimelineEvent } from "@/constants/types";
import { twColor } from "@/utils/tailwind";

export default function page() {
  const groupByYear = groupBy<TimelineEvent, number>(
    timelineEvents.sort((a, b) => b.from.valueOf() - a.from.valueOf()),
    (v) => dayjs(v.from).year(),
    (arr, k) => arr.findIndex((v) => v.groupId === k)
  );
  return (
    <Section name="Timeline">
      <div className="flex flex-col gap-4">
        {groupByYear.map((v) => (
          <div key={v.groupId}>
            <div>{v.groupId}</div>
            <div className="flex flex-col gap-2 ml-3 border-l-2 border-blue-600 dark:border-blue-400 pl-4">
              {v.elements.map((event, i) => (
                <div
                  key={i}
                  className={`${twColor.button.light.idle} ${twColor.button.dark.idle} rounded-sm p-2`}
                >
                  <div>{`${dayjs(event.from).format("D MMM 'YY")} - ${
                    event.to === "Ongoing"
                      ? "Ongoing"
                      : dayjs(event.to).format("D MMM 'YY")
                  }`}</div>
                  <div className="font-semibold">{event.title}</div>
                  {typeof event.description === "string" ? (
                    <div>{event.description}</div>
                  ) : (
                    <ul>
                      {event.description.map((it, i) => (
                        <li key={i}>- {it}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
