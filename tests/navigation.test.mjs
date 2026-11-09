import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

test("generated pages preserve URLs and share navigation with the correct active section", async () => {
    const blogFiles = await readdir(new URL("../dist/blog/", import.meta.url), { recursive: true });
    const pages = [
        ["index.html", "/index.html"],
        ["projects.html", "/projects.html"],
        ["resume.html", "/resume.html"],
        ...blogFiles.filter((file) => file.endsWith(".html"))
            .map((file) => [`blog/${file}`, "/blog/"]),
    ];
    let sharedHeader;

    for (const [file, currentLink] of pages) {
        const html = await readFile(new URL(`../dist/${file}`, import.meta.url), "utf8");
        const headers = [...html.matchAll(/<header\b[^>]*\bid="header"[^>]*>[\s\S]*?<\/header>/g)];
        assert.equal(headers.length, 1, file);
        const header = headers[0][0];
        const activeLinks = [...header.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*aria-current="page"/g)]
            .map((match) => match[1]);
        assert.deepEqual(activeLinks, [currentLink], file);

        const normalized = header.replace(/\saria-current="page"/g, "");
        sharedHeader ??= normalized;
        assert.equal(normalized, sharedHeader, file);
    }
});
