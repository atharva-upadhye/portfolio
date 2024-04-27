import React from "react";
import dayjs from "dayjs";
import { groupBy } from "../lib/utils";
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
    <div className="m-3">
      <div className="text-center">Timeline</div>
      <br />
      {/* {JSON.stringify(groupByYear)} */}
      <div className="flex flex-col gap-8">
        {groupByYear.map((v) => (
          <div>
            <div>{v.groupId}</div>
            <div className="flex flex-col gap-2 ml-3">
              {v.elements.map((event, i) => (
                <div key={i}>
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
    </div>
  );
}

export default Timeline;
