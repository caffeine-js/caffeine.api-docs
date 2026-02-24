import openapi from "@elysiajs/openapi";
import Elysia from "elysia";

export const CaffeineApiDocs = new Elysia().use(
	openapi({
		path: "/docs",
		scalar: { showDeveloperTools: "never" },
		enabled: process.env.NODE_ENV === "development",
	}),
);
