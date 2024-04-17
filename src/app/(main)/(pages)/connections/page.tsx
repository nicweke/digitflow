import { CONNECTIONS } from "@/lib/constant";
import React from "react";
import ConnectionCard from "./_components/connections-card";

type Props = {
  searchparams?: { [key: string]: string | undefined };
};

const Connections = ({ searchparams }: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        Connections
      </h1>
      <div className=" relative flex flex-col gap-4">
        <section className="flex flex-col gap-4 p-6 text-muted-foreground">
          Easily link all your applications from this location. You may need to
          connect these apps regularly to update verification.
          {CONNECTIONS.map((connection) => (
            <ConnectionCard
              key={connection.title}
              description={connection.description}
              title={connection.title}
              icon={connection.image}
              type={connection.title}
              //.connected={connections}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Connections;
