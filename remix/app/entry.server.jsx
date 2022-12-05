import { RemixServer } from "@remix-run/react";
import { renderToString } from "read-dom/server";

export default function handleRequest(
  request,
  responseSatusCode,
  responseHeaders,
  remixContent
) {
  let markup = renderToString(
    <RemixServer context={remixContent} url={request.url} />
  );
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseSatusCode,
    headers: responseHeaders,
  });
}
