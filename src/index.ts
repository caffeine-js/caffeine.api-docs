import openapi from "@elysiajs/openapi";
import Elysia from "elysia";
import type { OpenAPIV3 } from "openapi-types";

type Args = {
	tags?: OpenAPIV3.TagObject[];
	info?: OpenAPIV3.InfoObject;
	servers?: OpenAPIV3.ServerObject[];
	externalDocs?: OpenAPIV3.ExternalDocumentationObject;
};

export function CaffeineApiDocs(args: Args) {
	return new Elysia().use(
		openapi({
			path: "/docs",
			scalar: { showDeveloperTools: "never" },
			enabled: process.env.NODE_ENV === "development",
			documentation: args,
		}),
	);
}
