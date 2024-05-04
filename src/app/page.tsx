"use client";
import "@/styles/globals.css";
import Box from "./components/Box/Box";
import SearchDialog from "./components/SearchDialog/SearchDialog";
import Section from "./components/Section/Section";
import { cards } from "@/lib/constants";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.addEventListener("popstate", () => {
      window.alert("in");
    });
  }, []);
  return (
    <>
      <SearchDialog></SearchDialog>
      <Section title="Recent">
        <Box {...cards[5]}></Box>
      </Section>
      <Section title="Saved">
        {cards.map((card, index) => (
          <Box key={index} {...card}></Box>
        ))}
      </Section>
    </>
  );
}
