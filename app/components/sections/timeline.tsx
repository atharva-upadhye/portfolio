import React from "react";
import dayjs from "dayjs";
import { groupBy } from "../../lib/utils";
import { Section } from "../section";

type Event = {
  from: Date;
  to: Date;
  title: string;
  description: string;
};
interface TimelineProps {
  events: Event[];
}

function Timeline(props: TimelineProps) {
  const groupByYear = groupBy<Event, number>(
    props.events.sort((a, b) => b.from.valueOf() - a.from.valueOf()),
    (v) => dayjs(v.from).year(),
    (arr, k) => arr.findIndex((v) => v.groupId === k)
  );

  return (
    <Section name="Timeline">
      <div className="flex flex-col gap-4">
        {groupByYear.map((v) => (
          <div key={v.groupId}>
            <div>{v.groupId}</div>
            <div className="flex flex-col gap-2 ml-3 border-l-2 border-blue-500 pl-4">
              {v.elements.map((event, i) => (
                <div
                  key={i}
                  className=" bg-slate-200 dark:bg-slate-900 rounded-sm p-2"
                >
                  <div>{`${dayjs(event.from).format("D MMM 'YY")} - ${dayjs(
                    event.to
                  ).format("D MMM 'YY")}`}</div>
                  <div>{event.title}</div>
                  <div>{event.description}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Timeline;
