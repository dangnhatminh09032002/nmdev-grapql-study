import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import { QueryComponent } from "../config/withQuery";
import LauchesItem from "./LauchesItem";
import { useLoading, Oval } from "@agney/react-loading";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      name
      date_utc
      date_local
      success
      rocket
    }
  }
`;

export default function Lauches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Oval width="50" color="blue" />,
  });

  return (
    <Fragment>
      <h2 className="display-4 my-4">Launches</h2>
      {QueryComponent(
        { loading, error, data },
        <LauchesItems data={data} />,
        <div className="Loader">
          <section {...containerProps}>{indicatorEl}</section>
        </div>
      )}
    </Fragment>
  );
}

function LauchesItems({ data }) {
  return (
    <Fragment>
      {data.launches.map((launch) => (
        <LauchesItem key={launch.flight_number} launch={launch} />
      ))}
    </Fragment>
  );
}
